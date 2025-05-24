import React from 'react';
import { skills } from '../data/projectsData';
import { Smartphone, Film } from 'lucide-react';

function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'smartphone':
        return <Smartphone size={24} />;
      case 'film':
        return <Film size={24} />;
      default:
        return <Film size={24} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Skills</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/30 transition-all">
                  {getIcon(skill.icon)}
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-gray-700/50 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Beginner</span>
                <span>Advanced</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;