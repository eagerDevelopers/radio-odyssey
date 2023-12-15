import React from "react"
import { useState } from "react"
import styles from './SignupScreen.module.css'
import { Link } from "react-router-dom"
import { useSignup } from "../../hook/useSignup"

const SignupScreen = () => {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(userName, password)
    }

    return (
        <div className={styles.signupScreenContainer}>
            <h1>Sign up</h1>
            <form className={styles.signupForm} onSubmit={handleSubmit} >
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
                <button type="submit" className="submitBtn" disabled={isLoading}> Sign up </button>
                { error && <div className="error">{error}</div> }
            </form>
            <div className={styles.formFooter}>
                <div>
                    <span>Already have an account? </span>
                    <Link to="/login">Login to your account</Link>
                </div>
                <div>
                    <span>Don't need an account?</span>
                    <Link to="/">Continue unregistered</Link>
                </div>
            </div>
        </div>
    )
}

export default SignupScreen