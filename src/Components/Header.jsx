import React, { useState } from 'react';
import logo from '../assets/CogniwideNewLogo.png'; // Adjust path if your file structure differs

// Enhanced Chevron Icon with better styling
const ChevronDownIcon = ({ className }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation configuration - easily modify routes here
  const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Company', path: '/company' },
    { name: 'Contact', path: '/contact' }
  ];

  const dropdownContent = {
    Products: [
      { title: 'CogniXcelerate', path: '/cognixcelerate' },
      { title: 'CogniLoom', path: '/cogniloom' },
      { title: 'CogniAssist', path: '/cogniassist' },
      { title: 'CogniAgent', path: '/cogniagent' }
    ],
    Services: [
      { 
        title: 'Platform Engineering', 
        subtitle: 'Cloud and DevOps Services',
        path: '/platformengineering'
      },
      { 
        title: 'AI Powered SDLC', 
        subtitle: 'From ideation to deployment',
        path: '/aipoweredsdlc'
      },
      { 
        title: 'AI Powered QA', 
        subtitle: 'Elevate QA to the strategic function it was always meant to be',
        path: '/aipoweredqa'
      },
    ],
    Company: [
      { title: 'About Us', path: '/about' },
      { title: 'Leadership Team', path: '/leadership' },
      { title: 'Life at Cogniwide', path: '/life' },
      { title: 'Careers', path: '/careers' }
    ],
  };

  const handleMouseEnter = (item) => {
    if (dropdownContent[item]) {
      setActiveDropdown(item);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavigation = (path) => {
    // Close mobile menu when navigating
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    
    // Navigate to the path (you can replace this with your routing solution)
    window.location.href = path;
    
    // If using React Router, replace the above line with:
    // navigate(path);
    
    // If using Next.js, replace with:
    // router.push(path);
  };

  const DropdownMenu = ({ item, content }) => {
    const isServices = item === 'Services';
    const isActive = activeDropdown === item;

    return (
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ease-out z-50
          ${isActive ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
      >
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 w-auto min-w-[280px] max-w-[320px] overflow-hidden">
          
          {isServices ? (
            <div className="p-4">
              {content.map((service, index) => (
                <div key={index}>
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(service.path);
                    }}
                    className="block p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group"
                  >
                    <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-purple-700">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {service.subtitle}
                    </p>
                  </a>
                  {/* sleek light divider (not after last item) */}
                  {index < content.length - 1 && (
                    <div className="mx-4 border-b border-gray-100"></div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-2">
              {content.map((subItem, index) => (
                <div key={index}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(subItem.path);
                    }}
                    className="block px-4 py-3 text-sm text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-lg transition-all duration-200"
                  >
                    {subItem.title}
                  </a>
                  {/* sleek light divider (not after last item) */}
                  {index < content.length - 1 && (
                    <div className="mx-4 border-b border-gray-100"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <header className="fixed w-full top-0 z-40 bg-purple-400/8 backdrop-blur-xl shadow-lg border-b border-purple-200/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo image (replaces text title) */}
          <div className="flex-shrink-0 mt-2">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
              className="inline-flex items-center"
            >
              <img
                src={logo}
                alt="Cogniwide Logo"
                className="h-8 w-auto object-contain select-none"
                draggable="false"
              />
            </a>
          </div>
          
          {/* Desktop Navigation with highly visible hover effects */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-1">
              {navItems.map(item => (
                <li 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (!dropdownContent[item.name]) {
                        handleNavigation(item.path);
                      }
                    }}
                    className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer
                      ${activeDropdown === item.name 
                        ? 'text-purple-800 bg-purple-200/80' 
                        : 'text-gray-700 hover:text-purple-700 hover:bg-purple-200/60'
                      }`
                    }
                  >
                    <span className="relative z-10">{item.name}</span>
                    {dropdownContent[item.name] && (
                      <ChevronDownIcon 
                        className={`w-3.5 h-3.5 transition-all duration-300 ${
                          activeDropdown === item.name ? 'rotate-180 text-purple-600' : 'text-gray-500 group-hover:text-purple-600'
                        }`}
                      />
                    )}
                  </a>
                  
                  {/* Perfect sized center-expanding underline */}
                  <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full transition-all duration-400 transform -translate-x-1/2 origin-center ${
                    activeDropdown === item.name 
                      ? 'w-3/4 scale-x-100 opacity-100' 
                      : 'w-3/4 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`}></div>
                  
                  {dropdownContent[item.name] && (
                    <DropdownMenu item={item.name} content={dropdownContent[item.name]} />
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          {/* CTA Button with perfect styling */}
          <div className="hidden lg:flex flex-shrink-0">
            <button 
              onClick={() => handleNavigation('/demo')}
              className="relative bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400/40 overflow-hidden group"
            >
              <span className="relative z-10">Request Demo</span>
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-700 focus:outline-none p-2.5 rounded-xl hover:bg-purple-200/60 transition-all duration-300"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-purple-300/30 mt-4">
            <div className="py-4 space-y-2">
              {navItems.map(item => (
                <div key={item.name} className="relative group">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.path);
                    }}
                    className="block px-4 py-3 text-gray-700 hover:text-purple-700 hover:bg-purple-200/60 rounded-xl transition-all duration-300 font-medium relative"
                  >
                    {item.name}
                    {/* Perfect sized center-expanding underline for mobile */}
                    <div className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full transition-all duration-400 transform -translate-x-1/2 origin-center w-2/3 scale-x-0 group-hover:scale-x-100"></div>
                  </a>
                </div>
              ))}
              <div className="pt-4 px-4">
                <button 
                  onClick={() => handleNavigation('/demo')}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
