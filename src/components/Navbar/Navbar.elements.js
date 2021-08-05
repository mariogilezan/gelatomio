import styled from "styled-components"
import { Container } from "../Layout/Layout.elements"

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Container}
`

export const NavList = styled.ul`
  list-style: none;
  color: #fefefe;
  display: flex;
`

export const NavLink = styled.li`
  margin: 0 0.5rem;
  cursor: pointer;
  transition: color 0.25s;
  &:hover {
    color: #f00;
  }
`

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #f00;
`
