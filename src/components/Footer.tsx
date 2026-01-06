import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube, Disc as Discord } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Browse Events', path: '/shop' },
      { name: 'Book Tickets', path: '/booking' },
      { name: 'Tournament Calendar', path: '/shop' },
      { name: 'Live Streams', path: '#' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '#' },
      { name: 'Press Kit', path: '#' },
      { name: 'Contact', path: '#' },
    ],
    support: [
      { name: 'Help Center', path: '#' },
      { name: 'Ticket Support', path: '#' },
      { name: 'Refund Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
    ],
    community: [
      { name: 'Discord Server', path: '#' },
      { name: 'Forums', path: '#' },
      { name: 'Player Hub', path: '#' },
      { name: 'Tournaments', path: '/shop' },
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Discord, href: '#', label: 'Discord' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 md:col-span-4 sm:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <Gamepad2 className="h-10 w-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  eSportsTix
                </span>
              </Link>
              
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                The world's premier eSports ticketing platform. Experience the thrill of competitive gaming with exclusive access to the biggest tournaments and events worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span>support@esportstix.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group relative p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Platform
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
              </h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Company
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Support
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative">
                Community
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
              </h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-white font-bold text-xl mb-2">Stay in the Game</h3>
                <p className="text-gray-400">Get the latest tournament updates and exclusive offers</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 min-w-[300px]"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm">
                © {currentYear} eSportsTix. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Cookie Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Legal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;