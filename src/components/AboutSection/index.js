import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import BlockContent from "@sanity/block-content-to-react"
import {
  AboutFeature,
  AboutFeatures,
  AboutHeading,
  AboutImageContainer,
  AboutWrapper,
} from "./AboutElements"

export default function AboutSection({ data }) {
  const { title, _rawContent, features, aboutImage } = data
  return (
    <AboutWrapper>
      <AboutHeading>{title}</AboutHeading>
      <BlockContent blocks={_rawContent} />
      <AboutFeatures>
        {features &&
          features.map(feature => (
            <AboutFeature key={feature}>{feature}</AboutFeature>
          ))}
      </AboutFeatures>
      <AboutImageContainer>
        <GatsbyImage
          image={aboutImage.asset.gatsbyImageData}
          alt={`${title} image`}
        />
      </AboutImageContainer>
    </AboutWrapper>
  )
}
