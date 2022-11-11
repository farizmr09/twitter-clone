import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './Home.css';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Home({email}) {
  let navigate = useNavigate();
  // const email = location.state.email;
  
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/')
  }
  
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if(authToken) {
      navigate('/home')
    }
    if(!authToken) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="home">

      {/* sidebar */}
      <Sidebar handleLogout={handleLogout}/>

      {/* feed */}
      <Feed email={email}/>

      {/* widgets */}
      <Widgets />
    </div>
  )
}

export default Home
