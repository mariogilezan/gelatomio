import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  ProductCard,
  ProductCardDescription,
  ProductCardHeading,
  ProductCardImageContainer,
  ProductCardsContainer,
  ProductsHeading,
  ProductsWrapper,
} from "./Products.elements"

export default function Products() {
  return (
    <ProductsWrapper>
      <ProductsHeading>Pogledajte našu ponudu</ProductsHeading>
      <ProductCardsContainer>
        <ProductCard to="/torte">
          <ProductCardImageContainer>
            <StaticImage src="../../images/cake.jpg" placeholder="blurred" />
          </ProductCardImageContainer>
          <ProductCardHeading>Torte</ProductCardHeading>
          <ProductCardDescription>
            Upoznajte se detaljnije sa našim tortama!
          </ProductCardDescription>
        </ProductCard>
        <ProductCard to="/kolaci">
          <ProductCardImageContainer>
            <StaticImage
              src="../../images/cup-cake.jpg"
              placeholder="blurred"
            />
          </ProductCardImageContainer>
          <ProductCardHeading>Kolači</ProductCardHeading>
          <p className="ProductCardDescription">
            Bogata ponuda kolača svih vrsta i veličina
          </p>
        </ProductCard>
        <ProductCard to="/sladoled">
          <ProductCardImageContainer>
            <StaticImage
              src="../../images/ice-cream.jpg"
              placeholder="blurred"
            />
          </ProductCardImageContainer>
          <ProductCardHeading>Sladoled</ProductCardHeading>
          <p className="ProductCardDescription">
            Fenomenalan italijanski sladoled.
          </p>
        </ProductCard>
        <ProductCard to="/macarons">
          <ProductCardImageContainer>
            <StaticImage
              src="../../images/macarons.jpg"
              placeholder="blurred"
            />
          </ProductCardImageContainer>
          <ProductCardHeading>Macarons</ProductCardHeading>
          <p className="ProductCardDescription">
            Veoma popularni i izuzetno ukusni macaroonsi.
          </p>
        </ProductCard>
      </ProductCardsContainer>
    </ProductsWrapper>
  )
}
