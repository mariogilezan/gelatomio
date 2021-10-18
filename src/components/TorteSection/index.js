import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {
  TorteHeading,
  TorteImageContainer,
  TorteRecipeItem,
  TorteRecipeList,
  TorteRecipeText,
  TorteRecipeTitle,
  TorteSubheading,
  TorteWrapper,
} from "./TorteElements"

export default function TorteSection({ data }) {
  const { title, subtitle, recipeList, torteImage } = data
  return (
    <TorteWrapper>
      <TorteHeading>{title}</TorteHeading>
      <TorteSubheading>{subtitle}</TorteSubheading>
      <TorteRecipeList>
        {recipeList &&
          recipeList.map(recipe => (
            <TorteRecipeItem key={recipe.title}>
              <TorteRecipeTitle>{recipe.title}</TorteRecipeTitle>
              <TorteRecipeText>{recipe.text}</TorteRecipeText>
            </TorteRecipeItem>
          ))}
      </TorteRecipeList>
      <TorteImageContainer>
        <GatsbyImage
          image={torteImage.asset.gatsbyImageData}
          alt="torte page image"
        />
      </TorteImageContainer>
    </TorteWrapper>
  )
}
