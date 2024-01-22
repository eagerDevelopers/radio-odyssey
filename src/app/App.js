import React from 'react';
import Home from '../components/home/Home.jsx';
import '../styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrimjerMape from '../components/map/PrimjerMape.jsx'
import LoginPage from '../pages/loginPage/LoginPage.jsx';
import SignupPage from '../pages/signupPage/SignupPage.jsx'
import MapPage from '../pages/MapPage/MapPage.jsx';
import AdminLoginPage from '../pages/adminLoginPage/adminLoginPage.jsx';
import AdminPage from '../pages/adminPage/adminPage.jsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/map"
              element={<MapPage />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/signup"
              element={<SignupPage />}
            />
            <Route
              path="/adminlogin"
              element={<AdminLoginPage />}
            />
            <Route
              path="/admin"
              element={<AdminPage />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
