import React from "react";
import { HeroContainer, HomeNav, Footer, SigninForm } from "components";

export default function SignIn() {
  return (
    <>
      <HeroContainer isSignInPage>
        <HomeNav isSignInPage />
        <SigninForm />
      </HeroContainer>
      <Footer />
    </>
  );
}
