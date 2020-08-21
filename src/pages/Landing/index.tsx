import React from "react";
import {
  Container,
  Group,
  Triangle,
  Content,
  CustomFavoriteCategories,
  BannerImage,
  Section,
  Banner
} from "./styles";

import NavLoginInfo from "../../components/NavLoginInfo";
import Carousel from "../../components/Carousel";
import happyPeoples from "../../assets/images/happyPeoples.svg";
import inLove from "../../assets/images/inLove.svg";
import logo from "../../assets/images/logo.svg";

const Landing: React.FC = () => (
  <Container>
    <NavLoginInfo />
    <Triangle />
    <Group>
      <Content>
        <img src={logo} alt="Eventech" />
        <p>Sua plataforma de eventos online.</p>
      </Content>
      <BannerImage src={happyPeoples} alt="Pessoas felizes." />
      <CustomFavoriteCategories />
    </Group>
    <Section>
      <Banner>
        <img src={inLove} alt="" />
        <p>Os melhores eventos de técnologia disponiveis para você</p>
      </Banner>
        <Carousel />
    </Section>
  </Container>
);

export default Landing;
