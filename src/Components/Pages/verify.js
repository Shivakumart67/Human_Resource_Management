import React from "react";
import './Login.css' 
import Logo from '../../Images/login_logo.png';
import Button from "../Assets/component";
import Password from "./Password";
import { Link } from "react-router-dom";
function Verify(){
  const email="123456789"

  function Input(e){
    console.log("kjk")
    const pattern=/[0-9 \d]/
    if(!pattern.test(e.key)){
      e.preventDefault()
    }
  }

    

    return(
        <div className="main1">
            <div className="container">
            <img src={Logo} alt="Logo"/>
            </div><div className="main"> 
              <h1>RESET PASSWORD</h1>
              <input type="text" maxLength="9"placeholder="Employee ID" onKeyPress={Input}className="input"/>
              <Link to='/Send'><Button value = "Reset password" btn_class = "btn" className="verify"/></Link>
            </div>
            </div>
        
    )
}


export default Verify;