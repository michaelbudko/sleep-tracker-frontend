import React, { useState } from "react";
import './Auth.css'

const Auth = () => {
    const [view, setView] = useState("login");
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
                {view === "signup" ? <div></div> : <div></div>}
            </div>
        </div>
    );
}

export default Auth;