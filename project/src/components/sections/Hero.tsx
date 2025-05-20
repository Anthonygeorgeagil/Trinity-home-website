import React from 'react';
import Button from '../ui/Button';

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
  // Ford logo removed
];

const Hero = () => {
  return (
    <div className="pt-20 sm:pt-24 md:pt-40 pb-8 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-10 md:gap-x-12 items-center">
          {/* Left Side */}
          <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col">
            <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-full px-4 sm:px-5 md:px-7 py-2 w-fit mb-6 sm:mb-8 md:mb-16 shadow-md border border-blue-900/40 backdrop-blur-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png"
                alt="Databricks"
                className="h-9 w-9 sm:h-10 sm:w-10 md:h-14 md:w-14 object-contain"
              />
              <span className="text-[#22396b] font-medium text-xs sm:text-sm md:text-base tracking-wide">
                Trinity-databricks consulting partner
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl md:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#1B365D]">
              Empowering Data-Driven Decisions Across the Globe
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-8">
              Harnessing the power of data analytics to transform businesses in Oman, Netherlands, USA, and India.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-[#00A862] hover:bg-[#008F53] text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
            >
              See What's Different
            </Button>
          </div>

          {/* Card grid with custom sizes and positions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 sm:grid-rows-2 auto-rows-fr gap-3 sm:gap-4 md:gap-6 mt-6 lg:mt-0">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className={
                  cardGridStyles[idx] +
                  " rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col justify-end relative"
                }
              >
                {card.type === 'image' ? (
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={card.src}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs sm:text-sm md:text-base font-semibold px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3">
                  {card.label}
                </div>
              </div>
            ))}
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