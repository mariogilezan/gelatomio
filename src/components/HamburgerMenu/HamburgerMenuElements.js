import styled from "styled-components"

export const HamburgerMenuWrapper = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  z-index: 999;
  @media screen and (max-width: 800px) {
    display: block;
  }
`

export const Line = styled.span`
  display: block;
  background: ${({ theme }) => theme.color.dark};
  transition: all 0.25s ease-in-out;
`

export const Hamburger = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  span {
    width: ${({ open }) => (open ? "0%" : "30px")};
    height: 3px;
    position: relative;
    top: 5px;
    left: 5px;
    margin: 5px 0;
    &:nth-child(1) {
      transition-delay: ${({ open }) => (open ? "0s" : "0.5s")};
    }
    &:nth-child(2) {
      transition-delay: ${({ open }) => (open ? "0.125s" : "0.625s")};
    }
    &:nth-child(3) {
      transition-delay: ${({ open }) => (open ? "0.25s" : "0.75s")};
    }
  }
`

export const Cross = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
  span {
    &:nth-child(1) {
      height: ${({ open }) => (open ? "80%" : "0%")};
      width: 3px;
      position: absolute;
      top: 10%;
      left: 19px;
      transition-delay: ${({ open }) => (open ? "0.625s" : "0s")};
    }
    &:nth-child(2) {
      width: 0%;
      width: ${({ open }) => (open ? "80%" : "0%")};
      height: 3px;
      position: absolute;
      left: 10%;
      top: 19px;
      transition-delay: ${({ open }) => (open ? "0.375s" : "0.25s")};
    }
  }
`
