import React from 'react'
import './Cards.css'
import icon1 from '../../assets/icon1.png'

const Cards = () => {
  return (
    <div className="card-container">
        <h1>Services</h1>
        <div className="cards">
            <div className="card">
                <img className="icon" src={icon1} alt="icon" />
                <h3>Doctor Fees</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in fugit excepturi.</p>
            </div>
            <div className="card">
            <img className="icon" src={icon1} alt="icon" />
                <h3>Doctor Fees</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in fugit excepturi.</p>
            </div>
            <div className="card">
            <img className="icon" src={icon1} alt="icon" />
                <h3>Doctor Fees</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in fugit excepturi.</p>
            </div>
            <div className="card"><img className="icon" src={icon1} alt="icon" />
                <h3>Doctor Fees</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in fugit excepturi.</p></div>
            <div className="card"><img className="icon" src={icon1} alt="icon" />
                <h3>Doctor Fees</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in fugit excepturi.</p></div>
            <div className="card"><img className="icon" src={icon1} alt="icon" />
                <h3>Doctor Fees</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in fugit excepturi.</p></div>
            <div className="card"><img className="icon" src={icon1} alt="icon" />
                <h3>Doctor Fees</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in fugit excepturi.</p></div>
            <div className="card"><img className="icon" src={icon1} alt="icon" />
                <h3>Doctor Fees</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in fugit excepturi.</p></div>
        </div>
    </div>
  )
}

export default Cards