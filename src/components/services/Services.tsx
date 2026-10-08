import { services } from '../../data/services';
import Section from '../layout/Section';
import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => (
  <Section
    id="services"
    label="SERVICES"
    title="WHAT I CAN DO"
    intro="Focused mechanical-design services, documented cleanly and ready for fabrication or review."
  >
    <div className="cards-grid">
      {services.map((service) => (
        <ServiceCard key={service.no} service={service} />
      ))}
    </div>
  </Section>
);

export default Services;
