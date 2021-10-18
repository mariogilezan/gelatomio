import React from "react"
import { graphql } from "gatsby"
import ImageGallery from "../components/ImageGallery"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Galerija({ location, data }) {
  const siteTitle = "Galerija"
  const { pathname } = location
  const imageData = data.allSanityGallery.nodes[0].imageGallery

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <ImageGallery data={imageData} />
    </Layout>
  )
}

export const query = graphql`
  query GalleryData {
    allSanityGallery {
      nodes {
        imageGallery {
          images {
            asset {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              id
            }
          }
        }
      }
    }
  }
`
