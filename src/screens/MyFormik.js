import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./MyFormik.css";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .notOneOf(["admin", "god"], "Username is invalid"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirmation is required"),
});

const MyFormik = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, validateForm }
  ) => {
    const errors = await validateForm(values);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted.", values);

      setTimeout(() => {
        console.log("Form processing complete.");
        resetForm();
        navigate("/posts");
      }, 1000);
    }

    setSubmitting(false);
  };

  return (
    <div className="myformik-app">
      <div className="form">
        <h1>My Formik</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="field" id="username">
              <label htmlFor="username">Username: </label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="p" />
            </div>
            <div className="field" id="email">
              <label htmlFor="email">Email: </label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="p" />
            </div>
            <div className="field" id="password">
              <label htmlFor="password">Password: </label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="p" />
            </div>
            <div className="field" id="password">
              <label htmlFor="cpassword">Confirm Password: </label>
              <Field type="password" name="cpassword" />
              <ErrorMessage name="cpassword" component="p" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default MyFormik;
