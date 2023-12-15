import React from "react"
import { useState } from "react"
import styles from './SignupScreen.module.css'
import { Link } from "react-router-dom"
import { useSignup } from "../../hook/useSignup"

const SignupScreen = () => {
    const [authData, setAuthData] = useState({
        username:"",
        password:""
    })
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(authData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAuthData({ ...authData, [name]: value });
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
                    value={authData.username}
                    onChange={handleChange}
                    required>
                </input>

                <label for="password">Password</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={authData.password}
                    onChange={handleChange}
                    required>
                </input>
                <button type="submit" className={styles.submitButton} disabled={isLoading}> Sign up </button>
                { error && <div className="error">{error}</div> }
            </form>
            <div className={styles.formFooter}>
                <div>
                    <span>Already have an account? </span>
                    <Link to="/login">Login to your account</Link>
                </div>
                <div>
                    <span>Don't need an account?</span>
                    <Link to="/map">Continue unregistered</Link>
                </div>
            </div>
        </div>
    )
}

export default SignupScreen