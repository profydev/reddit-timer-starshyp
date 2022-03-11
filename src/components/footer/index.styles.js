import styled from 'styled-components';

export const StyledFooterContainer = styled.footer`
  display: flex;
  align-items: center;
  /* flex-wrap: wrap; */
  /* padding: 1.5rem 5rem; */
  margin: 0 auto;
  padding: 0 1.25rem;
  max-width: 61.25rem;
  width: 100%;
  height: 6.25rem;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.midDark};
    font-size: 0.875rem;
  }
`;

export default StyledFooterContainer;
