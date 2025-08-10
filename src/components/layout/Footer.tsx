import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-black border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Vamsi Sanjeev. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/Vamsi-Sanjeev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vamsisanjeevgangam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:gvamsi.edu@gmail.com"
              className="text-gray-400 hover:text-purple-500 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            Gangam vamsi Sanjeev portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;