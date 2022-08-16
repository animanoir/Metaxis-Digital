import * as React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, metaurl, type, author }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: 'es' }}
      title={`${title} | metaxis.digital`}
      meta={[{ name: `description`, content: description }]}
    >
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={metaurl} />
      <meta property="twitter:creator" content="@metaxisdigital" />
      <meta property="twitter:title" content={`${title} | metaxis.digital`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:url" content={metaurl} />
      <meta name="robots" content="max-image-preview:large" />
      <meta name="keywords" content="filosofía, computación, tecnología, sociedad" />
      <meta name="author" content={author} />
      <link rel="canonical" href="https://metaxis.digital/" />
      <meta name="robots" content="index" />
      <meta name="robots" content="follow" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={`${title} | metaxis.digital`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={metaurl} />
    </Helmet>
  );
};

export default SEO;
