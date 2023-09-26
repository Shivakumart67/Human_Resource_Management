import React, { useState } from 'react'
import { Heading } from '../Assets/Components'
import Navigation from '../Assets/Navigation'

function Leave(props) {
  
  return (
    <div className='hrbody'>
      <div className="hr_container">
          <Heading head = "Leave"/>
      </div>
      <div className="hrsidebar">
          <Navigation page = "leave"/>
      </div>
    </div>
  )
}

export default Leave
