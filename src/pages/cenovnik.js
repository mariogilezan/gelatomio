import React from "react"
import Layout from "../components/Layout"
import PricingSection from "../components/PricingSection"
import Seo from "../components/Seo"

export default function Cenovnik({ location }) {
  const siteTitle = "Cenovnik"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <PricingSection />
    </Layout>
  )
}
