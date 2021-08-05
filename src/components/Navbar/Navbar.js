import React from "react"
import { Logo, Nav, NavContainer, NavLink, NavList } from "./Navbar.elements"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import logoImg from "../../images/logo.png"

export default function Navbar() {
  const { menuLinks } = useSiteMetadata()

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to="/">
            <img src={logoImg} alt="Page logo" />
          </Logo>
          <NavList>
            {menuLinks.map(link => (
              <NavLink key={link.name}>{link.name}</NavLink>
            ))}
          </NavList>
        </NavContainer>
      </Nav>
    </>
  )
}
