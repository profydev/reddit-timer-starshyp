import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, NavContainer } from './index.styles';
import Logo from '../../assets/logo.svg';
//  prettier-ignore

const Header = () => (
  <>
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <NavContainer>
        <Link to="/search">Search</Link>
        <Link to="/how-it-works">How it works</Link>
        <Link to="/about">About</Link>
      </NavContainer>
    </HeaderContainer>
  </>
);

export default Header;
