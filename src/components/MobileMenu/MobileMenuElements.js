import styled from "styled-components"
import {
  NavLink,
  NavLinkDropdown,
  NavListSubMenu,
} from "../Navbar/NavbarElements"

export const MobileMenuList = styled.ul`
  list-style: none;
  display: none;
  height: 70vh;
  width: 50vw;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: ${({ theme }) => theme.color.light};
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100vh")};
    right: 0;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    border-radius: 0.3rem;
    box-shadow: 0 0 0.8rem 0.4rem rgba(0, 0, 0, 0.2);
    transition: all 0.6s ease-in-out;
  }
  @media screen and (max-width: 600px) {
    width: 70vw;
  }
  @media screen and (max-height: 450px) {
    height: 100vh;
  }
`

export const MobileMenuItem = styled.li`
  position: relative;
`

export const MobileMenuLink = styled(NavLink)``

export const MobileMenuLinkDropdown = styled(NavLinkDropdown)``

export const MobileMenuListSubMenu = styled(NavListSubMenu)``
