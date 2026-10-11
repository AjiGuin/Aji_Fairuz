import { useState } from 'react';
import { projects } from '../../data/projects';
import Section from '../layout/Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="projects-band">
      <Section
        id="projects"
        label="PROJECTS"
        title="SELECTED WORK"
        intro="Placeholder projects — each card is driven by the projects data file and ready to swap in real work."
      >
        <div className="cards-grid">
          {projects.map((project) => (
            <ProjectCard key={project.no} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </Section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default Projects;
