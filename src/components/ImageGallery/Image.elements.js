import styled from "styled-components"

export const ImageGalleryWrapper = styled.section`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 0.5rem;
  img:hover {
    transition: transform 0.25s;
    transform: scale(1.1);
  }
`
