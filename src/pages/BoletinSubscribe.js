import * as React from 'react';
import Layout from '../components/Layout';
import * as acercaStyles from '../css/Acerca.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';


// export const query = graphql`
//   query {
//     allMdx {
//       nodes {
//         id
//         frontmatter {
//           title
//           slug
//           date
//           author
//           concepts
//           excerpt
//           image {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const BoletinSubscribe = ({ data }) => {
  return (
    <Layout>
      <div className={acercaStyles.container}>
      <div className={acercaStyles.contentContainer}>
        <h1 className={acercaStyles.title}>¡Felicidades! ¡Estás suscrito! Ahora checa tu cuenta bancaria 😉.</h1>
        <p className={acercaStyles.text}>
          Nah, nocierto—no somos de los que acceden a tu cuenta con tu puro email (pero otros sí). Ahora recibirás, de vez en cuando, nuestro último contenido y eventos.
        </p>
        <p className={acercaStyles.text}>
          Recuerda compartir el siguiente enlace a las personas que más amas en tu vida para que también se suscriban: <AniLink style={{textDecoration: "underline"}} fade to="/SuscribirseBoletin"><b>¡Quiero compartir metaxis.digital con la gente que amo!</b></AniLink>
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default BoletinSubscribe;
