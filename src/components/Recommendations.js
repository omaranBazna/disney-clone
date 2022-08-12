import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
const Recommendations = () => {
  return (
    <Container>
      <h3>Recommendations</h3>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="https://play-lh.googleusercontent.com/2C54AFFOYYYiTjd6LNQCXEfFCvsOtl0wJCCpFYZutp-XyYlWLSMKpVPQ4HBXDgYyMF0" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://play-lh.googleusercontent.com/2C54AFFOYYYiTjd6LNQCXEfFCvsOtl0wJCCpFYZutp-XyYlWLSMKpVPQ4HBXDgYyMF0" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://play-lh.googleusercontent.com/2C54AFFOYYYiTjd6LNQCXEfFCvsOtl0wJCCpFYZutp-XyYlWLSMKpVPQ4HBXDgYyMF0" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img src="https://play-lh.googleusercontent.com/2C54AFFOYYYiTjd6LNQCXEfFCvsOtl0wJCCpFYZutp-XyYlWLSMKpVPQ4HBXDgYyMF0" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 0 26px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.165, 1) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
      rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacit: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 9s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
`;
export default Recommendations;
