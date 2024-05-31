import React from 'react';
import StarAnimation from './StarAnimation';
import { Link } from 'react-router-dom';
import './design/main.css';
import Sun from './Sun';

const Main = () => {
  const handleSunClick = () => {
    window.location.href = '/cv';
  };

  return (
    <main>
      <StarAnimation />
      <div className="name-container">
        <h1>María José Villafuerte</h1>
      </div>
      <div className="hill"></div>
      <div className="sun-container">
        <Sun onClick={handleSunClick} />
      </div>
    </main>
  );
}

export default Main;
