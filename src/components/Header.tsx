import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Company', 
      href: '/about',
      dropdown: [
        { name: 'Our Story', href: '/our-story' },
        { name: 'Vision, Mission & Values', href: '/vision-mission-values' },
        { name: 'Leadership Team', href: '/leadership-team' },
        { name: 'CSR Initiatives', href: '/csr-initiatives' },
        { name: 'Achievements & Awards', href: '/achievements-awards' }
      ]
    },
    { 
      name: 'Manufacturing', 
      href: '/manufacturing',
      dropdown: [
        { name: 'Manufacturing Facilities', href: '/manufacturing-facilities' },
        { name: 'Production Processes', href: '/production-processes' },
        { name: 'Quality Control & Testing', href: '/quality-control-testing' },
        { name: 'In-House Tooling & Moulding', href: '/in-house-tooling-moulding' },
        { name: 'Material Compounding', href: '/material-compounding' },
        { name: 'R&D & Innovation', href: '/rd-innovation' }
      ]
    },
    { 
      name: 'Products', 
      href: '/products',
      dropdown: [
        { name: 'Rubber Components', href: '/products#rubber-components' },
        { name: 'Plastic Components', href: '/products#plastic-components' },
        { name: 'PVC & Utility Components', href: '/products#pvc-utility-components' },
        { name: 'EPDM / Silicone Profiles', href: '/products#epdm-silicone-profiles' }
      ]
    },
    { 
      name: 'Capabilities', 
      href: '/capabilities',
      dropdown: [
        { name: 'In-House Compounding', href: '/capabilities/in-house-compounding' },
        { name: 'Technical Expertise', href: '/capabilities/technical-expertise' },
        { name: 'Testing & Quality Assurance', href: '/capabilities/testing-quality-assurance' },
        { name: 'Product Customization', href: '/capabilities/product-customization' },
        { name: 'Large-Scale Production', href: '/capabilities/large-scale-production' },
        { name: 'Prototype Development', href: '/capabilities/prototype-development' },
        { name: 'Supply Chain & Logistics', href: '/capabilities/supply-chain-logistics' }
      ]
    },
    { 
      name: 'Compliance', 
      href: '/compliance',
      dropdown: [
        { name: 'Quality Management System', href: '/compliance/quality-management-system' },
        { name: 'Environmental Standards', href: '/compliance/environmental-standards' },
        { name: 'Occupational Health & Safety', href: '/compliance/occupational-health-safety' },
        { name: 'Material Compliance Certifications', href: '/compliance/material-compliance-certifications' }
      ]
    },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Industries Served', href: '/industries' }
  ];

  const handleDropdownToggle = (linkName: string) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  return (
    <header
      className={`sticky top-0 z-50 h-20 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Millat Polymer Logo"
            className="w-32 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block text-gray-800 font-medium text-sm xl:text-base tracking-wide">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {navigationLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <Link
                      to={link.href}
                      className={`relative px-3 xl:px-4 py-3 whitespace-nowrap transition-all duration-200 flex items-center ${
                        location.pathname === link.href || link.dropdown.some(item => location.pathname === item.href)
                          ? 'text-[#00B9B3] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#00B9B3]'
                          : 'hover:text-[#00B9B3]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999] pointer-events-none group-hover:pointer-events-auto border border-gray-100">
                      <div className="py-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00B9B3] transition-colors text-sm font-medium"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`relative px-3 xl:px-4 py-3 whitespace-nowrap transition-all duration-200 ${
                      location.pathname === link.href
                        ? 'text-[#00B9B3] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#00B9B3]'
                        : 'hover:text-[#00B9B3]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden lg:inline-block bg-[#FF6F3C] text-white px-5 py-3 rounded-full shadow-md hover:bg-opacity-90 transition-all duration-200 font-semibold text-sm"
        >
          get in<br />touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#00B9B3] transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="p-4 flex justify-between items-center">
            <img
              src="/images/logo.png"
              alt="Millat Polymer"
              className="w-[180px] object-contain"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-[#00B9B3] transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Scrollable Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {navigationLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between w-full text-base font-semibold transition-colors py-2.5 border-b border-gray-100 tracking-wide ${
                        location.pathname === link.href || link.dropdown.some(item => location.pathname === item.href)
                          ? 'text-[#00B9B3]'
                          : 'text-gray-700 hover:text-[#00B9B3]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    <button
                      className={`relative px-2 xl:px-2.5 py-2 whitespace-nowrap transition-all duration-200 flex items-center ${
                        location.pathname === link.href || link.dropdown.some(item => location.pathname === item.href)
                          ? 'text-[#00B9B3] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#00B9B3]'
                          : 'hover:text-[#00B9B3]'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999] pointer-events-none group-hover:pointer-events-auto">
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#00B9B3] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`relative px-2 xl:px-2.5 py-2 whitespace-nowrap transition-all duration-200 ${
                      location.pathname === link.href
                        ? 'text-[#00B9B3] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#00B9B3]'
                        : 'hover:text-[#00B9B3]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile "Get in Touch" Button */}
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/contact"
              className="bg-[#FF6F3C] text-white px-4 py-3 rounded-full shadow-md hover:bg-opacity-90 transition-all duration-200 font-medium inline-block mt-4 text-center text-sm leading-tight"
            >
              get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;