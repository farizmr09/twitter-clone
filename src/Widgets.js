import React from 'react';
import './Widgets.css';
import Trends from './Trends';

function Widgets() {
  return (
    <div className="widgets">
        <h2 className="widgets__header">Trends for you</h2>

        {/* Trendsbox */}
        <Trends />
    </div>
  )
}

export default Widgets