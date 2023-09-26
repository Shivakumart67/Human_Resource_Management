import React, { useState } from 'react'
import { Heading } from '../Assets/Components'
import Navigation from '../Assets/Navigation'
import { FaClock } from 'react-icons/fa';
import { FaStopwatch, FaSearchengin} from 'react-icons/fa';
import Sheet from '../../Images/time_sheet.png';
import Valid from '../../Images/time_valid.png';
import File from '../../Images/user_file.png';
import Leave from '../../Images/apply_leave.png';
import User from '../../Images/my_user.png';

function Dashboard(props) {
  return (
    <div className='hrbody'>
      <div className="hr_container">
          <Heading head = "Dashboard"/>
      </div>
      <div className="hrsidebar">
          <Navigation page = "dashboard"/>
      </div>
      <div className='dashboard_main'>
          <div className='dashboard_tiles'>
              <div className='punch_container'>
                  <h4 className='tile_heading'> <FaStopwatch style={{fontSize: "20"}}/> Time at Work</h4>
                  <div className='punch_container_main'>
                    <div className='punch_container_top'>
                      
                    </div>
                    <div className='punch_container_bottom'></div>
                  </div>
              </div>
              <div className='quick_launch'>
                  <h4 className='tile_heading'> <FaSearchengin style={{fontSize: "20"}} />  Quick Launch</h4>

              </div>
          </div>
          <div className='dashboard_foot_tile'>
              <button>click</button>
              <button>click</button>
              <button>click</button>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
