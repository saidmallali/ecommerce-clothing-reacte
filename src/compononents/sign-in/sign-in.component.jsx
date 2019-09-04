import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomBotton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleClick = e => {
    e.preventDefault();
    signInWithGoogle();
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />
          <div className="buttons">
            <CustomBotton type="submit">Sign In</CustomBotton>

            <CustomBotton isGoogleSignIn onClick={this.handleClick}>
              Sign In with Google
            </CustomBotton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
