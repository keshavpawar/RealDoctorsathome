import React, { useState } from 'react';
import './Signup.css';
import Cards from '../../Cards/Cards';
import Plans from '../../Plans/Plans';
import Testimonials from '../../Testimonials/Testimonials';
import Blogs from '../../Blogs/Blogs';
import Infotab from '../../Infotab/Infotab';
import Footer from '../../Footer/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    dob: '',
    password: '',
    confirmPassword: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    localStorage.setItem("data",JSON.stringify(formData))
    console.log(typeof(formData))
  };

  return (
    <>
    <div className='signup-container'>
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="number" name="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} />
        <input type="number" name="pincode" placeholder="Pin code" value={formData.pincode} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>  
    </div> 

      <div>
        <Cards/>
      </div>
      <div>
      <Plans/>
    </div>
    <div>
    <Testimonials/>
    </div>
    <div>
      <Blogs/>
    </div>
    <div>
      <Infotab/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Signup;
