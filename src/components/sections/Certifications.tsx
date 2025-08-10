import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Brain, Users, Trophy, Flag } from 'lucide-react';

const Certifications: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const certifications = [
    {
      title: 'Smart India Hackathon 2024',
      issuer: 'Participated',
      date: 'March 2024',
      icon: <Trophy size={24} className="text-purple-500" />
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'January 2025',
      icon: <Award size={24} className="text-purple-500" />
    },
    {
      title: 'Service now Micro certification',
      issuer: 'Service now',
      date: 'March 2025',
      icon: <Code size={24} className="text-purple-500" />
    },
    {
      title: 'AI In Business & Management',
      issuer: 'Finalist Position',
      date: 'Feburary 2025',
      icon: <Brain size={24} className="text-purple-500" />
    },
    {
      title: 'Student Mentorship',
      issuer: 'Mohan Babu University',
      date: 'Januaray 2025',
      icon: <Users size={24} className="text-purple-500" />
    },
    {
      title: 'VR Siddhartha Engineering college',
      issuer: 'Hackathon Participated',
      date: 'Januaray 2025',
      icon: <Trophy size={24} className="text-purple-500" />
    },
    {
      title: 'Hackathon conducted',
      issuer: 'Mohan Babu University',
      date: 'April 2025',
      icon: <Trophy size={24} className="text-purple-500" />
    },
    {
      title: 'VIT-AP Cybersecurity Hackathon',
      issuer: 'Participated',
      date: 'Januaray 2025',
      icon: <Flag size={24} className="text-purple-500" />
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400">
            Recognition and milestones in my journey
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`card transform transition-all duration-500 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 lg:p-3 bg-purple-500/10 rounded-xl flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm lg:text-base text-white mb-1 leading-tight">{cert.title}</h3>
                  <p className="text-purple-400 text-xs lg:text-sm mb-2 leading-tight">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;