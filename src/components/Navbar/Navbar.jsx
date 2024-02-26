import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom" ;
import wp from "../../assets/wp.png";
import logo from "../../assets/logo.png";
import { Link, animateScroll } from "react-scroll";


const Navbar = ({ login }) => {
  console.log(login);
  return (
    <div className="navbar">
      <h1>
        <a href="">
          <img src={logo} style={{ height: "px", width: "140px" }} alt="" />
        </a>
      </h1>
      <ul>
        <li>
          <Link to="Plans" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
            >Plans</Link>
          </li>
        <li>
        <Link to="Testimonials" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
            >Testimonials</Link>
        </li>
        <li>
        <Link to="Faq" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
            >Faq</Link>
        </li>
        <li>
          <a href="https://doctorsathome4.wordpress.com/">Blog</a>
        </li>
      </ul>

      {login ? (
        <div class="profile">
          <a href="/Profile"></a>
        </div>
      ) : (
        <div class="signup">
          <NavLink to='/Signup' >SignUp</NavLink>
          <NavLink to='/Login'>Login</NavLink>
        </div>
      )}

      <img
        className="wp"
        style={{ height: "50px", width: "50px" }}
        src={wp}
        alt=""
      />
    </div>
  );
};

export default Navbar;

{
  /* <div class='signup'>
        <Link to='/Signup'> sign up </Link> 
      <Link to='/Login'>log in </Link>
      </div> */
}

//   <div class='profile'>
//   <Link to='/profile'> profile </Link>

// </div>
