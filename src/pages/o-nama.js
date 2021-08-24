import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AboutSection from "../components/AboutSection"

export default function About({ location }) {
  const siteTitle = "O Nama"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <AboutSection />
    </Layout>
  )
}
