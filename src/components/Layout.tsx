
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  userRole?: 'customer' | 'vendor' | 'admin' | null;
  userName?: string;
  cartItems?: number;
  showNavbar?: boolean;
  showFooter?: boolean;
}

const Layout = ({ 
  children, 
  userRole = null, 
  userName, 
  cartItems = 0,
  showNavbar = true,
  showFooter = true 
}: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {showNavbar && (
        <Navbar 
          userRole={userRole} 
          userName={userName}
          cartItems={cartItems}
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
