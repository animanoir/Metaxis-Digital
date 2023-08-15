import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import amalgalmas from '../images/amalgalmas.jpg';
import amalgalmasTw from '../images/amalgalmas-tw.jpg';
import * as acercaStyles from '../css/Acerca.module.css';

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
      <SEO
        title="Colabora | metaxis.digital"
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
            <h1 className={acercaStyles.title}>Colabora con nosotr∞s :)</h1>
            En el umbral de una nueva era, donde la frontera entre lo moderno y lo postmoderno se
            desvanece, se encuentra <b>metaxis.digital</b>, un santuario para la <b>reflexión</b> y
            exploración de <b>ideas metamodernas</b>.
            <p>
              Nos adentramos en los vastos dominios del <b>futurismo</b>, la <b>filosofía</b>, las
              matemáticas y la <b>espiritualidad</b> oriental, forjando un puente entre tradición y
              tecnología, ciencia y esencia, razón y emoción.
            </p>
            <p>
              Para conocer a más personas en la misma frecuencia, así como resolver dudas, pedir
              libros difíciles de encontrar, entre otras cosas, puedes unirte a{' '}
              <b>nuestro grupo en Telegram</b>:
            </p>
            <p>
              <a
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                href="https://t.me/+0ViSuNGeQ-JmZTcx"
              >
                <b style={{ marginBottom: '1rem' }}>【 a m a l g a m a s 】</b>
                <img src={amalgalmas}></img>
              </a>
            </p>
            <h2 style={{ marginBottom: '1rem' }}>¿Deseas colaborar?</h2>
            <h3>Expresiones Artísticas y Literarias:</h3>
            <p>
              Si tienes la habilidad de plasmar pensamientos en palabras a través de ensayos,
              artículos y poemas, o capturar emociones y visiones en medios visuales, ya sea
              pintura, dibujo, arte generativo, música, etc., te invitamos a ser parte de nuestro
              espacio. El arte en todas sus formas es bienvenido y valorado.
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
            <p>Consulta el repositorio aquí: </p>
            <p>
              {' '}
              <a
                style={{ textDecoration: 'underline' }}
                href="https://github.com/animanoir/metaxisdigital2023"
              >
                GitHub - metaxisdigital2023
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ColaboraPage;
