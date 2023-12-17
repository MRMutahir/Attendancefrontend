import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import AddStudentModal from "./components/Modal/Modal";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user data is present in local storage
    const userData = localStorage.getItem("userData");

    if (userData) {
      // Update login status based on the presence of user data
      setIsLoggedIn(true);
    }

    // Set loading to false once the data is checked
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
