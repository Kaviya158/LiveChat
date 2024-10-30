import React, { useState } from "react";
import styled from "styled-components";
import "./Register.css";
import {useNavigate} from "react-router-dom";
import logo from "../assests/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toaststyle.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoute";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      
      const { username, email, password } = values; // Ensure variable name is correct
      const { data } = await axios.post(registerRoute, {
        username,
        email,
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
    const { username, email, password, confirmpassword } = values; // Ensure variable name is correct

    if (!username && !email && !password && !confirmpassword) {
      toast.error("All fields are required.", {
        toastOptions,
      });
    } else {
      if (username.length < 3) {
        toast.error("Username should be greater than 3", { toastOptions });
      }

      if (password.length < 8) {
        toast.error("Password should be greater than 8", { toastOptions });
      }

      if (password !== confirmpassword) {
        toast.error("Password should match with confirmpassword", {
          toastOptions,
        });
      }
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
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            already have an account? <a href="/login">Login</a>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </div>
  );
};

const FormContainer = styled.div``;

export default Register;
