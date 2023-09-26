import React from "react"
import './Component.css'
import '../Pages/Main.css'
import Logo from '../../Images/login_logo.png'
function Button(props) {
    const {value, btn_class, type} = props;
    return (
        <div>
            <button type={type} className={btn_class} >{value}</button>
        </div>
    )
}
export function Input(props) {
    const {type, placeholder,id, input_class, action,name} = props;
    return(
    <div>
         <input onChange={action} name = {name} type={type} placeholder={placeholder} id={id} className={input_class}/>

    </div>
    )
}

export function Sign(){
    return (
        <div className="container">
            <img src={Logo} alt="Logo" />
        </div>
    )
}
export function Loader(props){
    const {display} = props
    const styles = 
        {display: display}
    
    return (
        <div className="loader" style = {styles}></div>
    )
}
export function Popup(props){
    const {display, errorType} = props
    const styles = 
    {display: display}
    return (
        <div id="popup_main" className={errorType} style = {styles}>
            {
            errorType === "popup_error" ? <p className="popup_main_content">INCORRECT LOGIN</p> : <p className="popup_main_content">LOGIN SUCESSFULLY</p>
            }
        </div>
    )
}

export function Heading(props){
    return (
        <div className='hrhead'>
            <h1 className='header_name'>{props.head}</h1>
        </div>
    )
}

export default Button