import React from 'react';
import Home from '../components/home/Home.jsx';
import '../styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from '../components/loginScreen/LoginScreen.jsx';
import PrimjerMape from '../components/map/PrimjerMape.jsx'
import SignupScreen from '../components/signupScreen/SignupScreen.jsx'
import LoginPage from '../pages/loginPage/LoginPage.jsx';
import SignupPage from '../pages/signupPage/SignupPage.jsx'

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
              element={<PrimjerMape />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/signup"
              element={<SignupPage />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
