import React from 'react';
import "./LoginPage.css";
const LoginPage = (props) => {
    if (!props.showLogin) {
        return null;
    }
    return (
        <div className="loginPage"
            style={{
                transform: props.showLogin ? 'translateX(50%)' : null,
                opacity: props.showLogin ? '1' : '0',
            }}>
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
                    <div className="SubandDel subdiv">
                        <button>Login</button>
                        <button>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
