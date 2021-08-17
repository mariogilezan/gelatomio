import React from "react"
import {
  Copyright,
  FeatureCard,
  FeatureDescription,
  FeatureHeading,
  FeatureSocials,
  FooterContact,
  FooterFeatures,
  FooterWrapper,
  PhoneLink,
  SocialLink,
} from "./FooterElements"

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterFeatures>
        <FeatureCard>
          <FeatureHeading>Gelato</FeatureHeading>
          <FeatureDescription>
            U našem maloprodajnom objektu možete odmah kupiti i poneti sve vrste
            sitnih kolača, komadne kolače (krempite, baklave, eklere, princes
            kofne, idjanere), torte na parče, šnit torte, sladoled na kugle i
            kilogram.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureHeading>Garancija kvaliteta</FeatureHeading>
          <FeatureDescription>
            Sve proizvode ćete dobiti upakovane u odgovarauću ambalažu a, možete
            i da poručite ono što želite da pripremimo za Vas. Poručene torte
            isporučuju se gotovo upakovane sa spremnom deklaracijom.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureHeading>Budite u toku!</FeatureHeading>
          <FeatureDescription>
            Pratite nas na društvenim mrežama:
          </FeatureDescription>
          <FeatureSocials>
            <SocialLink
              url="https://www.facebook.com/poslasticarnica.gelato/"
              style={{ width: 40, height: 40 }}
              mr="true"
              target="_blank"
            />
            <SocialLink
              url="https://www.instagram.com/gelatomio.vrsac/"
              style={{ width: 40, height: 40 }}
              target="_blank"
            />
          </FeatureSocials>
        </FeatureCard>
      </FooterFeatures>
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
