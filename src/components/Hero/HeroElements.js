import styled from "styled-components"
import { Button, Heading } from "../../styles/globalStyles"

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

export const HeroHeading = styled(Heading)``

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

export const HeroButton = styled(Button)``

export const HeroImageContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`
