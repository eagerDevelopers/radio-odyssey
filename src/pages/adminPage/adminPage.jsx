import React from "react";
import styles from './AdminPage.module.css'
import AdminScreen from "../../components/adminScreen/AdminScreen";

const AdminPage = () => {
    return (
        <div className={styles.backgroundImageContainer}>
            <AdminScreen />
        </div>
    );
}

export default AdminPage