import React from "react";
import { Container, Button, Icon } from "./styles/HomeHeader";

export default function HomeHeader({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

HomeHeader.Button = ({ children, ...props }) =>
  props.icon ? <Icon {...props} /> : <Button {...props}>{children}</Button>;
