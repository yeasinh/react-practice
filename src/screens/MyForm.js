import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyForm.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    console.log("Performing validation...");
    const myErrors = {};
    const emailRegex = /\S+@\S+\.\S+/; // Regular expression for something@domain.ext

    if (!formData.email) {
      myErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      myErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      myErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      myErrors.password = "Password must be at least 6 characters.";
    }

    return myErrors;
  };

  const handleChange = (e) => {
    console.log("Handling change...");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log("Handling submit...");
    e.preventDefault();
    const myErrors = validateInputs();

    if (Object.keys(myErrors) === 0) {
      console.log("Form submitted.");
    } else {
      setErrors(myErrors);
    }
  };

  const navigate = useNavigate();

  const goToPosts = () => {
    navigate("/posts");
  };

  return (
    <div className="app">
      <div className="form">
        <h1>My Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="password">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button type="submit" onClick={goToPosts}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
