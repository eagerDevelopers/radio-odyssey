import React from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1>HOME</h1>
            <Link to="/login">Log in</Link>
            <br />
            <Link to="/signup">Sign up</Link>
            <br />
            <Link to="/map">Continue unregistered</Link>
        </div>
    );
}
