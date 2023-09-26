import Login from './Components/Pages/Login';
import './Components/Pages/Main.css';
import './Components/Assets/Component.css'
import Otp from './Components/Pages/Otp';
import Verify_OTP from './Components/Pages/Verify_OTP';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import Leave from './Components/Pages/Leave';
import Payslips from './Components/Pages/Payslips';
import Ticket from './Components/Pages/Ticket';
import Directory from './Components/Pages/Directory';
import Page404 from './Components/Pages/Page404';
function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element = {<Login/>}/>
        <Route path='/otp'  element = {<Otp/>}/>
        <Route path='/verifyotp'  element = {<Verify_OTP/>}/>
        <Route path='/dashboard'  element = {<Dashboard/>}/>
        <Route path='/leave'  element = {<Leave/>}/>
        <Route path='/payslips'  element = {<Payslips/>}/>
        <Route path='/ticket'  element = {<Ticket/>}/>
        <Route path='/directory'  element = {<Directory/>}/>
        <Route path='/*'  element = {<Page404/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;





// import React from 'react'
// import { ReactDOM } from 'react'
// import Otp from './Components/Pages/OTP'
// import Send from './Components/Pages/Send'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Verify from './Components/Pages/verify';
// // import Name from './Components/Pages/test'
// import Dashboard from './Components/Pages/dashboard'
// import Password from './Components/Pages/Password'
// import Login from './Components/Pages/Login';



// function App(){
//     return (
//         <div>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path='/' element = {<Login/>}/>
//                     <Route path='/Otp' element = {<Otp/>}/>
//                     <Route path='/Verify' element = {<Verify/>}/>
//                     <Route path='/Send' element = {<Send/>}/> 
//                     <Route path='/dashboard' element = {<Dashboard/>}/>
//                     <Route path='/Password' element = {<Password/>}/>
//                     {/* <Route path='/'  element = {<Name/>}/> */}
//                 </Routes>
//             </BrowserRouter>
        
            
//         </div>
//     )
// }
// export default App;