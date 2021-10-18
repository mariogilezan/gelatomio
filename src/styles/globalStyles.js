import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

export const theme = {
  color: {
    primary: "#ff0000",
    primaryDark: "#b80000",
    secondaryDark: "#2f4858",
    secondaryLight: "#effbff",
    dark: "#222222",
    light: "#fefefe",
    grey: "#f4f4f4",
  },
  font: {
    pageFont: "Open Sans, sans-serif",
    headingFont: "Great Vibes, cursive",
  },
}

export const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background: ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.dark};
  }
`

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.font.headingFont};
  font-size: 3.6rem;
  font-weight: 400;
  margin-top: 0;

  @media screen and (max-width: 520px) {
    font-size: 2.6rem;
  }
`

export const Subheading = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`

export const SectionWrapper = styled.section`
  padding: 3rem 0;
`

export const Container = styled.div`
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
`

export const Button = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme, redbgcolor }) =>
    redbgcolor ? theme.color.primary : theme.color.light};
  color: ${({ theme, redcolor }) =>
    redcolor ? theme.color.primary : theme.color.light};
  margin-right: ${({ mr }) => mr && "1rem"};
  border: 3px solid ${({ theme }) => theme.color.primary};
  border-radius: 10rem;
  width: 10rem;
  display: inline-block;
  font-weight: bold;
  text-align: center;
  padding: 0.6rem 1rem;
  transition: color 0.25s, background-color 0.25s;
  &:hover {
    color: ${({ theme, redcolor }) =>
      redcolor ? theme.color.light : theme.color.primary};
    background-color: ${({ theme, redbgcolor }) =>
      redbgcolor ? theme.color.light : theme.color.primary};
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
