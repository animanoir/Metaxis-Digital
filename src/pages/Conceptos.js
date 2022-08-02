import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import ogImage from '../images/metaxis.jpg'
import { Link } from "gatsby"
import * as conceptosStyle from "../css/Conceptos.module.css"

export const query = graphql`
{
  allMdx(limit: 2000) {
    group(field: frontmatter___concepts) {
      fieldValue
      totalCount
    }
  }
}`

const Conceptos = ({
  data: {
    allMdx: { group },
  },
}) => {
  return (
    <Layout>
    <SEO
      title="conceptos"
      description="Filosofía y computación"
      image={ogImage}
      metaurl="https://metaxis.digital/Conceptos"
      type="website"
      author="Óscar A. Montiel"
    />
    <main>
      <h1
      style={{
          fontFamily: "Karla, sans-serif",
          fontSize: "2.5rem",
          color: "black",
          padding: "2rem 10rem 0 10rem",
          fontWeight: "normal"}}
        >Todos los conceptos</h1>
      <ul>
        {group.map(concept => (
          <li className={conceptosStyle.conceptcard} key={concept.fieldValue}>
            <Link to={`/concepts/${concept.fieldValue}/`}>
              {concept.fieldValue} ({concept.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </main>
    </Layout>
  )
}

export default Conceptos
