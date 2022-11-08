import React from 'react';
import './LandingPage.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@material-ui/core';


function LandingPage() {
    return (
        <div className="landingPage">
            <TwitterIcon className="landingPage__twitterIcon"/>
            <div className="landingPage__input">
                <input placeholder="Email" type="text"/>
                <input placeholder="Password" type="text"/>
            </div>
            <Button href="/home" variant={"outlined"} className="landingPage__button">Log in</Button>
            {/* <Button variant={"outlined"} className="landingPage__button">Register</Button> */}
            <div className="landingPage__option">
                <Button variant={"text"} className="landingPage__textButton">Forgotten password?</Button>
                <Button variant={"text"} className="landingPage__textButton">Sign up for Twitter</Button>
            </div>
        </div>
    )
}

export default LandingPage