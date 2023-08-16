import * as React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Disqus } from 'gatsby-plugin-disqus';
import * as postStyles from '../css/PostLayout.module.css';
import styled from 'styled-components';
import SEO from '../components/SEO';
import linkSvg from '../images/svg/Link.svg';

export const postQuery = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "YYYY—MM—DD")
        title
        excerpt
        slug
        authorContact
        image {
          childImageSharp {
            gatsbyImageData(quality: 100)
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

const PostLayout = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, date, author, image, excerpt, slug, concepts, authorContact },
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
    url: `https://metaxis.digital/posts/${slug}`,
    identifier: id,
    title: title,
  };
  return (
    <Layout>
      <SEO
        keywords={concepts}
        title={title}
        description={excerpt}
        image={src}
        imageTwitter={imageTwitter}
        metaurl={`https://metaxis.digital/posts/${slug}`}
        type="article"
        author={author}
      />
      <article className={postStyles.container}>
        <div className={postStyles.infocontainer}>
          <GatsbyImage
            objectPosition="center"
            className={postStyles.featuredimage}
            image={getImage(image)}
            alt={title}
          />
          <div className={postStyles.titleContainer}>
            <h1 className={postStyles.title}>{title}</h1>
            <h4 className={postStyles.date}>{date}</h4>
            <h4 className={postStyles.author}>
              escrito por{' '}
              <Link to={`/autores/${author}`}>
                <b>{author}</b>
              </Link>
            </h4>

            {/* Add the author's contact link here */}
            {authorContact && (
              <div className={postStyles.authorContact}>
                <a href={authorContact} target="_blank" rel="noopener noreferrer">
                  <img src={linkSvg} alt={`Más información de ${author}: ${authorContact}`} />
                </a>
              </div>
            )}
          </div>
        </div>
        <PostStyleWrapper>
          <MDXRenderer>{body}</MDXRenderer>
        </PostStyleWrapper>
        <div className={postStyles.disqus}>
          <Disqus config={disqusConfig} />
        </div>
      </article>
    </Layout>
  );
};

const PostStyleWrapper = styled.div`
  width: 55%;
  margin: 0 auto;
  font-family: 'Lora', serif;
  line-height: 1.55;
  text-align: justify;
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
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.75rem;
  }
  blockquote {
    font-family: 'Karla', serif;
    font-size: 1.8rem;
  }
  p {
    font-size: 1.3rem;
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
  }
  iframe {
    width: 100%;
    margin: 1rem 0;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    padding: 0 1rem;
    blockquote {
      font-family: 'Karla', serif;
      font-size: 1.5rem;
    }
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

export default PostLayout;
