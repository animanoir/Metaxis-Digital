import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';
import { graphql } from 'gatsby';
import amalgalmas from '../images/amalgalmas.jpg';
import amalgalmasTw from '../images/amalgalmas-tw.jpg';
import * as acercaStyles from '../css/Acerca.module.css';
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

const ColaboraPage = ({ data }) => {
  const {
    site: { description },
  } = data;
  return (
    <Layout>
      <Seo
        title="Colabora"
        image={amalgalmas}
        imageTwitter={amalgalmasTw}
        description={description}
        metaurl="https://metaxis.digital/Colabora"
        type="website"
        author="Óscar A. Montiel"
      />
      <div className={acercaStyles.container}>
        <div className={acercaStyles.contentContainer}>
          <div className={acercaStyles.text}>
            <h1 className={acercaStyles.title}>Colabora con nosotr∞s</h1>
            <p>
              En el umbral de una nueva era, donde la frontera entre lo moderno y lo postmoderno se
              desvanece, se encuentra <b>metaxis.digital</b>, un santuario para la <b>reflexión</b>{' '}
              y exploración de <b>ideas metamodernas</b>.
            </p>
            <p>
              Nos adentramos en los vastos dominios del <b>futurismo</b>, la <b>filosofía/ciencia</b>, <b>espiritualidad</b>, forjando un puente entre tradición y tecnología, ciencia y esencia, razón y emoción—<b><i>meta</i></b>, en pocas palabras.
            </p>
            <p>
              Para conectar con almas afines e intercambiar perspectivas, descubrir obras esenciales o simplemente resolver inquietudes, te
              invitamos a unirte a nuestro <b>grupo en Telegram</b>:<a href="https://t.me/+0ViSuNGeQ-JmZTcx">
              <b>【 a m a l g a l m a s 】</b>.
              </a>
            </p>

            <h2 style={{ marginBottom: '1rem' }}>¿Deseas colaborar?</h2>
            <h3>Expresiones Artísticas y Literarias:</h3>
            <p>
              Si tienes la habilidad de plasmar pensamientos en palabras a través de ensayos,
              artículos y poemas, o capturar emociones y visiones en medios visuales, ya sea
              pintura, dibujo, arte generativo o incluso música, escultura, etc. te invitamos a ser
              parte de nuestro espacio. El arte en todas sus formas es bienvenido y valorado.
            </p>
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/-421QnsyXJc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h3 style={{ marginTop: '1rem' }}> Colaboración Técnica:</h3>
            <p>
              Si tu habilidad radica en el mundo del código, te invitamos a colaborar en el núcleo
              de metaxis.digital. Nuestro sitio está construido sobre Gatsby con React, y buscamos
              mentes habilidosas que nos ayuden a mejorar, innovar y evolucionar nuestra plataforma.
            </p>
            <p>Consulta el repositorio aquí:{' '}<a
              style={{ textDecoration: 'underline' }}
              href="https://github.com/animanoir/metaxisdigital2023"
            >
              metaxisdigital2023
          </a></p>
          </div>
        </div>
      </div>
      <NewsletterForm
        smallDescription="Nunca recibirás spam de nuestra parte, sólo boletines, de vez en cuando, sobre artículos y
novedades del sitio."
      />
    </Layout>
  );
};

export default ColaboraPage;
