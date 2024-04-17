import React, {useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import { CreateContext } from "../App";
import { Navigate } from "react-router-dom";



const Dashboard = () => {
  const navigate =useNavigate();
  const { name } = useContext(CreateContext);
  
  useEffect(()=> {
    if(!localStorage.getItem('FirstName'))
    {
      navigate('/signin');
    }
  })
 
  return (
    <div>
      <h2>Name From Sign In Page is: {name}</h2>
    </div>
  );
};

export default Dashboard;
