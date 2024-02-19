import React from 'react'
import  './Blogs.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blogs() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
    
  };

  return (
  
    <div class="blogs-container">  
     <h1 class>Blogs</h1>  
        <div class="bp">
        <Slider {...settings}>
          
        <div class="blogcard"> 
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