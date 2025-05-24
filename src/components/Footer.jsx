import React from 'react';
import { Instagram, Mail, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <span className="text-lg font-semibold text-white">Keerthana</span>
            <span className="mx-2">|</span>
            <span>Video Editor</span>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/krithi__fx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:keerthanadvi@gmail.com"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            Created with <Heart size={14} className="text-red-500" /> © {new Date().getFullYear()} Keerthana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;