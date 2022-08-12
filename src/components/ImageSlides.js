import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlides = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="badag" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="badging" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="scale" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="scales" />
        </a>
      </Wrap>
    </Carousel>
  );
};
const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
`;

const Wrap = styled.div``;
export default ImageSlides;
