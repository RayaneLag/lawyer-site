import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutPage = () => {
  // Configuration pour react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="about-page-container">
      <h1>À propos de Nous</h1>
      <p>Notre cabinet d'avocats a été fondé en 2019.</p>
      <Slider {...settings}>
        <div>
          <img
            src="https://cdn1.edgedatg.com/aws/v2/abc/HowtoGetAwayWithMurder/blog/659055/7fd9b1e8383d45a967a41c0ef73ec814/512x288-Q90_7fd9b1e8383d45a967a41c0ef73ec814.jpg"
            alt="Description 1"
            height={100}
            width={100}
          />
        </div>
        <div>
          <img
            src="https://variety.com/wp-content/uploads/2020/06/bob-odenkirk.jpg?w=1000"
            alt="Description 2"
            height={100}
            width={100}
          />
        </div>
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*5ZXh4b8HvIpte8F7r944dw.jpeg"
            alt="Description 3"
            height={100}
            width={100}
          />
        </div>
      </Slider>
    </div>
  );
};

export default AboutPage;
