import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import { checkIsUserLoggedIn } from "../lib/helpers";

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  componentDidMount() {
    if (checkIsUserLoggedIn()) {
      this.props.history.push("/");
    } else {
      this.props.history.push("/login");
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      let result = await axios.post("http://localhost:3002/users/login", {
        email: this.state.email,
        password: this.state.password,
      });

      localStorage.setItem("jwtToken", result.data.jwtToken);

      let decodedJWToken = jwtDecode(result.data.jwtToken);

      this.props.handleUserLogin(decodedJWToken);

      this.props.history.push("/");
    } catch (e) {
      console.log(e.message);
      toast.error(e.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="form-body">
        <main className="form-signin">
          <form onSubmit={this.handleLoginSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please Login</h1>
            <label htmlFor="inputEmail" className="visually-hidden">
              Email Address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
              name="email"
              value={email}
              onChange={this.handleOnChange}
            />
            <label htmlFor="inputPassword" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={this.handleOnChange}
            />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Login
            </button>
            <Link className="p-2" to="/sign-up">Need to Sign Up?</Link>

          </form>
        </main>
      </div>
    );
  }
}

export default Login;
