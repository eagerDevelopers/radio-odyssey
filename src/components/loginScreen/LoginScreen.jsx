import React from "react";
import styles from './LoginScreen.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

export const LoginScreen = (props) => {
    const [userName, setUsername] = useState("");
    const [passWord, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className={styles.loginScreenContainer}>
            <h1>Login</h1>
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
                <button type="submit" className="submitBtn"> Login </button>
            </form>
            <div className={styles.formFooter}>
                <div>
                    <span>Don't have an account?</span> <a href="">Create an account</a>
                </div>
            </div>
        </div>
    );
}