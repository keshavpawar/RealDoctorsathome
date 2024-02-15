import React from "react";
import "./Footer.css";
import pin from "../../assets/pin.svg";
import fb from "../../assets/fbb.svg";
import insta from "../../assets/insta.svg";
import wp from "../../assets/wppb.svg";
const Footer = () => {
  return (
    <footer>
      <div className="foot-top">
        <div className="foot-left">
          <h1>DAT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit
            minus excepturi. In totam, molestias autem alias qui quibusdam
            dolores ab tempore! Libero architecto officiis inventore dolorem quo
            tempore laudantium rerum, consequatur aperiam recusandae quia
            mollitia. Qui odit dignissimos repellat ut magnam voluptates
            consectetur eveniet.
          </p>
          <br />
          <br />
          <div style={{display:"flex"}}>
            <img className="social" style={{height:'24px', width:'24px'}} src={pin} alt="" />
            <span>Doctors At Home</span>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <br />
          <br />
          <p>&copy; Doctors At Home | All Rights Reserved</p>
        </div>
        <div className="foot-right">
          <div className="info">
            <h1>Contact Us</h1>
            <h3>8282828282</h3>
          </div>
          <div className="socials">
            <img className="social" src={fb} alt="" />
            <img className="social" src={insta} alt="" />
            <img className="social" src={wp} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
