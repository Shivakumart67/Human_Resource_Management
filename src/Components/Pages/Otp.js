import React, { useEffect, useRef, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Button, { Loader, Popup, Sign } from '../Assets/Components'

function Otp() {
  const nav = useNavigate()
  const otpData = ["1111", "2323", "5432", "2352"];
  // const data = otpData[0].split("");

  const inputRefs=[
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]

  useEffect(()=>{
    inputRefs[0].current.focus()
  })

  function Input(e){
    const pattern=/[0-9 \d]/
    if(!pattern.test(e.key)){
      e.preventDefault()
    }
    if(e.key === "Enter"){
      handleSubmit(e)
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

  const [errors, setError] = useState(false)

  const [values, setValues] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: ""
  })

  function handleInput(e){
    setError(false);
    setValues({
      ...values, [e.target.name]: e.target.value
    })
  }

  const [loader, setLoader] = useState("none")

    const [popup, setPopup] = useState({
      popup_status: "none",
      popup_error: "popup_error"
    })

  function handleSubmit(e){
    e.preventDefault();
    let flag = false;
    if(values.otp1 === '' || values.otp2 === '' || values.otp3 === '' || values.otp4 === ''){
      setError(true);
      flag = true;
    }else{
      setError(false);
      flag = false;
    }

    if(flag === false){
      let get = false;
      otpData.map((item)=>{
        var data = item.split(""); // "1111" --> [1,1,1,1]
        if(data[0] === values.otp1 && data[1] === values.otp2 && data[2] === values.otp3 && data[3] === values.otp4){
          get = true;
        }
      })
      if(get){
        setLoader("block");
        setTimeout(() => {
            setLoader("none");
            setPopup({
              popup_status: "block",
              popup_error: "popup_success"
            })
            setTimeout(() => {
              setPopup({
                popup_status: "none",
                popup_error: "popup_success"
              })
                nav('/dashboard')
            }, 1000);
        }, 3000);
      }else{
        setLoader("block");
        setTimeout(() => {
          setPopup({
            popup_status: "block",
            popup_error: "popup_error"
          })
            setLoader("none");
            setTimeout(() => {
              setPopup({
                popup_status: "none",
                popup_error: "popup_error"
              })
            }, 2000);
        }, 2000);
      }
    }

  } 



  return (
    <div className="main1">
    <Sign/>
  <div className="main">
    <h1>Enter OTP</h1>
    <br />
    <form onSubmit={handleSubmit}>
      <div className='otp_container'>
      <input className='otp_input' placeholder='0' ref={inputRefs[0]} onKeyPress={Input} onKeyDown={(e=>handle(e,0))} type="text" maxLength={1} name = "otp1" onChange={handleInput}/>
      <input className='otp_input' placeholder='0' ref={inputRefs[1]} onKeyPress={Input} onKeyDown={(e=>handle(e,1))} type="text" maxLength={1} name = "otp2" onChange={handleInput}/> 
      <input className='otp_input' placeholder='0' ref={inputRefs[2]} onKeyPress={Input} onKeyDown={(e=>handle(e,2))} type="text" maxLength={1} name = "otp3" onChange={handleInput}/>
      <input className='otp_input' placeholder='0' ref={inputRefs[3]} onKeyPress={Input} onKeyDown={(e=>handle(e,3))} type="text" maxLength={1} name = "otp4" onChange={handleInput}/>
      </div>
      {
        errors ? <span className='error'>Please Enter Valid OTP</span>:null
      }
      <br />
      <br />
     <Button type="submit" value = "Send OTP" btn_class = "btn" />
     <Loader display = {loader}  />
     </form>
     <Popup display = {popup.popup_status} errorType = {popup.popup_error} />
  </div>
</div>
  )
}

export default Otp