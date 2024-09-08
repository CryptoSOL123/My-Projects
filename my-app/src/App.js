import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<h2>Welcome to the Home Page</h2>} />
      </Routes>
    </div>
  );
}

export default App;
