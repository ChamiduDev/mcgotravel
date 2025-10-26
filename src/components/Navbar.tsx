'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Desktop & Tablet Navigation */}
      <div className="hidden lg:flex items-center justify-between h-full max-w-[1440px] mx-auto">
        {/* logogo */}
        <div className="flex-shrink-0">
          <Image
            src="/logogo.png"
            alt="McGo"
            width={114.91}
            height={33.99}
            className="w-auto h-auto"
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
          <a
            href="#destinations"
            onClick={(e) => handleNavClick(e, '#destinations')}
            className="text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Destinations
          </a>
          <a
            href="#destinations"
            onClick={(e) => handleNavClick(e, '#destinations')}
            className="text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Hotel
          </a>
          <a
            href="#flights"
            onClick={(e) => handleNavClick(e, '#flights')}
            className="text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Flights
          </a>
          <a
            href="#bookings"
            onClick={(e) => handleNavClick(e, '#bookings')}
            className="text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Bookings
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            About
          </a>
        </div>

        {/* Right Side - Login, Sign Up, Language */}
        <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Login
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-4 xl:px-6 py-2 xl:py-2.5 border border-[#212832] rounded-md text-[#212832] text-[17px] font-medium hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Sign up
          </a>
          <div className="flex items-center gap-1 text-[#212832] text-[17px] font-medium cursor-pointer hover:text-orange-500 transition-colors duration-300">
            <span>EN</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between h-full">
        <div className="flex-shrink-0">
          <Image
            src="/logogo.png"
            alt="McGo"
            width={114.91}
            height={33.99}
            className="w-auto h-auto max-w-[90px] sm:max-w-none"
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-[#212832] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg py-6 mx-6 px-6 space-y-4 rounded-b-lg">
          <a
            href="#destinations"
            className="block text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            onClick={(e) => handleNavClick(e, '#destinations')}
          >
            Destinations
          </a>
          <a
            href="#destinations"
            className="block text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            onClick={(e) => handleNavClick(e, '#destinations')}
          >
            Hotel
          </a>
          <a
            href="#flights"
            className="block text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            onClick={(e) => handleNavClick(e, '#flights')}
          >
            Flights
          </a>
          <a
            href="#bookings"
            className="block text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            onClick={(e) => handleNavClick(e, '#bookings')}
          >
            Bookings
          </a>
          <a
            href="#about"
            className="block text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
          </a>
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <a
              href="#contact"
              className="block text-[#212832] text-[17px] font-medium hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Login
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-2.5 border border-[#212832] rounded-md text-[#212832] text-[17px] font-medium hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Sign up
            </a>
            <div className="flex items-center gap-1 text-[#212832] text-[17px] font-medium">
              <span>EN</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
