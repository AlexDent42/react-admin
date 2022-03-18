import React, { useContext } from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightlightIcon from '@mui/icons-material/Nightlight';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import { DarkModeContext } from '../../context/darkModeContext';


const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon/>
        </div>
          <div className="items">
            <div className="item">
              <LanguageIcon className="icon"/>
              English
            </div>
            <div className="item">
              <NightlightIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
            </div>
            <div className="item">
              <FullscreenExitIcon className="icon"/>
              </div>
              <div className="item">
              <NotificationsNoneIcon className="icon"/>
              <div className="counter">1</div>

              </div>
              <div className="item">
              <ChatBubbleOutlineIcon className="icon"/>
              <div className="counter">23</div>
              </div>
              <div className="item">
              <FormatListBulletedRoundedIcon className="icon"/>
              </div>
              <div className="item">
              <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg" alt="" className='avatar'/>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Navbar