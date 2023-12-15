import React from 'react';
import { Home } from '../pages/home/Home.jsx';
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from '../pages/loginScreen/LoginScreen.jsx'
import SignupScreen from '../pages/singupScreen.jsx/SignupScreen.jsx';
import MapScreen from '../pages/mapScreen/MapScreen.jsx';

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
              path="/login"
              element={<LoginScreen />}
            />
            <Route
              path="/signup"
              element={<SignupScreen />}
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
