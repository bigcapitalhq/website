const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const createLegalPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all legal pages body, title and slug.
  const results = await graphql(`
    query {
      allMdx(filter: { frontmatter: { locale: { eq: "en", } } }){
        nodes {
          id
          slug
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
  // Pages nodes.
  const pages = results.data.allMdx.nodes

  // Legal template.
  const postTemplate = path.resolve("src/templates/legal-template.js")

  pages.forEach(post => {
    createPage({
      path: post.frontmatter.slug,
      component: postTemplate,
      context: {
        id: post.id,
        slug: post.frontmatter.slug,
      },
    })
  })
}

exports.createPages = async args => {
  await createLegalPages(args)
}