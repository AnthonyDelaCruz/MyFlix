import React from "react";
import { HeroContainer, HomeNav, Footer } from "components";

export default function SignIn() {
  return (
    <>
      <HeroContainer style={{ minHeight: "100vh" }}>
        <HomeNav />
        <h1>Signin</h1>
      </HeroContainer>
      <Footer />
    </>
  );
}
