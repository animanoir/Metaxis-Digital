import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import * as acercaStyles from '../css/Acerca.module.css';
import pulpoConFlores from '../images/metaxisdigital.jpg';
import { StaticImage } from 'gatsby-plugin-image';

const AcercaPage = () => {
  return (
    <Layout>
      <SEO
        title="Acerca(te) | metaxis.digital"
        description="Filosofía y computación"
        image={pulpoConFlores}
        metaurl="https://metaxis.digital/Acerca"
        type="website"
        author="Óscar A. Montiel"
      />
      <h2 className={acercaStyles.title}>Acerca</h2>
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
            <b>metaxis.digital</b> es un archivo dedicado a la difusión de ideas que abran panoramas
            de conciencia distintos a los acosumbrados.
          </p>
        </div>
      </div>
      <div className={acercaStyles.container}>
        <div>
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
            sus propios artículos al sitio. También se puede proponer a través de un correo
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
        </div>
      </div>
    </Layout>
  );
};

export default AcercaPage;
