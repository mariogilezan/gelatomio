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

export const NavItem = styled.li`
  position: relative;
`

export const NavLink = styled(Link)`
  position: relative;
  color: #222;
  text-decoration: none;
  border-bottom: 4px solid transparent;
  padding-bottom: 2px;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #f00;
  }
  &:hover + ul,
  &:focus-within + ul {
    display: flex;
    visibility: visible;
    opacity: 1;
  }
`

export const DropDownArrow = styled.i`
  position: absolute;
  top: 6px;
  right: -14px;
  border: solid #222;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
`

export const NavListSubMenu = styled.ul`
  list-style: none;
  min-width: 7rem;
  background-color: #fff;
  padding: 1rem;
  position: absolute;
  left: -1rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  display: none;
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    display: flex;
    visibility: visible;
    opacity: 1;
  }
`
