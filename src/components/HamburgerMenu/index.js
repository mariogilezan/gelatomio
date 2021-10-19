import React from "react"
import {
  Cross,
  Hamburger,
  HamburgerMenuWrapper,
  Line,
} from "./HamburgerMenuElements"

export default function HamburgerMenu({ open, toggle }) {
  return (
    <>
      <HamburgerMenuWrapper onClick={toggle}>
        <Hamburger open={open}>
          <Line />
          <Line />
          <Line />
        </Hamburger>
        <Cross open={open}>
          <Line />
          <Line />
        </Cross>
      </HamburgerMenuWrapper>
    </>
  )
}
