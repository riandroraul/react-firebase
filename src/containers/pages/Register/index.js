import React, { Component } from "react";
import "./register.scss";
import Button from "../../../components/atoms/Button";
import { connect } from "react-redux";
import { registerUserApi } from "../../../config/redux/action";
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
    this.props.registerAPI({ email, password });
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
          <Button
            onClick={this.handleSubmit}
            title={"Register"}
            loading={this.props.isLoading}
          />
        </div>
        {/* <button>Go to dashboard</button> */}
      </div>
    );
  }
}

const reduxState = (state) => ({ isLoading: state.isLoading });
const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => {
    registerUserApi(data)(dispatch);
  },
});

export default connect(reduxState, reduxDispatch)(Register);
