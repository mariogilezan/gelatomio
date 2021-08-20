import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Macarons({ location }) {
  const siteTitle = "Macarons"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <h1>Macarons</h1>
    </Layout>
  )
}
