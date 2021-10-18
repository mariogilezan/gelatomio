import styled from "styled-components"
import { Heading, SectionWrapper } from "../../styles/globalStyles"

export const SladoledWrapper = styled(SectionWrapper)``

export const SladoledHeading = styled(Heading)`
  margin-bottom: 2rem;
`

export const SladoledImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`
