import React from 'react';
import "./LoginPage.css";
const LoginPage = () => {
    return (
        <div className="loginPage">
            <h2 className="headerLogin">Login Page!</h2>
            <div>
                <form>
                    <div className="subdiv">
                        <p>Username:</p>
                        <input className="diffrent"></input>
                    </div>
                    <div className="subdiv">
                        <p>Password:</p>
                        <input className="diffrent"></input>
                    </div>
                    <br></br>
                    <div className="checkbox subdiv">
                        <input type="checkbox"></input>
                        <p>Are you ok with policy?</p>
                    </div>
                    <div className="SubandDel">
                        <button>Login</button>
                        <button>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
