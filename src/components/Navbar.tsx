
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled?: boolean;
  userRole?: 'customer' | 'vendor' | 'admin' | null;
  userName?: string;
  cartItems?: number;
}

const Navbar = ({ scrolled = false, userRole = null, userName, cartItems = 0 }: NavbarProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-lg">AI</span>
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              TrustMarket
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-green-400 relative group ${
                  isActive(item.path) ? 'text-green-400' : 'text-gray-300'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex text-gray-300 hover:text-green-400 hover:bg-green-500/10"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-green-500 text-black text-xs p-0 flex items-center justify-center animate-pulse">
                  {cartItems}
                </Badge>
              )}
            </Button>

            {userRole ? (
              /* Profile Dropdown */
              <Button 
                variant="ghost" 
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-black" />
                </div>
                <span className="hidden md:block text-sm font-medium">
                  {userName || 'User'}
                </span>
              </Button>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-gray-300 hover:text-green-400 hover:bg-green-500/10"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    size="sm" 
                    className="bg-green-500 hover:bg-green-400 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-105"
                  >
                    Join Now
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-green-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800/50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-green-400 ${
                    isActive(item.path) ? 'text-green-400' : 'text-gray-300'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
