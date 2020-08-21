import styled from "styled-components";

export const Container = styled.div`
  width: 50rem;
  height: 50rem;
  padding: 5%;

  .slick-slide {
    visibility: hidden;
  }
  .slick-slide.slick-active {
    visibility: visible;
  }

  .slides {
    transition: opacity 0.3s;

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
  
  @media (max-width: 30em) {
    width: 40rem;
  }
`;
