"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#2d3240]/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-2xl font-bold text-white hover:text-[#f7b62a] transition-colors">
          JK<span className="text-[#f7b62a]">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#works" className="text-gray-300 hover:text-white transition-colors">
            Works
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/kumarjitendra1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#f7b62a] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Jittub45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#f7b62a] transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://twitter.com/jittub45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#f7b62a] transition-colors"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
