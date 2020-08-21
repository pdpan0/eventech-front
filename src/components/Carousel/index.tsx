import React from 'react';
import Slider from 'react-slick';

import { Container } from './styles';
import ImageCard from './ImageCard';

const data = [
  {
    id: 5,
    url: "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
  },  {
    id: 6,
    url: "https://image.freepik.com/vetores-gratis/astronauta-no-fundo-da-lua_23-2147943022.jpg"
  },  {
    id: 7,
    url: "https://conteudo.imguol.com.br/c/noticias/be/2019/06/17/no-capacete-de-buzz-aldrin-e-possivel-ver-a-imagem-refletida-de-neil-armstrong-astronauta-responsavel-pelas-fotos-da-missao-apolo-11-1560781761943_v2_450x337.jpg"
  },  {
    id: 8,
    url: "https://static.vecteezy.com/system/resources/previews/000/655/082/non_2x/astronaut-in-the-galaxy-cartoon-vector.jpg"
  }
]

const Carousel: React.FC = () => {
  const settings = { 
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides"
  }
  return (
    <Container>
      <Slider {...settings}>
        {data.map(item =>
          <ImageCard 
            key={item.id}
            imageId={item.id}
            imageUrl={item.url}
          />
        )}
      </Slider>
    </Container>
  );
}

export default Carousel;