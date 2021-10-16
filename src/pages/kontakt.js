import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ContactSection from "../components/ContactSection"
import { graphql } from "gatsby"

export default function Kontakt({ location, data }) {
  const siteTitle = "Kontakt"
  const { pathname } = location
  const contactData = data.allSanityContact.nodes[0]

  return (
    <Layout location={location}>
      <Seo title={siteTitle} pathname={pathname} />
      <ContactSection data={contactData} />
    </Layout>
  )
}

export const query = graphql`
  query ContactData {
    allSanityContact {
      nodes {
        title
        subtitle
        address
        phoneNumber
        mobileNumber
        ownerName
        ownerEmail
        managerName
        managerEmail
        contactImage {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
