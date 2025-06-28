
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '@/contexts/AuthContext';

interface LayoutProps {
  children: ReactNode;
  userRole?: 'customer' | 'vendor' | 'admin' | null;
  userName?: string;
  showNavbar?: boolean;
  showFooter?: boolean;
}

const Layout = ({ 
  children, 
  userRole, 
  userName, 
  showNavbar = true,
  showFooter = true 
}: LayoutProps) => {
  const { user } = useAuth();
  
  // Use auth context data if available, otherwise fall back to props
  const effectiveUserRole = user?.role || userRole;
  const effectiveUserName = user?.name || userName;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {showNavbar && (
        <Navbar 
          userRole={effectiveUserRole} 
          userName={effectiveUserName}
        />
      )}
      <main className="flex-1 pt-20">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
