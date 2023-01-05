import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    return (
      <div>
        <p>Login page {this.props.popupProps}</p>
        <button>Go to register</button>
        <button>Go to dashboard</button>
      </div>
    );
  }
}

const reduxState = (state) => ({
  popupProps: state.popup,
});

export default connect(reduxState, null)(Login);
