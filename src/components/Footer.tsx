
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
                <span className="text-black font-bold text-lg">AI</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                TrustMarket
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The world's first AI-powered e-commerce platform that detects and eliminates fake reviews. Shop with confidence knowing every review is authentic and every rating is verified.
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

          {/* Platform Features */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">Platform Features</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/ai-detection" className="text-gray-400 hover:text-green-400 transition-colors">AI Review Detection</Link></li>
              <li><Link to="/verified-reviews" className="text-gray-400 hover:text-green-400 transition-colors">Verified Reviews</Link></li>
              <li><Link to="/real-time-monitoring" className="text-gray-400 hover:text-green-400 transition-colors">Real-Time Monitoring</Link></li>
              <li><Link to="/trust-score" className="text-gray-400 hover:text-green-400 transition-colors">Trust Score System</Link></li>
              <li><Link to="/fraud-protection" className="text-gray-400 hover:text-green-400 transition-colors">Fraud Protection</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">Verified Categories</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/ebooks" className="text-gray-400 hover:text-green-400 transition-colors">eBooks</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-green-400 transition-colors">Online Courses</Link></li>
              <li><Link to="/software" className="text-gray-400 hover:text-green-400 transition-colors">Software & Tools</Link></li>
              <li><Link to="/templates" className="text-gray-400 hover:text-green-400 transition-colors">Templates</Link></li>
              <li><Link to="/licenses" className="text-gray-400 hover:text-green-400 transition-colors">Licenses</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white text-lg">Support & Trust</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 text-green-400" />
                <span>trust@trustmarket.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+1 (555) AI-TRUST</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 text-green-400 mt-1" />
                <span>123 AI Trust Boulevard<br />Tech Valley, CA 94043</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TrustMarket AI. All rights reserved. Powered by advanced AI technology.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</Link>
            <Link to="/trust-policy" className="text-gray-400 hover:text-green-400 transition-colors">Trust Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
