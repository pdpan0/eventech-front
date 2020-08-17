import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--third-color);

  > p {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 61.25em) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  div:nth-child(n + 2) {
    margin-left: 2rem;
  }

  @media (max-width: 30em) {
    div:nth-child(n + 2) {
      margin-left: 0;
    }

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-self: center;
    gap: 2rem;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  p {
    height: 0;
    margin-top: 1rem;
    margin-bottom: 2rem;
    word-wrap: break-word;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  width: 104px;
  height: 104px;
  border-radius: 150px;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    opacity: 0.8;
  }

  :hover img {
    transform: scale(1.2);
    opacity: 1;
  }
`;
