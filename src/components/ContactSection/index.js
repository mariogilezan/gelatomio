import React from "react"
import { StaticImage } from "gatsby-plugin-image"
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

export default function ContactSection() {
  return (
    <ContactWrapper>
      <ContactHeading>Kontakt</ContactHeading>
      <ContactSubHeading>Gelato Mio</ContactSubHeading>
      <ContactContainer>
        <ContactDescription>
          <ContactAddress>
            Adresa: Nikite Tolstoja 1 26300 Vršac, Srbija
          </ContactAddress>
          <ContactNumberOne>
            Telefon: <ContactLink href="tel:013838065">013/838 065</ContactLink>
          </ContactNumberOne>
          <ContactNumberTwo>
            Mobilni: <ContactLink href="tel:063608698">063/608 698</ContactLink>
          </ContactNumberTwo>
        </ContactDescription>
        <ContactPeople>
          <ContactPerson>
            Vlasnik: Nikola Guga{" "}
            <ContactPersonEmail href="mailto:nikola.guga@gelatomio.rs">
              nikola.guga@gelatomio.rs
            </ContactPersonEmail>
          </ContactPerson>
          <ContactPerson>
            Poslovođa: Tatjana Guga{" "}
            <ContactPersonEmail href="mailto:tatjanaguga@gmail.com">
              tatjanaguga@gmail.com
            </ContactPersonEmail>
          </ContactPerson>
        </ContactPeople>
      </ContactContainer>
      <ContactImageContainer>
        <StaticImage
          src="../../images/contact.jpg"
          alt="cake hero image"
          placeholder="blurred"
        />
      </ContactImageContainer>
    </ContactWrapper>
  )
}
