import { skills } from '../../data/skills';
import './SkillsMarquee.css';

const SkillsMarquee = () => {
  const loop = [...skills, ...skills];
  const renderSkill = (skill: {name: string; logo: string}, key: string) => (
    <span key={key} className="skill-pill glass">
      {skill.logo && <img src={skill.logo} alt="" aria-hidden="true" className="skill-logo" loading="lazy" />}
      {skill.name}
    </span>
  );
  return (
    <section aria-label="Skills" className="skills-marquee">
      <p aria-hidden="true" className="skills-marquee__ghost">
        SKILLS
      </p>
      <div className="skills-marquee__viewport">
        <div className="skills-marquee__track">
          {[0, 1].map((half) => (
            <div
              key={half}
              className="skills-marquee__row"
              aria-hidden={half === 1 ? true : undefined}
            >
              {(half === 0 ? skills : loop.slice(skills.length)).map((skill, i) => renderSkill(skill, `${half}-${skill.name}-${i}`))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
