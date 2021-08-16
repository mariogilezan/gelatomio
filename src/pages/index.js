import React from "react"
import { Hero, Layout, Products, Seo } from "../components"

export default function Home({ location }) {
  const siteTitle = "Početna"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <Hero />
      <Products />
    </Layout>
  )
}
