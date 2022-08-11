import React from "react";
import styled from "styled-components";
const LogIn = () => {
  return (
    <Container>
      <Content>content</Content>
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

export default LogIn;
