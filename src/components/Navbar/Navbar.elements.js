import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "../../styles/globalStyles"

export const Nav = styled.nav`
  background: #fefefe;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
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

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  width: 8.5rem;
  height: 3rem;
  cursor: pointer;
  img {
    width: 100%;
  }
`

export const NavList = styled.ul`
  list-style: none;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  color: #222;
  text-decoration: none;
  border-bottom: 4px solid transparent;
  padding-bottom: 2px;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #f00;
  }
`
