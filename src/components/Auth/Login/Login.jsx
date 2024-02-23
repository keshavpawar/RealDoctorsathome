// Login.jsx

import React, { useState } from 'react';
import './Login.css';
import Homepage from '../../../Homepage';

const Login = ({login}) => {

  const [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const[isLogin,setIsLogin]=useState(false)


  const handleChange=(e)=> {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit=(e)=> {
      e.preventDefault()
      console.log(formData)
      const {email,password}=JSON.parse(localStorage.getItem('data'))
      // console.log(email,password)
      if(email==formData.email&&password==formData.password){
        setIsLogin(true)
        console.log('login')
      }

  }


  return (
    <>
      {isLogin?<Homepage login={isLogin}/>:<div className="login-container">
      <div className="login-form">
        <div className="div-login-container">
        <h2>Login</h2>
        <div className='input-container'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input value={formData.email} type="email" id="email" name="email" placeholder="Email ID" onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input value={formData.password}type="password" id="password" name="password" placeholder="Password" onChange={handleChange} />
          </div>
          <button  type="submit">Login</button>
        </form>
        </div>
        </div>
      </div>
    </div> }
    </>
    
  );
}

export default Login;


 