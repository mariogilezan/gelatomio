import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Torte({ location }) {
  const siteTitle = "Torte"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <h1>Torte</h1>
    </Layout>
  )
}
