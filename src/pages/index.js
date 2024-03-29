import * as React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';
import Seo from '../components/SEO';
import pulpoFlores from '../images/metaxis-digital-pulpo.jpg';
import pulpoFloresTw from '../images/metaxis-digital-pulpo-tw.jpg';
import ArenaContent from '../components/ArenaContent';
import WeeklyMix from '../components/WeeklyMix';
import NewsletterForm from '../components/NewsletterForm';

export const query = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { ne: "libro" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "YYYY—MM—DD")
          author
          concepts
          excerpt
          type
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
      <Seo
        title="Génesis"
        description={description}
        image={pulpoFlores}
        imageTwitter={pulpoFloresTw}
        metaurl="https://metaxis.digital/"
        type="website"
        author="Óscar A. Montiel"
      />
      <main>
        <WeeklyMix />
        <Posts posts={posts} />
      </main>
      <ArenaContent />
      <NewsletterForm
        smallDescription="Nunca recibirás spam de nuestra parte, sólo boletines, de vez en cuando, sobre artículos y
      novedades del sitio."
      />
    </Layout>
  );
};

export default IndexPage;
