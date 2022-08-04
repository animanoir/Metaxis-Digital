import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import * as acercaStyles from '../css/Acerca.module.css';
import { Link } from 'gatsby';
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
      <div className={acercaStyles.container}>
        <div>
          <h2 className={acercaStyles.title}>Acerca</h2>
          <p className={acercaStyles.text}>
            <b>metaxis.digital</b> es un blog dedicado a la difusión de ideas que entrelazan la
            filosofía y computación y cómo es que interactúan una con la otra a través de una
            perspectiva{' '}
            <Link style={{ color: 'black' }} to="/posts/la-metamodernidad">
              metamoderna
            </Link>
            . Intentamos abrir nuevas panoramas de pensamiento para incitar metamorfosis social.
          </p>
        </div>
        <StaticImage
          placeholder="blurred"
          layout="fixed"
          width={600}
          className={acercaStyles.image}
          src="../images/metaxisdigital.jpg"
          alt="Pulpo con flores"
        />
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
            electrónico{' '}
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
