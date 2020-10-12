import styled from "styled-components/macro";

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
  }
`;
export const Content = styled.div`
  max-width: 950px;
  padding: 75px 0;
  margin: auto;
`;

export const Header = styled.h1`
  font-size: 3.125rem;
  margin: 0 auto;
  max-width: 640px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 1.75rem;
  }
`;
export const Subheader = styled.h2`
  font-size: 1.625rem;
  margin: 1rem auto;
  font-weight: 400;
  max-width: 640px;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 1.125rem;
  }
`;
