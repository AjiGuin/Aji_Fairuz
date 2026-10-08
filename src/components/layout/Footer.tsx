import { site } from '../../config/site';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const links = [site.socials.linkedin, site.socials.instagram, site.socials.email];
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__id">
          <p className="footer__name">{site.name}</p>
          <p className="footer__role">{site.role}</p>
        </div>
        <nav aria-label="Social">
          <ul className="footer__links">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer__copy">© {year} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
