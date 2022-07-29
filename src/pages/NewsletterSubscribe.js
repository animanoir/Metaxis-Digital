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

const NewsletterSubscribe = ({data}) => {
  const {allMdx: {nodes: posts}} = data
  return (
    <Layout>
      <h1 style={{fontSize: "3rem", textAlign: "center", fontFamily: "Karla"}}>¡Estás suscrito!</h1>
      <main>
        <Posts posts={posts}/>
      </main>
    </Layout>
  )
}

export default NewsletterSubscribe
