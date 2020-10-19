import React from "react";
import {
  Container,
  Form,
  Input,
  Button,
  Text,
  TextFooter,
  MessageNotif,
} from "./styles/Form";

export default function AppForm({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

AppForm.Form = function ({ children, ...props }) {
  return <Form {...props}>{children}</Form>;
};

AppForm.Button = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);
AppForm.Input = ({ children, ...props }) => <Input {...props} />;
AppForm.Text = ({ children, ...props }) => <Text {...props}>{children}</Text>;
AppForm.TextFooter = ({ children, ...props }) => (
  <TextFooter {...props}>{children}</TextFooter>
);
AppForm.MessageNotif = ({ children, ...props }) => (
  <MessageNotif {...props}>{children}</MessageNotif>
);
