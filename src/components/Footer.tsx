import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { RiBlueskyLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-sm py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm mb-4 md:mb-0">
          <a 
            href="/privacy"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
        <div className="text-sm mb-4 md:mb-0">Kōkūn © 2025</div>
        <div className="flex gap-6">
          <a href="mailto:info@kokun.space" className="hover:text-gray-300">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/company/kokunorg/" className="hover:text-gray-300">
            <Linkedin size={24} />
          </a>
          <a href="https://instagram.com/KokunOrg" className="hover:text-gray-300">
            <Instagram size={24} />
          </a>
          <a href="https://kokunorg.bsky.social" className="hover:text-gray-300">
            <RiBlueskyLine size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}