const path = require('path')

// create pages dynamically
exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }

    }
  `)

  result.data.allMdx.nodes.forEach(({
    frontmatter: {
      slug
    }
  }) => {
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/PostLayout.js`),
      context: {
        slug,
      },
    })
  })


}