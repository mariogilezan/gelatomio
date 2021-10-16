import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PricingSection from "../components/PricingSection"
import Seo from "../components/Seo"

export default function Cenovnik({ location, data }) {
  const siteTitle = "Cenovnik"
  const { pathname } = location
  const pricingData = data.allSanityProductsMenu.nodes

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <PricingSection data={pricingData} />
    </Layout>
  )
}

export const query = graphql`
  query PricingData {
    allSanityProductsMenu(sort: { fields: _createdAt, order: ASC }) {
      nodes {
        title
        amount
        price
      }
    }
  }
`
