import React from 'react';
import Slider from 'react-slick';

import { Container } from './styles';
import ImageCard from './ImageCard';

const data = [
  {
    url: "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
  },  {
    url: "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
  },  {
    url: "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
  },  {
    url: "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
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
        {data.map(item => <ImageCard />)}
      </Slider>
    </Container>
  );
}

export default Carousel;