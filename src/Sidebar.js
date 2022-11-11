import React from 'react';
import './Sidebar.css';
import Option from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@material-ui/core';

function Sidebar({handleLogout}) {
    return (
        <div className="sidebar">
            <div>
                <TwitterIcon className="sidebar__twitterIcon"/>

                <Option active={true} text={"Home"} Icon={HomeIcon}/>
                <Option active={false} text={"About"} Icon={InfoIcon}/>
                
                <Button variant={"outlined"} className="sidebar__tweet" fullWidth>Tweet</Button>
            </div>
            <Button variant={"text"} className="sidebar__logOut" onClick={handleLogout}>
                <LogoutIcon/> 
                <p>Log out</p>
            </Button>
        </div>
    )
}

export default Sidebar