import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyForm.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    console.log("Performing validation...");
    const myErrors = {};
    const emailRegex = /\S+@\S+\.\S+/; // Regular expression for something@domain.ext

    if (!formData.username) {
      myErrors.username = "Username is required.";
    } else if (["admin", "god"].includes(formData.username)) {
      myErrors.username = "Username is invalid";
    }

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

    if (!formData.cpassword) {
      myErrors.cpassword = "Confirmation is required.";
    } else if (formData.cpassword === formData.password) {
      myErrors.cpassword = "Password must match.";
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
    <div className="myform-app">
      <div className="form">
        <h1>My Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="field" id="username">
            <label htmlFor="username">Username: </label>
            <input
              type="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="field" id="email">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="field" id="password">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="field" id="cpassword">
            <label htmlFor="cpassword">Confirm Password: </label>
            <input
              type="password"
              name="cpassword"
              value={formData.cpassword}
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
