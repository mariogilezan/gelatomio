import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function About({ location }) {
  const siteTitle = "O Nama"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <h1>O Nama</h1>
    </Layout>
  )
}
