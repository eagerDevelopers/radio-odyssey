import React from 'react';
import Home from '../components/home/Home.jsx';
import '../styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrimjerMape from '../components/map/PrimjerMape.jsx'
import LoginPage from '../pages/loginPage/LoginPage.jsx';
import SignupPage from '../pages/signupPage/SignupPage.jsx'
import MapPage from '../pages/MapPage/MapPage.jsx';
import { useAuthContext } from '../hooks/useAuthContext.js';
import { useState, useEffect } from 'react';

function App() {
  const {userToken} = useAuthContext()
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem('userToken');
    setLoggedIn(Boolean(loggedUser));
    }, [userToken]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route
              path="/map"
              element={<MapPage />}
            />
            <Route
              path="/"
              element={!loggedIn ? <LoginPage /> : <Navigate to="/map" />}
            />
            <Route
              path="/signup"
              element={!loggedIn ? <SignupPage /> : <Navigate to="/map" />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
