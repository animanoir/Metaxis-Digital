import React, { useState, useMemo, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Seo from '../components/SEO';
import pulpoConFlores from '../images/metaxis-digital-pulpo.jpg';
import pulpoConFloresTw from '../images/metaxis-digital-pulpo-tw.jpg';
import { Link } from 'gatsby';
import * as conceptosStyle from '../css/Conceptos.module.css';
import NewsletterForm from '../components/NewsletterForm';

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

const Conceptos = React.memo(
  ({
    data: {
      allMdx: { group },
      site: { description },
    },
  }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const searchInputRef = useRef(null);

    const filteredConcepts = useMemo(() => {
      return group.filter(({ fieldValue }) =>
        fieldValue.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [searchTerm, group]);

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };

    useEffect(() => {
      searchInputRef.current.focus();
    }, []);

    const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return (
      <Layout>
        <Seo
          title="Conceptos"
          description={description}
          image={pulpoConFlores}
          imageTwitter={pulpoConFloresTw}
          metaurl="https://metaxis.digital/Conceptos"
          type="website"
          author="Óscar A. Montiel"
        />
        <main className={conceptosStyle.maincontainer}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Buscar concepto..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={conceptosStyle.searchbar}
          />
          <ul className={conceptosStyle.container}>
            {filteredConcepts.map(({ fieldValue: conceptName, totalCount }) => (
              <Link
                key={conceptName}
                className={conceptosStyle.conceptcard}
                to={`/concepts/${conceptName}/`}
                style={{ backgroundColor: getRandomColor() }}
                // data-tooltip="Información adicional aquí"
              >
                <li className={conceptosStyle.conceptTitle}>
                  <span className={conceptosStyle.conceptName}>{conceptName}</span> ({totalCount})
                </li>
              </Link>
            ))}
          </ul>
        </main>
        <NewsletterForm
          smallDescription="Nunca recibirás spam de nuestra parte, sólo boletines, de vez en cuando, sobre artículos y
  novedades del sitio."
        />
      </Layout>
    );
  }
);

export default Conceptos;
