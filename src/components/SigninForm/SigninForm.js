import React from "react";
import {
  Container,
  Form,
  Input,
  Button,
  Text,
  TextFooter,
} from "./styles/SigninForm";

export default function SigninForm({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

SigninForm.Form = function ({ children, ...props }) {
  const onSubmit = () => console.log("Submitting form...");
  return (
    <Form onSubmit={onSubmit} {...props}>
      {children}
    </Form>
  );
};

SigninForm.Button = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);
SigninForm.Input = ({ children, ...props }) => <Input {...props} />;
SigninForm.Text = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);
SigninForm.TextFooter = ({ children, ...props }) => (
  <TextFooter {...props}>{children}</TextFooter>
);
