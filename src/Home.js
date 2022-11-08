import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './Home.css';

function Home() {
  return (
    <div className="home">

      {/* sidebar */}
      <Sidebar />

      {/* feed */}
      <Feed />

      {/* widgets */}
      <Widgets />
    </div>
  )
}

export default Home
