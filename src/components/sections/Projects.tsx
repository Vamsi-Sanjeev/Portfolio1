import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Brain, Activity, Heart } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: 'Craft Sense Platform',
      description: 'CraftSense empowers local artisans through sustainable practices, fair opportunities, digital tools, and a connected community for global growth.',
      image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg',
      tech: ['HTML', 'CSS', 'JavaScript', 'Typescript'],
      category: 'web',
      icon: <Activity size={20} className="text-purple-500" />,
      github: 'https://github.com/Vamsi-Sanjeev/craft-sense-platform',
      demo: 'https://garuda-sap.netlify.app/'
    },
    {
      id: 2,
      title: 'AI Business Insights',
      description: 'AI Business Insights means using smart computer programs to study business data and give easy tips to help make better decisions and grow the business.',
      image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg',
      tech: ['React', 'Vite', 'TypeScript', 'shadcn-ui', 'Tailwind CSS'],
      category: 'ai',
      icon: <Heart size={20} className="text-pink-500" />,
      github: 'https://github.com/Vamsi-Sanjeev/Sastra',
      demo: 'https://garuda-sastra.netlify.app/'
    },
    {
      id: 3,
      title: 'AI MAZE GAME',
      description: 'This is an interactive game where an AI agent learns to navigate a maze using techniques like reinforcement learning to reach a goal efficiently.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
      tech: ['HTML', 'CSS', 'TypeScript', 'Reinforcement learning'],
      category: 'ai',
      icon: <Brain size={20} className="text-purple-500" />,
      github: 'https://github.com/Vamsi-Sanjeev/AI-MAZE-GAME',
      demo: 'https://jovial-tanuki-01d603.netlify.app/'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Explore my latest work and technical projects
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {['all', 'web', 'ai'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card group transform transition-all duration-500 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 lg:h-52 mb-6 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-400 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  <Github size={16} />
                  <span>Source</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;