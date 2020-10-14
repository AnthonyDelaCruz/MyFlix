import React from "react";
import { Container } from "./styles/Hero";

export default function Hero({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
