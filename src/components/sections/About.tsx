import React from 'react';
import { GraduationCap, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-6 md:pr-12">
            <div className="mb-8">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a Computer Science student at Mohan Babu University, specializing in full-stack development and AI solutions. With a strong foundation in modern web technologies, I focus on creating responsive and user-friendly applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm passionate about <span className="text-purple-400 font-semibold">solving real-world problems through code</span> and constantly exploring new technologies. Currently diving deep into <span className="text-purple-400 font-semibold">cloud computing</span>, <span className="text-purple-400 font-semibold">AI integration</span>, and <span className="text-purple-400 font-semibold">modern web frameworks</span>.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-white mb-2">Education</h3>
                <p className="text-gray-400">B.Tech in Computer Science</p>
                <p className="text-purple-500 text-sm">Mohan Babu University — 2025 CGPA-8.26</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-white mb-2">Interests</h3>
                <p className="text-gray-400">UI Design, Machine Learning, Cloud Computing</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative flex justify-center">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                <img 
                  src="WhatsApp Image 2025-08-09 at 20.21.23_a558daca.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-700 ease-out cursor-pointer"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;