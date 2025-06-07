import React from 'react';
import '../../styles/pages/main.css';

const Sun = ({ onClick }) => {
  return (
    <div className="sun" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="ray ray1"></div>
      <div className="ray ray2"></div>
      <div className="ray ray3"></div>
      <div className="ray ray4"></div>
      <div className="ray ray5"></div>
      <div className="ray ray6"></div>
      <div className="ray ray7"></div>
      <div className="ray ray8"></div>
      <p className='sun-text'>Click Here</p>
    </div>
  );
}

export default Sun;
