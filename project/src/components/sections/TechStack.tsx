import React from 'react';
import Section from '../ui/Section';

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
    }
  ];

  return (
    <Section 
      id="tech-stack" 
      title="Our Technology Stack"
      subtitle="Cutting-edge technologies powering our data solutions"
      // dark prop removed for white background
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 text-center shadow-2xl border-4 border-gray-300 transition-transform hover:-translate-y-2 duration-300"
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

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Proud Databricks Partner</h3>
        <div className="bg-white p-8 rounded-lg max-w-3xl mx-auto shadow-1xl border-4 border-gray-300">
          <div className="flex justify-center mb-6">
            <img 
              src="https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg" 
              alt="Databricks logo" 
              className="h-12 "
            />
          </div>
          <p className="text-gray-700 mb-4">
            Our official partnership with Databricks allows us to deliver best-in-class data and AI solutions on a unified, scalable platform.
          </p>
          <p className="text-gray-700">
            Together, we help organizations accelerate innovation and unlock the true value of their data through simplified analytics and machine learning.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;