import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Kontakt({ location }) {
  const siteTitle = "Kontakt"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <h1>Kontakt</h1>
    </Layout>
  )
}
