import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Products from "../components/Products"
import Seo from "../components/Seo"

export default function Home({ location, data }) {
  const siteTitle = "Početna"
  const { pathname } = location
  const heroData = data.allSanityHeroSection.nodes[0]
  const productsData = data.allSanityProductsSection.nodes

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <Hero data={heroData} />
      <Products data={productsData} />
    </Layout>
  )
}

export const query = graphql`
  query HomeData {
    allSanityHeroSection {
      nodes {
        title
        heroImage {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
    allSanityProductsSection(sort: { fields: order, order: ASC }) {
      nodes {
        title
        description
        slug {
          current
        }
        productImage {
          asset {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
