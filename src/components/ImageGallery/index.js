import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { ImageGalleryWrapper } from "./ImageElements"

export default function ImageGallery({ data }) {
  const { images } = data
  return (
    <ImageGalleryWrapper>
      {images &&
        images.map((image, index) => (
          <GatsbyImage
            image={image.asset.gatsbyImageData}
            alt={`image ${index}`}
            key={index}
          />
        ))}
    </ImageGalleryWrapper>
  )
}
