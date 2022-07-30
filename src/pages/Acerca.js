import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import * as acercaStyles from "../css/Acerca.module.css"

const AcercaPage = () => {
  return (
    <Layout>
      <SEO
        title="Acerca(te) | metaxis.digital"
        description="Filosofía y computación"
        image="metaxis.jpg"
        metaurl="https://metaxis.digital/Acerca"
        type="website"
        author="Óscar A. Montiel"
      />
        <main className={acercaStyles.container}>
          <h2 className={acercaStyles.title}>Acerca</h2>
          <p className={acercaStyles.text}>
            <b>metaxis.digital</b> es un blog dedicado a la difusión de ideas que entrelazan la filosofía y la computación y cómo es que interactúan una con la otra a través de una perspectiva metamoderna.
          </p>
        </main>
    </Layout>
  )
}

export default AcercaPage
