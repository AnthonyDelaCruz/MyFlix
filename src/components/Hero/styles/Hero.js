import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  background-image: url(/images/home-bg.jpg);
  background-size: cover;
  background-position: center center;
  border-bottom: 8px solid #222;

  .spacer {
    padding: 0.25rem;
  }
  @media (max-width: 1000px) {
    .spacer {
      padding: 0;
    }
    ${({ isSignInPage }) =>
      isSignInPage &&
      css`
        background-image: none;
      `}
  }
`;
