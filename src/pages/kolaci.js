import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Kolaci({ location }) {
  const siteTitle = "Kolači"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <h1>Kolači</h1>
    </Layout>
  )
}
