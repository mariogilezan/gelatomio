import React from "react"
import { GlobalStyle } from "../../styles/globalStyles"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { Content, Wrapper } from "./Layout.elements"

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
