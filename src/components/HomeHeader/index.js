import React from "react";
import HomeHeader from "./HomeHeader";

const HomeNav = () => {
  return (
    <HomeHeader>
      <HomeHeader.Button icon src={"/images/logo.png"} alt="netflix logo" />
      <HomeHeader.Button to="/signin">Sign In</HomeHeader.Button>
    </HomeHeader>
  );
};

export default HomeNav;
