import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
            menuLinks {
              name
              slug
              subMenu {
                name
                slug
              }
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
