import React from 'react';
import Slider from 'react-slick';
import FormRegistroPaciente from './FormRegistroPaciente';
import FormRegistroEspecialista from './FormRegistroEspecialista';
import './CarruselFormularios.css';

const CarruselFormularios = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <span className="slick-prev">{"<"}</span>, // Personaliza la flecha izquierda
    nextArrow: <span className="slick-next">{">"}</span>, // Personaliza la flecha derecha
  };

  return (
    <Slider {...settings}>
      <div className='allY'>
        <FormRegistroPaciente />
      </div>
      <div className='allY'>
        <FormRegistroEspecialista />
      </div>
    </Slider>
  );
};

export default CarruselFormularios;
