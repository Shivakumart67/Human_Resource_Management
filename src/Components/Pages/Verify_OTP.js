import React from 'react'
import { Link } from 'react-router-dom'
import Button, { Input, Sign } from '../Assets/Components'

function Verify_OTP() {
  return (
    <div className="main1">
    <Sign/>
  <div className="main">
    <h1>Verify OTP</h1>
    <br />
      <Input type = "text"  placeholder = "Enter Your OTP" id = 'otp' input_class = "input"/>
      <br />
      <Button value = "Verify OTP" btn_class = "btn"/>
      <Link to = '/' >Login</Link> 
  </div>
</div>
  )
}

export default Verify_OTP