import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height:auto;
  color: #333;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f5f9;
  border: 1px solid #ccc;
  padding: 20px;
  gap: 10px;
  width: 300px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 10px;
    width: 100%;
    background-color: transparent;
    outline: none;
    color: #333;
  }
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  background-color: #1a73e8;
  color: #fff;
`;
function Modal() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    course: "",
    password: "",
    email: "",
    phoneNumber: "",
  });
  console.log(formData,"formData>>>>>>>>>>>>>>>>>>>");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/addmin/add/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Student added successfully");
        setFormData({
          firstName: "",
          lastName: "",
          course: "",
          password: "",
          email: "",
          phoneNumber: "",
        });
      } else {
        console.error("Failed to add student");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  return (
    <Container>
      <FormWrapper>
        <Title>Simple Form</Title>
        <form onSubmit={handleSubmit}>
          <InputDiv>
            <label>First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </InputDiv>
          <InputDiv>
            <label>Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </InputDiv>
          <InputDiv>
            <label>Course:</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
            />
          </InputDiv>
          <InputDiv>
            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </InputDiv>
          <InputDiv>
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </InputDiv>
          <InputDiv>
            <label>Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </InputDiv>
          <Button type="submit">Submit</Button>
        </form>
      </FormWrapper>
    </Container>
  );
}

export default Modal;
