import type { ReactNode } from 'react';
import { useRevealRoot } from '../../hooks/useReveal';
import './Section.css';

interface SectionProps {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: 'light' | 'dark';
}

const Section = ({ id, label, title, intro, children, tone = 'light' }: SectionProps) => {
  const ref = useRevealRoot<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-title`}
      className={`section${tone === 'dark' ? ' section--dark' : ''}`}
    >
      <div className="section__inner">
        <header className="section__head" data-reveal>
          <p className="section__label">{label}</p>
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
          {intro ? <p className="section__intro">{intro}</p> : null}
        </header>
        <div data-reveal>{children}</div>
      </div>
    </section>
  );
};

export default Section;
