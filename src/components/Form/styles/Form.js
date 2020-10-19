import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 400px;
  margin: 91px auto;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px 68px 40px;
  @media (max-width: 1000px) {
    padding: 5%;
    background-color: #000;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  background-color: #333;
  height: 50px;
  border none;
  font-size: 16px;
  outline: none;
  color: #fff;
  padding: 5px 20px;
  margin-bottom: 1rem;
  border-radius: 4px;
  line-height: 50px;
`;
export const Button = styled.button.attrs((props) => ({ type: "submit" }))`
  min-height: 37px;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(229, 9, 20, 0.5)" : "#e50914"};
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  margin: 25px 0;
  outline: none;
  cursor: pointer;
`;
export const Text = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
`;
export const TextFooter = styled.p`
  color: #737373;
  font-weight: 500;
  font-size: ${({ size }) => `${size}px`};
  svg {
    margin-right: 5px;
    color: #3b5998;
  }
  .signup-route {
    color: #fff;
  }
  a {
    color: #0071eb;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MessageNotif = styled.div`
  background-color: ${({ type }) =>
    type === "success" ? "#4BB543" : "#e87c03"};
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 1rem;
  font-size: 14px;
`;
