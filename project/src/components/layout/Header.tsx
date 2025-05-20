import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Industries', href: '#industries' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      {/* Top Navigation */}
      

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Logo className="h-12 w-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.name === 'Contact Us'  ? (
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
                  className="group font-ancizar font-medium transition-colors hover:text-blue-600 text-black relative"
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
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.name === 'Contact' ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.hash = link.href;
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-ancizar font-medium transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-ancizar text-gray-800 font-medium hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
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
