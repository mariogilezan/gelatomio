import styled from "styled-components"

export const PricingWrapper = styled.section`
  padding: 3rem 0;
`

export const PricingHeading = styled.h1`
  font-family: "Great Vibes", cursive;
  font-size: 3.6rem;
  font-weight: normal;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;

  @media screen and (max-width: 520px) {
    font-size: 2.6rem;
  }
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
    background-color: #2f4858;
    color: #fff;
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
    background-color: #effbff;
  }
  tr:hover {
    background-color: #effbff;
  }
`
