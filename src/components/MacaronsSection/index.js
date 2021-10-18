import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  MacaronsHeading,
  MacaronsImageGrid,
  MacaronsSubheading,
  MacaronsWrapper,
} from "./MacaronsElements"

export default function MacaronsSection({ data }) {
  const { title, imageGallery, subtitle, macaronsImage } = data
  console.log(data)
  return (
    <MacaronsWrapper>
      <MacaronsHeading>{title}</MacaronsHeading>
      <MacaronsImageGrid>
        {imageGallery.images &&
          imageGallery.images.map((item, index) => (
            <GatsbyImage
              image={item.asset.gatsbyImageData}
              alt={`image ${index}`}
              key={`image ${index}`}
            />
          ))}
      </MacaronsImageGrid>
      <MacaronsSubheading>{subtitle}</MacaronsSubheading>
      <GatsbyImage image={macaronsImage.asset.gatsbyImageData} alt={subtitle} />
    </MacaronsWrapper>
  )
}
