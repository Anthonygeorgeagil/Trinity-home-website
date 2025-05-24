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
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
      <div className="relative flex justify-center items-center min-h-[800px]">
        {/* Service Cards in a circle around the animation */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="relative w-full h-full max-w-[700px] max-h-[700px] mx-auto">
            {services.map((service, idx) => {
              const angle = (idx / services.length) * 2 * Math.PI;
              const radius = 340; // px (slightly increased from 300)
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={service.title}
                  className="absolute w-80 h-72" // increased width and height (w-80 = 20rem, h-72 = 18rem)
                  style={{
                    left: `calc(50% + ${x}px - 10rem)`, // 10rem = 160px (half of w-80)
                    top: `calc(50% + ${y}px - 9rem)`,   // 9rem = 144px (half of h-72)
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden bg-white rounded-lg group hover:cursor-pointer border border-transparent hover:border-2 hover:border-black transition-all duration-300">
                    {/* Frosted Overlay */}
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[30px] z-10 rounded-lg"></div>
                    {/* Card Content */}
                    <div className="relative z-20 p-10 flex flex-col justify-center items-center text-gray-900 h-full">
                      <div className="mb-4 flex justify-center items-center w-full">{service.icon}</div>
                      <h3 className="text-2xl font-semibold mb-2 text-center">{service.title}</h3>
                      <p className="text-base text-gray-700 text-center">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Center Lottie Animation */}
        <div className="z-20 flex justify-center items-center">
          <DotLottieReact
            src="https://lottie.host/abc637a9-8669-4167-9d37-f39faecbf35a/phzPSr5Ebn.lottie"
            loop
            autoplay
            style={{ width: 380, height: 380 }}
          />
        </div>
      </div>
    </Section>
  );
};

export default Services;
