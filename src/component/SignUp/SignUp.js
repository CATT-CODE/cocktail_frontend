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

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    

    render() {
        const { firstName, lastName, email, password, confirmPassword, } = this.state;

        return (
            
                <body className="form-body">
                <main class="form-signin">
            <form>
                    <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>
                <div>
                    <input type="text" class="form-control" id="firstName" placeholder="First Name" name= "firstName" value={firstName} onChange={this.handleOnChange} pattern="[A-Za-z]*" required autoFocus/>
                    <label htmlFor="inputFirstName" className="sr-only">First Name</label>
                </div>
                <div>
                    <input type="text" class="form-control" id="lastName" placeholder="Last Name" name="lastName" value={lastName} onChange={this.handleOnChange} pattern="[A-Za-z]*" required autoFocus />
                    <label htmlFor="inputLastName" className="sr-only">Last Name</label>
                </div>
                <div>
                    <input type="text" class="form-control" id="email" placeholder="Email Address"  name="email" value={email} onChange={this.handleOnChange} required autoFocus />
                    <label htmlFor="inputEmail" className="sr-only">Email Address</label>
                </div>
                <div>
                    <input type="password" class="form-control" id="password" placeholder="Password" name="password" value={password} onChange={this.handleOnChange} required />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                </div>
                <div>
                    <input type="text" class="form-control" id="confirmPassword" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={this.handleOnChange} required />
                    <label htmlFor="inputConfirmPassword" className="sr-only">Confirm Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            </form>
                </main>
                </body>
        )
    }
}

export default SignUp
