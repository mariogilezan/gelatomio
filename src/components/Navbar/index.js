import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Logo,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavLinkDropdown,
  NavList,
  NavListSubMenu,
} from "./NavbarElements"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

export default function Navbar() {
  const { menuLinks } = useSiteMetadata()

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to="/">
            <StaticImage
              src="../../images/logo.png"
              alt="page logo"
              placeholder="blurred"
            />
          </Logo>
          <NavList>
            {menuLinks.map(link => (
              <NavItem key={link.name}>
                {link.name !== "Proizvodi" ? (
                  <NavLink to={link.slug} activeStyle={{ borderColor: "#f00" }}>
                    {link.name}
                  </NavLink>
                ) : (
                  <NavLinkDropdown
                    aria-haspopup={
                      link.subMenu && link.subMenu.length > 0 ? true : false
                    }
                  >
                    {link.name}
                  </NavLinkDropdown>
                )}
                {link.subMenu && link.subMenu.length > 0 ? (
                  <NavListSubMenu aria-label="submenu">
                    {link.subMenu.map(subLink => (
                      <li key={subLink.name}>
                        <NavLink
                          to={subLink.slug}
                          activeStyle={{ borderColor: "#f00" }}
                        >
                          {subLink.name}
                        </NavLink>
                      </li>
                    ))}
                  </NavListSubMenu>
                ) : null}
              </NavItem>
            ))}
          </NavList>
        </NavContainer>
      </Nav>
    </>
  )
}
