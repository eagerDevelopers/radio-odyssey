import React from "react";
import styles from './SignupScreen.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";

const LoginScreen = (props) => {
    const [signupData, setLoginData] = useState({
        username:"",
        password:""
    });

    function handleSubmit(e) {
        e.preventDefault();

        const response = fetch("//localhost:5001/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: signupData.username,
                password: signupData.password,
            }),
        });

        response
            .then((value) => {
                return value.json();
            })
            .then((valueJSON) => {
                console.log(`Response from server: ${valueJSON.userAuthenticated}`);
                //provjerit jeli signup dobar?
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...signupData, [name]: value });
    }

    return (
        <div className={styles.signupScreenContainer}>
            <h1>Sign up</h1>
            <form className={styles.signupForm} onSubmit={handleSubmit} >
                <label for="username">Username</label>
                <input 
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={signupData.username}
                    onChange={handleChange}
                    required>
                </input>

                <label for="password">Password</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={signupData.password}
                    onChange={handleChange}
                    required>
                </input>
                <button type="submit" className={styles.submitButton}> Login </button>
                <span>Or</span>
            </form>
            <div className={styles.formFooter}>
                <span>New to Radio Odyssey?</span>
                <br />
                <button>
                    <Link to="/map">Continue as a guest</Link>
                </button>
                <br />
                <span>Already have an account?</span>
                <br />
                <button>
                    <Link to="/login">Login</Link>
                </button>
            </div>
        </div>
    );
}

export default LoginScreen