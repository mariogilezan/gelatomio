import styled from "styled-components"
import { Heading, SectionWrapper } from "../../styles/globalStyles"

export const PricingWrapper = styled(SectionWrapper)``

export const PricingHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 2rem;
`

export const PricingTable = styled.table`
  width: 90%;
  margin: 0 auto;
  border-radius: 0.3rem;
  box-shadow: 3px 3px 6px rgb(47, 72, 88, 0.2);
  border-spacing: 1;
  border-collapse: collapse;
  overflow: hidden;
  th,
  td {
    padding-left: 1rem;
    text-align: left;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    th,
    td {
      padding-left: 0;
      padding-right: 0.5rem;
      text-align: center;
    }
  }
`

export const PricingTableHeader = styled.thead`
  tr {
    height: 4rem;
    background-color: ${({ theme }) => theme.color.secondaryDark};
    color: ${({ theme }) => theme.color.light};
  }
`

export const PricingTableBody = styled.tbody`
  tr {
    height: 3rem;
    @media screen and (max-width: 600px) {
      height: 4rem;
    }
  }
  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.color.secondaryLight};
  }
  tr:hover {
    background-color: ${({ theme }) => theme.color.secondaryLight};
  }
`
