import React from "react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuLinkDropdown,
  MobileMenuList,
  MobileMenuListSubMenu,
} from "./MobileMenuElements"

export default function MobileMenu({ isOpen, toggle }) {
  const { menuLinks } = useSiteMetadata()

  return (
    <>
      <MobileMenuList isOpen={isOpen} onClick={toggle}>
        {menuLinks.map(link => (
          <MobileMenuItem key={link.name}>
            {link.name !== "Proizvodi" ? (
              <MobileMenuLink
                to={link.slug}
                activeStyle={{ borderColor: "#f00" }}
              >
                {link.name}
              </MobileMenuLink>
            ) : (
              <MobileMenuLinkDropdown
                aria-haspopup={
                  link.subMenu && link.subMenu.length > 0 ? true : false
                }
              >
                {link.name}
              </MobileMenuLinkDropdown>
            )}
            {link.subMenu && link.subMenu.length > 0 ? (
              <MobileMenuListSubMenu aria-label="submenu">
                {link.subMenu.map(subLink => (
                  <li key={subLink.name}>
                    <MobileMenuLink
                      to={subLink.slug}
                      activeStyle={{ borderColor: "#f00" }}
                    >
                      {subLink.name}
                    </MobileMenuLink>
                  </li>
                ))}
              </MobileMenuListSubMenu>
            ) : null}
          </MobileMenuItem>
        ))}
      </MobileMenuList>
    </>
  )
}
