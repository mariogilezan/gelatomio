import styled from "styled-components"
import { Heading, SectionWrapper } from "../../styles/globalStyles"

export const AboutWrapper = styled(SectionWrapper)``

export const AboutHeading = styled(Heading)`
  margin-bottom: 2rem;
`

export const AboutFeatures = styled.ul`
  margin-top: 2rem;
  list-style: square inside;
`

export const AboutFeature = styled.li`
  color: ${({ theme }) => theme.color.primary};
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`

export const AboutImageContainer = styled.div`
  margin-top: 2rem;
`
