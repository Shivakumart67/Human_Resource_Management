import React from "react"
import './component.css'
import Logo from "../../Images/login_logo.png";
function Button(props) {
    const {value, btn_class,click} = props;
    return (
        <div>
            <button className={btn_class} onClick={click}>{value}</button>
        </div>
    )
}
export function Input(props) {
    const {type, placeholder} = props;
    return(
    <div>
        <input type={type} placeholder={placeholder}/>

    </div>
    )


}

// export function Popup({ display, errorType,}) {
//     return (
//       <div className={`popup ${display} ${errorType}`}>
//         Your Employee ID and password are wrong. 
//       </div>
      
//     );
//   }
export function Popup(props) {

    const {display, error_type, message} = props
    const styles = 
    {display: display}
  

    return (
        <div id="popup_main" className={error_type} style = {styles}>
            {message}
        </div>
    );
}
  
    
export function sign(){
    return(
    <div className="container">
        <img src={Logo} alt="Logo" />
    </div>
    )
}
export function Load(props){
    const {none, page, error_type} =props
    let top;
    let left;
    if(page === 'login'){
        top =  467+"px";
        left=  1067+"px";
    }else if(page === 'otp'){
        top =  381+"px";
        left=  1081+"px";
    }else if(page === 'send'){
        top =  381+"px";
        left=  1081+"px";

    }else if(page==='verify'){
        top =  368+"px";
        left=  1081+"px";
    }else if(page==='password'){
        top =  449+"px";
        left=  1067+"px";

    
    }
    const style={display:none, top: top, left: left}
    return(
        <div className="load" style={style}></div>
    )

}



export default Button