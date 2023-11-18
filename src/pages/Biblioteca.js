import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { graphql } from 'gatsby';
import * as acercaStyles from '../css/Acerca.module.css';
import pulpoFlores from '../images/metaxis-digital-pulpo.jpg';
import pulpoFloresTw from '../images/metaxis-digital-pulpo-tw.jpg';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "libro" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "YYYY—MM—DD")
          author
          concepts
          excerpt
          image {
            childImageSharp {
              gatsbyImageData(quality: 90, placeholder: BLURRED)
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;

const Biblioteca = ({ data }) => {
  const {
    site: { description },
  } = data;
  const libros = data.allMdx.nodes;
  data: {
  }
  return (
    <Layout>
      <Seo
        title="Biblioteca"
        description={description}
        metaurl="https://metaxis.digital/Biblioteca"
        type="website"
        author="Óscar A. Montiel"
        image={pulpoFlores}
        imageTwitter={pulpoFloresTw}
      />
      <div className={acercaStyles.container}>
        <div className={acercaStyles.contentContainer}>
          <h1 className={acercaStyles.title}>Biblioteca</h1>
          <p className={acercaStyles.text}>La gran biblioteca de metaxis.digital.</p>
          {/* Book List */}
          <ul>
            {libros.map((libro) => (
              <li key={libro.id}>
                <h2>{libro.frontmatter.title}</h2>
                <p>Author: {libro.frontmatter.author}</p>
                <p>Date: {libro.frontmatter.date}</p>
                <p>{libro.frontmatter.excerpt}</p>
                <Link to={`/libro/${libro.frontmatter.slug}`}>Read More</Link>
                {libro.frontmatter.image && (
                  <GatsbyImage
                    image={getImage(libro.frontmatter.image.childImageSharp.gatsbyImageData)}
                    alt={libro.frontmatter.title}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Biblioteca;
