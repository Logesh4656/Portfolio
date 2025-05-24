import React from 'react';
import { Instagram, Mail, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Email</h4>
                  <a 
                    href="mailto:keerthanadvi@gmail.com" 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    keerthanadvi@gmail.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Email me for collaborations and inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mt-1">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Instagram</h4>
                  <a 
                    href="https://instagram.com/krithi__fx" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    @krithi__fx
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Follow me for latest updates and work</p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 mt-8">
                <p className="text-gray-300 text-sm">
                  I'm open to freelance opportunities, collaborations, and interesting projects. 
                  Feel free to reach out if you'd like to work together!
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;