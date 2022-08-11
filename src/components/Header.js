import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="Disney logo" />
        </Logo>{" "}
        <NavMenu>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="Home" />
            <span>Home</span>
          </a>
        </NavMenu>
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
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
    }
  }
`;
export default Header;
