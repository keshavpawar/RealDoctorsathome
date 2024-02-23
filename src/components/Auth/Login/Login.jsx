// Login.jsx

import React from 'react';
import './Login.css';

const Login = () => {
  return (

    <div className="login-container">
      <div className="login-form">
        <div className="div-login-container">
        <h2>Login</h2>
        <div className='input-container'>
        <form >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email ID" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
