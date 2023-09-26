import React, { useState } from 'react'
import { Heading } from '../Assets/Components'
import Navigation from '../Assets/Navigation'

function Payslips(props) {
  const currentPage = 'payslips';
  return (
    <div className='hrbody'>
      <div className="hr_container">
          <Heading head = "Payslips"/>
      </div>
      <div className="hrsidebar">
          <Navigation page = {currentPage}/>
      </div>
    </div>
  )
}

export default Payslips
