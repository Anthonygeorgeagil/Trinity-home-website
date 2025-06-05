import React, { useRef } from 'react';
import Button from '../ui/Button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import mainhero from '../../animations/mainhero.lottie?url';
 // Add this import at the top

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

const partnerLogos = [
	'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
	'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJtv2KX5wBcTHbVpmP2gSdySVtSbpG3pHaHn9Jyz022CCboo4O9mQWz1Eq6h_sPTqo1A&usqp=CAU',
	'https://www.getdbt.com/_next/image?url=%2Fimg%2Flogos%2Fdbt-labs-logo.svg&w=256&q=75',
	'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', // AWS logo added
];

const Hero: React.FC = () => {
	const ref = useRef(null);
	const inView = useInView(ref, { once: false, amount: 0.3 }); // triggers every time, not just once

	const carouselStyle = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .logo-track {
      animation: marquee 20s linear infinite;
    }
  `;

	return (
		<div className="pt-20 sm:pt-24 md:pt-40 pb-8 md:pb-16 bg-white">
			<style dangerouslySetInnerHTML={{ __html: carouselStyle }} />

			<div ref={ref} className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-10 md:gap-x-12 items-center">
					{/* Left Side (Text) */}
					<motion.div
						initial={{ opacity: 0, x: -60 }}
						animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="max-w-2xl mx-auto lg:mx-0 flex flex-col"
					>
						{/* Databricks Badge */}
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

						{/* Main Heading */}
						<h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 leading-tight text-blue-700 ">
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

					{/* Right Side Lottie */}
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

				{/* Footer section */}
				<div className="mt-16 md:mt-32">
					<div className="text-center mb-8 md:mb-16">
						<p className="text-black font-bold text-sm sm:text-base md:text-lg">
							Trusted by industry leaders in data and analytics
						</p>
					</div>
				</div>

				{/* Moving Logo Carousel */}
				<section className="logo-carousel overflow-hidden relative pt-4 md:pt-8 pb-4 md:pb-8 mt-0">
					<div className="w-full">
						<div className="logo-track flex items-center gap-6 md:gap-16 w-max">
							{[...partnerLogos, ...partnerLogos].map((logo, idx) => (
								<img
									key={idx}
									src={logo}
									alt={`Partner logo ${idx + 1}`}
									className="h-6 sm:h-8 md:h-12 w-auto object-contain transition"
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
