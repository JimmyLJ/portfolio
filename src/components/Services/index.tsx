import ServiceCard from "./ServiceCard";

interface ServiceData {
  id: string;
  icon: string;
  name: string;
  description: string;
}

const Services = () => {
  const services: ServiceData[] = [
    {
      id: 'ui-ux',
      icon: '/images/s1.png',
      name: 'UI and UX',
      description: 'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
    },
    {
      id: 'web-mobile',
      icon: '/images/s2.png',
      name: 'Web and Mobile App',
      description: 'Building responsive and feature-rich applications for all devices and platforms.',
    },
    {
      id: 'design-creative',
      icon: '/images/s3.png',
      name: 'Design & Creative',
      description: 'Crafting visually stunning and brand-aligned creative solutions for various media.',
    },
    {
      id: 'development',
      icon: '/images/s4.png',
      name: 'Development',
      description: 'Implementing robust, scalable, and high-performance code for web and mobile applications.',
    },
  ];

  return (
    <div className="py-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Collaborate with brand <br /> and agencies to create <br /> impactful results
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-start text-white">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            name={service.name}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
