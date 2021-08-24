import styled from "styled-components"

export const AboutWrapper = styled.section`
  padding: 3rem 0;
`

export const AboutHeading = styled.h1`
  font-family: "Great Vibes", cursive;
  font-size: 3.6rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 2rem;

  @media screen and (max-width: 520px) {
    font-size: 2.6rem;
  }
`

export const AboutText = styled.p`
  margin-top: 1rem;
  text-align: justify;
`

export const BoldText = styled.strong`
  font-weight: bold;
`

export const AboutFeatures = styled.ul`
  margin-top: 2rem;
  list-style: square inside;
`

export const AboutFeature = styled.li`
  color: #f00;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`

export const AboutImageContainer = styled.div`
  margin-top: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`
