import React from 'react';
import '../../styles/pages/projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "Reading Blog",
      description: "Comparte tus lecturas en el siguiente",
      link: "https://blogposts-f3645.web.app/login",
      image: "../../../assets/Blog_2.png"
    },
    {
      title: "Calculadora",
      description: "Realiza todas tus operaciones matemáticas con este proyecto",
      link: "https://calculadora-next-two.vercel.app",
      image: "../../../assets/Calculadora.png"
    },
    {
      title: "CSS Kirby",
      description: "Imagen de un kirby creado únicamente con css",
      link: "https://tiburoncin.lat/22129/Lab_4/lab4/css_drawing/Drawing_css.html",
      image: "../../../assets/kirbi.png"
    },
    // Añadir más proyectos según sea necesario
  ];

  return (
    <section className="projects">
      <h1>Proyectos</h1>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
