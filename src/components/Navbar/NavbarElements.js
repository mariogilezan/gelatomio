import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "../../styles/globalStyles"

export const Nav = styled.nav`
  background: ${({ theme }) => theme.color.light};
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
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  border-bottom: 4px solid transparent;
  padding-bottom: 2px;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }
`

export const NavLinkDropdown = styled.a`
  position: relative;
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  border-bottom: 4px solid transparent;
  padding-bottom: 2px;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }
  &:hover + ul,
  &:focus-within + ul {
    display: flex;
    visibility: visible;
    opacity: 1;
    z-index: 999;
  }
  &::before {
    content: "";
    position: absolute;
    top: 6px;
    right: -12px;
    border: solid ${({ theme }) => theme.color.dark};
    border-width: 0 2px 2px 0;
    padding: 3px;
    transform: rotate(45deg);
  }
`

export const NavListSubMenu = styled.ul`
  list-style: none;
  min-width: 8rem;
  background-color: ${({ theme }) => theme.color.light};
  padding: 1rem;
  position: absolute;
  left: -1.8rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.8rem 0.2rem rgba(0, 0, 0, 0.2);
  display: none;
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    display: flex;
    visibility: visible;
    opacity: 1;
    z-index: 999;
  }
  li {
    width: 100%;
  }
  a {
    display: inline-block;
    width: 80%;
  }
  @media screen and (max-height: 450px) {
    gap: 1rem;
  }
`
