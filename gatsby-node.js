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
      concepts: allMdx {
        totalCount
        distinct(field: frontmatter___concepts)
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
  result.data.concepts.distinct.forEach(concept => {
    createPage({
      path: `/concepts/${concept}`,
      component: path.resolve(`src/templates/ConceptLayout.js`),
      context: {
        concept
      }
    })
  })

}