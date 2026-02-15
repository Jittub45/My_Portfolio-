"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#2d3240] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact<span className="text-[#f7b62a]">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/kumarjitendra1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
            >
              <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Linkedin className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </h4>
                <p className="text-gray-400 text-sm">Connect with me on LinkedIn</p>
              </div>
              <Send className="ml-auto text-gray-500 group-hover:text-blue-400 transition-colors" size={20} />
            </a>

            {/* Email Card */}
            <a
              href="mailto:jitendrakumaryadav2003@gmail.com?subject=Hello%20Jitendra&body=Hello%20Jitendra,%0A%0AI%20would%20like%20to%20connect%20with%20you..."
              className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#f7b62a]/50 hover:bg-[#f7b62a]/5 transition-all group"
            >
              <div className="p-3 bg-[#f7b62a]/20 rounded-xl group-hover:bg-[#f7b62a]/30 transition-colors">
                <Mail className="text-[#f7b62a]" size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold group-hover:text-[#f7b62a] transition-colors">
                  Email
                </h4>
                <p className="text-gray-400 text-sm">jitendrakumaryadav2003@gmail.com</p>
              </div>
              <Send className="ml-auto text-gray-500 group-hover:text-[#f7b62a] transition-colors" size={20} />
            </a>

            {/* Phone Card */}
            <a
              href="tel:+916304948909"
              className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-green-500/50 hover:bg-green-500/5 transition-all group"
            >
              <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors">
                <Phone className="text-green-400" size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                  Phone
                </h4>
                <p className="text-gray-400 text-sm">+91 6304948909</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <MapPin className="text-orange-400" size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-400 text-sm">Champaran, Bihar</p>
              </div>
            </div>
          </motion.div>

          {/* Education & Publications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6">Education</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#f7b62a] via-[#6b7bd2] to-[#434f63]" />
                
                <div className="space-y-8">
                  {/* LPU */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#f7b62a] border-4 border-[#2d3240] shadow-lg shadow-[#f7b62a]/50" />
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#f7b62a]/50 transition-all">
                      <span className="text-[#f7b62a] text-sm font-medium">2022 - 2026</span>
                      <h4 className="text-white font-semibold mt-1">Lovely Professional University</h4>
                      <p className="text-gray-400 text-sm mt-1">B.Tech - Computer Science</p>
                    </div>
                  </div>
                  
                  {/* Arya Vidyapith */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#6b7bd2] border-4 border-[#2d3240] shadow-lg shadow-[#6b7bd2]/50" />
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#6b7bd2]/50 transition-all">
                      <span className="text-[#6b7bd2] text-sm font-medium">2019 - 2021</span>
                      <h4 className="text-white font-semibold mt-1">Arya Vidyapith School</h4>
                      <p className="text-gray-400 text-sm mt-1">Senior Secondary - Mathematics</p>
                    </div>
                  </div>
                  
                  {/* Heritage Valley */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#434f63] border-4 border-[#2d3240]" />
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#434f63]/50 transition-all">
                      <span className="text-[#434f63] text-sm font-medium">2010 - 2019</span>
                      <h4 className="text-white font-semibold mt-1">Heritage Valley The Indian School</h4>
                      <p className="text-gray-400 text-sm mt-1">Primary & Secondary Education</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications */}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
