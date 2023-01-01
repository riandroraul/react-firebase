import React, { Component } from "react";
import "./register.scss";
import auth from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (el) => {
    this.setState({
      [el.target.id]: el.target.value,
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    // const auth = app.getAuth();
    // console.log(auth);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register page</p>
          <input
            className="input"
            type="email"
            placeholder="email"
            name="email"
            id="email"
            onChange={this.handleChangeText}
          />
          <input
            className="input"
            type="password"
            placeholder="password"
            name="password"
            id="password"
            onChange={this.handleChangeText}
          />
          <button onClick={this.handleSubmit} className="btn">
            Register
          </button>
        </div>
        {/* <button>Go to dashboard</button> */}
      </div>
    );
  }
}

export default Register;
