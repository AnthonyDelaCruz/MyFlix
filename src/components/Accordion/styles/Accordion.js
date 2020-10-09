import styled from "styled-components/macro";

export const Container = styled.div`
  margin: auto;
  padding: 70px 45px;
  border-bottom: 8px solid #222;
  h1 {
    font-size: 3.125rem;
    text-align: center;
  }

  @media (max-width: 1000px) {
    padding: 50px 0;
    h1 {
      font-size: 1.625rem;
    }
  }
`;
export const List = styled.div`
  margin: 2em auto 5em;
  width: 75%;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 2em 0;
  }
`;
export const Item = styled.div`
  margin-bottom: ${({ margin }) => `${margin}px`};
  padding: 1.5rem 2rem;
  background-color: #303030;

  p {
    margin: 0;
  }
  cursor: pointer;

  @media (max-width: 1000px) {
    padding: 1rem;
  }
`;
export const Title = styled.p`
  font-size: 1.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    font-size: 1.125rem;
  }
`;
export const Content = styled.div`
  margin-bottom: 8px;
  padding: 1.2em;
  background-color: #303030;
  font-size: 1.625rem;
  @media (max-width: 1000px) {
    font-size: 1.125rem;
  }
`;
