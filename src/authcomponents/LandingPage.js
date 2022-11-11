import React from 'react';
import './LandingPage.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@material-ui/core';


function LandingPage({setEmail, setPassword, handleAction}) {
    return (
        <div className="landingPage">
            <TwitterIcon className="landingPage__twitterIcon"/>
            <div className="landingPage__input">
                <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Button variant={"outlined"} className="landingPage__button" onClick={handleAction}>Log in</Button>
            <div className="landingPage__option">
                <Button variant={"text"}>Forgotten password?</Button>
                <Button href="/register" variant={"text"}>Sign up for Twitter</Button>
            </div>
        </div>
    )
}
// href="/home"
export default LandingPage