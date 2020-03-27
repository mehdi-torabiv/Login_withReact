import React, { Component } from 'react';
import "./Navbar.css";
import "./LoginPage/LoginPage";
import LoginPage from './LoginPage/LoginPage';
class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLogin: false
        }
    }
    LoginShowHandler = () => {
        this.setState(prevState => ({
            showLogin: !prevState.showLogin
        }));
        console.log('this is [LoginButton] is', this.state.showLogin);
    }
    show = () => {
        console.log("he");

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
                            <a href="#" onClick={this.LoginShowHandler}>Login</a>
                        </li>
                    </ul>
                </nav>
                <LoginPage showLogin={this.state.showLogin}>
                </LoginPage>
            </div>


        );
    }
}
export default Navbar;
