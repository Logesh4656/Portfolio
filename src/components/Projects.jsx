import React, { useState } from 'react';
import { projects } from '../data/projectsData';
import VideoPlayer from './VideoPlayer';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (id) => {
    setActiveProject(id === activeProject ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all group"
            >
              <VideoPlayer 
                videoUrl={project.videoUrl} 
                thumbnail={project.thumbnail}
                title={project.title}
              />
              
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => handleProjectClick(project.id)}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {activeProject === project.id ? "Hide Details" : "View Details"}
                  </button>
                  <a 
                    href="https://instagram.com/krithi__fx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    See on Instagram
                  </a>
                </div>
                
                {activeProject === project.id && (
                  <div className="mt-4 p-4 bg-gray-700/30 rounded-lg border border-gray-600 animate-fadeIn">
                    <p className="text-gray-300 text-sm mb-3">
                      This project showcases my skills in {project.title.toLowerCase()} editing. 
                      The techniques used include advanced transitions, color grading, and motion effects.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Editing", "Color Grading", "Effects"].map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://instagram.com/krithi__fx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            View More On Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;