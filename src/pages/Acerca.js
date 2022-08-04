import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import * as acercaStyles from '../css/Acerca.module.css';
import { Link } from 'gatsby';
import pulpoConFlores from '../images/metaxisdigital.jpg';

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
            filosofía y la computación y cómo es que interactúan una con la otra a través de una
            perspectiva{' '}
            <Link style={{ color: 'black' }} to="/posts/la-metamodernidad">
              metamoderna
            </Link>
            .
          </p>
        </div>
        <img className={acercaStyles.image} src={pulpoConFlores} alt="metaxis.digital" />
      </div>
      <div className={acercaStyles.container}>
        <div>
          <p className={acercaStyles.text}>
            <a
              href="https://github.com/animanoir/metaxisdigital2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              El código fuente{' '}
            </a>
            del blog está público para que la comunidad interesada pueda mejorarlo, así como incluir
            sus propios artículos al sitio.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AcercaPage;
