import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../Login";
import Dashboard from "../Dashboard";
import Register from "../Register";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  popup: false,
  isLogin: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_POPUP") {
    return {
      ...state,
      popup: action.value,
    };
  }
  if (action.type === "CHANGE_ISLOGIN") {
    return {
      ...state,
      isLogin: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
