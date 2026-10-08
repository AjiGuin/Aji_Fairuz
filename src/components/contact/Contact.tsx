import { contactMethods } from '../../data/contact';
import Section from '../layout/Section';
import ContactItem from './ContactItem';
import './Contact.css';

const Contact = () => (
  <Section
    id="contact"
    label="CONTACT"
    title="LET'S WORK TOGETHER"
    intro="Available for internships, freelance CAD work, and collaborative engineering projects."
  >
    <ul className="contact-list">
      {contactMethods.map((method) => (
        <ContactItem key={method.id} method={method} />
      ))}
    </ul>
  </Section>
);

export default Contact;
