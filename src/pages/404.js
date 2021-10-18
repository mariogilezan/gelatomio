import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Heading } from "../styles/globalStyles"

const NotFoundWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const NotFoundHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.primary};
  font-size: 7rem;
  font-weight: bold;
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
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.light};
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 10rem;
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  padding: 0.2rem 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.primary};
  }
`

export default function NotFound({ location }) {
  const siteTitle = "Stranica nije pronađena!"

  return (
    <Layout location={location}>
      <Seo title={siteTitle} />
      <NotFoundWrapper>
        <NotFoundHeading>404</NotFoundHeading>
        <SubHeading>{siteTitle}</SubHeading>
        <Text>Vrati se na:</Text>
        <HomeLink to="/">Početnu stranicu</HomeLink>
      </NotFoundWrapper>
    </Layout>
  )
}
