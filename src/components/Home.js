import React from "react";
import styled from "styled-components";
import ImageSlides from "./ImageSlides";
import Viewer from "./Viewer";
const Home = () => {
  return (
    <Container>
      <ImageSlides />
      <Viewer />
    </Container>
  );
};

const Container = styled.main`
  left: 0;
  position: relative;
  background: url("images/home-background.png");
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw+5px);
  width: 100%;
  &:after {
    background: url("images/home-background.png") center center no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
