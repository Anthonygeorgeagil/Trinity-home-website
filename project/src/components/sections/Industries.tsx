import React, { useState } from 'react';
import Section from '../ui/Section';
import Card, { CardContent, CardTitle, CardDescription, CardImage } from '../ui/Card';

const Industries = () => {
  const [activeTab, setActiveTab] = useState('healthcare');

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Helping healthcare providers improve patient outcomes through data-driven insights and predictive analytics.',
      caseStudy: 'Reduced hospital readmission rates by 25% through predictive analytics and patient risk profiling.'
    },
    {
      id: 'finance',
      name: 'Finance',
      image: 'https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Enabling financial institutions to make informed decisions, detect fraud, and enhance customer experiences.',
      caseStudy: 'Implemented real-time fraud detection system that reduced fraudulent transactions by 60% for a leading banking institution.'
    },
    {
      id: 'retail',
      name: 'Retail',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Optimizing inventory management, personalizing customer experiences, and forecasting trends for retailers.',
      caseStudy: 'Developed demand forecasting model that improved inventory efficiency by 30% and reduced stockouts by 45%.'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Enhancing operational efficiency, quality control, and predictive maintenance in manufacturing processes.',
      caseStudy: 'Implemented IoT analytics platform resulting in 40% reduction in equipment downtime and 15% increase in production efficiency.'
    },
    {
      id: 'telecom',
      name: 'Telecommunications',
      image: 'https://media.istockphoto.com/id/1363385264/photo/telecommunication-tower-for-2g-3g-4g-5g-network-during-sunset-antenna-bts-microwave-repeater.jpg?s=612x612&w=0&k=20&c=0sZTFtN0EByaBoen9TIXargCgte2ejR91L36M-y8OEY=',
      description: 'Optimizing network performance, customer segmentation, and service quality for telecom providers.',
      caseStudy: 'Reduced customer churn by 18% through predictive analytics and personalized retention strategies.'
    },
    {
      id: 'oilgas',
      name: 'Oil & Gas',
      image: 'https://eco-cdn.iqpc.com/eco/images/channel_content/images/biggest_oil_and_gas_companies.jpg',
      description: `We support the Oil & Gas industry with recruitment and staffing for upstream (exploration, drilling, production), midstream (storage, transportation), and downstream (refining, sales, distribution) operations. Our expertise covers digital transformation, energy transition, safety, compliance, and global workforce needs. We also specialize in EPC/EPCI hiring for both onshore and offshore projects, including engineering, commissioning, and HSE roles.`,
      caseStudy: 'Staffed a multidisciplinary team for a major offshore project, ensuring timely delivery and compliance across all phases.'
    }
  ];

  const activeIndustry = industries.find(i => i.id === activeTab) || industries[0];

  return (
    <Section 
      id="industries" 
      title="Industries We Serve"
      subtitle="Transforming businesses across diverse sectors with data-driven solutions"
    >
      {/* Industry Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {industries.map((industry) => (
          <button
            key={industry.id}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === industry.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(industry.id)}
          >
            {industry.name}
          </button>
        ))}
      </div>

      {/* Industry Details */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={activeIndustry.image} 
            alt={activeIndustry.name} 
            className="w-full h-80 object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeIndustry.name}</h3>
          <p className="text-gray-600 mb-6">{activeIndustry.description}</p>
          
          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Success Story</h4>
            <p className="text-gray-700">{activeIndustry.caseStudy}</p>
          </div>
          
          <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
            Read Full Case Study
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Other Industries */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">More Industries We Serve</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {industries
            .filter(industry => industry.id !== activeTab)
            .slice(0, 3)
            .map((industry, index) => (
              <Card key={index} hover>
                <CardImage 
                  src={industry.image} 
                  alt={industry.name} 
                  className="h-48"
                />
                <CardContent>
                  <CardTitle>{industry.name}</CardTitle>
                  <CardDescription className="line-clamp-3">{industry.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Industries;