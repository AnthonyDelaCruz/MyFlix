import React from "react";
import { Container, Link, Column, Row, Break, MainLink } from "./styles/footer";

const Footer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Footer.MainLink = ({ children, ...props }) => (
  <MainLink {...props}>{children}</MainLink>
);
Footer.Link = ({ children, className, ...props }) => (
  <Link className={className} {...props}>
    {children}
  </Link>
);
Footer.Column = ({ children, ...props }) => (
  <Column {...props}>{children}</Column>
);
Footer.Row = ({ children, ...props }) => <Row {...props}>{children}</Row>;
Footer.Break = () => <Break />;

export default Footer;
