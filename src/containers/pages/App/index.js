import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Dashboard from "../Dashboard";
import Register from "../Register";
import { store } from "../../../config/redux";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* <nav>
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
          </nav> */}
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
