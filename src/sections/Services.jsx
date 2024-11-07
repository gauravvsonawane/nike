import { services } from '../constants';
import ServiceCard from "../components/ServiceCard.jsx";

const Services = () => {
  return (
      <section className="max-container justify-center flex flex-wrap gap-9">
        {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
        ))}
      </section>
  )
}

export default Services;