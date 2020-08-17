import styled from "styled-components";
import FavoriteCategories from "../../components/FavoriteCategories";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: var(--background);
`;

export const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 73rem solid transparent;
  border-right: 93rem solid var(--third-color);
  right: -507px;
  top: -214px;
  z-index: 0;
  transform: rotate(-166.87deg);
  
  @media (max-width: 61.25em) {
    right: 0;
    left: 0;
    top: 0;
    height: 30rem;
    width: 100%;
    border-top: none;
    border-right: none;
    transform: none;
    background: var(--third-color);
  }
`;

export const Group = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-areas:
    "logo hero hero"
    "info hero hero";
  margin: 10%;
  z-index: 10;

  @media (max-width: 61.25em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5%;
  }
`;

export const Content = styled.div`
  grid-area: "logo";
  align-self: center;
  text-align: left;
  margin: 0;
  font-family: "Exo 2";
  font-style: normal;
  font-weight: normal;
  text-align: initial;
  font-size: 2.4rem;
  color: var(--secondary-color);

  p {
    margin-left: 2.4rem;
  }

  img {
    width: 40rem;
  }
`;

export const BannerImage = styled.img`
  grid-area: hero;
  justify-self: end;
  max-width: 40rem;

  @media (max-width: 61.25em) {
    align-self: center;
    max-width: 30rem;
    margin-top: 1.8rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 30em) {
    
  }
  
`;

export const CustomFavoriteCategories = styled(FavoriteCategories)`
  grid-area: info;
  justify-content: flex-start;
  column-gap: 2rem;
`;