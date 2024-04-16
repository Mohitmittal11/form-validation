import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import "../styles/signup.css";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
  };

  return (
    <div className="signUpMainContaier">
      <div className="main-container">
        <div className="left-container">
          <div className="signin-card">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                id="name"
                placeholder="Username"
                name="name"
                {...register("name", { required: "Name is Required" })}
              />

              <p
                style={{
                  color: "red",
                  textAlign: "left",
                  marginTop: "0px",
                  fontSize: "10px",
                }}
              >
                {errors?.name?.message}
              </p>

              <input
                type="text"
                id="mail"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
                    message: "Please Enter Valid Email",
                  },
                })}
              />
              <p
                style={{
                  color: "red",
                  textAlign: "left",
                  marginTop: "0px",
                  fontSize: "10px",
                }}
              >
                {errors?.email?.message}
              </p>

              <></>
              <input
                type="password"
                id="pass"
                name="password"
                placeholder="password"
                {...register("password", {
                  required: "Password is Required",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g,
                    message: "Please enter correct Password",
                  },
                })}
              />

              <p
                style={{
                  color: "red",
                  textAlign: "left",
                  marginTop: "0px",
                  fontSize: "10px",
                }}
              >
                {errors?.password?.message}
              </p>

              <input
                className="showinput"
                type="password"
                id="confirmpass"
                name="confirmpass"
                placeholder="Confirm password"
                {...register("confirmpassword", {
                  required: "Confirm Password in required",
                })}
              />
              <p
                style={{
                  color: "red",
                  textAlign: "left",
                  marginTop: "0px",
                  fontSize: "10px",
                }}
              >
                {errors?.confirmpassword?.message}
              </p>

              <input type="submit" value={"Sign Up"} id="btn" />
            </form>
            <p>
              Already have an account?
              <Link to={-1}>
                <span>Sign in here</span>
              </Link>
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

export default Signup;
