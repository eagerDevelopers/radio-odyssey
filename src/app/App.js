import React from 'react';
import { Home } from '../pages/home/Home.jsx';
import '../styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from '../hook/useAuthContext.js';
import LoginScreen from '../pages/loginScreen/LoginScreen.jsx'
import SignupScreen from '../pages/singupScreen.jsx/SignupScreen.jsx';
import MapScreen from '../pages/mapScreen/MapScreen.jsx';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={!user ? <LoginScreen /> : <Navigate to="/map" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignupScreen /> : <Navigate to="/map" />}
            />
            <Route
              path="/map"
              element={<MapScreen />}>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
