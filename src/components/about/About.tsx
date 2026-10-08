import { site } from '../../config/site';
import Section from '../layout/Section';
import SkillsMarquee from './SkillsMarquee';
import './About.css';

const About = () => (
  <div className="about-block">
    <Section id="about" label="ABOUT" title="WHO I AM">
      <div className="about__grid">
        <p className="about__body">{site.bio}</p>
        <dl className="about__facts">
          <div>
            <dt>School</dt>
            <dd>{site.school}</dd>
          </div>
          <div>
            <dt>Level</dt>
            <dd>
              {site.grade} · {site.major}
            </dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>CAD · 3D Modeling · Technical Drawing</dd>
          </div>
        </dl>
      </div>
    </Section>
    <SkillsMarquee />
  </div>
);

export default About;
