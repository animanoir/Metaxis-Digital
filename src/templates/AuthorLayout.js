import * as React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import pulpoConFlores from '../images/metaxisdigital.jpg';
import * as conceptLayoutStyles from '../css/ConceptLayout.module.css';

export const query = graphql`
  query ($author: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { author: { eq: $author } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "d, MM, YYYY")
          author
          authorContact
          concepts
          excerpt
        }
      }
    }
  }
`;

const AuthorLayout = ({ pageContext, data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;
  const { author, authorContact } = pageContext;
  console.log(authorContact);
  return (
    <Layout>
      <SEO
        title={author}
        description="Filosofía y computación"
        image={pulpoConFlores}
        metaurl={`https://metaxis.digital/autores/${author}`}
        type="website"
        author={author}
      />
      <main>
        <h2 className={conceptLayoutStyles.text}>
          Artículos escritos por{' '}
          <span style={{ fontWeight: 'bold' }}>
            <a href={authorContact} target="_blank" rel="noreferrer">
              {author}
            </a>
          </span>
        </h2>
        <Posts posts={posts} />
      </main>
    </Layout>
  );
};

export default AuthorLayout;
