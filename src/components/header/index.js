import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeaderContainer, StyledNavContainer } from './index.styles';
import Logo from '../../assets/logo.svg';
//  prettier-ignore

const Header = () => (
  <>
    <StyledHeaderContainer>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <StyledNavContainer>
        <Link to="/search/javascript">Search</Link>
        <Link to="/#how-it-works">How it works</Link>
        <Link to="/#about">About</Link>
      </StyledNavContainer>
    </StyledHeaderContainer>
  </>
);

export default Header;
