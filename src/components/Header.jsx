import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";

import './Header.css'

export default function Header() {
  return (
    <div className="header">
        <Link to="/">    
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon'/>
            </IconButton>
        </Link>

        <Link to="/">
            <img
                src="https://static.vecteezy.com/system/resources/previews/018/910/833/non_2x/tinder-app-logo-tinder-app-icon-free-free-vector.jpg"
                alt=""
                className='header_logo'
            />    
        </Link>
        
        <Link to="/chats">
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon'/>
            </IconButton>
        </Link>
      </div>
  )
}
