import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  ProductCard,
  ProductCardDescription,
  ProductCardHeading,
  ProductCardImageContainer,
  ProductCardsContainer,
  ProductsHeading,
  ProductsWrapper,
} from "./ProductsElements"

export default function Products({ data }) {
  return (
    <ProductsWrapper>
      <ProductsHeading>Pogledajte našu ponudu</ProductsHeading>
      <ProductCardsContainer>
        {data &&
          data.map(product => (
            <ProductCard to={product.slug.current} key={product.title}>
              <ProductCardImageContainer>
                <GatsbyImage
                  image={product.productImage.asset.gatsbyImageData}
                  alt={`${product.title} image`}
                />
              </ProductCardImageContainer>
              <ProductCardHeading>{product.title}</ProductCardHeading>
              <ProductCardDescription>
                {product.description}
              </ProductCardDescription>
            </ProductCard>
          ))}
      </ProductCardsContainer>
    </ProductsWrapper>
  )
}
