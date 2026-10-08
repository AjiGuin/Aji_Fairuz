import { site } from '../../config/site';

const HeroPortrait = () => (
  <div className="hero__media" aria-hidden="true">
    <img
      className="hero__portrait"
      src={site.portrait}
      alt=""
      fetchPriority="high"
      decoding="async"
    />
    <div className="hero__veil" />
    <div className="hero__grain" />
  </div>
);

export default HeroPortrait;
