import React from "react";
import { Header, Subheader, Content } from "./styles/HomeHero";

export default function Hero() {
  return;
}

Hero.Header = ({ children, ...props }) => (
  <Header {...props}>{children}</Header>
);
Hero.Subheader = ({ children, ...props }) => (
  <Subheader {...props}>{children}</Subheader>
);
Hero.Content = ({ children, ...props }) => (
  <Content {...props}>{children}</Content>
);
