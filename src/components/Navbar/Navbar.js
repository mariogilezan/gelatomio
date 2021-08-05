import React from "react"
import { Logo, Nav, NavContainer, NavLink, NavList } from "./Navbar.elements"

const menuLinks = [
  "Početna",
  "O Nama",
  "Torte",
  "Kolači",
  "Macaroons",
  "Sladoled",
  "Galerija",
  "Kontakt",
]

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo>Logo</Logo>
          <NavList>
            {menuLinks.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </NavList>
        </NavContainer>
      </Nav>
    </>
  )
}
