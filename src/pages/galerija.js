import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Galerija({ location }) {
  const siteTitle = "Galerija"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <h1>Galerija</h1>
    </Layout>
  )
}
