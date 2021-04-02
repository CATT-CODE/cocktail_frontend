import React, { Component } from "react";
import "./SignUp.css";
import { debounce } from "lodash";
import axios from "axios";
import { toast } from "react-toastify";
import { checkIsUserLoggedIn } from "../lib/helpers"

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  componentDidMount() {
    if (checkIsUserLoggedIn()) {
        this.props.history.push("/home");
    } else {
        this.props.history.push("/sign-up");
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();
    let { firstName, lastName, email, password } = this.state;
    // if (isError) {
    //     toast.error("Please fix password", {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         });
    //     return;
    // }
    try {
      await axios.post("http://localhost:3002/users/sign-up", {
        firstName,
        lastName,
        email,
        password,
      });
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      toast.success("Sweet, lets mix a drink!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (e) {
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
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;

    return (
      <body className="form-body">
        <main class="form-signin">
          <form onSubmit={this.handleOnSubmit}>
            <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={this.handleOnChange}
                pattern="[A-Za-z]*"
                required
                autoFocus
              />
              <label htmlFor="inputFirstName" className="sr-only"/>

              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={this.handleOnChange}
                pattern="[A-Za-z]*"
                required
                autoFocus
              />
              <label htmlFor="inputLastName" className="sr-only"/>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={this.handleOnChange}
                required
                autoFocus
              />
              <label htmlFor="inputEmail" className="sr-only"/>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleOnChange}
                required
              />
              <label htmlFor="inputPassword" className="sr-only"/>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleOnChange}
                required
              />
              <label htmlFor="inputConfirmPassword" className="sr-only"/>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign Up
            </button>
          </form>
        </main>
      </body>
    );
  }
}

export default SignUp;
