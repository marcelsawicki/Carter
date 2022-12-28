import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartSummary } from "../data/CartSummary";

export class AboutComponent extends Component {
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white p-2">
                    <Link to="/shop"><div className="navbar-brand">Sklep SPORTSTORE</div></Link>
                    <Link to="/about"><button class="btn btn-sm">About</button></Link>
                </div>
            </div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
        </div>
    }
}