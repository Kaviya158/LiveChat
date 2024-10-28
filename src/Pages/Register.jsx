import React from "react";
import styled from "styled-components";
import "./Register.css";
import logo from "../assests/logo.svg";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };
  const handleChange = () => {};
  return (
    <div>
      <FormContainer className="FormContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={logo} alt="logo" className="logoDesign"/>
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
            already have an account? <a href='/login'>Login</a>
          </span>
        </form>
      </FormContainer>
    </div>
  );
};

const FormContainer = styled.div`
 
`;


export default Register;
