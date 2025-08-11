import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative text-black overflow-hidden"
      style={{
        backgroundImage: 'url(https://i.postimg.cc/SQWBn4yB/Untitled.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-white/80 z-10" />
      <div className="relative z-20 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Millat Polymer</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Pioneering high-performance polymer solutions for various industries worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/millatpolymer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/millat-polymer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-700 hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/products" className="block text-gray-700 hover:text-primary transition-colors text-sm">
                Products
              </Link>
              <Link to="/contact" className="block text-gray-700 hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Explore</h4>
            <nav className="space-y-2">
              <Link to="/industries" className="block text-gray-700 hover:text-primary transition-colors text-sm">
                Industries
              </Link>
              <Link to="/manufacturing" className="block text-gray-700 hover:text-primary transition-colors text-sm">
                Manufacturing
              </Link>
              <Link to="/certifications" className="block text-gray-700 hover:text-primary transition-colors text-sm">
                Certifications
              </Link>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+923008474507"
                className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>+92 300 8474507</span>
              </a>
              <a
                href="mailto:millatpolymer@gmail.com"
                className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>millatpolymer@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923008474507"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-700 hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-700 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Omer Chowk, Bund Road, Lahore, Punjab, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Millat Polymer Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;