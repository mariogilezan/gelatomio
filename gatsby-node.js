// const config = require("./gatsby-config")
// const path = require("path")
// const { createFilePath } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions
  createFieldExtension({
    name: `defaultArray`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return []
          }
          return source[info.fieldName]
        },
      }
    },
  })
  const typeDefs = `
    type Site implements Node {
      siteMetadata: SiteMetadata
    }
    type SiteMetadata {
      menuLinks: [MenuLinks]!
    }
    type MenuLinks {
      name: String!
      slug: String!
      subMenu: [SubMenu]
    }
    type SubMenu {
      name: String
      slug: String
    }
  `
  createTypes(typeDefs)
}
