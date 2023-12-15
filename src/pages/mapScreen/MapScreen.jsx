import React from 'react'
import styles from './MapScreen.module.css'
import { useLogout } from '../../hook/useLogout'
import { Link } from 'react-router-dom'

const MapScreen = () => {
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }

    return(
        <div>
            <nav>
                <div>
                    <button onClick={handleClick}>Log out</button>
                </div>
                <div>
                    <Link to="/login">Log in</Link>
                        <br />
                    <Link to="/signup">Sign up</Link>
                </div>
            </nav>
        </div>
    )
}

export default MapScreen