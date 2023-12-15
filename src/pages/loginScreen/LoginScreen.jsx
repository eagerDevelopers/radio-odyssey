import React from "react";
import styles from './LoginScreen.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";

const LoginScreen = (props) => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(userName, password)
    }

    return (
        <div className={styles.loginScreenContainer}>
            <h1>Log in</h1>
            <form className={styles.loginForm} onSubmit={handleSubmit} >
                <label for="username">Username</label>
                <input 
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required>
                </input>

                <label for="password">Password</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required>
                </input>
                <button type="submit" className="submitBtn"> Log in </button>
            </form>
            <div className={styles.formFooter}>
                <div>
                    <span>Don't have an account? </span>
                    <Link to="/signup">Create an account</Link>
                </div>
                <div>
                    <span>Don't need an account?</span>
                    <Link to="/">Continue unregistered</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen