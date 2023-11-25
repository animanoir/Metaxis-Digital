import * as React from 'react';
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
              data-tooltip="Información adicional aquí"
            >
              <li key={conceptName} className={conceptosStyle.conceptTitle}>
                {conceptName} ({totalCount})
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Conceptos;
