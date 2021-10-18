import styled from "styled-components"
import { Heading, SectionWrapper, Subheading } from "../../styles/globalStyles"

export const TorteWrapper = styled(SectionWrapper)``

export const TorteHeading = styled(Heading)`
  margin-bottom: 2rem;
`

export const TorteSubheading = styled(Subheading)`
  font-weight: 400;
  font-style: italic;
`

export const TorteRecipeList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 1rem;
`

export const TorteRecipeItem = styled.li`
  background-color: ${({ theme }) => theme.color.secondaryDark};
  color: ${({ theme }) => theme.color.light};
  padding: 0.8rem;
  border-radius: 0.4rem;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

export const TorteRecipeTitle = styled.h5`
  font-size: 1rem;
`

export const TorteRecipeText = styled.p`
  font-size: 0.9rem;
`

export const TorteImageContainer = styled.div`
  margin-top: 2rem;
`
