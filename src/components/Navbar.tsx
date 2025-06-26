
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, User, Settings, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavbarProps {
  userRole?: 'customer' | 'vendor' | 'admin' | null;
  userName?: string;
}

const Navbar = ({ userRole = null, userName }: NavbarProps) => {
  const location = useLocation();
  const [notifications] = useState(3);

  const isActive = (path: string) => location.pathname === path;

  const getNavItems = () => {
    if (!userRole) {
      return [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
      ];
    }

    switch (userRole) {
      case 'customer':
        return [
          { name: 'Products', path: '/products' },
          { name: 'Orders', path: '/orders' },
          { name: 'Reviews', path: '/reviews' },
        ];
      case 'vendor':
        return [
          { name: 'Dashboard', path: '/vendor/dashboard' },
          { name: 'Products', path: '/vendor/products' },
          { name: 'Analytics', path: '/vendor/analytics' },
        ];
      case 'admin':
        return [
          { name: 'Dashboard', path: '/admin/dashboard' },
          { name: 'Reviews', path: '/admin/reviews' },
          { name: 'Users', path: '/admin/users' },
        ];
      default:
        return [];
    }
  };

  return (
    <nav className="glass-effect border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-sora font-bold text-xl text-gradient">
              TrustMarket
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavItems().map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>

            {userRole ? (
              <>
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-4 w-4" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-xs p-0 flex items-center justify-center">
                      {notifications}
                    </Badge>
                  )}
                </Button>

                {/* Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <span className="hidden md:block text-sm font-medium">
                        {userName || 'User'}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
