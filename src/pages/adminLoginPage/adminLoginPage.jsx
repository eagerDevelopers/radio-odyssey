import React from "react";
import styles from './AdminLoginPage.module.css'
import AdminLoginScreen from "../../components/adminLoginScreen/AdminLoginScreen";

const AdminLoginPage = () => {
    return (
        <div className={styles.backgroundImageContainer}>
            <AdminLoginScreen />
        </div>
    );
}

export default AdminLoginPage