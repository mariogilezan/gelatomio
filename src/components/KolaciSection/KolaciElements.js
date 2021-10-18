import styled from "styled-components"
import { Heading, SectionWrapper } from "../../styles/globalStyles"

export const KolaciWrapper = styled(SectionWrapper)``

export const KolaciSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`

export const KolaciHeading = styled(Heading)`
  margin-bottom: 1rem;
`

export const KolaciImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
`
