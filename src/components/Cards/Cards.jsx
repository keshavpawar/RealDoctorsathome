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
                <h3>Doctor At Home</h3>
                <p>Convenient and perosnalized doctors home visit </p>
            </div>
            <div className="card">
            <img className="icon" src={icon1} alt="icon" />
                <h3>Nurse At Home</h3>
                <p>Nursing care for you health and well-being at your home</p>
            </div>
            <div className="card">
            <img className="icon" src={icon1} alt="icon" />
                <h3>Order Medicine</h3>
                <p>Get medicine delivered at your home</p>
            </div>
            <div className="card"><img className="icon" src={icon1} alt="icon" />
                <h3>Lab Test</h3>
                <p>Lab test made easy with Home sample collection </p></div>
            <div className="card"><img className="icon" src={icon1} alt="icon" />
                <h3>Online Consultation</h3>
                <p>Connect with doctors online for virtual Consultations</p></div>
            <div className="card"><img className="icon" src={icon1} alt="icon" />
                <h3>Radiology</h3>
                <p>Get discount on Radiology test like M.R.I , C.T Scan etc. </p></div>
            <div className="card"><img className="icon" src={icon1} alt="icon" />
                <h3>Book Ambulence</h3>
                <p>Book an Ambulence in case of emergency</p></div>
            <div className="card"><img className="icon" src={icon1} alt="icon" />
                <h3>Other Services</h3>
                <p>Explore our other healthcare Services for all your needs</p></div>
        </div>
    </div>
  )
}

export default Cards