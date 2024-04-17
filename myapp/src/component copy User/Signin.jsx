import React, { useContext, useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { CreateContext } from "../App";



const Signin = () => {
  const {setName} =useContext(CreateContext);
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    console.log(data);  
    navigate('/dashboard');
    localStorage.setItem('FirstName',data.name);
    if(localStorage.getItem('FirstName'))
    {
      navigate('/dashboard');
    }
   
    setName(data.name);
  };

  return (
    <div>
      <div className="maincontainer">
        <div className="leftcontainer">
          <h1>Welcome</h1>
        </div>
        <div className="right-container">
          <div className="right-card">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="username">
                <input
                  type="text"
                  id="name"
                  placeholder="Username"
                  {...register("name", {
                    required: "*User Name is Required",
                  })}
                />
                <p style={{color:'red', textAlign:'left', fontSize:'12px'}}> {errors?.name?.message}</p>
              </div>
              <div className="userPassword">
                <input
                  type="password"
                  id="pass"
                  placeholder="Password"
                  {...register("password", {
                    required: "*Password is Required",
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g,
                      message: "Please Enter Valid Password",
                    },
                  })}
                />
                <p style={{color:'red', textAlign:'left', fontSize:'12px'}}>{errors?.password?.message}</p>
              </div>

              <button>Sign In</button>
            </form>
            <p className="forgot">Forgot password?</p>
            <p className="account">
              Don't have an account?
              <Link to={"/signup"}>
                <span>Sign Up here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
