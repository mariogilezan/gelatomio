import React from "react"
import { Copyright, FooterContainer, FooterSection } from "./Footer.elements"

export default function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <Copyright>&copy; 2021 Gelatomio. Sva prava zadržana.</Copyright>
      </FooterContainer>
    </FooterSection>
  )
}
