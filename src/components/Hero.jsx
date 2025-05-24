import React from 'react';
import { ChevronDown } from 'lucide-react';
import pic from '../Img-Vid/portfolio_image.jpeg';

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-64 h-64 rounded-full bg-purple-600/30 blur-3xl -top-10 -left-10"></div>
        <div className="absolute w-64 h-64 rounded-full bg-blue-600/20 blur-3xl bottom-20 right-10"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-8 relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto border-4 border-purple-500 shadow-lg shadow-purple-500/20">
            <img 
              src={pic}
              alt="Keerthana" 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm">
            Video Editor
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="block">I'm Keerthana</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Crafting compelling visual stories through creative video editing
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            View My Work
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 rounded-full bg-transparent border border-purple-500 text-white font-medium hover:bg-purple-500/10 transition-all">
            Get In Touch
          </button>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll Down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}

export default Hero;