import React from "react";
import styles from './AdminScreen.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const exampleUsers = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Alice Johnson' },
      ];
      setUsers(exampleUsers);
    }, []);

  return (
    <div className={styles.listh}>
      <h2>Users</h2>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

const RadioStationList = () => {
    const [radioStations, setRadioStations] = useState([]);
    useEffect(() => {
      const exampleRadioStations = [
        { id: 101, name: 'Rock FM' },
        { id: 102, name: 'Pop Hits Radio' },
        { id: 103, name: 'Jazz Vibes' },
      ];
      setRadioStations(exampleRadioStations);
    }, []);

  return (
    <div className={styles.listh}>
      <h2>Radio Stations</h2>
      <ol>
        {radioStations.map((station) => (
          <li key={station.id}>{station.name}</li>
        ))}
      </ol>
    </div>
  );
};

const AdminScreen = () => {
  const [selectedTab, setSelectedTab] = useState();
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.adminContainer}>
        <h1>Admin</h1>
        <button className={styles.button} onClick={() => handleTabChange('users')}>Users</button>
        <button className={styles.button} onClick={() => handleTabChange('radioStations')}>Radio Stations</button>
        <div className={styles.logout}>
            <Link to="/adminlogin">
                <button className={styles.buttonlogout}>
                    Log out
                </button>
            </Link>
        </div>
      </div>
      <div className={styles.list}>
        {selectedTab === 'users' && <UserList />}
        {selectedTab === 'radioStations' && <RadioStationList />}
      </div>
    </div>
  );
};

export default AdminScreen;