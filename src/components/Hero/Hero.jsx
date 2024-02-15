import React from 'react'
import './Hero.css'
import heroimg from '../../assets/hero3.png'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="left">
            <h1 style={{fontSize:"5rem", lineHeight:'6rem'}}>DOCTORS AT <br /><span style={{color:"#0c9b41"}}>HOME</span></h1>
            <h2>Plans starting from rs6/day</h2>
            <button className='button' style={{fontSize:"1.1rem", borderRadius:'12px', width:"40%", paddingBlock:'0rem'}}>Subscribe Now</button>
            <div style={{lineHeight:'2rem', marginTop:'1rem'}} className="feats">
                <h2>600+<span> Subscribers</span></h2>
            </div>
        </div>
        <div className="right">
            <img  src={heroimg} alt="hero-img" />
        </div>
    </div>
  )
}
