import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AboutSection from "../components/AboutSection"

export default function About({ location, data }) {
  const siteTitle = "O Nama"
  const { pathname } = location
  const aboutData = data.allSanityAbout.nodes[0]

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <AboutSection data={aboutData} />
    </Layout>
  )
}

export const query = graphql`
  query AboutData {
    allSanityAbout {
      nodes {
        title
        _rawContent
        features
        aboutImage {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
