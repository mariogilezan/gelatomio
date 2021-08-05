import styled from "styled-components"
import { Container } from "../../styles/globalStyles"

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const FooterContact = styled.div`
  background: #2f4858;
  color: #fefefe;
`

export const Copyright = styled.p`
  text-align: center;
`

export const PhoneLink = styled.a`
  color: #f00;
  transition: color 0.25s;
  &:hover {
    color: #b80000;
  }
`
