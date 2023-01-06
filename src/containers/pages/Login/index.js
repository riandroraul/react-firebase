import React, { Component } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Button";
import { loginUserAPI } from "../../../config/redux/action";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (el) => {
    this.setState({
      [el.target.id]: el.target.value,
    });
  };

  handleLogin = async () => {
    // try {
    const { email, password } = this.state;
    const res = await this.props.loginAPI({ email, password });
    if (res) {
      this.setState({
        email: "",
        password: "",
      });
      console.log("Login Berhasil");
      useNavigate()("/");
    } else {
      // } catch (error) {
      console.log("Login Gagal");
      // }
    }
  };

  render() {
    // console.log(this.props);
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Login page</p>
          <input
            className="input"
            type="email"
            placeholder="email"
            name="email"
            value={this.state.email}
            id="email"
            onChange={this.handleChangeText}
          />
          <input
            className="input"
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            id="password"
            onChange={this.handleChangeText}
          />
          <Button
            onClick={this.handleLogin}
            title={"Login"}
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
  loginAPI: (data) => loginUserAPI(data)(dispatch),
});
export default connect(reduxState, reduxDispatch)(Login);
