import React from 'react';
import './App.css';
import { app } from './config/FirebaseConfig';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './authcomponents/LandingPage';
import RegisterPage from './authcomponents/RegisterPage';
import Home from './Home';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  let navigate = useNavigate()
  
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAction = (event) => {
    const authentication = getAuth();
    if (event === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
    }
    if(event === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
     })
    }
  }

  return (
    <div>
      <Routes>
        <Route exact path='/' element={ <LandingPage setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)}/> } />
        <Route path='/register' element={ <RegisterPage setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)}/> } />
        <Route path='/home' element={ <Home email={email}/> } />
      </Routes>
    </div>
  );
}

export default App
