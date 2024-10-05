import * as React from 'react'
import Layout from '../components/Layout'
import NewsletterFormInPage from '../components/NewsletterFormInPage'

// styles
const pageStyles = {
  color: '#232129',
  padding: '10vw',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// markup
const Eventos = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Eventos</title>
        <h1 style={headingStyles}>¡Próximamente!</h1>
        <p>
          Esperamos tener <b>círculos de lectura</b>, <b>conferencias</b>,{' '}
          <b>sesiones de estudio</b>, etc. tanto presenciales como virtuales.{' '}
        </p>
        <p>Si quieres mantenerte al tanto, puedes suscribirte a nuestro boletín:</p>
        <NewsletterFormInPage compactWidth />
      </main>
    </Layout>
  )
}

export default Eventos
