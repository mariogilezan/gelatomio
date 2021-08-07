import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Layout, Seo } from "../components"

const NotFoundWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Heading = styled.h1`
  font-family: "Great Vibes", cursive;
  font-size: 7rem;
  color: #f00;
  margin: 0;
`

const SubHeading = styled.h3`
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 1rem;
`

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.6rem;
`

const HomeLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  background-color: #f00;
  border-radius: 10rem;
  border: 2px solid #f00;
  padding: 0.2rem 1rem;
  &:hover {
    background-color: #fff;
    color: #f00;
  }
`

export default function NotFound({ location }) {
  const siteTitle = "Stranica nije pronađena!"

  return (
    <Layout location={location}>
      <Seo title={siteTitle} />
      <NotFoundWrapper>
        <Heading>404</Heading>
        <SubHeading>{siteTitle}</SubHeading>
        <Text>Vrati se na:</Text>
        <HomeLink to="/">Početnu stranicu</HomeLink>
      </NotFoundWrapper>
    </Layout>
  )
}
