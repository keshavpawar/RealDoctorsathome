import React from 'react'
import './Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";
import wp from '../../assets/wp.png'
import logo  from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1><a href=""><img src={logo}   style={{height:'px', width:"140px"}} alt=""  /></a></h1>
        <ul>
            <li><a href="">Our Plans</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Faq's</a></li>
        </ul>
        
            <img className='wp' style={{height:'44px', width:"44px"}} src={wp} alt="" />
        
    </div>
  )
}

export default Navbar