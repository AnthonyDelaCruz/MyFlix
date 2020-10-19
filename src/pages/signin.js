import React from "react";
import { HeroContainer, HomeNav, Footer, SigninForm } from "components";

export default function SignIn() {
  return (
    <>
      <HeroContainer formPage>
        <HomeNav formPage />
        <SigninForm />
      </HeroContainer>
      <Footer />
    </>
  );
}
