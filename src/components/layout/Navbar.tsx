import { useEffect, useState } from 'react';
import { site } from '../../config/site';
import './Navbar.css';

interface NavbarProps {
  visible: boolean;
}

const Navbar = ({ visible }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`nav-wrap${visible ? ' is-visible' : ''}`}>
      <nav
        aria-label="Primary"
        className={`nav glass-dark${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
      >
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true">
            AF
          </span>
          <span>{site.name}</span>
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <ul id="nav-menu" className="nav__links">
          {site.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
