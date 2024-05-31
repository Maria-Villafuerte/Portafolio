import React from 'react';
import { Link } from 'react-router-dom';
import './design/header.css';

const Header = () => {
  return (
    <>
      <header className="header">
      <div className="nav-container">
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/aboutme">Sobre mí</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    

    </>
  );
}

export default Header;
