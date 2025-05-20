import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import TechStack from './components/sections/TechStack';
import Industries from './components/sections/Industries';
import Insights from './components/sections/Insights';
import Careers from './components/sections/Careers';
import Contact from './components/sections/Contact';
import GlobalPresence from './components/sections/GlobalPresence';

function App() {
  return (
    <div className="font-sans">
      <Header />
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Industries />
        <GlobalPresence />
        <Insights />
        <Careers />
        <Contact />
      
      <Footer />
    </div>
  );
}

export default App;