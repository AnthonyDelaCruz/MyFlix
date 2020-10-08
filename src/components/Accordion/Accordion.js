import { Container, Content, Item, Title, List } from "./styles/Accordion";
import React from "react";

const Accordion = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
Accordion.List = ({ children, ...props }) => <List {...props}>{children}</List>;
Accordion.Item = ({ children, ...props }) => <Item {...props}>{children}</Item>;
Accordion.Title = ({ children, ...props }) => (
  <Title {...props}>{children}</Title>
);
Accordion.Content = ({ children, ...props }) => (
  <Content {...props}>{children}</Content>
);

export default Accordion;
