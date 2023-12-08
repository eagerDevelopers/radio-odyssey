import React from "react";
import styles from './Home.module.css'
import { LoginScreen } from "../loginScreen/LoginScreen";

export const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <LoginScreen />
        </div>
    );
}
