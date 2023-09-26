import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button, { Input, Loader, Popup, Sign } from "../Assets/Components";

function Login() {
  const nav = useNavigate();
  const userData = [
    { email: "shiva1@mail.com", password: "123456" },
    { email: "shiva2@mail.com", password: "123457" },
    { email: "shiva3@mail.com", password: "123458" },
    { email: "shiva4@mail.com", password: "123459" },
    { email: "shiva5@mail.com", password: "123450" }
  ]

  const [errors, setErrors] = useState(
    {
      email: { required: false, userFound: false, email_validation: false },
      password: { required: false, userFound: false, password_validation: false },
    }
  )

  const [values, setValues] = useState(
    {
      email: "",
      password: ""
    }
  )

  function handleInput(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const [loader, setLoader] = useState("none")

  const [popup, setPopup] = useState({
    popup_status: "none",
    popup_error: "popup_error"
  })

  function handleSubmit(e) {
    e.preventDefault();
    let previosErrors = { ...errors };
    let flag = false;
    if (values.email === '') {
      previosErrors.email = { required: true };
      flag = true;
    } else {
      previosErrors.email = { required: false };
      flag = false;
    }
    if (values.password === '') {
      previosErrors.password = { required: true };
      flag = true;
    } else {
      previosErrors.password = { required: false };
      flag = false;
    }



    if (!flag) {
      let got = false;
      userData.map((item) => {
        if (item.email === values.email && item.password === values.password) {
          got = true;
        }
      })

      if (got) {
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
            nav('/otp')
          }, 1000);
        }, 3000);


      } else {
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
    setErrors(previosErrors)
  }

  return (
    <div className="main1">
      <Sign />
      <div className="main">
        <h1>SIGN IN</h1>
        <form onSubmit={handleSubmit} >
          <Input name="email" type="text" action={handleInput} placeholder="Enter Your Email" id='email' input_class="input" />
          {
            errors.email.required === true ? <span className="error">Please Enter Your Email</span> : null
          }
          {
            errors.email.email_validation === true ? <span className="error">Please Enter Valid Email</span> : null
          }
          <br />
          <Input name="password" action={handleInput} type="password" placeholder="Enter Your Pasword" id='password' input_class="pass" />

          {
            errors.password.required === true ? <span className="error">Please Enter Your Password</span> : null
          }
          {
            errors.password.password_validation === true ? <span className="error">Password should be satisfy all the condition</span> : null
          }

          <br />
          <Button type="submit" value="Login" btn_class="btn" />
          <Loader display={loader} />
          <br />
        </form>
        <Popup display={popup.popup_status} errorType={popup.popup_error} />
        <p>
          Forgot Password?<Link to="/otp" >Reset Here</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;

