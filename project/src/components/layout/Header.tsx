import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Industries', href: '#industries' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo className="h-12 w-auto" /> {/* Increased logo size */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) =>
              link.name === 'Contact' ? (
                <button
                  key={link.name}
                  onClick={() => {
                    window.location.hash = link.href;
                  }}
                  className="font-ancizar font-medium transition-colors hover:text-blue-600 text-black relative px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                  style={{ minWidth: 100 }}
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-ancizar font-medium transition-colors hover:text-blue-600 text-black relative"
                >
                  {link.name}
                  <span
                    className="block h-0.5 bg-blue-600 absolute left-0 right-0 bottom-0 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
                    style={{ transformOrigin: 'left', transition: 'transform 0.3s' }}
                  />
                </a>
              )
            )}
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className="text-gray-800" />
            ) : (
              <Menu size={24} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.name === 'Contact' ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      setIsOpen(false);
                      window.location.hash = link.href;
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-ancizar text-gray-800 font-medium hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
