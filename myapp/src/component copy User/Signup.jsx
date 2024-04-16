import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../styles/signup.css";

const Signup = () => {
  const [showpassword, setshowPassword] = useState(false);
  const [showconfirmpassword, setshowconfirmPassword] = useState(false);
  const [errormessage, seterrorMessage] = useState(false);
  const [phoneinput, setphoneInput] = useState({
    Country_Code:"",
    Contact_Number:"",
  });
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newobject= {...data, ...phoneinput};
    delete newobject.contact;
    console.log(newobject);
  };

  const showPass = (event) => {
    event.preventDefault();
    if (!showpassword) {
      setshowPassword(true);
    } else {
      setshowPassword(false);
    }
  };
  const showconfirmfunction = (event) => {
    event.preventDefault();
    if (!showconfirmpassword) {
      setshowconfirmPassword(true);
    } else {
      setshowconfirmPassword(false);
    }
  };
  let codelen, phoneNumberlength;
  const onhandleChange = (phone, countryCode) => {
    // console.log(phone, countryCode);
    // console.log(countryCode.dialCode);
     codelen=(countryCode.dialCode).length;
       phoneNumberlength=phone.length;
     let phoneNumber= phone.substr(codelen,phoneNumberlength)
     phoneinput.Contact_Number=phoneNumber;
     phoneinput.Country_Code=countryCode.dialCode;
};

  return (
    <div className="signUpMainContaier">
      <div className="main-container">
        <div className="left-container">
          <div className="signin-card">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputname">
                <input
                  type="text"
                  id="name"
                  placeholder="Username"
                  {...register("name", {
                    required: "User name is Required",
                    onChange: (e) => {
                      setValue("name", e.target.value.trimStart());
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
                  {errors?.name?.message}
                </p>
              </div>

              <div className="inputemail">
                <input
                  {...register("email", {
                    required: "Email is Required",
                    onChange: (e) => {
                      setValue("email", e.target.value.trimStart());
                    },
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
                      message: "Please Enter Valid Email",
                    },
                  })}
                  type="text"
                  placeholder="Email"
                  name="email"
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
              </div>
              <div className="contact">
                <Controller
                  name="contact"
                  control={control}
                  rules={{
                    required: "Contact Number is Required",
                    pattern: {
                      value: /^\d{12}$/,
                      message: "Please Enter Valid Contact Number",
                    },
               
                  }}
                  render={({ field: { onChange } }) => (
                    <PhoneInput
                      country={"in"}
                      placeholder="Enter Contact Number"
                      onChange={(phone, countryCode)=>{onChange(phone);onhandleChange(phone, countryCode)}}
                      id="phoneinput"
                    />
                  )}
                />
                <p
                  style={{
                    color: "red",
                    textAlign: "left",
                    marginTop: "0px",
                    fontSize: "10px",
                  }}
                >
                  {errors?.contact?.message}
                </p>
              </div>
              <div className="showinput">
                <input
                  type={showpassword ? "text" : "password"}
                  id="pass"
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    required: "Password is Required",
                    onChange: (e) => {
                      setValue("password", e.target.value.trimStart());
                    },

                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g,
                      message: "Please enter Valid Password",
                    },
                  })}
                />
                <button onClick={showPass} className="showbutton">
                  {!showpassword ? "Show" : "Hide"}
                </button>

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
              </div>

              <div className="showinput">
                <input
                  type={showconfirmpassword ? "text" : "password"}
                  id="confirmpass"
                  name="confirmpass"
                  placeholder="Confirm password"
                  {...register("confirmpassword", {
                    required: "Confirm Password in required",
                    onChange: (e) => {
                      setValue("confirmpassword", e.target.value.trimStart());
                    },
                    validate: (value) => {
                      if (value !== watch("password")) {
                        return "Password must be same";
                      }
                    },
                  })}
                />
                <button onClick={showconfirmfunction} className="showbutton">
                  {!showconfirmpassword ? "Show" : "Hide"}
                </button>

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
              </div>
              <button id="btn">Sign Up</button>
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
