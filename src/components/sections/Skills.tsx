import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Library, 
  Terminal,
  Users,
  Brain,
  GitBranch,
  Database,
  Palette,
  MessageSquare,
  Users as Team,
  Lightbulb,
  Trophy
} from 'lucide-react';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code className="text-purple-500" />,
      items: ['Python', 'JavaScript', 'C', 'Java']
    },
    {
      category: 'Frameworks & Libraries',
      icon: <Library className="text-purple-500" />,
      items: ['React.js', 'Node.js','TailwindCSS']
    },
    {
      category: 'Tools & Platforms',
      icon: <Terminal className="text-purple-500" />,
      items: ['Git & GitHub','VS Code', 'Figma']
    },
    {
      category: 'Soft Skills',
      icon: <Users className="text-purple-500" />,
      items: ['Communication', 'Teamwork','Leadership']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400">
            Technologies and expertise I've mastered along my journey
          </p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex}
              className={`card transform transition-all duration-500 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${groupIndex * 100}ms` }}
            >
              <div className="flex items-center mb-8">
                <div className="p-3 lg:p-4 bg-purple-500/10 rounded-xl mr-4 group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 justify-start">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                    style={{ 
                      transitionDelay: `${(groupIndex * 200) + (skillIndex * 100)}ms`
                    }}
                  >
                    <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;