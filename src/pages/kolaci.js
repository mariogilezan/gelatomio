import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import KolaciSection from "../components/KolaciSection"

export default function Kolaci({ location, data }) {
  const siteTitle = "Kolači"
  const { pathname } = location
  const kolaciData = data.allSanityKolaci.nodes

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <KolaciSection data={kolaciData} />
    </Layout>
  )
}

export const query = graphql`
  query KolaciData {
    allSanityKolaci {
      nodes {
        title
        imageGallery {
          images {
            asset {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
