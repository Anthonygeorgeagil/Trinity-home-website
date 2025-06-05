import React from 'react';
import Section from '../ui/Section';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import collab from '../../animations/collab.lottie?url';
const TechStack = () => {
  const technologies = [
    {
      name: 'Azure',
      logo: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg',
      description: 'Cloud computing services for scalable, enterprise-grade solutions'
    },
    {
      name: 'Databricks',
      logo: 'https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg',
      description: 'Unified data analytics platform for big data and AI'
    },
    {
      name: 'DBT',
      logo: 'https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png',
      description: 'Data transformation tool enabling analytics engineering'
    },
    {
      name: 'FiveTran',
      logo: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png',
      description: 'Automated data integration for seamless data pipelines'
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
      description: 'React framework for production-grade, fast, and scalable web applications.'
    },
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      description: 'Comprehensive cloud platform offering computing power, storage, and content delivery.'
    }
  ];

  return (
    <Section 
      id="tech-stack" 
      title="Our Technology Stack"
      subtitle="Cutting-edge technologies powering our data solutions"
    >
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 text-center border border-transparent hover:border-2 hover:border-black transition-all duration-300 hover:-translate-y-2 flex flex-col items-center w-64"
          >
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
            <p className="text-gray-700">{tech.description}</p>
          </div>
        ))}
      </div>

      {/* Databricks Partner Section with Animation */}
      <div className="mt-16 flex justify-center">
        <div className="bg-white p-8 rounded-lg max-w-3xl w-full flex flex-col items-center">
          {/* Heading at the top */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Proud Databricks Partner</h3>
          {/* Animation below the heading */}
          <DotLottieReact
            src={collab}
            loop
            autoplay
            style={{ width: 230, height: 230 }}
          />
          <p className="text-gray-700 mb-4 text-center mt-6">
            As a certified Databricks partner, we leverage the power of the Databricks Lakehouse Platform to deliver scalable, secure, and innovative data solutions. Our team specializes in implementing advanced analytics, AI, and data engineering projects that help organizations unlock actionable insights and accelerate their digital transformation journey.
          </p>
          <p className="text-black text-center">
            With Databricks, we empower businesses to unify their data, simplify workflows, and drive better decision-making across the enterprise.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;