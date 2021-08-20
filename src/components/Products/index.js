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
} from "./ProductsElements"

export default function Products() {
  return (
    <ProductsWrapper>
      <ProductsHeading>Pogledajte našu ponudu</ProductsHeading>
      <ProductCardsContainer>
        <ProductCard to="/torte/">
          <ProductCardImageContainer>
            <StaticImage
              src="../../images/cake.jpg"
              placeholder="blurred"
              alt="cake"
            />
          </ProductCardImageContainer>
          <ProductCardHeading>Torte</ProductCardHeading>
          <ProductCardDescription>
            Upoznajte se detaljnije sa našim tortama!
          </ProductCardDescription>
        </ProductCard>
        <ProductCard to="/kolaci/">
          <ProductCardImageContainer>
            <StaticImage
              src="../../images/cup-cake.jpg"
              placeholder="blurred"
              alt="cupcake"
            />
          </ProductCardImageContainer>
          <ProductCardHeading>Kolači</ProductCardHeading>
          <ProductCardDescription>
            Bogata ponuda kolača svih vrsta i veličina
          </ProductCardDescription>
        </ProductCard>
        <ProductCard to="/sladoled/">
          <ProductCardImageContainer>
            <StaticImage
              src="../../images/ice-cream.jpg"
              placeholder="blurred"
              alt="ice cream"
            />
          </ProductCardImageContainer>
          <ProductCardHeading>Sladoled</ProductCardHeading>
          <ProductCardDescription>
            Fenomenalan italijanski sladoled.
          </ProductCardDescription>
        </ProductCard>
        <ProductCard to="/macarons/">
          <ProductCardImageContainer>
            <StaticImage
              src="../../images/macarons.jpg"
              placeholder="blurred"
              alt="macarons"
            />
          </ProductCardImageContainer>
          <ProductCardHeading>Macarons</ProductCardHeading>
          <ProductCardDescription>
            Veoma popularni i izuzetno ukusni macaroonsi.
          </ProductCardDescription>
        </ProductCard>
      </ProductCardsContainer>
    </ProductsWrapper>
  )
}
