import React from "react";
import './Login.css' 
import Logo from '../../Images/login_logo.png';
import Button from "../Assets/component";
import { Link } from "react-router-dom";


function Password() {
  return (
    <div className="main1">
            <div className="container">
            <img src={Logo} alt="Logo"/>
            </div><div className="main"> 
              <h1>RESET PASSWORD</h1>
              <input type="text" placeholder="Confirm password" className="input"/>
              <input type="text" placeholder="New password" className="input"/>

              <Link to='/'><Button value = "Submit" btn_class = "btn" className="verify"/></Link>
            </div>
            </div>
        
  )
}

export default Password;