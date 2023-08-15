import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import * as acercaStyles from '../css/Acerca.module.css';
import pulpoFlores from '../images/metaxis-digital-pulpo.jpg';
import pulpoFloresTw from '../images/metaxis-digital-pulpo-tw.jpg';
import qrAmalgalmas from '../images/qrAmalgalmas.png';

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
        title="Acerca(te)"
        description={description}
        metaurl="https://metaxis.digital/Acerca"
        type="website"
        author="Óscar A. Montiel"
        image={pulpoFlores}
        imageTwitter={pulpoFloresTw}
      />
      <div className={acercaStyles.container}>
        <div className={acercaStyles.contentContainer}>
          <p className={acercaStyles.text}>
            <h1 className={acercaStyles.title}>Acerca</h1>
            El espacio de <b>metaxis.digital</b> se erige como un portal al pensamiento metamoderno,
            combinando elementos del futurismo, filosofía, matemáticas, y la espiritualidad
            oriental. Nuestra misión es difundir ideas que expandan los horizontes de conciencia y
            promover diálogos que retan las normas establecidas.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '3rem' }}>
        <img src={pulpoFlores} alt="metaxis.digital" className={acercaStyles.img} />
      </div>
      <div style={{ display: 'flex', marginTop: '3rem' }}>
        <img src={qrAmalgalmas} alt="metaxis.digital" className={acercaStyles.img} />
      </div>
    </Layout>
  );
};

export default AcercaPage;
