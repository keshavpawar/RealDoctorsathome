import React from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'
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

        <div class='signup'>
        <Link to='/Signup'> sign up </Link> 
      <Link to='/Login'>log in </Link>
      </div>
      

            <img className='wp' style={{height:'50px', width:"50px"}} src={wp} alt="" />
        
    </div>
  )
}

export default Navbar