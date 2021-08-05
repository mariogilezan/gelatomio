import React from "react"
import {
  Copyright,
  FooterContact,
  FooterWrapper,
  PhoneLink,
} from "./Footer.elements"

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContact>
        <Copyright>
          &copy; 2021 Gelato Mio, Nikite Tolstoja 1, 26300 Vršac - Telefon:{" "}
          <PhoneLink href="tel:013838065">013/838 065</PhoneLink>, Mobilni:{" "}
          <PhoneLink href="tel:063608698">063/608 698</PhoneLink>
        </Copyright>
      </FooterContact>
    </FooterWrapper>
  )
}
