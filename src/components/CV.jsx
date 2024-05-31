import React from 'react';
import './design/cv.css';

const CV = () => {
  return (
    <section className="cv">
      <div className="intro">
        <h1>¿Listo para contratarme?</h1>
        <p>
        Apasionada desarrolladar junior con un sólido fundamento en programación y un compromiso evidente con la mejora continua. Actualmente estudiante, poseo habilidades destacadas en la resolución de problemas y la creación de soluciones innovadoras. 
        </p>
      </div>
      <div className="cv-content">
        <div className="cv-card">
          <div className="icon">💻</div>
          <h2>Experiencia</h2>
          <h3>Interno, Ingenio Pantaleón</h3>
          <p >Diciembre 2022 a Enero 2023</p>
          <p>Hice la función de ayudante a desarrollador en área de
              automatización de planta</p>
          <ul>
            <li>Colaborar en equipos y trabajar con personas de diversos antecedentes.            </li>
              <br />
            <li>Desarrollar habilidades específicas relacionadas con la industria (programación, diseño, análisis de datos, etc.).</li>
              </ul>
        </div>
        <div className="cv-card">
          <div className="icon">🎓</div>
          <h2>Educación</h2>
          <p>
          Cursando Ingeniería en Ciencia de computación
          Universidad de valle de Guatemala          </p>
          <ul>
            <h3>Años:</h3>
            <p>2022 - 2026</p>
          </ul>
          <br />
          <p>
          Bachiller en Ciencias y Letras      </p>
          <ul>
            <h3>Años:</h3>
            <p>2019 - 2021</p>
          </ul>
        </div>
        <div className="cv-card">
          <div className="icon">⚙️</div>
          <h2>Habilidades Técnicas</h2>
          <ul>
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
              <li>SQL</li>
              <li>Kotlin</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
          </ul>
        </div>
        <div className='cv-card'>
        <div className="icon">👩🏻‍💻</div>
        <h2>Cursos de relevancia</h2>
          <ul>
              <li className='li-33'>Algoritmos y estructuras de datos</li>
              <li>Organización de computadoras y Assembler</li>
              <li>Programación orientada a objetos</li>
              <li>Programación de Microprocesadores</li>
              <li>Programación Plataformas Móviles</li>
              <li>Plataformas Web</li>
              <li>Base de Datos</li>
              <li>Ingeniería en Software</li>
              <li>Interacción Humano Computador</li>
          </ul>
        </div>
        <div className="cv-card">
          <div className="icon">💡</div>
          <h2>Habilidades Sociales</h2>
          <ul>
              <li>Trabajo en equipo</li>
              <li>Resolución de problemas</li>
              <li>Aprendizaje continuo</li>
              <li>Adaptabilidad</li>
              <li>Creatividad</li>
          </ul>
        </div>
        <div className="cv-card">
          <div className="icon">🍎</div>
          <h2>Idiomas</h2>
          <ul>
              <li>Inglés, C2</li>
              <li>Español, Nativo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CV;
