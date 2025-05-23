import React from 'react';
import Button from '../ui/Button';
// Add this import for Lottie
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowUpRight } from 'lucide-react';

const cardData = [
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    alt: 'Qlik Talend Cloud',
    label: 'Qlik Talend Cloud',
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg',
    alt: 'Qlik Connect Live',
    label: 'Qlik Connect Live',
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg',
    alt: 'Remote Work',
    label: 'Remote Work',
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    alt: 'Team Collaboration',
    label: 'Team Collaboration',
  },
  {
    type: 'video',
    src: 'https://videos.pexels.com/video-files/1395943/1395943-hd_1920_1080_30fps.mp4',
    alt: 'Meet Datacus Phoenicopterus',
    label: 'Meet Datacus Phoenicopterus',
  },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    alt: 'Qlik Cloud Analytics',
    label: 'Qlik Cloud Analytics',
  },
];

const cardGridStyles = [
  "row-span-2 h-[320px] w-full md:w-[220px]", // Responsive width
  "h-[150px] w-full md:w-[220px]",
  "h-[150px] w-full md:w-[220px]",
  "h-[150px] w-full md:w-[220px]",
  "row-span-2 h-[320px] w-full md:w-[220px]",
  "h-[150px] w-full md:w-[220px]",
];

const partnerLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJtv2KX5wBcTHbVpmP2gSdySVtSbpG3pHaHn9Jyz022CCboo4O9mQWz1Eq6h_sPTqo1A&usqp=CAU",
  "https://www.getdbt.com/_next/image?url=%2Fimg%2Flogos%2Fdbt-labs-logo.svg&w=256&q=75",
];

const Hero = () => {
  return (
    <div className="pt-20 sm:pt-24 md:pt-40 pb-8 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-10 md:gap-x-12 items-center">
          {/* Left Side */}
          <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col">
            {/* Databricks Official Consulting Partner Badge - Smaller */}
            <div
              className="flex items-center gap-2 sm:gap-3 bg-white rounded-full px-3 sm:px-4 md:px-5 py-1.5 w-fit mb-4 sm:mb-6 md:mb-8 shadow-md border border-blue-900/40 backdrop-blur-sm"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png"
                alt="Databricks"
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 object-contain"
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

            {/* Main Heading - Increased font sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 leading-tight text-blue-700 ">
              Empowering <br />
              Data-Driven Decisions <br />
              <span className="text-black block mt-2">Across the Globe</span>
            </h1>
            <Button
              variant="primary"
              size="lg"
              className="bg-[#00A862] hover:bg-[#008F53] text-base px-6 w-fit font-semibold"
            >
              See What's Different
            </Button>
          </div>

          {/* Right Side: Lottie Animation - Slightly bigger */}
          <div className="flex justify-center items-center w-full h-full">
            <DotLottieReact
              src="https://lottie.host/a8037778-cf68-423b-8a82-d665927f90fa/oNfJ6iHKf9.lottie"
              loop
              autoplay
              style={{ width: '100%', maxWidth: 480, height: 480 }}
            />
          </div>
        </div>

        {/* Footer section */}
        <div className="mt-16 md:mt-32">
          <div className="text-center mb-8 md:mb-16">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Trusted by industry leaders in data and analytics
            </p>
          </div>
        </div>

        {/* Moving Logo Carousel under the footer */}
        <section className="logo-carousel overflow-hidden relative pt-4 md:pt-8 pb-4 md:pb-8 mt-0">
          <div className="w-full">
            <div className="logo-track flex items-center gap-6 md:gap-16 w-max">
              {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Partner logo ${idx + 1}`}
                  className="h-6 sm:h-8 md:h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
                  loading="eager"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;