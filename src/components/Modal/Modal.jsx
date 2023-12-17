// import React from 'react'
import { useState } from "react";
// import "./attendence.css";
import { IoMdPersonAdd } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";
import { FaCamera } from "react-icons/fa";

const AddStudentModal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    course: "",
    password: "",
    email: "",
    phoneNumber: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log("Form data submitted:", formData);
    // Reset form data after submission
    setFormData({
      firstName: "",
      lastName: "",
      course: "",
      password: "",
      email: "",
      phoneNumber: "",
      image: null,
    });
  };
  return (
    <div className="container">
      <div
        className="topbar"
        style={{ justifyContent: "space-between", display: "flex" }}
      >
        <span className="icon">
          <PiNotePencilBold />
        </span>
        <h1> Add Attendance</h1>
        <span className="icon">
          <IoMdPersonAdd />
        </span>
      </div>
      <div>
        <div className="circle_pic">
          <span>
            <FaCamera />
          </span>
        </div>
        <div>
          <h2>Attendance Page</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="image">Upload Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="course">Course:</label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
