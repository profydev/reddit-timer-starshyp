import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooterContainer } from './index.styles';
import FooterLogo from '../../assets/footer-logo.svg';
//  prettier-ignore

const Footer = () => (
  <>
    <StyledFooterContainer>
      <a
        href="https://profy.dev/employers"
        target="_blank"
        rel="noreferrer"
        style={{ flex: '1', textAlign: 'left' }}
      >
        profy.dev/employers
      </a>
      <Link to="/">
        <img src={FooterLogo} alt="footer logo" />
      </Link>
      <Link to="/terms" style={{ flex: '1', textAlign: 'right' }}>
        Terms & Privacy
      </Link>
    </StyledFooterContainer>
  </>
);

export default Footer;
