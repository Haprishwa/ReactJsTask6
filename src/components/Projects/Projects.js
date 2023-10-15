import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { id: 1, title: 'Smart parking system', description: 'The main basis of this project is to clear the ambiguity of traffic on roads and it also helps to prevent accidents and provide safety measures and security.' },
  { id: 2, title: 'Animation using Mobile App Development', description: 'With this project, I got hands on experience in making different kind of animations using mobile application development.' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I have worked with..</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
  );
};
export default Projects;