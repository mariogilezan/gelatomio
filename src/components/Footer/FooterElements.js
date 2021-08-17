import styled from "styled-components"
import { Container } from "../../styles/globalStyles"
import { SocialIcon } from "react-social-icons"

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
`

export const FooterFeatures = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
    place-content: center;
  }
  ${Container}
`

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  @media screen and (max-width: 720px) {
    text-align: center;
    align-items: center;
    padding: 1rem 0;
  }
`
export const FeatureHeading = styled.h2`
  font-family: "Great Vibes", cursive;
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 720px) {
    margin-bottom: 1rem;
  }
`
export const FeatureDescription = styled.p`
  font-size: 1rem;
`

export const FeatureSocials = styled.div`
  display: flex;
  margin-top: 0.7rem;
`

export const SocialLink = styled(SocialIcon)`
  margin-right: ${props => props.mr && "0.7rem"};
  transition: transform 0.25s;
  &:hover {
    transform: rotate(360deg) scale(1.1);
  }
`

export const FooterContact = styled(Container)`
  background: #2f4858;
  color: #fefefe;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  max-width: 100%;
  ${Container}
`

export const Copyright = styled.p`
  text-align: center;
  line-height: 1.4;
`

export const PhoneLink = styled.a`
  color: #f00;
  transition: color 0.25s;
  &:hover {
    color: #b80000;
  }
`
