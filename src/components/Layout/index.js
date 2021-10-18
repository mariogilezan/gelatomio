import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../../styles/globalStyles"
import Footer from "../Footer"
import Navbar from "../Navbar"
import { Content, Wrapper } from "./LayoutElements"

export default function Layout({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const data = useStaticQuery(graphql`
    query FooterData {
      allSanityFooter {
        nodes {
          title
          address
          phoneNumber
          mobileNumber
        }
      }
    }
  `)
  const footerData = data.allSanityFooter.nodes[0]

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Navbar />
        <Wrapper data-is-root-path={isRootPath}>
          <Content>{children}</Content>
        </Wrapper>
        <Footer data={footerData} />
      </>
    </ThemeProvider>
  )
}
