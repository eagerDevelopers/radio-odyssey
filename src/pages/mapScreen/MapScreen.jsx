import React from 'react'
import styles from './MapScreen.module.css'
import { useLogout } from '../../hook/useLogout'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hook/useAuthContext'

const MapScreen = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }

    return(
        <div>
            <nav>
                <div>
                    {user && (
                        <div>
                            <button onClick={handleClick}>Log out</button>
                            <span>{user.authData.username}</span>
                        </div>
                    )}
                </div>
                {!user && (
                    <div>
                        <Link to="/login">Log in</Link>
                        <br />
                        <Link to="/signup">Sign up</Link>
                    </div>
                )}
                {/* Tu stavit komponentu karte */}
            </nav>
        </div>
    )
}

export default MapScreen