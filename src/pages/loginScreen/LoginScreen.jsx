import React from "react";
import styles from './LoginScreen.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import { useLogin } from "../../hook/useLogin";

const LoginScreen = (props) => {
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    })
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(loginData)
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
                <button type="submit" className={styles.submitButton} disabled={isLoading}> Log in </button>
                {error && <div className="error">{error}</div>}
            </form>
            <div className={styles.formFooter}>
                <div>
                    <span>Don't have an account? </span>
                    <Link to="/signup">Register here</Link>
                </div>
                <div>
                    <span>Don't need an account?</span>
                    <Link to="/map">Continue unregistered</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen