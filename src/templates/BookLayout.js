import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Disqus } from 'gatsby-plugin-disqus';
import * as bookStyles from '../css/BookLayout.module.css';
import styled from 'styled-components';
import SEO from '../components/SEO';

export const bookQuery = graphql`
  query GetSingleBook($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "YYYY—MM—DD")
        title
        description
        slug
        downloadLink
        publishedYear
        image {
          childImageSharp {
            gatsbyImageData(quality: 50)
            parent {
              ... on File {
                relativePath
              }
            }
            original {
              src
            }
          }
        }
        author
        imageTwitter {
          publicURL
        }
        concepts
      }
      body
      id
    }
  }
`;

const BookLayout = ({ data }) => {
  const {
    mdx: {
      frontmatter: {
        title,
        author,
        image,
        slug,
        concepts,
        downloadLink,
        publishedYear,
        description,
      },
      body,
      id,
      frontmatter: {
        image: {
          childImageSharp: {
            original: { src },
          },
        },
        imageTwitter: { publicURL: imageTwitter },
      },
    },
  } = data;
  let disqusConfig = {
    url: `https://metaxis.digital/libro/${slug}`,
    identifier: id,
    title: title,
  };
  return (
    <Layout>
      <SEO
        keywords={concepts}
        title={`${title} por ${author}`}
        description={description}
        image={src}
        imageTwitter={imageTwitter}
        metaurl={`https://metaxis.digital/libro/${slug}`}
        type="article"
        author={author}
      />
      <article className={bookStyles.container}>
        <div className={bookStyles.infoContainer}>
          <div className={bookStyles.metaInfo}>
            <h1 className={bookStyles.title}>
              {title}, <span style={{ fontWeight: 'normal' }}>{author}</span>
            </h1>
            {publishedYear && (
              <h3 className={bookStyles.title} style={{ fontSize: '2rem' }}>
                {publishedYear}
              </h3>
            )}
            <h4 className={bookStyles.description}>{description}</h4>
          </div>
          <GatsbyImage className={bookStyles.bookCover} image={getImage(image)} alt={title} />
        </div>
        <PostStyleWrapper>
          <MDXRenderer>{body}</MDXRenderer>
          <h4 className={bookStyles.downloadWrapper}>
            <a
              className={bookStyles.downloadLink}
              href={downloadLink}
              target="_blank"
              rel="noreferrer"
            >
              📥
            </a>
          </h4>
          <div>
            <Disqus config={disqusConfig} />
          </div>
        </PostStyleWrapper>
      </article>
    </Layout>
  );
};

const PostStyleWrapper = styled.div`
  .rotado {
    transform: rotate(180deg);
  }
  .separado {
    letter-spacing: 2rem;
  }

  .a {
    font-size: 5.5rem !important;
  }
  .b {
    font-size: 5rem !important;
  }
  width: 55%;
  margin: 0 auto;
  font-family: 'Lora', serif;
  line-height: 1.55;
  hr {
    width: 25%;
    background-color: black;
    borders: none;
    height: 1px;
    margin: 4rem auto;
    margin-bottom: 5rem;
  }
  a {
    text-decoration: underline;
  }
  h1 {
    font-size: 2.5rem;
    font-family: 'Karla', sans-serif;
    line-height: 1.1;
  }
  h2 {
    font-size: 2rem;
    font-family: 'Karla', sans-serif;
  }
  h3 {
    font-size: 1.5rem;
    font-family: 'Karla', sans-serif;
    margin-top: 5rem;
  }
  h4 {
    font-size: 1.25rem;
    font-family: 'Karla', sans-serif;
  }
  h5 {
    font-size: 1rem;
    font-family: 'Karla', sans-serif;
  }
  h6 {
    font-size: 0.75rem;
    font-family: 'Karla', sans-serif;
  }
  blockquote {
    font-family: 'Karla', serif;
    font-size: 1.8rem;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    filter: invert(1);
  }
  p {
    font-size: 1.2rem;
    text-align: justify;
    font-family: 'Lora', serif;
    color: #000;
    margin-bottom: 2rem;
  }
  list {
    margin-left: 1.5rem;
  }
  li {
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
  iframe {
    width: 100%;
    margin: 1rem 0;
  }

  i {
    font-style: italic;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    padding: 0 1rem;
    .container {
      padding: 0 0.5rem 5rem 0.5rem;
    }
    p {
      font-size: 1.2rem;
      text-align: justify;
      font-family: 'Lora', serif;
      color: #000;
    }
    li {
      font-size: 1.2rem;
    }
  }
`;

export default BookLayout;
