import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
const Recommendations = () => {
  return (
    <Container>
      <Content>
        <Wrap>
          <Link to="/">
            <img src="https://www.lanc.org.uk/wp-content/uploads/2011/07/ASD.png" />
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
`;
export default Recommendations;
