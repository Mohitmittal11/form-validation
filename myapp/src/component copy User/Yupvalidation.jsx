import React from "react";
import { useFormik, Form } from "formik";
import * as Yup from "yup";
import "../styles/signup.css";
// const SignUpSchema = Yup.object({
//   name: Yup.string().required("Use name is Required"),
//   email: Yup.string().required("Email is Required"),

//   contact: Yup.string().min(10, "Please Enter Correct Contact Number"),

//   password: Yup.string().required("Password is Required"),

//   confirmpassword: Yup.string().required("Confirm Password is Required"),
// });
const initialValues = {
  name: "",
  email: "",
  contact: "",
  password: "",
  confirmpassword: "",
};

const Yupvalidation = () => {
  const { values, handleChange,handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="signUpMainContaier">
      <div className="main-container">
        <div className="left-container">
          <div className="signin-card">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                placeholder="Username"
                name="name"
                value={values.name}
                onChange={handleChange}
              />

              <input
                type="text"
                id="mail"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="contact"
                placeholder="Contact No."
                value={values.contact}
                onChange={handleChange}
              />

              <div className="showinput">
                <input
                  type="password"
                  id="pass"
                  name="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <button type="button" className="showbutton">Show</button>
              </div>
              <div className="showinput">
                <input
                  className="showinput"
                  type="password"
                  id="confirmpass"
                  name="confirmpass"
                  placeholder="Confirm password"
                  value={values.confirmpassword}
                  onChange={handleChange}
                />
                <button type="button" className="showbutton">Show </button>
              </div>

              <button id="btn">Sign Up</button>
            </form>
            <p>
              Already have an account?<span>Sign in here</span>
            </p>
          </div>
        </div>
        <div className="right-container">
          <h1>Join With Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Yupvalidation;
