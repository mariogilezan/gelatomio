import React from "react"
import { GlobalStyle } from "../../styles/globalStyles"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { Content, Wrapper } from "./Layout.elements"

export default function Layout({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Wrapper data-is-root-path={isRootPath}>
        <Content>{children}</Content>
      </Wrapper>
      <Footer />
    </>
  )
}
