import React from "react";
import HomeHeader from "./HomeHeader";

const HomeNav = ({ formPage }) => {
  return (
    <HomeHeader>
      {!formPage && <HomeHeader.Button to="/signin">Sign In</HomeHeader.Button>}
    </HomeHeader>
  );
};

export default HomeNav;
