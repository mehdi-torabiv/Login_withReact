import React, { Component } from 'react';
import "./Navbar.css";
import "./LoginPage/LoginPage";
import LoginPage from './LoginPage/LoginPage';
class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li className="">
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </nav>
                <LoginPage />
            </div>
        );
    }
}
export default Navbar;
