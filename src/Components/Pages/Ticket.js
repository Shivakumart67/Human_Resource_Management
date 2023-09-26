import React, { useState } from 'react'
import { Heading } from '../Assets/Components'
import Navigation from '../Assets/Navigation'

function Ticket(props) {
  const currentPage = 'ticket';
  return (
    <div className='hrbody'>
      <div className="hr_container">
          <Heading head = "Ticket"/>
      </div>
      <div className="hrsidebar">
          <Navigation page = {currentPage}/>
      </div>
    </div>
  )
}

export default Ticket
