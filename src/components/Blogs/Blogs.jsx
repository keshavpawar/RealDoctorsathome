import React from 'react'
import  './Blogs.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blogs() {

  const settings = {
  
    infinite: true,
    speed: 8000,
    // dots : true,
    slidesToShow: 5,
    slidesToScroll:1,
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 0, // Adjust the duration between slides (in milliseconds)

  };
  
  return (
  
    <div class="blogs-container">  
     <h1 >Blogs</h1>  
        <div class="bp">
        <Slider {...settings} autoplay={true} autoplaySpeed={settings.autoplaySpeed}>
          
        <div class="blogcard" > 
         <img class ="blogthumbnail" src="" alt="thumbanil" />
         <h3 class="headtext">BLOG</h3>
          <p class="blogdiscription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
           </div> 
         <div class="blogcard"> 
         <img class ="blogthumbnail" src="" alt="thumbanil" />
         <h3 class="headtext"> BLOG</h3>
          <p class="blogdiscription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
          </div>
          <div class="blogcard"> 
         <img class ="blogthumbnail" src="" alt="thumbanil" />
         <h3 class="headtext"> BLOG</h3>
          <p class="blogdiscription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
          </div>
          <div class="blogcard"> 
         <img class ="blogthumbnail" src="" alt="thumbanil" />
         <h3 class="headtext"> BLOG</h3>
          <p class="blogdiscription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
          </div>
          <div class="blogcard"> 
         <img class ="blogthumbnail" src="" alt="thumbanil" />
         <h3 class="headtext"> BLOG</h3>
          <p class="blogdiscription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
          </div>
          <div class="blogcard"> 
         <img class ="blogthumbnail" src="" alt="thumbanil" />
         <h3 class="headtext"> BLOG</h3>
          <p class="blogdiscription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
          </div>
          <div class="blogcard"> 
         <img class ="blogthumbnail" src="" alt="thumbanil" />
         <h3 class="headtext"> BLOG</h3>
          <p class="blogdiscription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
          </div>
          <div class="blogcard"> 
         <img class ="blogthumbnail" src="" alt="thumbanil" />
         <h3 class="headtext"> BLOG</h3>
          <p class="blogdiscription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
          </div>
          <div class="blogcard"> 
         <img class ="blogthumbnail" src="" alt="thumbanil" />
         <h3 class="headtext"> BLOG</h3>
          <p class="blogdiscription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
          </div>
          <div class="blogcard"> 
         <img class ="blogthumbnail" src="" alt="thumbanil" />
         <h3 class="headtext"> BLOG</h3>
          <p class="blogdiscription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
           </div> 
           </Slider>

        </div>
         
    </div>
    
  )
}

export default Blogs