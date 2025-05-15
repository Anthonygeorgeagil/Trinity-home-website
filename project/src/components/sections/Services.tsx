import React from 'react';
import Section from '../ui/Section';
import {
  LineChart,
  Database,
  ShieldCheck,
  BarChart,
  Cloud,
  BrainCircuit,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <LineChart size={48} className="text-blue-600" />,
      title: 'Data Strategy',
      description:
        'Crafting tailored data roadmaps to align with your business objectives and drive meaningful outcomes.',
    },
    {
      icon: <Database size={48} className="text-blue-600" />,
      title: 'Data Engineering',
      description:
        'Building robust data infrastructures for seamless data flow, processing, and management across your organization.',
    },
    {
      icon: <ShieldCheck size={48} className="text-blue-600" />,
      title: 'Data Governance & Management',
      description:
        'Ensuring data quality, security, and compliance with industry regulations and organizational policies.',
    },
    {
      icon: <BarChart size={48} className="text-blue-600" />,
      title: 'Business Intelligence',
      description:
        'Transforming data into actionable insights for informed decision-making through advanced analytics and reporting.',
    },
    {
      icon: <Cloud size={48} className="text-blue-600" />,
      title: 'Data Migration and Modernization',
      description:
        'Transitioning legacy systems to modern data platforms for improved performance, scalability, and cost-efficiency.',
    },
    {
      icon: <BrainCircuit size={48} className="text-blue-600" />,
      title: 'Artificial Intelligence',
      description:
        'Implementing AI solutions to drive innovation, automate processes, and uncover hidden patterns in your data.',
    },
  ];

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Comprehensive data solutions tailored to your business needs"
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full h-full overflow-hidden bg-white rounded-lg shadow-md group hover:cursor-pointer"
          >
            {/* Hover Blob Effect */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute w-40 h-[360px] bg-gradient-to-br from-pink-500 to-blue-500 animate-spin-slow blur-2xl opacity-70 -left-10 -top-20 rounded-full"></div>
            </div>

            {/* Frosted Overlay */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[30px] z-10 rounded-lg"></div>

            {/* Card Content */}
            <div className="relative z-20 p-6 flex flex-col justify-center items-start text-gray-900 h-full">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
