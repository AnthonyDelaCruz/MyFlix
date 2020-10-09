import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 950px;
  margin: auto;

  .form-wrapper {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    padding: 0 5%;
    .form-wrapper {
      flex-direction: column;
    }
  }
`;
export const Input = styled.input`
  height: 60px;
  min-width: 450px;
  padding: 5px 10px 0;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;

  @media (max-width: 1000px) {
    width: 100%;
    min-width: unset;
  }
`;
export const Button = styled.button`
  min-height: 60px;
  font-size: 1.625rem;
  background-color: #e50914;
  color: #fff;
  border: none;
  font-weight: 400;
  outline: none;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justift-content: space-between;

  &:hover {
    background-color: #f40612;
  }
  svg {
    margin-left: 0.5em;
  }

  @media (max-width: 1000px) {
    margin-top: 1rem;
    width: auto;
    min-height: 40px;
    font-size: 1rem;
    align-self: center;

    svg {
      height: 16px;
      width: 16px;
    }
  }
`;
export const Text = styled.h3`
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "none")};
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  padding: 0 5%;
  padding-bottom: 20px;
`;
