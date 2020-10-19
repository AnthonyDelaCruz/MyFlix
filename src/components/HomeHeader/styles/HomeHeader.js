import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  padding: 20px 2rem 0;

  a:first-of-type {
    flex: 1;
  }
  @media (max-width: 1000px) {
    height: 45px;
  }
`;

export const Button = styled(Link)`
  border: 1px solid red;
  color: #fff;
  text-decoration: none;
  background-color: #e50914;
  padding: 7px 17px;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 3px;

  @media (max-width: 1000px) {
    font-size: 0.9rem;
    padding: 0.25rem 0.5rem;
  }
`;

export const Icon = styled.img`
  height: 36px;
  width: 134px;

  object-fit: contain;
  cursor: pointer;
  @media (max-width: 1000px) {
    height: 24px;
    width: 30%;
  }
`;
