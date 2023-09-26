import React, { useRef, useState } from "react";
import './Login.css' 
import Logo from '../../Images/login_logo.png';
import Button from "../Assets/component";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Send(){
  const inputRefs=[
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]
  function Input(e){
    // console.log("kjk")
    const pattern=/[0-9 \d]/
    if(!pattern.test(e.key)){
      e.preventDefault()
    }
  }

  

  const handle=(e,index)=>{
    if(e.key>='0' && e.key<='9'){
      if(inputRefs[index+1]){
        setTimeout(()=> {inputRefs[index+1].current.focus()},0)
      }
    }
    else if(e.key==='Backspace' && index>'0'){
      setTimeout(()=>{inputRefs[index-1].current.focus()},0)
    }
  }
  const EnteredOTP=['1111','1234']
  const [errors,setError] = useState(
    {
      otp:{required:false,otpNotfound:false}
    }
  )
  const[values,setValue]=useState(
    {
      otp1:'',
      otp2:'',
      otp3:'',
      otp4:'',
    }
  )

  const nav=useNavigate()
  function handleInput(e){
    setValue(
      {
       ...values,   [e.target.name] :e.target.value
      }
    )    
  }
  function handleSubmit(e){
    e.preventDefault()
    const enteredOTP = values.otp1 + values.otp2 + values.otp3 + values.otp4;
        const isValidOTP = EnteredOTP.includes(enteredOTP);

    const previousData={...errors}
    if(values.otp1=== '' || values.otp2=== '' || values.otp3=== '' || values.otp4=== ''){
      previousData.otp={required:true,otpNotFound:false}
    }
    else if(isValidOTP){
      previousData.otp={required:false,otpNotFound:false}
      nav('/Password')
    }
    else{
      previousData.otp={required:false,otpNotFound:true}
      // nav('/Password')
    }
    setError(previousData)
  }




  

  return(
  <div className="main1">
    <div className="container">
      <img src={Logo} alt="Logo"/>
      </div><div className="main">{} 
      <h1>OTP Verify</h1>
      <form onSubmit={handleSubmit}>
      <div class="num">
        <input type="text" name="otp1" maxLength="1" ref={inputRefs[0]} onChange={handleInput} onKeyPress={Input} onKeyDown={(e=>handle(e,0))} className="input_field"/>
        <input type="text" name="otp2" maxLength="1" ref={inputRefs[1]} onChange={handleInput} onKeyPress={Input} onKeyDown={(e=>handle(e,1))} className="input_field"/>
        <input type="text" name="otp3" maxLength="1" ref={inputRefs[2]} onChange={handleInput} onKeyPress={Input} onKeyDown={(e=>handle(e,2))} className="input_field"/>
        <input type="text" name="otp4" maxLength="1" ref={inputRefs[3]} onChange={handleInput} onKeyPress={Input} onKeyDown={(e=>handle(e,3))} className="input_field"/>
      
      
        {/* <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')" class="input_field"/>
        <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')" class="input_field"/>
        <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')" class="input_field"/>
        <input type="text" maxlength="1" oninput="this.value=this.value.replace(/[^0-9]/g,'')" class="input_field"/>
        */}
    </div>
    <br/>
    <br/>
    {
      errors.otp.required?<span className="valid">Please Enter OTP</span>:null
    }
    {
    
      errors.otp.otpNotfound?<span>Enter valid otp</span>:null
    }
    <Button value = "Submit" btn_class = "btn"/>
    </form>
    </div>
    </div>
  )
        


    
  
  }


export default Send;