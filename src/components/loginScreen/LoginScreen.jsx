import React from "react";
import styles from './LoginScreen.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";

const LoginScreen = (props) => {
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    });

    const [isIncorrectPass, setIncorrectPassAction] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const response = fetch("//localhost:5001/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: loginData.username,
                password: loginData.password,
            }),
        });

        response
            .then((value) => {
                return value.json();
            })
            .then((valueJSON) => {
                console.log(`Response from server: ${valueJSON.userAuthenticated}`);
                setIncorrectPassAction(!valueJSON.userAuthenticated);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    return (
        <div className={styles.loginScreenContainer}>
            <h1>Log in</h1>
            <form className={styles.loginForm} onSubmit={handleSubmit} >
                <label for="username">Username</label>
                <input 
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                    required>
                </input>

                <label for="password">Password</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={loginData.password}
                    onChange={handleChange}
                    required>
                </input>
                <button type="submit" className={styles.submitButton}> Login </button>
                <span>Or</span>
                <button>
                    <Link to="/map">Continue as guest</Link>
                </button>
            </form>
            <div className={styles.formFooter}>
                <div>
                    <span>Don't have an account? </span>
                    <Link to="/signup">Register here</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen