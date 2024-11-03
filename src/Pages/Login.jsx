import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Register.css";
import {useNavigate} from "react-router-dom";
import logo from "../assests/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toaststyle.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoute";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('chat-app-user'))
    {
      navigate("/");
    }
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      
      const { username, password } = values; // Ensure variable name is correct
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      
      if(data.status===false)
      {
        toast.error(data.msg, toastOptions);
      }
      
      if(data.status===true)
      {
        localStorage.setItem('chat-app-user',JSON.stringify(data.user));
        navigate("/");
      }
      
    }

  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
  };
  const handleValidation = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };


  return (
    <div>
      <FormContainer className="FormContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={logo} alt="logo" className="logoDesign" />
            <h1 className="chatName">Negesydd</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Login In</button>
          <span>
            Don't have an account? <a href="/register">Register here</a>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </div>
  );
};

const FormContainer = styled.div``;

export default Login;
