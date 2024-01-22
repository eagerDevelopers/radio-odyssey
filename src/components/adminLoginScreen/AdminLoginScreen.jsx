import React from "react";
import styles from './AdminLoginScreen.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminLoginScreen = (props) => {
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    });
    const [isIncorrectPass, setIncorrectPassAction] = useState(false);
    const navigate = useNavigate()


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
                if(valueJSON.userAuthenticated){
                    console.log("1 user is authenticated")
                    navigate('/map');
                }
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
            <h1>Admin Log in</h1>
            <form className={styles.loginForm} onSubmit={handleSubmit} >
                <label for="username">Username</label>
                <input 
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                    required
                    >
                </input>

                <label for="password">Password</label>
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
            <div className={styles.formFooter}>
                <Link to="/login">
                    <button className={styles.button}>
                        Back to home page
                    </button>
                </Link>
                <Link to="/admin">
                    <button className={styles.button}>
                        Admin
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default AdminLoginScreen