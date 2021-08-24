import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ContactSection from "../components/ContactSection"

export default function Kontakt({ location }) {
  const siteTitle = "Kontakt"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <ContactSection />
    </Layout>
  )
}
