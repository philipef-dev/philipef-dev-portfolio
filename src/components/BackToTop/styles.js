import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  position: fixed;
  bottom: 14rem;
  right: 2.7rem;
  z-index: 10;

  color: ${({ theme }) => theme.COLORS.BRAND};

  @media (min-width: 1024px) {
    right: 8rem;
  }
`;