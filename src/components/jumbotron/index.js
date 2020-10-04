import React from "react";
import {
  Inner,
  Container,
  Title,
  Subheader,
  Pane,
  Item,
  Image,
} from "./styles/jumbotron";

const Jumbotron = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

Jumbotron.Content = ({ children, ...props }) => (
  <Inner {...props}>{children}</Inner>
);
Jumbotron.Title = ({ children, ...props }) => (
  <Title {...props}>{children}</Title>
);
Jumbotron.Subheader = ({ children, ...props }) => (
  <Subheader {...props}>{children}</Subheader>
);
Jumbotron.Item = ({ children, ...props }) => <Item {...props}>{children}</Item>;
Jumbotron.Pane = ({ children, ...props }) => <Pane {...props}>{children}</Pane>;
Jumbotron.Image = (props) => <Image {...props} />;

export default Jumbotron;
