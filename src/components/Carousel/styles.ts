import styled from "styled-components";

export const Container = styled.div`
  width: 56rem;
  height: 50rem;
  padding: 5%;

  @media (max-width: 30em) {
    width: 40rem;
  }

  .slides {
    transition: opacity 0.3s;

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;
