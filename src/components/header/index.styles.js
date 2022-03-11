import styled from 'styled-components';

export const StyledHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 90rem;
  height: 6.25rem;
  margin-top: 8px;
`;

export const StyledNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.625rem;
  margin-left: 1.625rem;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.text};
  }
`;
