import * as React from "react"
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          slug
          date
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
    <main>
      <Posts posts={posts}/>
    </main>
    </Layout>
  )
}

export default IndexPage
