import React from "react";
import styles from './navBar.module.css';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState, useEffect } from "react";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router";

const NavBar = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const {userToken} = useAuthContext()
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem('userToken');
    setLoggedIn(Boolean(loggedUser));
    }, [userToken]);

  return (
    <>
      {loggedIn ?
        <div className={styles.container}>
          <h2>Hello {userToken && userToken.username}</h2>
          <button className={styles.authButton} onClick={() => logout()}>Logout</button>
        </div>
        :
        <div className={styles.containerAlt}>
          <button className={styles.authButton} onClick={() => navigate("/")}>Login</button>
          <button className={styles.authButton} onClick={() => navigate("/signup")}>Signup</button>
        </div>
      }
    </>
  );
};

export default NavBar;
