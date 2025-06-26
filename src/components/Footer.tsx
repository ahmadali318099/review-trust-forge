
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800/50 mt-auto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                DigitalStore
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premier destination for high-quality digital products. From eBooks to courses, licenses to tools - we've got everything you need to succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-green-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/categories" className="text-gray-400 hover:text-green-400 transition-colors">All Categories</Link></li>
              <li><Link to="/deals" className="text-gray-400 hover:text-green-400 transition-colors">Hot Deals</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-400 hover:text-green-400 transition-colors">New Arrivals</Link></li>
              <li><Link to="/bestsellers" className="text-gray-400 hover:text-green-400 transition-colors">Best Sellers</Link></li>
              <li><Link to="/free-resources" className="text-gray-400 hover:text-green-400 transition-colors">Free Resources</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/ebooks" className="text-gray-400 hover:text-green-400 transition-colors">eBooks</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-green-400 transition-colors">Online Courses</Link></li>
              <li><Link to="/software" className="text-gray-400 hover:text-green-400 transition-colors">Software & Tools</Link></li>
              <li><Link to="/templates" className="text-gray-400 hover:text-green-400 transition-colors">Templates</Link></li>
              <li><Link to="/licenses" className="text-gray-400 hover:text-green-400 transition-colors">Licenses</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 text-green-400" />
                <span>support@digitalstore.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 text-green-400 mt-1" />
                <span>123 Digital Street<br />Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 DigitalStore. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</Link>
            <Link to="/refund" className="text-gray-400 hover:text-green-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
