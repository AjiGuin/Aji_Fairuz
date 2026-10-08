import type { Project } from '../../data/projects';
import ArrowIcon from '../icons/ArrowIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className="project-card glass" data-reveal>
    <div className="project-card__media">
      <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
      <span className="project-card__no">{project.no}</span>
    </div>
    <div className="project-card__body">
      <p className="project-card__meta">
        {project.category} · {project.year}
      </p>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
      <div className="project-card__foot">
        <ul className="project-card__tags" aria-label={`Tools used in ${project.title}`}>
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <span className="project-card__arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      </div>
    </div>
  </article>
);

export default ProjectCard;
