import React, { useRef, useEffect, useState } from 'react';
import Button from '../ui/Button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import mainhero from '../../animations/mainhero.lottie?url';

const partnerLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJtv2KX5wBcTHbVpmP2gSdySVtSbpG3pHaHn9Jyz022CCboo4O9mQWz1Eq6h_sPTqo1A&usqp=CAU',
  'https://www.getdbt.com/_next/image?url=%2Fimg%2Flogos%2Fdbt-labs-logo.svg&w=256&q=75',
  'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
];

const leaders = [
  { 
    name: "Muthees", 
    title: "Chief Executive Officer", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    company: "TechNova Industries",
    expertise: "Strategic Leadership",
    testimonial: "Trinity Technologies transformed our data infrastructure, resulting in 40% faster decision-making and $2M in cost savings annually. Their AI solutions revolutionized our customer insights."
  },
  { 
    name: "Agil", 
    title: "Chief Technology Officer", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    company: "GlobalTech Solutions",
    expertise: "Technology Innovation",
    testimonial: "Working with Trinity's team accelerated our digital transformation by 18 months. Their cloud architecture expertise helped us scale from 10K to 1M users seamlessly."
  },
  { 
    name: "Allan", 
    title: "Vice President of Operations", 
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    company: "DataFlow Enterprises",
    expertise: "Operational Excellence",
    testimonial: "Trinity's automation solutions eliminated 60% of our manual processes. We now process 10x more data with the same team size, boosting productivity beyond expectations."
  },
  { 
    name: "Manonraj", 
    title: "Chief Information Officer", 
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    company: "InnovateCorp",
    expertise: "Information Systems",
    testimonial: "Trinity's data governance frameworks protected us from 99.9% of threats while ensuring compliance. Their solutions are enterprise-grade and future-proof."
  },
  { 
    name: "Jacob", 
    title: "Chief Data Officer", 
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=300&fit=crop&crop=face",
    company: "Analytics Plus Inc",
    expertise: "Data Strategy",
    testimonial: "Our data insights improved by 300% after implementing Trinity's ML pipelines. We went from reactive to predictive analytics, giving us a competitive edge in the market."
  },
];

const Hero: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const carouselStyle = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .logo-track {
      animation: marquee 20s linear infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    .leader-pulse {
      animation: pulse 2s ease-in-out infinite;
    }
  `;

  return (
    <div className="pt-20 sm:pt-24 md:pt-40 pb-8 md:pb-16 bg-white">
      <style dangerouslySetInnerHTML={{ __html: carouselStyle }} />

      <div ref={ref} className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-10 md:gap-x-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto lg:mx-0 flex flex-col"
          >
            <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-full px-3 sm:px-4 md:px-5 py-1.5 w-fit mb-4 sm:mb-6 md:mb-8 shadow-md border border-blue-900/40 backdrop-blur-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png"
                alt="Databricks"
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
              />
              <a
                href="https://www.databricks.com/partners"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#22396b] font-bold text-sm sm:text-base md:text-lg tracking-wide hover:underline"
              >
                Trinity-databricks consulting partner
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 leading-tight text-blue-700">
              Empowering <br />
              Data-Driven Decisions <br />
              <span className="text-black block mt-2">
                Across the Globe
              </span>
            </h1>

            <Button
              variant="primary"
              size="lg"
              className="bg-[#00A862] hover:bg-[#008F53] text-base px-6 w-fit font-semibold mt-2 flex items-center gap-2"
            >
              See What's Different
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right Side Animation */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 60 }}
            className="flex justify-center items-center w-full h-full"
          >
            <DotLottieReact
              src={mainhero}
              loop
              autoplay
              style={{ width: '100%', maxWidth: 560, height: 560 }}
            />
          </motion.div>
        </div>

        {/* Enhanced Leader Carousel Section */}
        <div className="mt-20 md:mt-32">
          <div className="text-center mb-8 md:mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-black font-bold text-2xl md:text-4xl mb-2"
            >
              Trusted by Visionary Industry Leaders
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base md:text-lg"
            >
              Meet the experts driving innovation across the industry
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden px-4"
          >
            <LeaderCarousel />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const LeaderCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % leaders.length);
    }, 4000); // Changed to 4 seconds for better viewing

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

interface Leader {
	name: string;
	title: string;
	image: string;
	company: string;
	expertise: string;
	testimonial: string;
}

const handleLeaderClick = (index: number): void => {
	setCurrentIndex(index);
	setIsAutoPlaying(false);
	// Resume auto-play after 10 seconds of inactivity
	setTimeout(() => setIsAutoPlaying(true), 10000);
};

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Main Featured Leader */}
      <div className="flex justify-center mb-8 md:mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-blue-50 to-white shadow-2xl rounded-3xl p-6 md:p-8 max-w-5xl mx-auto border border-blue-100 leader-pulse"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left Side - Leader Info */}
              <div className="text-center lg:text-left">
                <div className="relative mb-6 flex justify-center lg:justify-start">
                  <img
                    src={leaders[currentIndex].image}
                    alt={leaders[currentIndex].name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {leaders[currentIndex].name}
                </h3>
                
                <p className="text-blue-600 font-semibold text-lg md:text-xl mb-1">
                  {leaders[currentIndex].title}
                </p>
                
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  {leaders[currentIndex].company}
                </p>
                
                <div className="bg-blue-100 rounded-full px-4 py-2 inline-block">
                  <p className="text-blue-800 text-sm font-medium">
                    {leaders[currentIndex].expertise}
                  </p>
                </div>
              </div>

              {/* Right Side - Testimonial */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative">
                <div className="absolute -top-3 -left-3 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                  "
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    How Trinity Technologies Transformed Our Business
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                    {leaders[currentIndex].testimonial}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span>Verified Success Story</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mb-8">
        {leaders.map((_, index) => (
          <button
            key={index}
            onClick={() => handleLeaderClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center gap-4 md:gap-6 overflow-x-auto pb-4">
        {leaders.map((leader, index) => (
          <motion.button
            key={index}
            onClick={() => handleLeaderClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 transition-all duration-300 ${
              index === currentIndex
                ? 'opacity-100 scale-110'
                : 'opacity-60 hover:opacity-80'
            }`}
          >
            <div className="text-center">
              <img
                src={leader.image}
                alt={leader.name}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-md border-2 ${
                  index === currentIndex
                    ? 'border-blue-500'
                    : 'border-gray-200'
                }`}
              />
              <p className="text-xs md:text-sm font-medium text-gray-700 mt-2">
                {leader.name}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Auto-play Indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
