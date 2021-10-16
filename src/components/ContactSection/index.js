import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  ContactAddress,
  ContactContainer,
  ContactDescription,
  ContactHeading,
  ContactImageContainer,
  ContactLink,
  ContactNumberOne,
  ContactNumberTwo,
  ContactPeople,
  ContactPerson,
  ContactPersonEmail,
  ContactSubHeading,
  ContactWrapper,
} from "./Contact.elements"

export default function ContactSection({ data }) {
  const {
    title,
    subtitle,
    address,
    phoneNumber,
    mobileNumber,
    ownerName,
    ownerEmail,
    managerName,
    managerEmail,
    contactImage,
  } = data
  const phoneNumberToHref = number => number.replace(/\D/gi, "")
  return (
    <ContactWrapper>
      <ContactHeading>{title}</ContactHeading>
      <ContactSubHeading>{subtitle}</ContactSubHeading>
      <ContactContainer>
        <ContactDescription>
          <ContactAddress>Adresa: {address}</ContactAddress>
          <ContactNumberOne>
            Telefon:{" "}
            <ContactLink href={`tel:${phoneNumberToHref(phoneNumber)}`}>
              {phoneNumber}
            </ContactLink>
          </ContactNumberOne>
          <ContactNumberTwo>
            Mobilni:{" "}
            <ContactLink href={`tel:${phoneNumberToHref(mobileNumber)}`}>
              {mobileNumber}
            </ContactLink>
          </ContactNumberTwo>
        </ContactDescription>
        <ContactPeople>
          <ContactPerson>
            Vlasnik: {ownerName}
            <ContactPersonEmail href={`mailto:${ownerEmail}`}>
              {ownerEmail}
            </ContactPersonEmail>
          </ContactPerson>
          <ContactPerson>
            Poslovođa: {managerName}
            <ContactPersonEmail href={`mailto:${managerEmail}`}>
              {managerEmail}
            </ContactPersonEmail>
          </ContactPerson>
        </ContactPeople>
      </ContactContainer>
      <ContactImageContainer>
        <GatsbyImage
          image={contactImage.asset.gatsbyImageData}
          alt={`${title} image`}
        />
      </ContactImageContainer>
    </ContactWrapper>
  )
}
