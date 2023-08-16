import * as React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import entesTw from '../images/entes-tw.png';
import ArenaContent from '../components/ArenaContent';
import WeeklyMix from '../components/WeeklyMix';

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
              gatsbyImageData(quality: 90, placeholder: BLURRED)
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
        image={entesTw}
        imageTwitter={entesTw}
        metaurl="https://metaxis.digital/"
        type="website"
        author="Óscar A. Montiel"
      />
      <main>
        <WeeklyMix />
        <Posts posts={posts} />
      </main>
      <ArenaContent />
    </Layout>
  );
};

export default IndexPage;
