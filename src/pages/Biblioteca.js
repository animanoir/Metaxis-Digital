import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import * as bibliotecaStyles from '../css/Biblioteca.module.css';
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
          description
          publishedYear
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
      <SEO
        title="Biblioteca"
        description={description}
        metaurl="https://metaxis.digital/Biblioteca"
        type="website"
        author="Óscar A. Montiel"
        image={pulpoFlores}
        imageTwitter={pulpoFloresTw}
      />
      <div className={bibliotecaStyles.container}>
        <div className={bibliotecaStyles.contentContainer}>
          <h1 className={bibliotecaStyles.title}>Biblioteca</h1>
          <p className={bibliotecaStyles.text}>La gran biblioteca de metaxis.digital.</p>
          {/* Book List */}
          <ul className={bibliotecaStyles.booksGrid}>
            {libros.map((libro) => (
              <Link
                to={`/libro/${libro.frontmatter.slug}`}
                className={bibliotecaStyles.bookContainer}
              >
                <li key={libro.id}>
                  {libro.frontmatter.image && (
                    <GatsbyImage
                      image={getImage(libro.frontmatter.image.childImageSharp.gatsbyImageData)}
                      alt={libro.frontmatter.title}
                    />
                  )}
                  <h2>{libro.frontmatter.title}</h2>
                  <p>
                    <i>
                      {libro.frontmatter.author}—{libro.frontmatter.publishedYear}
                    </i>
                  </p>
                  <p>{libro.frontmatter.description}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Biblioteca;

// {libro.frontmatter.concepts && (
//   <ul>
//     {libro.frontmatter.concepts.map((concept, index) => (
//       <li key={index}>{concept}</li>
//     ))}
//   </ul>
// )}
