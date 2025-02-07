import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

const Register = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userError, setUserError] = useState("");
  const pass_ptrn = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  const email_ptrn = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setUserError("")
    if (password !== confirmPassword) {
      alert("Password and confirmed password should be same")
    }
    else if (!email_ptrn.test(email)) {
      setEmailError("email should be in correct formate !!");
    }
    else if (!pass_ptrn.test(password)) {
      setPasswordError("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
    }
    else {
      try {
        const response = await axios.post('http://localhost:3001/register', {
          email,
          password,
          fullName,
        });
        if (response.data.success) {
          props.prop(true)
        } else {
          setUserError(response.data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <span className='errorMsg'>{userError}</span>
      <label htmlFor="fullName">
        Full Name
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <span className='errorMsg'>{emailError}</span>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <span className='errorMsg'>{passwordError}</span>
      <label htmlFor="confirmPassword">
        Confirm Password
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Register</button>
      <p>
        Already registered? <Link to="/Login">Login here</Link>
      </p>
    </form>
  );
};

export default Register;