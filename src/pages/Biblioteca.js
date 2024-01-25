import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';
import { graphql } from 'gatsby';
import * as bibliotecaStyles from '../css/Biblioteca.module.css';
import pulpoFlores from '../images/metaxis-digital-pulpo.jpg';
import pulpoFloresTw from '../images/metaxis-digital-pulpo-tw.jpg';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import NewsletterForm from '../components/NewsletterForm';

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
              gatsbyImageData(quality: 60, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

const Biblioteca = ({ data }) => {
  const libros = data.allMdx.nodes;
  return (
    <Layout>
      <Seo
        title="Biblioteca"
        description="La gran biblioteca de metaxis.digital"
        metaurl="https://metaxis.digital/Biblioteca"
        type="website"
        author="Óscar A. Montiel"
        image={pulpoFlores}
        imageTwitter={pulpoFloresTw}
      />
      <div className={bibliotecaStyles.container}>
        <div className={bibliotecaStyles.contentContainer}>
          <h1 className={bibliotecaStyles.title}>Biblioteca</h1>
          <p className={bibliotecaStyles.text}>
            La <b>Gran Biblioteca</b> de <b>metaxis.digital</b> (en constante actualización)
            <span className={bibliotecaStyles.typingDots}></span>
          </p>
          {/* Book List */}
          <ul className={bibliotecaStyles.booksGrid}>
            {libros.map((libro) => (
              <li>
                <Link key={libro.id} to={`/libro/${libro.frontmatter.slug}`}>
                  {libro.frontmatter.image && (
                    <GatsbyImage
                      quality={50}
                      image={getImage(libro.frontmatter.image.childImageSharp.gatsbyImageData)}
                      alt={libro.frontmatter.title}
                    />
                  )}
                  <h2>{libro.frontmatter.title}</h2>
                  <p>
                    <i>
                      {libro.frontmatter.author}
                      {libro.frontmatter.publishedYear ? `—${libro.frontmatter.publishedYear}` : ''}
                    </i>
                  </p>
                  <p>{libro.frontmatter.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <NewsletterForm smallDescription="Nunca recibirás spam de nuestra parte, sólo boletines, de vez en cuando, de los libros publicados en el sitio." />
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
