import * as React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({
  title,
  description,
  image,
  metaurl,
  type,
  author,
  imageTwitter,
  keywords = [
    'futurismo',
    'metamodernidad',
    'metaxis',
    'digital',
    'blog',
    'filosofía',
    'metta',
    'budismo',
    'qualia',
    'matemáticas',
    'transhumanismo',
    'postmodernidad',
    'ciberfilosofía',
    'tecnoutopía',
    'meditación digital',
    'pensamiento futuro',
    'metaciencia',
    'filosofía contemporánea',
    'budismo moderno',
    'inteligencia artificial',
    'conciencia digital',
    'zen tecnológico',
    'metafísica digital',
    'logica futurista',
    'transcendencia digital',
    'paradigma metamoderno',
    'neobudismo',
    'percepción qualitativa',
    'matemáticas avanzadas',
    'realidad virtual',
  ],
}) => {
  return (
    <Helmet htmlAttributes={{ lang: 'es' }} title={`${title} | metaxis.digital`}>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={metaurl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={`${title} | metaxis.digital`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://metaxis.digital${image}`} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:url" content={metaurl} />
      <meta property="og:site_name" content="metaxis.digital" />
      <meta property="og:locale" content="es_MX" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={metaurl} />
      <meta name="twitter:creator" content="@metaxisdigital" />
      <meta name="twitter:title" content={`${title} | metaxis.digital`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://metaxis.digital${imageTwitter}`} />
      <meta name="twitter:url" content={metaurl} />
    </Helmet>
  );
};

export default Seo;
