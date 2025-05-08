import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm ${className}`}>
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-terracotta"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Left Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-terracotta font-bold hover:text-terracotta-light transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Home
          </Link>
          <Link to="/migraine" className="text-terracotta font-bold hover:text-terracotta-light transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Migraine
          </Link>
        </div>

        {/* Center Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://res.cloudinary.com/dknulbme8/image/upload/v1745332502/Ko%CC%84ku%CC%84n_-_white_vector_version-large_sfqzzu.png" 
            alt="Kōkūn"
            className="h-8 md:h-10"
          />
        </Link>

        {/* Right Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/early-access" className="text-terracotta font-bold hover:text-terracotta-light transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Join Us
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 flex-col bg-black/60 backdrop-blur-sm`}>
          <Link 
            to="/" 
            className="px-4 py-3 text-terracotta hover:bg-black/40"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/migraine" 
            className="px-4 py-3 text-terracotta hover:bg-black/40"
            onClick={() => setIsOpen(false)}
          >
            Migraine
          </Link>
          <Link 
            to="/early-access" 
            className="px-4 py-3 text-terracotta hover:bg-black/40"
            onClick={() => setIsOpen(false)}
          >
            Join Us
          </Link>
        </div>
      </nav>
    </header>
  );
}