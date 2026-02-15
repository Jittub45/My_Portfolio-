import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import portpic from './logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="py-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center z-10">
          <img
            src={portpic}
            alt="Jitendra Kumar"
            className="h-8 md:h-14"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('about-me')} 
            className="text-white hover:text-karate-purple transition-colors"
          >
            About Me
          </button>

          <button 
            onClick={() => handleNavClick('projects')} 
            className="text-white hover:text-karate-purple transition-colors"
          >
            Projects
          </button>
          
          <button 
            onClick={() => handleNavClick('skills')} 
            className="text-white hover:text-karate-purple transition-colors"
          >
            Skills
          </button>
          
          <button 
            onClick={() => handleNavClick('resume')} 
            className="text-white hover:text-karate-purple transition-colors"
          >
            Resume
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-white hover:text-karate-purple transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <IoCloseOutline size={28} />
          ) : (
            <IoMenuOutline size={28} />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-karate-darkblue bg-opacity-95 flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-6 text-xl">
              <button 
                onClick={() => handleNavClick('about-me')} 
                className="text-white hover:text-karate-purple transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => handleNavClick('projects')} 
                className="text-white hover:text-karate-purple transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavClick('skills')} 
                className="text-white hover:text-karate-purple transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => handleNavClick('resume')} 
                className="text-white hover:text-karate-purple transition-colors"
              >
                Resume
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="text-white hover:text-karate-purple transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
