import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { ImageGalleryWrapper } from "./Image.elements"
const images = [
  { alt: "01" },
  { alt: "02" },
  { alt: "03" },
  { alt: "04" },
  { alt: "05" },
  { alt: "06" },
  { alt: "07" },
  { alt: "08" },
  { alt: "09" },
  { alt: "10" },
  { alt: "11" },
  { alt: "12" },
  { alt: "13" },
  { alt: "14" },
  { alt: "15" },
  { alt: "16" },
  { alt: "17" },
  { alt: "18" },
]

export default function ImageGallery() {
  return (
    <ImageGalleryWrapper>
      {images &&
        images.map(image => (
          <StaticImage
            src="https://source.unsplash.com/collection/190727/"
            alt={image.alt}
            key={image.alt}
            placeholder="blurred"
          />
        ))}
    </ImageGalleryWrapper>
  )
}
