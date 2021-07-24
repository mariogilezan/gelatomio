import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
  }
`

const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  opacity: 1;
  transition: background 0.25s, color 0.25s;

  &:hover {
    background: ${props => (props.primary ? "white" : "palevioletred")};
    color: ${props => (props.primary ? "palevioletred" : "white")};
  }
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <p>Hello World!</p>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </>
  )
}
