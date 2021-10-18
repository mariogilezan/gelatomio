import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SladoledSection from "../components/SladoledSection"

export default function Sladoled({ location, data }) {
  const siteTitle = "Sladoled"
  const { pathname } = location
  const sladoledData = data.allSanitySladoled.nodes[0]

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <SladoledSection data={sladoledData} />
    </Layout>
  )
}

export const query = graphql`
  query SladoledData {
    allSanitySladoled {
      nodes {
        title
        imageGallery {
          images {
            asset {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        imageOne {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
        imageTwo {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
