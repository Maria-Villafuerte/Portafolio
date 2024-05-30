import React from 'react';
import StarAnimation from './StarAnimation';
import './design/main.css';


const Main = () => {
  return (
    <main>
    <div className="sun-container">
      <div className="sun">
        <div className="ray ray1"></div>
        <div className="ray ray2"></div>
        <div className="ray ray3"></div>
        <div className="ray ray4"></div>
        <div className="ray ray5"></div>
        <div className="ray ray6"></div>
        <div className="ray ray7"></div>
        <div className="ray ray8"></div>
      </div>
    </div>
      <div className="name-container">
        <h1>María José Villafuerte</h1>
      </div>
      <div className="hill"></div>
      <StarAnimation />
    </main>
  );
}

export default Main;
