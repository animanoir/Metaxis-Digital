import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import * as acercaStyles from '../css/Acerca.module.css';
import img from '../images/metaxisdigital.jpg';

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
        metaurl="https://metaxis.digital/Acerca"
        type="website"
        author="Óscar A. Montiel"
      />
      <div className={acercaStyles.container}>
        <div className={acercaStyles.contentContainer}>
          <p className={acercaStyles.text}>
            <h1 className={acercaStyles.title}>Acerca</h1>
            <b>metaxis.digital</b> es un sitio dedicado a la difusión de ideas que abran panoramas
            de conciencia distintos a los acostumbrados. Está enfocado en cuestionamientos
            meta(modernos) y futuristas.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '3rem' }}>
        <img src={img} alt="metaxis.digital" className={acercaStyles.img} />
      </div>
    </Layout>
  );
};

export default AcercaPage;
