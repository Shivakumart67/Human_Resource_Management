import React, { useState } from 'react'
import { Heading } from '../Assets/Components'
import Navigation from '../Assets/Navigation'

function Directory(props) {
  const  currentPage = 'directory'
  return (
    <div className='hrbody'>
      <div className="hr_container">
          <Heading head = "Directory"/>
      </div>
      <div className="hrsidebar">
          <Navigation page = {currentPage}/>
      </div>
    </div>
  )
}

export default Directory
