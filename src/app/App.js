import React from 'react';
import { Home } from '../components/home/Home.jsx';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
