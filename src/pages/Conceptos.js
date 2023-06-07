import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import pulpoConFlores from '../images/metaxisdigital.jpg';
import { Link } from 'gatsby';
import * as conceptosStyle from '../css/Conceptos.module.css';
import ArenaContent from '../components/ArenaContent';

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
  return (
    <Layout>
      <SEO
        title="conceptos"
        description={description}
        image={pulpoConFlores}
        metaurl="https://metaxis.digital/Conceptos"
        type="website"
        author="Óscar A. Montiel"
      />
      <main className={conceptosStyle.maincontainer}>
        <h1 className={conceptosStyle.title}>Todos los conceptos</h1>
        <ul className={conceptosStyle.container}>
          {group.map(({ fieldValue: conceptName, totalCount }) => (
            <li className={conceptosStyle.conceptcard} key={conceptName}>
              <Link to={`/concepts/${conceptName}/`}>
                {conceptName} ({totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <ArenaContent />
    </Layout>
  );
};

export default Conceptos;
