import React from "react";
import { 
  Container,
  Group,
  Triangle,
  Content,
  CustomFavoriteCategories,
  BannerImage
} from "./styles";

import NavLoginInfo from '../../components/NavLoginInfo';
import happyPeoples from "../../assets/images/happyPeoples.svg";
import logo from "../../assets/images/logo.svg";

const Landing: React.FC = () => (
  <Container>
    <NavLoginInfo />
    <Triangle />
    <Group>
      <Content>
          <img src={logo} alt="Eventech"/>
          <p>Sua plataforma de eventos online.</p>
      </Content>
      <BannerImage src={happyPeoples} alt="Pessoas felizes." />
      <CustomFavoriteCategories />
    </Group>
  </Container>
);

export default Landing;
