import React from 'react';
import { Film, Instagram, Mail } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Me</span>
          </h2>
          
          <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-gray-800">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hi, I'm Keerthana, a passionate video editor specializing in reels and content creation. I have hands-on experience using Adobe Premiere Pro and Alight Motion to bring stories to life. I am especially interested in editing short films and movies, constantly honing my skills to deliver engaging and impactful videos.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Film size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Expertise</h3>
                  <p className="text-gray-400 text-sm">Video Editing & Content Creation</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Instagram size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Instagram</h3>
                  <a href="https://instagram.com/krithi__fx" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">
                    @krithi__fx
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <a href="mailto:keerthanadvi@gmail.com" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">
                    keerthanadvi@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-gray-300 text-sm italic">
                "My goal is to create videos that not only tell stories but evoke emotions and leave a lasting impression on viewers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;