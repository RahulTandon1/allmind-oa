"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Handle scroll event for navbar color change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle clicks outside of dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        hamburgerRef.current && 
        !dropdownRef.current.contains(event.target) && 
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav id="navbar" className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/assets/images/main-camelai.png" 
                  alt="camelAI logo" 
                  width={150} 
                  height={40} 
                  priority
                />
              </Link>
            </div>
            
            <div className="flex items-center">
              {/* Desktop navigation */}
              <ul className="hidden md:flex space-x-8">
                <li>
                  <a 
                    href="https://camelai.com/blog" 
                    className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link 
                    href="/pricing" 
                    className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://app.camelai.com" 
                    className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
                  >
                    Log in
                  </a>
                </li>
              </ul>
              
              {/* Mobile navigation */}
              <div className="md:hidden relative">
                <button
                  ref={hamburgerRef}
                  className="p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Image 
                    src="/assets/images/menu-button.png" 
                    alt="menu button" 
                    width={24}
                    height={24}
                  />
                </button>
                
                {/* Dropdown menu */}
                <ul 
                  ref={dropdownRef}
                  className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 transition-opacity duration-200 ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <li>
                    <a 
                      href="https://camelai.com/blog" 
                      className="block px-4 py-2 text-gray-500 hover:bg-gray-100"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <Link 
                      href="/pricing" 
                      className="block px-4 py-2 text-gray-500 hover:bg-gray-100"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://app.camelai.com" 
                      className="block px-4 py-2 text-gray-500 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;