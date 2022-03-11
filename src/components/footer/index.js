import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooterContainer } from './index.styles';
import FooterLogo from '../../assets/footer-logo.svg';
//  prettier-ignore

const Footer = () => (
  <>
    <StyledFooterContainer>
      <a href="https://profy.dev/employers" target="_blank" rel="noreferrer">
        Profy
      </a>
      <Link to="/">
        <img src={FooterLogo} alt="footer logo" />
      </Link>
      <Link to="/terms">Terms & Privacy</Link>
    </StyledFooterContainer>
  </>
);

export default Footer;
