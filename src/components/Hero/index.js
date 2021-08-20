import React from "react"
import {
  HeroButton,
  HeroButtonsContainer,
  HeroDetailsContainer,
  HeroHeading,
  HeroImageContainer,
  HeroWrapper,
} from "./HeroElements"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroDetailsContainer>
        <HeroHeading>Naše majstorstvo za Vaše zadovoljstvo</HeroHeading>
        <HeroButtonsContainer>
          <HeroButton to="/cenovnik/" redbgcolor="true" mr="true">
            Cenovnik
          </HeroButton>
          <HeroButton to="/kontakt/" redcolor="true">
            Kontakt
          </HeroButton>
        </HeroButtonsContainer>
      </HeroDetailsContainer>
      <HeroImageContainer>
        <StaticImage
          src="../../images/hero.jpg"
          alt="cake hero image"
          placeholder="blurred"
        />
      </HeroImageContainer>
    </HeroWrapper>
  )
}
