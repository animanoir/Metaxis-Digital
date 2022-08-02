import * as React from "react"
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import ogImage from '../images/metaxis.jpg'

export const query = graphql`
  query ($concept: String) {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {concepts: {eq: $concept}}}
    ) {
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

const ConceptLayout = ({pageContext, data}) => {
  const {allMdx: {nodes: posts}} = data
  const { concept } = pageContext
  return (
    <Layout>
    <SEO
      title={concept}
      description="Filosofía y computación"
      image={ogImage}
      metaurl="https://metaxis.digital/"
      type="website"
      author="Óscar A. Montiel"
    />
    <main>
      <h2 style={{
        fontFamily: "Karla, sans-serif",
        fontSize: "2.5rem",
        color: "black",
        padding: "2rem 10rem 0 10rem",
        fontWeight: "normal"
      }}>Artículos relacionados al concepto de{' '}<span style={{fontWeight: "bold"}}>{concept}:</span></h2>
      <Posts posts={posts}/>
      </main>
    </Layout>
  )
}

export default ConceptLayout
