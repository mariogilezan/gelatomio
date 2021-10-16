import React from "react"
import {
  HeroButton,
  HeroButtonsContainer,
  HeroDetailsContainer,
  HeroHeading,
  HeroImageContainer,
  HeroWrapper,
} from "./HeroElements"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Hero({ data }) {
  const { title, heroImage } = data
  return (
    <HeroWrapper>
      <HeroDetailsContainer>
        <HeroHeading>{title}</HeroHeading>
        <HeroButtonsContainer>
          <HeroButton to="/cenovnik" redbgcolor="true" mr="true">
            Cenovnik
          </HeroButton>
          <HeroButton to="/kontakt" redcolor="true">
            Kontakt
          </HeroButton>
        </HeroButtonsContainer>
      </HeroDetailsContainer>
      <HeroImageContainer>
        <GatsbyImage
          image={heroImage.asset.gatsbyImageData}
          alt="main hero image"
        />
      </HeroImageContainer>
    </HeroWrapper>
  )
}
