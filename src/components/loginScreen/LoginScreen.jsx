import React from "react";
import styles from './LoginScreen.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

export const LoginScreen = (props) => {
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    });

    function handleSubmit(e) {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    return (
        <div className={styles.loginScreenContainer}>
            <h1>Login</h1>
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
            </form>
            <div className={styles.formFooter}>
                <div>
                    <span>Don't have an account?</span> <a href="">Register here</a>
                </div>
            </div>
        </div>
    );
}