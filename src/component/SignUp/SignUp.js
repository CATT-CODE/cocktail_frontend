import React, { Component } from "react";
import "./SignUp.css";
import {debounce} from "lodash";
import axios from 'axios';
import {toast} from "react-toastify";

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    }
    
    // componentDidMount() {

    // }

    handleSignup = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    

    render() {
        return (
            
                <div className="form-body">
                <main class="form-signin">
            <form>
                    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
                <div class="form-floating">
                    <input type="text" class="form-control" id="firstName" placeholder="First Name"/>
                    <label for="floatingInput">First Name</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="lastName" placeholder="Last Name"/>
                    <label for="floatingInput">Last Name</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="email" placeholder="Email Address"/>
                    <label for="floatingInput">Email Address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="password" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="confirmPassword" placeholder="Confirm Password"/>
                    <label for="floatingPassword">Confirm Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            </form>
                </main>
                </div>
        )
    }
}

export default SignUp
