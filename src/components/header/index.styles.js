import styled from 'styled-components';

export const StyledHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.5rem 5rem;
  max-width: 100vw;
  height: 6.25rem;
`;

export const StyledNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.625rem;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.text};
  }
`;
