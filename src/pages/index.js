import * as React from "react"
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import pulpoConFlores from '../images/metaxisdigital.jpg'

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
          concepts
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
      image={pulpoConFlores}
      metaurl="https://metaxis.digital/"
      type="website"
      author="Óscar A. Montiel"
    />
      <main>
        <Posts posts={posts}/>
      </main>
    </Layout>
  )
}

export default IndexPage
