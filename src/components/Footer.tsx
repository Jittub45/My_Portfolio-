"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#2d3240] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Link href="/" className="text-2xl font-bold text-white hover:text-[#f7b62a] transition-colors">
              JK<span className="text-[#f7b62a]">.</span>
            </Link>
            <p className="text-gray-500 text-sm mt-2 flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Jitendra Kumar
            </p>
            <p className="text-gray-600 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-8"
          >
            <Link href="#works" className="text-gray-400 hover:text-white transition-colors text-sm">
              Works
            </Link>
            <Link href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm">
              Skills
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/kumarjitendra1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-[#6b7bd2] hover:bg-[#6b7bd2]/10 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Jittub45"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/jittub45"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-[#f7b62a] hover:bg-[#f7b62a]/10 transition-all"
            >
              <Twitter size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
