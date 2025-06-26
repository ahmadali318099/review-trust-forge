
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Package, 
  BarChart3, 
  Users, 
  Settings, 
  Flag, 
  ShoppingBag,
  Heart,
  MessageSquare,
  User
} from 'lucide-react';

interface SidebarProps {
  userRole: 'vendor' | 'admin' | 'customer';
}

const Sidebar = ({ userRole }: SidebarProps) => {
  const location = useLocation();

  const vendorItems = [
    { name: 'Dashboard', path: '/vendor/dashboard', icon: Home },
    { name: 'Products', path: '/vendor/products', icon: Package },
    { name: 'Analytics', path: '/vendor/analytics', icon: BarChart3 },
    { name: 'Profile', path: '/vendor/profile', icon: User },
  ];

  const adminItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: Home },
    { name: 'Review Moderation', path: '/admin/reviews', icon: Flag },
    { name: 'User Management', path: '/admin/users', icon: Users },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const customerItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Products', path: '/products', icon: ShoppingBag },
    { name: 'Orders', path: '/orders', icon: Package },
    { name: 'Reviews', path: '/reviews', icon: Heart },
    { name: 'Support', path: '/support', icon: MessageSquare },
  ];

  const items = userRole === 'vendor' ? vendorItems : 
                userRole === 'admin' ? adminItems : customerItems;

  return (
    <div className="w-64 bg-gray-900/50 backdrop-blur-sm border-r border-gray-800 h-full">
      <div className="p-6">
        <h2 className="text-xl font-bold text-green-400 mb-8">
          {userRole === 'vendor' ? 'Vendor Panel' : 
           userRole === 'admin' ? 'Admin Panel' : 'Dashboard'}
        </h2>
        
        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300",
                  isActive
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
