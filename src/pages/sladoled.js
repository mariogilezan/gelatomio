import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Sladoled({ location }) {
  const siteTitle = "Sladoled"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <h1>Sladoled</h1>
    </Layout>
  )
}
