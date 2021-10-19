import React, { useEffect, useRef, useState } from "react"
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
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const wrapperRef = useRef()

  // close mobile menu on page click
  useEffect(() => {
    const clickHandler = e => {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", clickHandler)
    return () => {
      document.removeEventListener("click", clickHandler)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Navbar isOpen={isOpen} toggle={toggle} />
        <Wrapper ref={wrapperRef} data-is-root-path={isRootPath}>
          <Content>{children}</Content>
        </Wrapper>
        <Footer data={footerData} />
      </>
    </ThemeProvider>
  )
}
