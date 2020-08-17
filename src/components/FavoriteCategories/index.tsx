import React from "react";
import { Container, Content, Item, ImageContainer } from "./styles";

//Mock -> Favor Atualizar Futuramente!!
import development from "../../assets/images/categories/desenvolvimento.jpg";
import integratedTests from "../../assets/images/categories/testes-integrados.jpg";
import ui from "../../assets/images/categories/ui.jpg";
import ux from "../../assets/images/categories/ux.jpg";

const data = [
  {
    "img": development,
    "title": "Desenvolvimento"
  },
  {
    "img": integratedTests,
    "title": "Testes Integrados"
  },
  {
    "img": ui,
    "title": "UI"
  },
  {
    "img": ux,
    "title": "UX"
  }
];
//Fim do Mock

interface FavoriteCategoriesProps {
  title?: string;
  Categories: Array<{ image: string; title: string }>;
}

const FavoriteCategories: React.FC = () => (
  <Container>
    <p>Algumas categorias mais procuradas.</p>
    <Content>
      {data.map((category) => (
        <Item>
          <ImageContainer>
            <img src={category.img} alt="Desenvolvimento" />
          </ImageContainer>
          <p>{category.title}</p>
        </Item>
      ))}
    </Content>
  </Container>
);
export default FavoriteCategories;
