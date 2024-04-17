import React, { useState, Fragment, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../styles/signup.css";


import { CreateContext } from "../App";

const Signup = () => {
  const { setName } = useContext(CreateContext);
  const [userInfo, setUserInfo] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onSubmit = (data) => {
  
    setUserInfo(data);
  };

  return (
    <Fragment>
      <div className="signUpMainContaier">
        <div className="main-container">
          <div className="left-container">
            <Link to={"/dashboard"}>
              {" "}
              <h3> Dashboard</h3>
            </Link>

            <div className="signin-card">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  id="name"
                  placeholder="Username"
                  name="name"
                  {...register("name", { required: "Name is Required" })}
                  onChange={(e)=> setName(e.target.value)}
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
                <Link to={"/signin"}>
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
    </Fragment>
  );
};

export default Signup;
