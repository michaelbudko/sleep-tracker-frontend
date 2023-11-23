import React, { useState } from "react";
import './Auth.css'

const Auth = () => {
    const [view, setView] = useState("login");

    const loginForm = () => {
        return (
            <form autoComplete="off">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" />

              <label htmlFor="password">Password</label>
              <input id="password" type="text" placeholder="Enter your password" />
            </form>
          );
    };

    const signupForm = () => {
        return (
            <form autoComplete="off">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" placeholder="Enter your username" />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" />

              <label htmlFor="password">Password</label>
              <input id="password" type="text" placeholder="Enter your password" />
            </form>
          );
    };
    return (
        <div className="auth-container-outer">
            <div className="auth-container-inner">
                <nav>
                    <h3
                    onClick={() => setView("login")}
                    style={{ color: view === "login" ? "#fff" : "" }}
                    >
                    Login
                    </h3>
                    <h3
                    onClick={() => setView("signup")}
                    style={{ color: view === "signup" ? "#fff" : "" }}
                    >
                    Signup
                    </h3>
                </nav>
                {view === "signup" ? signupForm() : loginForm()}
            </div>
        </div>
    );
}

export default Auth;