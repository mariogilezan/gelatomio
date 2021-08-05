import styled, { createGlobalStyle } from "styled-components"

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
}
`

export const Container = styled.div`
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.25rem;
  max-width: 65rem;
  min-height: 100vh;
`
export const Content = styled.main`
  margin-top: 8rem;
  margin-bottom: 3rem;
`
