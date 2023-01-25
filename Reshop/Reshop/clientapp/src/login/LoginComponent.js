import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartSummary } from "../data/CartSummary";

export class LoginComponent extends Component {
    
    render() {

        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white p-2">
                    <div className="navbar-brand">Sklep SPORTSTORE</div>
                    <Link to="/about"><button class="btn btn-sm">About</button></Link>
                </div>
            </div>
            <Link className="btn btn-primary m-1" to="/shop">Kontynuuj zakupy</Link>

            <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input  type="email" placeholder="youremail@gmail.com" id="email" name="email" /><br/>
                <label htmlFor="password">password</label>
                <input   type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
        </div>
        </div>
    }
}