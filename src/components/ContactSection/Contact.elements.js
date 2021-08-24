import styled from "styled-components"

export const ContactWrapper = styled.section`
  padding: 3rem 0;
`

export const ContactHeading = styled.h1`
  font-family: "Great Vibes", cursive;
  font-size: 3.6rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 2rem;

  @media screen and (max-width: 520px) {
    font-size: 2.6rem;
  }
`

export const ContactSubHeading = styled.h3`
  margin-bottom: 1rem;
`

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
  display: inline-block;
  color: #f00;
  cursor: pointer;
  transition: color 0.25s;
  &:hover {
    color: #b80000;
  }
`

export const ContactPersonEmail = styled(ContactLink)`
  ${ContactLink}
`

export const ContactImageContainer = styled.div`
  margin-top: 2rem;
  img {
    width: 100%;
    height: 100%;
  }
`
