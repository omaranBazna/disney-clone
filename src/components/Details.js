import styled from "styled-components";

import React from "react";

const Details = () => {
  return (
    <Container>
      <Background>
        <img src="" alt="" />
      </Background>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw+5px);
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
export default Details;
