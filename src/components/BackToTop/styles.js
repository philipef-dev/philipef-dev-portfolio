import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  position: fixed;
  bottom: 12.4rem;
  right: 1.8rem;
  z-index: 10;

  color: ${({ theme }) => theme.COLORS.BRAND};

  @media (min-width: 1024px) {
    right: 12rem;
  }
`;