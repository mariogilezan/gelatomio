import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {
  SladoledHeading,
  SladoledImageGrid,
  SladoledWrapper,
} from "./SladoledElements"

export default function SladoledSection({ data }) {
  const { title, imageGallery, imageOne, imageTwo } = data
  return (
    <SladoledWrapper>
      <SladoledHeading>{title}</SladoledHeading>
      <SladoledImageGrid>
        {imageGallery.images &&
          imageGallery.images.map((item, index) => (
            <GatsbyImage
              image={item.asset.gatsbyImageData}
              alt={`image ${index}`}
              key={`image ${index}`}
            />
          ))}
      </SladoledImageGrid>
      <GatsbyImage
        image={imageOne.asset.gatsbyImageData}
        alt="sladoled korneti"
      />
      <GatsbyImage image={imageTwo.asset.gatsbyImageData} alt="sladoled casa" />
    </SladoledWrapper>
  )
}
