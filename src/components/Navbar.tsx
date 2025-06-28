
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useCart } from './CartContext';
import CartDropdown from './CartDropdown';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut } from 'lucide-react';
import { toast } from 'sonner';

interface NavbarProps {
  userRole?: 'customer' | 'vendor' | 'admin' | null;
  userName?: string;
}

const Navbar = ({ userRole, userName }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <span className="font-sora font-bold text-xl text-gradient">
            TrustMarket
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {!userRole ? (
            <>
              <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </Link>
              <Link to="/faq" className="text-gray-300 hover:text-green-400 transition-colors">
                FAQ
              </Link>
            </>
          ) : (
            <>
              <Link 
                to={userRole === 'admin' ? '/admin/dashboard' : userRole === 'vendor' ? '/vendor/dashboard' : '/dashboard'} 
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                Dashboard
              </Link>
              {userRole === 'customer' && (
                <Link to="/products" className="text-gray-300 hover:text-green-400 transition-colors">
                  Products
                </Link>
              )}
            </>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {userRole === 'customer' && <CartDropdown />}
          
          {!userRole ? (
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-green-500 hover:bg-green-400 text-black font-semibold">
                  Join Now
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <span className="text-gray-300 text-sm">
                Welcome, {userName || 'User'}
              </span>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleLogout}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 py-4 px-6 flex flex-col items-center">
          {!userRole ? (
            <>
              <Link to="/" className="block py-2 text-gray-300 hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block py-2 text-gray-300 hover:text-green-400 transition-colors">
                About
              </Link>
              <Link to="/contact" className="block py-2 text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </Link>
              <Link to="/faq" className="block py-2 text-gray-300 hover:text-green-400 transition-colors">
                FAQ
              </Link>
              <Link to="/login" className="block py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">
                Sign In
              </Link>
              <Link to="/register" className="block py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-md">
                Join Now
              </Link>
            </>
          ) : (
            <>
              <Link 
                to={userRole === 'admin' ? '/admin/dashboard' : userRole === 'vendor' ? '/vendor/dashboard' : '/dashboard'} 
                className="block py-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                Dashboard
              </Link>
              {userRole === 'customer' && (
                <Link to="/products" className="block py-2 text-gray-300 hover:text-green-400 transition-colors">
                  Products
                </Link>
              )}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleLogout}
                className="block py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                Logout
              </Button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
