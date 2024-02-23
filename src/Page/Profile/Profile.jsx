import React from "react";
import "./Profile.css";

export const Profile = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  //  const {email,password}=JSON.parse(localStorage.getItem('data'))
  return (
    <div className="profile-container">
      <div className="left-profile">
       <h1> Profile </h1>                                                                                   
        <div className="left-profile-content">
            <div className="child-content">
                <div className="profile-image">                  
                    <img src="" alt="" />
                </div>
                <ul>
                    <li>name:  {`${data.name}`}</li>
                    <li>email:  {`${data.email}`}</li>
                    <li>Mobile no:  {`${data.number}`}</li>                  
                </ul>
            </div>
        </div>
      </div>

      <div className="right-profile">right container</div>
    </div>
  );
};
{
  /* Profile={`name:${data.name},email:${data.email},dob:${data.dob}`} */
}
