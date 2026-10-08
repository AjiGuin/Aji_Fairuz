import type { Service } from '../../data/services';
import ArrowIcon from '../icons/ArrowIcon';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => (
  <article className="service-card glass" data-reveal>
    <p className="service-card__no">{service.no}</p>
    <h3 className="service-card__title">{service.title}</h3>
    <p className="service-card__desc">{service.description}</p>
    <span className="service-card__arrow" aria-hidden="true">
      <ArrowIcon />
    </span>
  </article>
);

export default ServiceCard;
