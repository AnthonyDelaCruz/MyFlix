import React from "react";
import HomeHeader from "./HomeHeader";

const HomeNav = ({ isSignInPage }) => {
  return (
    <HomeHeader>
      {!isSignInPage && (
        <HomeHeader.Button to="/signin">Sign In</HomeHeader.Button>
      )}
    </HomeHeader>
  );
};

export default HomeNav;
