import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      const opacity = 1 - Math.min(1, scrollPos / 700);
      const translateY = scrollPos * 0.4;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-white pt-24 pb-8">
      <div 
        ref={heroRef}
        className="relative z-10 container mx-auto px-4 md:px-6"
      >
        <div className="max-w-5xl mx-auto">
          {/* --- NEW HERO CONTENT STARTS HERE --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="flex items-center justify-center mb-8 ">
            <div className="bg-black/10 backdrop-blur-sm px-6 py-2 rounded-full flex items-center space-x-3 ml-[-120px] mt-8">
              <img 
                src="https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg" 
                alt="Databricks Logo" 
                className="h-8"
              />
              <div className="w-px h-6 bg-white/20"></div>
              <span className="text-black font-medium">Official Consulting Partner</span>
            </div>
          </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-[#1B365D]">
                Empowering Data-Driven Decisions Across the Globe
              </h1>
              <p className="text-gray-600 text-xl mb-8">
                Harnessing the power of data analytics to transform businesses in Oman, Netherlands, USA, and India.
              </p>
              <Button variant="primary" size="lg" className="bg-[#00A862] hover:bg-[#008F53] text-lg px-8">
                See What's Different
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
                    alt="Data Analytics" 
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg" 
                    alt="Business Analytics" 
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg" 
                    alt="Team Collaboration" 
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                    alt="Data Visualization" 
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* --- NEW HERO CONTENT ENDS HERE --- */}
        </div>
      </div>
    </div>
  );
};

export default Hero;