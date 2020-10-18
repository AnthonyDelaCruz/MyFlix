import React from "react";
import ROUTES from "routes";
import { Link } from "react-router-dom";
import { AppForm } from "components";

export default function SignupForm() {
  return (
    <AppForm>
      <AppForm.Form>
        <AppForm.Text>Sign Up</AppForm.Text>
        <AppForm.Input
          //   onChange={onChange}
          //   value={username}
          name="username"
          placeholder="Username"
        />
        <AppForm.Input
          //   onChange={onChange}
          //   value={username}
          name="email"
          placeholder="Email"
        />
        <AppForm.Input
          //   onChange={onChange}
          //   value={username}
          name="password"
          placeholder="Password"
        />
        <AppForm.Input
          //   onChange={onChange}
          //   value={username}
          name="password"
          placeholder="Repeat Password"
        />
        <AppForm.Button>Sign Up</AppForm.Button>
      </AppForm.Form>
      <AppForm.TextFooter style={{ marginTop: "25px" }} size={16}>
        Already a User?{" "}
        <Link className="signup-route" to={ROUTES.SIGNIN}>
          Sign in now
        </Link>
      </AppForm.TextFooter>
      <AppForm.TextFooter size={13}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <a href="#">Learn more.</a>
      </AppForm.TextFooter>
    </AppForm>
  );
}
