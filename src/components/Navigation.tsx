import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm ${className}`}>
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Left Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-primary font-bold hover:text-hover transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Home
          </Link>
          <Link to="/migraine" className="hidden md:block text-primary font-bold hover:text-hover transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Migraine
          </Link>
          <Link to="/blog" className="hidden md:block text-primary font-bold hover:text-hover transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Blog
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
        <div className="flex items-center space-x-4">

          <Link to="/team" className="hidden md:block text-primary font-bold hover:text-hover transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            About Us
          </Link>
          <Link to="/early-access" className="hidden md:block text-primary font-bold hover:text-hover transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Sign Up
          </Link>
          <Button to="/pledge" variant="white">DONATE</Button>
          <Button to="/pledge" variant="xsmallwhite">DONATE</Button>
        </div>
 
        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 flex-col bg-background backdrop-blur-sm`}>
          <Link
            to="/"
            className="px-4 py-3 text-primary hover:bg-black/40"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/migraine"
            className="px-4 py-3 text-primary hover:bg-black/40"
            onClick={() => setIsOpen(false)}
          >
            Migraine
          </Link>
          <Link
            to="/blog"
            className="px-4 py-3 text-primary hover:bg-black/40"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
                    <Link
            to="/team"
            className="px-4 py-3 text-primary hover:bg-black/40"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
                    <Link
            to="/early-access"
            className="px-4 py-3 text-primary hover:bg-black/40"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}