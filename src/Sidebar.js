import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon/>
      <SidebarOption Icon={HomeIcon} text="Home"/>
      <SidebarOption />
      <SidebarOption/>
      <SidebarOption/>

    </div>
  )
}

export default Sidebar