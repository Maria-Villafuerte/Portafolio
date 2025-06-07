// src/components/AboutMe.jsx
import React from 'react';
import '../../styles/pages/aboutme.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h1>Sobre Mí</h1>
      <div className="profile">
        <img src="../../../assets/me.jpg" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h2>María José Villafuerte Arredondo</h2>
          <p>Me encanta conocer gente nueva y hacer amigos, ya que valoro profundamente las conexiones humanas y las experiencias compartidas. Considero que la amabilidad y la empatía son fundamentales en todas las interacciones, y siempre trato de aportar positividad y comprensión en mis relaciones.</p>
          <p>En mi tiempo libre, disfruto armando rompecabezas, un pasatiempo que no solo me relaja, sino que también desafía mi mente y mejora mis habilidades para resolver problemas. Estas actividades reflejan mi naturaleza curiosa, mi deseo de crecimiento personal y mi dedicación tanto a los detalles como a la imagen global de cualquier proyecto en el que me involucro.</p>
          <p>Gracias por visitar mi portafolio. Espero que disfrutes conociéndome a través de mis trabajos y experiencias, y que podamos encontrar la oportunidad de colaborar en el futuro.</p>
          <h3>Intereses</h3>
            <ul>
              <li>Desarrollo Web</li>
              <li>Inteligencia Artificial</li>
              <li>Viajar</li>
              <li>Lectura</li>
            </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
