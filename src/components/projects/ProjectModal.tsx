import { useEffect } from 'react';
import type { Project } from '../../data/projects';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-media">
          <img src={project.image} alt={project.imageAlt} />
          <span className="modal-no">{project.no}</span>
        </div>

        <div className="modal-body">
          <p className="modal-meta">
            {project.category} · {project.year}
          </p>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-desc">
            {project.detailedDescription || project.description}
          </p>

          <div className="modal-tools">
            <h3>Tools Used</h3>
            <ul>
              {project.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          {(project.demoLink || project.sourceLink) && (
            <div className="modal-links">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                  View Demo
                </a>
              )}
              {project.sourceLink && (
                <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="modal-link modal-link--secondary">
                  View Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
