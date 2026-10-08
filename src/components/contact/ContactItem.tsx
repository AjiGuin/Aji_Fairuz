import type { ContactMethod } from '../../data/contact';
import ArrowIcon from '../icons/ArrowIcon';

const ContactItem = ({ method }: { method: ContactMethod }) => {
  const external = method.href.startsWith('http');
  return (
    <li data-reveal>
      <a
        className="contact-row glass"
        href={method.href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        <span className="contact-row__label">{method.label}</span>
        <span className="contact-row__main">
          <span className="contact-row__value">{method.display}</span>
          <span className="contact-row__hint">{method.hint}</span>
        </span>
        <span className="contact-row__arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      </a>
    </li>
  );
};

export default ContactItem;
