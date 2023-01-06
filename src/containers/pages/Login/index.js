import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Button";
import { loginUserAPI } from "../../../config/redux/action";

// const Navigasi = ({ path }) => {
//   const navigate = useNavigate();
//   return navigate(path);
// };

// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChangeText = (el) => {
//     this.setState({
//       [el.target.id]: el.target.value,
//     });
//   };

//   handleLogin = async () => {
//     // try {
//     const { email, password } = this.state;
//     const res = await this.props.loginAPI({ email, password });
//     if (res) {
//       this.setState({
//         email: "",
//         password: "",
//       });
//       console.log("Login Berhasil");
//       // console.log(useNavigate()("/"));
//       // <Navigasi path="/" />;

//       // <Navigate to={"/"} replace={true} />;
//     } else {
//       // } catch (error) {
//       console.log("Login Gagal");
//       // }
//     }
//   };

//   componentDidUpdate() {
//     console.log(this.props.isLogin);
//   }

//   render() {
//     // console.log(this.props);
//     return (
//       <div className="auth-container">
//         <div className="auth-card">
//           <p className="auth-title">Login page</p>
//           <input
//             className="input"
//             type="email"
//             placeholder="email"
//             name="email"
//             value={this.state.email}
//             id="email"
//             onChange={this.handleChangeText}
//           />
//           <input
//             className="input"
//             type="password"
//             placeholder="password"
//             name="password"
//             value={this.state.password}
//             id="password"
//             onChange={this.handleChangeText}
//           />
//           <Button
//             onClick={this.handleLogin}
//             title={"Login"}
//             loading={this.props.isLoading}
//           />
//         </div>
//         {/* <button>Go to dashboard</button> */}
//       </div>
//     );
//   }
// }

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [value, setValue] = useState("");

  // const handleChangeText = (el) => {
  //   setValue({
  //     [el.target.id]: el.target.value,
  //   });
  // };

  const handleLogin = async () => {
    // try {
    // const { email, password } = this.state;
    const res = await props.loginAPI({ email, password });
    if (res) {
      // this.setState({
      //   email: "",
      //   password: "",
      // });
      setEmail("");
      setPassword("");
      console.log("Login Berhasil");
      // console.log(useNavigate()("/"));
      // <Navigasi path="/" />;
      navigate("/");
      // <Navigate to={"/"} replace={true} />;
    } else {
      // } catch (error) {
      console.log("Login Gagal");
      // }
    }
  };

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
          value={email}
          id="email"
          onChange={(el) => setEmail(el.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          id="password"
          onChange={(el) => setPassword(el.target.value)}
        />
        <Button
          onClick={handleLogin}
          title={"Login"}
          loading={props.isLoading}
        />
      </div>
      {/* <button>Go to dashboard</button> */}
    </div>
  );
};

const reduxState = (state) => ({ isLoading: state.isLoading });

const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => loginUserAPI(data)(dispatch),
});
export default connect(reduxState, reduxDispatch)(Login);
