import Image from "next/image";

type ServiceCardProps = {
  icon: string;
  name: string;
  description: string;
}

const ServiceCard = ({ icon, name, description }: ServiceCardProps) => {

  return (
    <div>
      <Image src={icon} alt={name} width={60} height={60} />
      <h3 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">{name}</h3>
      <p className="mt-6 text-gray-300">{description}</p>
    </div>
  );
}

export default ServiceCard;
