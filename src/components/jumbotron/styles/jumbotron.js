import styled, { css } from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div``;

export const Pane = styled.div`
  width: 50%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ padding }) => {
    if (padding === "left") {
      return css`
        padding-left: 3rem;
      `;
    } else if (padding === "right") {
      return css`
        padding-right: 3rem;
      `;
    }
  }}

  @media (max-width: 1000px) {
    justify-content: center;
    padding: unset;
    width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  padding: 70px 45px;
  max-width: 1100px;
  margin: auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 50px 5%;
  }
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Subheader = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  height: auto;
`;
