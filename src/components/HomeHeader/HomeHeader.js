import React from "react";
import { Container, Button, Icon } from "./styles/HomeHeader";
import { Link } from "react-router-dom";

export default function HomeHeader({ children, ...props }) {
  return (
    <Container {...props}>
      <Link to="/">
        <Icon src={"/images/logo.png"} alt="netflix logo" {...props} />
      </Link>
      {children}
    </Container>
  );
}

HomeHeader.Button = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);
