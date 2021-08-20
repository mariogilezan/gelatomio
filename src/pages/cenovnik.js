import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Cenovnik({ location }) {
  const siteTitle = "Cenovnik"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <h1>Cenovnik</h1>
    </Layout>
  )
}
