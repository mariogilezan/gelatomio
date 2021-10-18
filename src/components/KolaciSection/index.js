import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {
  KolaciHeading,
  KolaciImageGrid,
  KolaciSectionContainer,
  KolaciWrapper,
} from "./KolaciElements"

export default function KolaciSection({ data }) {
  console.log(data)
  return (
    <KolaciWrapper>
      {data &&
        data.map(item => (
          <KolaciSectionContainer key={item.title}>
            <KolaciHeading>{item.title}</KolaciHeading>
            <KolaciImageGrid>
              {item.imageGallery.images.map((elem, index) => (
                <GatsbyImage
                  image={elem.asset.gatsbyImageData}
                  alt={`image ${index}`}
                  key={`image ${index}`}
                />
              ))}
            </KolaciImageGrid>
          </KolaciSectionContainer>
        ))}
    </KolaciWrapper>
  )
}
