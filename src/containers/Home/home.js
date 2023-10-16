// Home.js
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import React from "react";
import Slider from "react-slick";
import {
  FaLeaf,
  FaGlobe,
  FaTrash,
  FaUtensils,
  FaLightbulb,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <div className="container">
      <div className="welcome-banner">
        <div className="world-icon">
          <FaGlobe size={100} color="white" />
        </div>
        <input type="text" placeholder="Pesquisar" className="search" />
      </div>
      <h3>
        Transforme Ações em impacto! Adote práticas da ESG+ e seja recompensado
        em nossa empresa!
      </h3>
      <div className="card-container">
        <div className="card">
          <FaLeaf size={50} color="green" />
          <p>Cultivo de Horta Doméstica</p>
        </div>
        <div className="card">
          <FaTrash size={50} color="blue" />
          <p>Separação de Lixo Para Reciclagem</p>
        </div>
        <div className="card">
          <FaUtensils size={50} color="orange" />
          <p>Hábitos Alimentares Saudáveis</p>
        </div>
        <div className="card">
          <FaLightbulb size={50} color="yellow" />
          <p>Economia Inteligente de Energia</p>
        </div>
      </div>
      <h3>Galeria de Imagens Relacionadas</h3>

      <Slider {...settings} className="slider">
        <div>
          <img src={image1} alt="Image 1" className="img" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
        <div>
          <img src={image4} alt="Image 4" />
        </div>
        <div>
          <img src={image5} alt="Image 5" />
        </div>
        <div>
          <img src={image6} alt="Image 6" />
        </div>
      </Slider>
    </div>
  );
}

export default Home;
