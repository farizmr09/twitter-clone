import React from 'react';
import './Sidebar.css';
import Option from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>

            {/* sidebar option */}
            <Option active={true} text={"Home"} Icon={HomeIcon}/>
            <Option text={"About"} Icon={InfoIcon}/>
            
            {/* button -> tweet */}
            <Button variant={"outlined"} className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar