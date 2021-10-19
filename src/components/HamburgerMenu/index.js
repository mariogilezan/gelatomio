import React from "react"
import {
  Cross,
  Hamburger,
  HamburgerMenuWrapper,
  Line,
} from "./HamburgerMenuElements"

export default function HamburgerMenu({ isOpen, toggle }) {
  return (
    <>
      <HamburgerMenuWrapper onClick={toggle}>
        <Hamburger isOpen={isOpen}>
          <Line />
          <Line />
          <Line />
        </Hamburger>
        <Cross isOpen={isOpen}>
          <Line />
          <Line />
        </Cross>
      </HamburgerMenuWrapper>
    </>
  )
}
