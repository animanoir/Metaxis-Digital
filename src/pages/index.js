import * as React from "react"
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import ogImage from '../images/metaxis.jpg'
import ArenaContent from "../components/ArenaContent"

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}){
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "d, MM, YYYY")
          author
          tags
          excerpt
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
  const {allMdx: {nodes: posts}} = data
  return (
    <Layout>
    <SEO
      title="metaxis.digital"
      description="Filosofía y computación"
      image={ogImage}
      metaurl="https://metaxis.digital/"
      type="website"
      author="Óscar A. Montiel"
    />
    <main>
      <Posts posts={posts}/>
    </main>
      <ArenaContent />
    </Layout>
  )
}

export default IndexPage
