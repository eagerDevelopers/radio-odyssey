import React from 'react';
import Home from '../components/home/Home.jsx';
import '../styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from '../components/loginScreen/LoginScreen.jsx';
import PrimjerMape from '../components/map/PrimjerMape.jsx'
import SignupScreen from '../components/signupScreen/SignupScreen.jsx'

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
              element={<LoginScreen />}
            />
            <Route
              path="/signup"
              element={<SignupScreen />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
