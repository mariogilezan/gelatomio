import React from "react"
import { Layout, Seo } from "../components"

export default function Home({ location }) {
  const siteTitle = "Početna"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <p>Home Page</p>
    </Layout>
  )
}
