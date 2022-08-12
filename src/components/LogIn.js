import React from "react";
import styled from "styled-components";
const LogIn = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="https://omaranbazna.github.io/disney-clone/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            GET PREMIUM ACCESS TO ALL YOUR FAVORITE MOVIES AND START HAVING FUN
            WITH FRIENDS
          </Description>
          <CTALogoTwo src="https://omaranbazna.github.io/disney-clone/images/cta-logo-two.png" />
        </CTA>

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
  background-image: url("https://omaranbazna.github.io/disney-clone/images/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  transition: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: white;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background: #0483ee;
  }
  cursor: pointer;
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  lin-height: 1.5em;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
export default LogIn;
