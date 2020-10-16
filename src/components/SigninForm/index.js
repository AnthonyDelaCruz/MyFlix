import React, { useState } from "react";
import SigninForm from "./SigninForm";

const SignInForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { username, password } = credentials;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitting...", credentials);
  };
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  return (
    <SigninForm>
      <SigninForm.Form onSubmit={onSubmit}>
        <SigninForm.Text>Sign In</SigninForm.Text>
        <SigninForm.Input
          onChange={onChange}
          value={username}
          name="username"
          placeholder="Email of phone number"
        />
        <SigninForm.Input
          onChange={onChange}
          value={password}
          name="password"
          placeholder="Password"
          type="password"
        />
        <SigninForm.Button>Sign In</SigninForm.Button>
      </SigninForm.Form>
      <div>
        <SigninForm.TextFooter size={13}>
          Login with Facebook
        </SigninForm.TextFooter>
        <SigninForm.TextFooter style={{ marginTop: "25px" }} size={16}>
          New to Netflix? <span>Sign up now</span>
        </SigninForm.TextFooter>
        <SigninForm.TextFooter size={13}>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#">Learn more.</a>
        </SigninForm.TextFooter>
        <SigninForm.TextFooter size={13}>
          The information collected by Google reCAPTCHA is subject to the Google{" "}
          <a href="#">Privacy Policy</a> and <a>Terms of Service</a>, and is
          used for providing, maintaining, and improving the reCAPTCHA service
          and for general security purposes (it is not used for personalized
          advertising by Google).
        </SigninForm.TextFooter>
      </div>
    </SigninForm>
  );
};

export default SignInForm;
