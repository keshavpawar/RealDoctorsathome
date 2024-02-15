import React from 'react'
import './Plans.css'
const Plans = () => {
  return (
    <div className="container-plans" id='Plans'>
      
      <h1>Our Plans</h1>
      <h2>Plans which help you save money everyday</h2>
      
      <div className="cc">
      <div className="cards-container">
        <div className="card-plans">
          <span className='recommended' style={{color:"white"}}>RECOMMENDED</span>
          <span className='discount' style={{color:"white"}}>20%OFF</span>
          <h1>FOREVER</h1>
          <p style={{color:'white'}}>Lorem ipsum, dolor sit amet consectetur.</p>
          <h1>&#8377;950<span style={{fontSize:'1.3rem'}}>/month</span></h1>
          <hr style={{marginTop:"2rem",marginTop: '2rem',height: '1px',width: '100%', backgroundColor: 'white'}} />
          <div className="list-container">
            <div className="benefits">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div className="btn-container">
            <button className='btn button'>Learn More</button>
            <button className='btn button'>Buy Now</button>
          </div>
        </div>
        
      </div>
      <div className="cards-container">
        <div className="card-plans">
          {/* <span className='recommended' style={{color:"white"}}>RECOMMENDED</span> */}
          <span className='discount' style={{color:"white"}}>20%OFF</span>
          <h1>FOREVER</h1>
          <p style={{color:'white'}}>Lorem ipsum, dolor sit amet consectetur.</p>
          <h1>&#8377;950<span style={{fontSize:'1.3rem'}}>/month</span></h1>
          <hr style={{marginTop:"2rem",marginTop: '2rem',height: '1px',width: '100%', backgroundColor: 'white'}} />
          <div className="list-container">
            <div className="benefits">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div className="btn-container">
            <button className='btn button'>Learn More</button>
            <button className='btn button'>Buy Now</button>
          </div>
        </div>
        
      </div>
      <div className="cards-container">
        <div className="card-plans">
          {/* <span className='recommended' style={{color:"white"}}>RECOMMENDED</span> */}
          <span className='discount' style={{color:"white"}}>20%OFF</span>
          <h1>FOREVER</h1>
          <p style={{color:'white'}}>Lorem ipsum, dolor sit amet consectetur.</p>
          <h1>&#8377;950<span>/month</span></h1>
          <hr style={{marginTop:"2rem",marginTop: '2rem',height: '1px',width: '100%', backgroundColor: 'white'}} />
          <div className="list-container">
            <div className="benefits">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div className="btn-container">
            <button className='btn button'>Learn More</button>
            <button className='btn button'>Buy Now</button>
          </div>
        </div>
      </div>
      
        
      </div>
    </div>
  )
}

export default Plans