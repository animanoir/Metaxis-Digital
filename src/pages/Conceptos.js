import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import pulpoConFlores from '../images/metaxisdigital.jpg'
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
      image={pulpoConFlores}
      metaurl="https://metaxis.digital/Conceptos"
      type="website"
      author="Óscar A. Montiel"
    />
    <main className={conceptosStyle.maincontainer}>
      <h1 className={conceptosStyle.title}>Todos los conceptos</h1>
      <ul className={conceptosStyle.container}>
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
