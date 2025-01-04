import styled from "styled-components";

export const Container = styled.div`
  max-width: 40rem;

  transition: transform 0.5s;

  /* &:hover {
    transform: scale(1.1);
  } */

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    max-width: 100rem;

    > img {
    width: 100%;
    height: 76%;
    object-fit: cover;
  }
    
  }

`;
