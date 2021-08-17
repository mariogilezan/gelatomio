import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  DropDownArrow,
  Logo,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
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
              alt="Page logo"
              placeholder="blurred"
            />
          </Logo>
          <NavList>
            {menuLinks.map(link => (
              <NavItem key={link.name}>
                <NavLink
                  to={link.slug !== "/proizvodi/" ? link.slug : null}
                  aria-haspopup={
                    link.subMenu && link.subMenu.length > 0 ? true : false
                  }
                  activeStyle={{ borderColor: "#f00" }}
                >
                  {link.name === "Proizvodi" ? (
                    <>
                      {link.name} <DropDownArrow />
                    </>
                  ) : (
                    link.name
                  )}
                </NavLink>
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
