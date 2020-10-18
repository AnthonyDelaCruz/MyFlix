import React from "react";
import { HeroContainer, HomeNav, Footer, SignupForm } from "components";

export default function SignIn() {
  return (
    <>
      <HeroContainer formPage>
        <HomeNav formPage />
        <SignupForm />
      </HeroContainer>
      <Footer />
    </>
  );
}
