module.exports = {
  siteMetadata: {
    title: `metaxis.digital`,
    siteUrl: `https://metaxis.digital`,
    author: `Óscar A. Montiel`,
    twitterUrl: `https://twitter.com/metaxisdigital`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap",`gatsby-plugin-styled-components`, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": `${__dirname}/src/pages/`
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "posts",
      "path": `${__dirname}/src/posts/`
    },
    __key: "posts"
  }]
};