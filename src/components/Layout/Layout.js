import React from "react"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { Content, GlobalStyle, Wrapper } from "./Layout.elements"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
      <Footer />
    </>
  )
}
