import React, { useRef, useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import contact from '../../animations/contact.lottie?url';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setIsLoading(true);
    setStatusMessage('');

    try {
      // EmailJS configuration with your actual values
      const result = await emailjs.sendForm(
        'service_3z01v3t',    // Your EmailJS service ID
        'template_5pv3vhp',   // Your EmailJS template ID
        form,
        'OOzmxXaJq7gfK2GU_'   // Your EmailJS public key
      );

      console.log('Email sent successfully:', result.text);
      setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatusMessage('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section 
      id="contact" 
      title="Get in Touch"
    >
      {/* Animation after the heading */}
      <div className="flex justify-center mb-8">
        <DotLottieReact
          src={contact}
          loop
          autoplay
          style={{ width: 210, height: 210 }}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
          
          {/* Status Message */}
          {statusMessage && (
            <div className={`mb-4 p-4 rounded-md ${
              statusMessage.includes('successfully') 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {statusMessage}
            </div>
          )}

          <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="from_name" 
                  name="from_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="from_email" 
                  name="from_email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input 
                type="text" 
                id="company" 
                name="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea 
                id="message" 
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please describe how we can assist you..."
              />
            </div>
            
            {/* Hidden field for recipient email */}
            <input type="hidden" name="to_email" value="hello@trinitetech.com" />
            
            <Button 
              variant="primary" 
              className="w-full" 
              type="submit"
             
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Mail size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                <p className="text-gray-600 mb-1">General Inquiries</p>
                <a href="mailto:hello@trinitetech.com" className="text-blue-600 hover:text-blue-700">
                  hello@trinitetech.com
                </a>
                <p className="text-gray-600 mt-2 mb-1">Business Development</p>
                <a href="mailto:sales@trinitetech.com" className="text-blue-600 hover:text-blue-700">
                  sales@trinitetech.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Phone size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                <p className="text-gray-600 mb-1">USA Office</p>
                <a href="tel:+12345678901" className="text-blue-600 hover:text-blue-700">
                  +1 (234) 567-8901
                </a>
                <p className="text-gray-600 mt-2 mb-1">Global Support</p>
                <a href="tel:+31234567890" className="text-blue-600 hover:text-blue-700">
                  +31 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MessageSquare size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Live Chat</h4>
                <p className="text-gray-600 mb-4">
                  Our support team is available Monday through Friday from 9:00 AM to 6:00 PM CET.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Schedule a Consultation</h4>
            <p className="text-gray-600 mb-4">
              Book a free 30-minute consultation with one of our data experts to discuss your project requirements.
            </p>
            <Button variant="primary">
              Book a Meeting
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;