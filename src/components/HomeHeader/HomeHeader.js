import React from "react";
import { Container, Button, Icon } from "./styles/HomeHeader";
import { Link } from "react-router-dom";

export default function HomeHeader({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

HomeHeader.Button = ({ children, ...props }) =>
  props.icon ? (
    <Link to="/">
      <Icon {...props} />
    </Link>
  ) : (
    <Button {...props}>{children}</Button>
  );
