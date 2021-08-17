import React from "react"
// import { Hero, Layout, Products, Seo } from "../components"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Products from "../components/Products"
import Seo from "../components/Seo"

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
