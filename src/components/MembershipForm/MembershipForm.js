import React from "react";

import { Container, Input, Button, Text } from "./styles/MembershipForm";
import { FaChevronRight } from "react-icons/fa";

const MembershipForm = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

MembershipForm.Input = (props) => <Input {...props} />;

MembershipForm.Button = ({ children, ...props }) => (
  <Button {...props}>
    {children}
    <FaChevronRight color="#fff" size={25} />
  </Button>
);
MembershipForm.Text = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

export default MembershipForm;
