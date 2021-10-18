import styled from "styled-components"
import { Heading, SectionWrapper, Subheading } from "../../styles/globalStyles"

export const ContactWrapper = styled(SectionWrapper)``

export const ContactHeading = styled(Heading)`
  margin-bottom: 2rem;
`

export const ContactSubHeading = styled(Subheading)``

export const ContactContainer = styled.div`
  display: flex;
  gap: 15%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`
export const ContactDescription = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const ContactPeople = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const ContactAddress = styled.p`
  display: block;
`

export const ContactNumberOne = styled.p``
export const ContactNumberTwo = styled.p``

export const ContactPerson = styled.p`
  display: flex;
  flex-direction: column;
`

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  display: inline-block;
  cursor: pointer;
  transition: color 0.25s;
  &:hover {
    color: ${({ theme }) => theme.color.primaryDark};
  }
`

export const ContactPersonEmail = styled(ContactLink)`
  ${ContactLink}
`

export const ContactImageContainer = styled.div`
  margin-top: 2rem;
`
