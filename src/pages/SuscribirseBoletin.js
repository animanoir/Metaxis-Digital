import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';
import { graphql } from 'gatsby';
import * as acercaStyles from '../css/Acerca.module.css';
import pulpoFlores from '../images/metaxis-digital-pulpo.jpg';
import pulpoFloresTw from '../images/metaxis-digital-pulpo-tw.jpg';
import NewsletterFormInPage from '../components/NewsletterFormInPage.js';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

const SuscribirseBoletin = ({ data }) => {
  const {
    site: { description },
  } = data;
  return (
    <Layout>
      <Seo
        title="¡Suscríbete al boletín!"
        description={description}
        metaurl="https://metaxis.digital/Acerca"
        type="website"
        author="Óscar A. Montiel"
        image={pulpoFlores}
        imageTwitter={pulpoFloresTw}
      />
      <div className={acercaStyles.container}>
        <div className={acercaStyles.contentContainer}>
          <h1 className={acercaStyles.title}>Suscribirse al boletín</h1>
          <p className={acercaStyles.text}>
            Muchas gracias por mostrar interés continuo en <b>metaxis.digital</b>. Para mantenerte comunicado sobre los nuevos libros ingresados a la <AniLink style={{textDecoration: "underline"}} fade to="/Biblioteca">Biblioteca</AniLink>,{" "}
            <AniLink style={{textDecoration: "underline"}} fade to="/">artículos</AniLink> de nuestros{" "} 
            <AniLink style={{textDecoration: "underline"}} fade to="/Colabora">colaboradores</AniLink> {" "} y{" "}
            <AniLink style={{textDecoration: "underline"}} fade to="/Eventos">próximos eventos tanto virtuales como presenciales</AniLink>{" "}
            te invitamos a suscribirte a nuestro boletín:
          </p>
          <NewsletterFormInPage />
        </div>
      </div>
    </Layout>
  );
};

export default SuscribirseBoletin;


