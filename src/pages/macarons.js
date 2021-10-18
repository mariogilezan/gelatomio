import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import MacaronsSection from "../components/MacaronsSection"
import Seo from "../components/Seo"

export default function Macarons({ location, data }) {
  const siteTitle = "Macarons"
  const { pathname } = location
  const macaronsData = data.allSanityMacarons.nodes[0]

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <MacaronsSection data={macaronsData} />
    </Layout>
  )
}

export const query = graphql`
  query MacaronsData {
    allSanityMacarons {
      nodes {
        title
        imageGallery {
          images {
            asset {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        subtitle
        macaronsImage {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
