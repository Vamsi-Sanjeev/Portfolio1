import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 md:py-5 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold focus:outline-none hover:scale-105 transition-transform duration-300"
        >
          Port<span className="text-purple-500">folio</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 focus:outline-none hover:scale-105 ${
                activeSection === item.id
                  ? 'text-purple-500 border-b-2 border-purple-500'
                  : 'text-white hover:text-purple-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 md:hidden focus:outline-none hover:scale-110 transition-transform duration-300"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 focus:outline-none rounded-lg ${
                  activeSection === item.id
                    ? 'text-purple-500 bg-purple-500/10'
                    : 'text-white hover:text-purple-400 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header