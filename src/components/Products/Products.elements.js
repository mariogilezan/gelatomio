import styled from "styled-components"
import { Link } from "gatsby"

export const ProductsWrapper = styled.section`
  background-color: #f4f4f4;
  padding: 3rem 2rem;
`

export const ProductsHeading = styled.h2`
  font-family: "Great Vibes", cursive;
  font-size: 2.6rem;
  font-weight: normal;
  margin-bottom: 2rem;

  @media screen and (max-width: 720px) {
    text-align: center;
  }

  @media screen and (max-width: 520px) {
    font-size: 2rem;
  }
`

export const ProductCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
  gap: 1rem;
`

export const ProductCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-color: #fff;
  display: grid;
  grid-template-rows: 12.5rem 3rem 6rem;
  justify-items: center;
  text-align: center;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  backface-visibility: hidden;
  transition: transform 0.25s;
  cursor: pointer;
  &:hover {
    transform: translateY(-0.3rem);
  }
`

export const ProductCardImageContainer = styled.div`
  & > * {
    width: 100%;
    height: 100%;
  }
`

export const ProductCardHeading = styled.h4`
  align-self: center;
  color: #f00;
  font-size: 1.15rem;
`

export const ProductCardDescription = styled.p`
  font-size: 0.95rem;
`
