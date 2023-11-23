import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import './Auth.css'
import { Button } from "react-bootstrap";

const Auth = () => {
    const [view, setView] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginForm = () => {
        return (
            <form autoComplete="off">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" onChange={(e) => {setEmail(e.target.value)}}/>

              <label htmlFor="password">Password</label>
              <input id="password" type="text" placeholder="Enter your password" onChange={(e) => {setPassword(e.target.value)}}/>
            </form>
          );
    };

    const signupForm = () => {
        return (
            <form autoComplete="off">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" onChange={(e) => {setEmail(e.target.value)}}/>

              <label htmlFor="password">Password</label>
              <input id="password" type="text" placeholder="Enter your password" onChange={(e) => {setPassword(e.target.value)}}/>
            </form>
          );
    };

    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const login = async () => {

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
                <Button onClick={signup}>Submit</Button>
            </div>
        </div>
    );
}

export default Auth;