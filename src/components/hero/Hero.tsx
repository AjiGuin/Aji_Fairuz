import { site } from '../../config/site';
import HeroPortrait from './HeroPortrait';
import LoadingScreen from './LoadingScreen';
import ArrowIcon from '../icons/ArrowIcon';
import './Hero.css';

interface HeroProps {
  ready: boolean;
  loading: boolean;
}

const Hero = ({ ready, loading }: HeroProps) => (
  <>
    <LoadingScreen active={loading} />
    <section id="top" aria-label="Introduction" className={`hero${ready ? ' is-ready' : ''}`}>
      <HeroPortrait />
      <div className="hero__content">
        <p className="hero__eyebrow">
          {site.grade} · {site.major}
        </p>
        <h1 className="hero__title">
          <span className="hero__line">AJI</span>
          <span className="hero__line hero__line--offset">FAIRUS</span>
        </h1>
        <p className="hero__sub">
          {site.school} — precision mechanical design, CAD documentation, and 3D modeling.
        </p>
        <a href="#contact" className="hero__cta glass-dark">
          <span>VIEW CONTACT</span>
          <ArrowIcon />
        </a>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <span>SCROLL</span>
        <i aria-hidden="true" />
      </a>
    </section>
  </>
);

export default Hero;
