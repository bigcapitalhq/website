const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const createLegalPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all legal pages body, title and slug.
  const results = await graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
          body
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)

  if (results.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const pages = results.data.allMdx.nodes

  const postTemplate = path.resolve("src/templates/legal-template.js")

  pages.forEach(post => {
    createPage({
      path: post.frontmatter.slug,
      component: postTemplate,
      context: {
        id: post.id,
        slug: post.slug,
      },
    })
  })
}

exports.createPages = async args => {
  await createLegalPages(args)
}
