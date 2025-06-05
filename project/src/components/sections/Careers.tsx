import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Briefcase, Clock, MapPin } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Senior Data Engineer',
      location: 'Amsterdam, Netherlands',
      type: 'Full-time',
      description: 'Design and implement data processing systems and data pipelines for our enterprise clients.'
    },
    {
      title: 'Data Scientist',
      location: 'New York, USA',
      type: 'Full-time',
      description: 'Develop machine learning models and conduct advanced analytics to solve complex business problems.'
    },
    {
      title: 'Business Intelligence Analyst',
      location: 'Chennai, India',
      type: 'Full-time',
      description: 'Create and maintain dashboards, reports, and data visualizations to drive business decisions.'
    }
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Comprehensive health and dental insurance',
    'Flexible work arrangements and remote options',
    'Professional development and certification support',
    'Regular team events and retreats',
    'Collaborative and innovative work environment'
  ];

  return (
    <Section 
      id="careers" 
      title="Join Our Team"
      subtitle="Build your career at the forefront of data innovation"
      // dark prop removed for white background
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h3>
          <p className="text-gray-700 mb-6">
            At Trinity Technology Solution, we're building a team of passionate data professionals who are driven to solve complex challenges and make a meaningful impact. Our collaborative culture encourages innovation, continuous learning, and professional growth.
          </p>
          <p className="text-gray-700 mb-6">
            As a global company with offices in four countries, we offer diverse perspectives and opportunities to work on cutting-edge projects across various industries and technologies.
          </p>
          
          <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Benefits & Perks</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-2">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Team working together" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Current Openings</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className=" rounded-lg p-6 text-center border border-transparent hover:border-2 hover:border-black transition-all duration-300 hover:-translate-y-2 flex flex-col items-start shadow-lg"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-3">{job.title}</h4>
            <div className="flex items-center text-gray-500 mb-2">
              <MapPin size={16} className="mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-500 mb-4">
              <Clock size={16} className="mr-1" />
              <span>{job.type}</span>
            </div>
            <p className="text-gray-700 mb-6">{job.description}</p>
            <Button 
              variant="outline" 
            className="w-full text-center inline-block px-4 py-2 rounded-md border border-blue-600 text-white bg-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Details
            </Button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-700 mb-6">Don't see a position that matches your skills? We're always looking for talented individuals to join our team.</p>
        <Button 
          variant="primary" 
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          <Briefcase size={16} className="mr-2" />
          Submit Your Resume
        </Button>
      </div>    </Section>
  );
};

export default Careers;