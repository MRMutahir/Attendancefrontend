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

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate an API call to check login status
    const fetchData = async () => {
      try {
        const response = await fetch("your-api-endpoint"); // Replace with your API endpoint
        const data = await response.json();

        // Update login status based on API response
        setIsLoggedIn(data.isLoggedIn);

        // Set loading to false once the data is fetched
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <Router>
      <div className="container">
        {loading ? (
          // Display a loading spinner or message while fetching data
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
