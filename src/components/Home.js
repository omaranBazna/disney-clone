import React from "react";
import styled from "styled-components";
import ImageSlides from "./ImageSlides";
const Home = () => {
  return (
    <Container>
      <ImageSlides />
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>

      <h2>Home</h2>

      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
      <h2>Home</h2>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  background: url("images/home-background.png");
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5v2+5px);
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
