import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import * as acercaStyles from '../css/Acerca.module.css';
import pulpoConFlores from '../images/metaxisdigital.jpg';
import { StaticImage } from 'gatsby-plugin-image';

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

const AcercaPage = ({ data }) => {
  const {
    site: { description },
  } = data;
  return (
    <Layout>
      <SEO
        title="Acerca(te) | metaxis.digital"
        description={description}
        image={pulpoConFlores}
        metaurl="https://metaxis.digital/Acerca"
        type="website"
        author="Óscar A. Montiel"
      />
      <div className={acercaStyles.container}>
        <div className={acercaStyles.contentContainer}>
          <StaticImage
            placeholder="blurred"
            layout="fullWidth"
            className={acercaStyles.image}
            src="../images/metaxisdigital.jpg"
            alt="Pulpo con flores"
            width={600}
            height={600}
          />
          <p className={acercaStyles.text}>
            <h2 className={acercaStyles.title}>Acerca</h2>
            <b>metaxis.digital</b> es un sitio dedicado a la difusión de ideas que abran panoramas
            de conciencia distintos a los acosumbrados. Está enfocado en cuestionamientos
            meta(modernos) y futuristas.
          </p>
        </div>
      </div>
      <div className={acercaStyles.container}>
        <div className={acercaStyles.contentContainer}>
          <p className={acercaStyles.text}>
            <a
              href="https://github.com/animanoir/metaxisdigital2022"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              El código fuente{' '}
            </a>
            del blog está público para que la comunidad interesada pueda mejorarlo, así como incluir
            sus propios artículos al sitio. También se puede proponer ideas a través de un correo
            electrónico a{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:etherealflux94@gmail.com"
              style={{ textDecoration: 'underline' }}
            >
              etherealflux94@gmail
            </a>
            .
          </p>
          <StaticImage
            placeholder="blurred"
            layout="fullWidth"
            className={acercaStyles.image}
            src="../images/metaxis-digital-acerca-2.jpg"
            alt="Pulpo con flores al estilo de masao yamamoto"
            width={600}
            height={600}
            style={{ marginLeft: '2rem' }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AcercaPage;
