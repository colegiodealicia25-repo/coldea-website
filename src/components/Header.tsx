import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import coldeaLogo from '../assets/coldea-logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-coldea-green shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-3">
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
              <img 
                src={coldeaLogo} 
                alt="Colegio De Alicia Logo" 
                className="w-full h-full object-contain object-center"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Colegio De Alicia</h1>
              <p className="text-sm text-coldea-gold-light">Alicia, Bohol, Philippines</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-coldea-gold font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-coldea-gold font-medium transition-colors">
              About
            </a>
            <a href="#programs" className="text-white hover:text-coldea-gold font-medium transition-colors">
              Programs
            </a>
            <a href="#location" className="text-white hover:text-coldea-gold font-medium transition-colors">
              Location
            </a>
            <a href="#contact" className="text-white hover:text-coldea-gold font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-white hover:text-coldea-gold hover:bg-coldea-green-dark"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-coldea-green-dark">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-white hover:text-coldea-gold font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-coldea-gold font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#programs"
                className="text-white hover:text-coldea-gold font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </a>
              <a
                href="#location"
                className="text-white hover:text-coldea-gold font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </a>
              <a
                href="#contact"
                className="text-white hover:text-coldea-gold font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}