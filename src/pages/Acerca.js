import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';
import { graphql } from 'gatsby';
import * as acercaStyles from '../css/Acerca.module.css';
import pulpoFlores from '../images/metaxis-digital-pulpo.jpg';
import pulpoFloresTw from '../images/metaxis-digital-pulpo-tw.jpg';
import { StaticImage } from 'gatsby-plugin-image';
import NewsletterForm from '../components/NewsletterForm';

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
            oriental. Nuestra misión es difundir ideas que expandan los horizontes de conciencia y{' '}
            <b>promover diálogos que retan las normas establecidas</b>.
          </p>
          <StaticImage
            height={1000}
            src={'../images/metaxis-digital-pulpo.jpg'}
            alt="El metapulpo de metaxis.digital."
          />
        </div>
      </div>
      <NewsletterForm
        smallDescription="Nunca recibirás spam de nuestra parte, sólo boletines, de vez en cuando, sobre artículos y
    novedades del sitio."
      />
    </Layout>
  );
};

export default AcercaPage;
