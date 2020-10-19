import React, { useState, useContext } from "react";
import { facebookLoginProvider } from "../../firebase";
import { FirebaseContext } from "App";
import { AppForm } from "components";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import ROUTES from "routes";

const SignInForm = () => {
  const { firebase } = useContext(FirebaseContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { username, password } = credentials;
  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // console.log("submitting...", credentials);
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(username, password);
      console.log("Result after logging in...", result);
      if (result) {
        setLoading(false);
      }
    } catch (error) {
      console.log("Error when loggin in...", {
        code: error.code,
        msg: error.message,
      });
      setLoading(false);
      setError(error.message);
    }
  };
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const socialLoginFacebook = async () => {
    try {
      const result = await firebase
        .auth()
        .signInWithPopup(facebookLoginProvider);
      const user = result.user;
      console.log("Result", user);
    } catch (error) {
      console.log("Error in facebook signin", error);
    }
  };
  return (
    <AppForm>
      <AppForm.Form onSubmit={onSubmit}>
        <AppForm.Text>Sign In</AppForm.Text>
        {error && (
          <AppForm.MessageNotif type="error">{error}</AppForm.MessageNotif>
        )}
        <AppForm.Input
          onChange={onChange}
          value={username}
          name="username"
          placeholder="Email of phone number"
        />
        <AppForm.Input
          onChange={onChange}
          value={password}
          name="password"
          placeholder="Password"
          type="password"
        />
        <AppForm.Button disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </AppForm.Button>
      </AppForm.Form>
      <div>
        <AppForm.TextFooter
          onClick={socialLoginFacebook}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          size={13}
        >
          <FaFacebook size={18} /> Login with Facebook
        </AppForm.TextFooter>
        <AppForm.TextFooter style={{ marginTop: "25px" }} size={16}>
          New to Netflix?{" "}
          <Link className="signup-route" to={ROUTES.SIGNUP}>
            Sign up now
          </Link>
        </AppForm.TextFooter>
        <AppForm.TextFooter size={13}>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#">Learn more.</a>
        </AppForm.TextFooter>
        <AppForm.TextFooter size={13}>
          The information collected by Google reCAPTCHA is subject to the Google{" "}
          <a href="#">Privacy Policy</a> and <a>Terms of Service</a>, and is
          used for providing, maintaining, and improving the reCAPTCHA service
          and for general security purposes (it is not used for personalized
          advertising by Google).
        </AppForm.TextFooter>
      </div>
    </AppForm>
  );
};

export default SignInForm;
