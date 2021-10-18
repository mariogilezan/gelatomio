import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TorteSection from "../components/TorteSection"

export default function Torte({ location, data }) {
  const siteTitle = "Torte"
  const { pathname } = location
  const torteData = data.allSanityTorte.nodes[0]

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <TorteSection data={torteData} />
    </Layout>
  )
}

export const query = graphql`
  query TorteData {
    allSanityTorte {
      nodes {
        title
        subtitle
        recipeList {
          title
          text
        }
        torteImage {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
