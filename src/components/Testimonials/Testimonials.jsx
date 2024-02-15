import React from "react";
import "./Testimonials.css";
import pfp from "../../assets/pfp1.png";
import fb from "../../assets/fb.png";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <div className="cp">
        <div className="card testi-card">
          <img className="socials-testi" src={fb} alt="" />
          <img src={pfp} alt="icon" />
          <h3>@USER</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in
            fugit excepturi.
          </p>
        </div>
        <div className="card testi-card">
          <img className="socials-testi" src={fb} alt="" />
          <img src={pfp} alt="icon" />
          <h3>@USER</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in
            fugit excepturi.
          </p>
        </div>
        <div className="card testi-card">
          <img className="socials-testi" src={fb} alt="" />
          <img src={pfp} alt="icon" />
          <h3>@USER</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in
            fugit excepturi.
          </p>
        </div>
        <div className="card testi-card">
          <img className="socials-testi" src={fb} alt="" />
          <img src={pfp} alt="icon" />
          <h3>@USER</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in
            fugit excepturi.
          </p>
        </div>
        <div className="card testi-card">
          <img className="socials-testi" src={fb} alt="" />
          <img src={pfp} alt="icon" />
          <h3>@USER</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum in
            fugit excepturi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
