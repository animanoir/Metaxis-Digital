import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { graphql } from 'gatsby';
import * as acercaStyles from '../css/Acerca.module.css';
import pulpoFlores from '../images/metaxis-digital-pulpo.jpg';
import pulpoFloresTw from '../images/metaxis-digital-pulpo-tw.jpg';
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
      <Seo
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
          <h1 className={acercaStyles.title}>Acerca</h1>

          <p className={acercaStyles.text}>
            El espacio de <b>metaxis.digital</b> se erige como un portal al pensamiento metamoderno,
            combinando elementos del futurismo, filosofía, matemáticas, y la espiritualidad
            oriental. Nuestra misión es difundir ideas que expandan los horizontes de conciencia y
            promover diálogos que retan las normas establecidas.
          </p>
          <StaticImage
            height={1000}
            src={'../images/metaxis-digital-pulpo.jpg'}
            alt="El metapulpo de metaxis.digital."
          />
          <StaticImage
            src={'../images/qrAmalgalmas.png'}
            alt="Código QR para entrar a AMALGALMAS."
          />
        </div>
      </div>
    </Layout>
  );
};

export default AcercaPage;
