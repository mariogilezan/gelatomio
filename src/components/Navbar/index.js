import React from "react"
import { Logo, Nav, NavContainer, NavLink, NavList } from "./NavbarElements"
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
              <li key={link.name}>
                <NavLink to={link.slug} activeStyle={{ borderColor: "#f00" }}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </NavList>
        </NavContainer>
      </Nav>
    </>
  )
}
