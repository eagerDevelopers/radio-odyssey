import React from "react";
import styles from './SignupPage.module.css'
import SignupScreen from '../../components/signupScreen/SignupScreen'

const Home = () => {
    return (
        <div className={styles.backgroundImageContainer}>
            <SignupScreen />
        </div>
    );
}

export default Home