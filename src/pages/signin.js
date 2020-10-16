import React from "react";
import { HeroContainer, HomeNav, Footer, SigninForm } from "components";
import SignInForm from "components/SigninForm";

export default function SignIn() {
  return (
    <>
      <HeroContainer isSignInPage>
        <HomeNav isSignInPage />
        <SigninForm>
          <SignInForm.Text>Sign In</SignInForm.Text>
          <SigninForm />
        </SigninForm>
      </HeroContainer>
      <Footer />
    </>
  );
}
