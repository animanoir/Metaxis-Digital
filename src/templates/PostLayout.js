import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Disqus } from 'gatsby-plugin-disqus';
import { Link } from 'gatsby';
import * as postStyles from '../css/PostLayout.module.css';
import styled from 'styled-components';
import SEO from '../components/SEO';

export const postQuery = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "d—MM—YYYY")
        title
        excerpt
        slug
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
      }
      body
      id
    }
  }
`;

const PostLayout = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, date, author, image, excerpt, slug },
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
            <h4 className={postStyles.author}>
              escrito por{' '}
              <Link to={`/autores/${author}`}>
                <b>{author}</b>
              </Link>
            </h4>
            <h4 className={postStyles.date}>{date}</h4>
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
