import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

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
      <h1
        style={{ fontSize: '2rem', textAlign: 'center', fontFamily: 'Karla', marginTop: '10rem' }}
      >
        ¡Estás suscrito! Continúa explorando el sitio 🙂👍.
      </h1>
    </Layout>
  );
};

export default BoletinSubscribe;
