import React, { Component } from "react";
import { connect } from "react-redux";
import { actionUsername } from "../../../config/redux/action";

class Login extends Component {
  changeUser = () => this.props.changeUsername();

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Login page {this.props.username}</p>
        <button onClick={this.changeUser}>Change username</button>
        <button>Go to dashboard</button>
      </div>
    );
  }
}

const reduxState = (state) => ({
  popupProps: state.popup,
  username: state.user,
});

const reduxDispatch = (dispatch) => ({
  changeUsername: () => actionUsername(dispatch),
});

export default connect(reduxState, reduxDispatch)(Login);
