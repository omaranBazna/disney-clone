import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="Disney logo" />
        </Logo>{" "}
        <NavMenu>menu</NavMenu>
      </Nav>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  width: 80px;
  padding: 0px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: block-inline;
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export default Header;
