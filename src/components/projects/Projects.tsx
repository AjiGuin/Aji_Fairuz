import { projects } from '../../data/projects';
import Section from '../layout/Section';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => (
  <div className="projects-band">
    <Section
      id="projects"
      label="PROJECTS"
      title="SELECTED WORK"
      intro="Placeholder projects — each card is driven by the projects data file and ready to swap in real work."
    >
      <div className="cards-grid">
        {projects.map((project) => (
          <ProjectCard key={project.no} project={project} />
        ))}
      </div>
    </Section>
  </div>
);

export default Projects;
