import React from 'react'
import './infotab.css'
import icon1 from '../../assets/icon1.png'



function Infotab() {
  return (
    <div class ='infotabcontainer'>
        <div><img class='iconinfo' src={icon1} alt="icon" /><h5>Buy A Plan</h5>
        <h6>1800-00-0000</h6>
        </div>
        <div><img class='iconinfo' src={icon1} alt="icon" /><h5>Email Us</h5>
        <h6>Doctorsathome@gmail.com</h6>
        </div>
        <div><img class='iconinfo' src={icon1} alt="icon" /><h5>Emergency</h5>
        <h6>8282-8282-82</h6>
        </div>

    </div>
  )
}

export default Infotab