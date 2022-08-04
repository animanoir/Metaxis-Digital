import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { Center } from '@react-three/drei';

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
        <title>Not found</title>
        <h1 style={headingStyles}>
          No existe esa página físicamente, pero a lo mejor en tu mente sí.
        </h1>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
