import React from "react";
import styles from './LoginScreen.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const LoginScreen = (props) => {
    const {login} = useLogin();
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    });
    const [isIncorrectPass, setIncorrectPassAction] = useState(false);
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault();

        await login(loginData);        
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    return (
        <div className={styles.loginScreenContainer}>
            <h1>Log in</h1>
            <form className={styles.loginForm} onSubmit={handleSubmit} >
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                    required
                    >
                </input>

                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={loginData.password}
                    onChange={handleChange}
                    required
                    >
                </input>
                <button type="submit" className={styles.button}> Login </button>
            </form>
                <span>Or</span>
            <div className={styles.formFooter}>
                <span>New to Radio Odyssey?</span>
                <br />
                <Link to="/map">
                    <button className={styles.button}>
                        Continue as guest
                    </button>
                </Link>
                <br />
                <span>Don't have an account?</span>
                <br />
                <Link to="/signup">
                    <button className={styles.button}>
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LoginScreen