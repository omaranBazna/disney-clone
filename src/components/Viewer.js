import React from "react";

const Viewer = () => {
  return (
    <Container>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns:repeat(5, minmax(0,1fr)) @media(max-width:768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
export default Viewer;
