import React from "react";
import styled from "styled-components";
const LogIn = () => {
  return (
    <Container>
      <Content>
        <BgImage />
      </Content>
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
`;
const Content = styled.div`
  margin-bottom: 10px;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 60px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export default LogIn;
