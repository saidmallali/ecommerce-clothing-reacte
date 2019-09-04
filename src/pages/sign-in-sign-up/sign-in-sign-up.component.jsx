import React from "react";
import "./sign-in-sign-up.style.scss";
import SignIn from "../../compononents/sign-in/sign-in.component";
import SignUp from "../../compononents/sign-up/sign-up.component";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
