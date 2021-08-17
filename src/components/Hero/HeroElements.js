import styled from "styled-components"
import { Link } from "gatsby"

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
`

export const HeroDetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;

  @media screen and (max-width: 800px) {
    width: 80%;
    z-index: 10;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -15%);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    top: 30%;
  }
`

export const HeroHeading = styled.h1`
  font-family: "Great Vibes", cursive;
  font-size: 3.6rem;
  font-weight: normal;
  margin-top: 0;

  @media screen and (max-width: 520px) {
    font-size: 2.6rem;
  }
`

export const HeroButtonsContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`

export const HeroButton = styled(Link)`
  color: ${props => (props.redColor ? "#f00" : "#fefefe")};
  background-color: ${props => (props.redBgColor ? "#f00" : "#fefefe")};
  margin-right: ${props => (props.mr ? "1rem" : 0)};
  width: 10rem;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 0.6rem 1rem;
  border-radius: 10rem;
  border: 3px solid #f00;
  transition: color 0.25s, background-color 0.25s;
  &:hover {
    color: ${props => (props.redColor ? "#fefefe" : "#f00")};
    background-color: ${props => (props.redBgColor ? "#fefefe" : "#f00")};
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const HeroImageContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`
