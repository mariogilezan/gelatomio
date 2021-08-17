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
          <HeroButton to="/cenovnik" redBgColor mr>
            Cenovnik
          </HeroButton>
          <HeroButton to="/kontakt" redColor>
            Kontakt
          </HeroButton>
        </HeroButtonsContainer>
      </HeroDetailsContainer>
      <HeroImageContainer>
        <StaticImage
          src="../../images/hero.jpg"
          alt="Cake img for hero section"
          placeholder="blurred"
        />
      </HeroImageContainer>
    </HeroWrapper>
  )
}
