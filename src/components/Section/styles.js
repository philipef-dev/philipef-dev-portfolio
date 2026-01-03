import styled from "styled-components";

export const Container = styled.section`
  padding-block: 4rem;

  > h2 {
    margin-bottom: 3.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > p {
    margin-bottom: 3.2rem;
    text-align: left;
  }
`;