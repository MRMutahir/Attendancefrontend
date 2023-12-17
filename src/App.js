import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import AddStudentModal from "./components/Modal/Modal";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  return (
    <Router>
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/AddStudentModal" element={<AddStudentModal />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
