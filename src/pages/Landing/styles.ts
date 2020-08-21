import styled from "styled-components";
import FavoriteCategories from "../../components/FavoriteCategories";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--background);
`;

export const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 35.8rem solid transparent;
  border-left: 36.6rem solid var(--secondary-color);
  right: 209px;
  top: 11px;
  z-index: 0;
  transform: rotate(-39.57deg);

  @media (max-width: 61.25em) {
    right: 0;
    left: 0;
    top: 0;
    height: 30rem;
    width: 100%;
    border-top: none;
    border-left: none;
    transform: none;
    background: var(--third-color);
  }
`;

export const Group = styled.article`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 2fr 2fr;
  grid-template-areas:
    "logo hero"
    "info hero";
  padding: 7%;
  z-index: 10;

  @media (max-width: 61.25em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  justify-self: center;
  max-width: 40rem;

  @media (max-width: 61.25em) {
    align-self: center;
    max-width: 30rem;
    margin-top: 1.8rem;
    margin-bottom: 1.8rem;
  }
`;

export const CustomFavoriteCategories = styled(FavoriteCategories)`
  grid-area: info;
  justify-content: flex-start;
  column-gap: 2rem;
`;

export const Section = styled.article`
  width: 100%;
  margin-top: 10rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: var(--third-color);

  @media (max-width: 61.25em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Banner = styled.div`
  margin: 5%;
  display: flex;
  align-items: center;

  img {
    width: 30rem;
    height: 30rem;
  }

  p {
    color: var(--background);
    font-size: 3.6rem;
    font-weight: 200;
  }

  @media (max-width: 30em) {
    flex-direction: column;

    p {
      text-align: center;
      margin-top: 2rem;
    }
  }
`;
