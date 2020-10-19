import React, { useState, useContext } from "react";
import ROUTES from "routes";
import { Link } from "react-router-dom";
import { AppForm } from "components";
import { FirebaseContext } from "App";

export default function SignupForm() {
  const { firebase } = useContext(FirebaseContext);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { username, email, password1, password2 } = credentials;
  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setError("Passwords do not match.");
    } else {
      setError("");
      setLoading(true);
      try {
        const result = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password1);
        if (result) {
          setLoading(false);
          console.log("Result", result);
          const { user } = result;
          // send email verification to user
          const sendEmailVerificationResponse = await user.sendEmailVerification();
          console.log("Email verification", sendEmailVerificationResponse);
          setSuccess("You have been sent an email to verify your account.");
        }
      } catch (error) {
        console.log("error", { msg: error.message, code: error.code });
        setError(error.message);
        setLoading(false);
      }
    }
  };
  console.log("error", error);
  return (
    <AppForm>
      <AppForm.Form onSubmit={onSubmit}>
        <AppForm.Text>Sign Up</AppForm.Text>
        {error && (
          <AppForm.MessageNotif type="error">{error}</AppForm.MessageNotif>
        )}
        {success && (
          <AppForm.MessageNotif type="success">{success}</AppForm.MessageNotif>
        )}
        <AppForm.Input
          onChange={onChange}
          value={username}
          name="username"
          placeholder="Username"
        />
        <AppForm.Input
          onChange={onChange}
          value={email}
          name="email"
          placeholder="Email"
        />
        <AppForm.Input
          onChange={onChange}
          value={password1}
          name="password1"
          placeholder="Password"
          type="password"
        />
        <AppForm.Input
          onChange={onChange}
          value={password2}
          name="password2"
          placeholder="Repeat Password"
          type="password"
        />
        <AppForm.Button disabled={loading}>
          {loading ? "Creating account" : "Sign Up"}
        </AppForm.Button>
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
