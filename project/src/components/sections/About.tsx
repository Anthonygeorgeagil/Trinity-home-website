import React from 'react';
import Section from '../ui/Section';
import { Database, Trophy, Globe, Users } from 'lucide-react';

const stats = [
  { icon: <Database size={24} />, value: '500+', label: 'Projects Delivered' },
  { icon: <Trophy size={24} />, value: '9+', label: 'Years of Experience' },
  { icon: <Globe size={24} />, value: '10+', label: 'Countries Served' },
  { icon: <Users size={24} />, value: '100+', label: 'Data Experts' },
];

const About = () => (
  <Section
    id="about"
    title="About Trinity Technology Solution"
    subtitle="Your Trusted Partner in Digital Transformation"
  >
    <div className="grid md:grid-cols-2 gap-12 items-center pb-2">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
        <p className="text-gray-600 mb-6">
          Founded in 2020, Trinity Technology Solution LLC has been at the forefront of digital transformation, helping enterprises harness the power of data analytics and cloud solutions. Our commitment to excellence and innovation has made us a trusted partner for businesses worldwide.
        </p>
        <p className="text-gray-600 mb-6">
          As a certified Databricks partner, we specialize in data engineering, analytics, and AI solutions that drive business growth and operational efficiency. Our expertise spans across cloud migration, data governance, and enterprise-scale digital transformation initiatives.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <h4 className="font-semibold text-blue-800 mb-2">Official Databricks Partner</h4>
          <p className="text-blue-700">
            Our strategic partnership with Databricks enables us to deliver cutting-edge lakehouse architecture and advanced analytics solutions that transform how organizations leverage their data assets.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1 text-center">{stat.value}</div>
            <div className="text-sm text-gray-500 text-center">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default About;