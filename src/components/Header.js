import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <div>
      <Nav>Header</Nav>
    </div>
  );
};
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
`;

export default Header;
