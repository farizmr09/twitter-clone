import React from 'react';
import './RegisterPage.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@material-ui/core';

function RegisterPage({setEmail, setPassword, handleAction}) {
  return (
    <div className="registerPage">
      <div className="headerContainer">
        <TwitterIcon className="registerPage__twitterIcon"/>
        <p>Join Twitter today.</p>
      </div>
      <div className="registerPage__input">
        <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
        <Button variant={"outlined"} className="registerPage__button" onClick={handleAction}>Sign up</Button>
      <p>By signing up, you agree to the <span>Blabla</span> and <span>Yadayada</span>, including the <span>Cookie Monster</span> stealing your cookies.</p>
    </div>
  )
}

export default RegisterPage