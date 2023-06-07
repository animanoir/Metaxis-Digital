import * as React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import pulpoConFlores from '../images/metaxisdigital.jpg';
import ArenaContent from '../components/ArenaContent';

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "YYYY—MM—DD")
          author
          concepts
          excerpt
          image {
            childImageSharp {
              gatsbyImageData(quality: 80, placeholder: BLURRED)
            }
          }
          featuredArticle
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
    site: {
      siteMetadata: { description },
    },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="génesis"
        description={description}
        image={pulpoConFlores}
        metaurl="https://metaxis.digital/"
        type="website"
        author="Óscar A. Montiel"
      />
      <main>
        <Posts posts={posts} />
      </main>
      <ArenaContent />
    </Layout>
  );
};

export default IndexPage;
