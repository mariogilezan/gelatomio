import styled from "styled-components"
import { Heading, SectionWrapper, Subheading } from "../../styles/globalStyles"

export const MacaronsWrapper = styled(SectionWrapper)``

export const MacaronsHeading = styled(Heading)`
  margin-bottom: 2rem;
`

export const MacaronsSubheading = styled(Subheading)``

export const MacaronsImageGrid = styled.div`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1rem;
`
