import * as React from 'react';
import Layout from '../components/Layout';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Eventos</title>
        <h1 style={headingStyles}>
          ¡Próximamente!
        </h1>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
