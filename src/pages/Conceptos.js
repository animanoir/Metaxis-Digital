import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import pulpoConFlores from '../images/metaxis-digital-pulpo.jpg';
import pulpoConFloresTw from '../images/metaxis-digital-pulpo-tw.jpg';
import { Link } from 'gatsby';
import * as conceptosStyle from '../css/Conceptos.module.css';

export const query = graphql`
  {
    allMdx(limit: 2000) {
      group(field: frontmatter___concepts) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;

const Conceptos = ({
  data: {
    allMdx: { group },
    site: { description },
  },
}) => {
  // useEffect(() => {
  //   // Tu código de aleatoriedad aquí
  //   const cards = document.querySelectorAll(`.${conceptosStyle.conceptcard}`);

  //   cards.forEach((card) => {
  //     const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Ejemplo: Color aleatorio

  //     card.style.backgroundColor = randomColor;
  //   });
  // }, []);

  const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <Layout>
      <SEO
        title="Conceptos"
        description={description}
        image={pulpoConFlores}
        imageTwitter={pulpoConFloresTw}
        metaurl="https://metaxis.digital/Conceptos"
        type="website"
        author="Óscar A. Montiel"
      />
      <main className={conceptosStyle.maincontainer}>
        <ul className={conceptosStyle.container}>
          {group.map(({ fieldValue: conceptName, totalCount }) => (
            <Link
              className={conceptosStyle.conceptcard}
              to={`/concepts/${conceptName}/`}
              style={{ backgroundColor: getRandomColor() }}
              // data-tooltip="Información adicional aquí"
            >
              <li key={conceptName} className={conceptosStyle.conceptTitle}>
                <span className={conceptosStyle.conceptName}>{conceptName}</span> = {totalCount}
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Conceptos;
