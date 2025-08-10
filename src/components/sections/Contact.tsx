import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-black/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to collaborate? I'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact Info */}
          <div className="space-y-6 lg:pr-4">
            <div className="card">
              <div className="flex items-center mb-8">
                <MessageCircle size={28} className="text-purple-500 mr-3" />
                <h3 className="text-2xl font-bold">Get in Touch</h3>
              </div>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                I'm always excited to discuss new opportunities, innovative projects, or just have a friendly chat about technology and development.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center group hover:scale-[1.02] transition-all duration-300">
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mr-6 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 flex-shrink-0">
                    <Mail size={24} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm text-gray-400 mb-1 uppercase tracking-wide">Email</h4>
                    <a 
                      href="mailto:gvamsi.edu@gmail.com" 
                      className="text-lg font-medium hover:text-purple-400 transition-colors break-all"
                    >
                      gvamsi.edu@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group hover:scale-[1.02] transition-all duration-300">
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mr-6 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 flex-shrink-0">
                    <Phone size={24} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm text-gray-400 mb-1 uppercase tracking-wide">Phone</h4>
                    <a 
                      href="tel:+917337334419" 
                      className="text-lg font-medium hover:text-purple-400 transition-colors"
                    >
                      +91 7337334419
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group hover:scale-[1.02] transition-all duration-300">
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mr-6 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 flex-shrink-0">
                    <MapPin size={24} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm text-gray-400 mb-1 uppercase tracking-wide">Location</h4>
                    <p className="text-lg font-medium">Tirupati, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Social Links & CTA */}
          <div className="space-y-6 lg:pl-4">
            <div className="card">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Send size={28} className="text-purple-500 mr-3" />
                Connect With Me
              </h3>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                Follow my journey and connect with me on social platforms. I regularly share insights about development, AI, and tech trends.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://github.com/Vamsi-Sanjeev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-5 bg-white/5 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group border border-white/10 hover:border-purple-500/30 hover:scale-[1.02]"
                >
                  <Github size={24} className="text-gray-400 group-hover:text-purple-400 mr-4 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-purple-400">GitHub</h4>
                    <p className="text-sm text-gray-400">Check out my repositories and contributions</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/vamsisanjeevgangam/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-5 bg-white/5 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group border border-white/10 hover:border-purple-500/30 hover:scale-[1.02]"
                >
                  <Linkedin size={24} className="text-gray-400 group-hover:text-purple-400 mr-4 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-purple-400">LinkedIn</h4>
                    <p className="text-sm text-gray-400">Let's connect professionally</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="card bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6">Ready to Start a Project?</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether it's a web application, AI solution, or just brainstorming ideas, I'm here to help bring your vision to life.
                </p>
                <a 
                  href="mailto:gvamsi.edu@gmail.com?subject=Project Collaboration&body=Hi Vamsi, I'd like to discuss a project with you."
                  className="btn-primary inline-flex items-center group hover:scale-105"
                >
                  <Mail size={20} className="mr-2" />
                  Start a Conversation
                  <Send size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Response time info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-sm text-gray-300 text-center">
              Thank you for visiting my portfolio. I welcome your inquiries and will respond promptly.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;