
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Public pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Customer pages
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import ProductListing from "./pages/customer/ProductListing";
import ProductDetail from "./pages/customer/ProductDetail";
import OrderHistory from "./pages/customer/OrderHistory";
import ReviewHistory from "./pages/customer/ReviewHistory";
import SupportPage from "./pages/customer/SupportPage";

// Vendor pages
import VendorDashboard from "./pages/vendor/VendorDashboard";
import VendorProducts from "./pages/vendor/VendorProducts";
import VendorAnalytics from "./pages/vendor/VendorAnalytics";
import VendorProfile from "./pages/vendor/VendorProfile";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ReviewModeration from "./pages/admin/ReviewModeration";
import UserManagement from "./pages/admin/UserManagement";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Customer Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <CustomerDashboard />
                </ProtectedRoute>
              } />
              <Route path="/products" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <ProductListing />
                </ProtectedRoute>
              } />
              <Route path="/product/:id" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <ProductDetail />
                </ProtectedRoute>
              } />
              <Route path="/orders" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <OrderHistory />
                </ProtectedRoute>
              } />
              <Route path="/reviews" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <ReviewHistory />
                </ProtectedRoute>
              } />
              <Route path="/support" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <SupportPage />
                </ProtectedRoute>
              } />
              
              {/* Vendor Protected Routes */}
              <Route path="/vendor/dashboard" element={
                <ProtectedRoute allowedRoles={['vendor']}>
                  <VendorDashboard />
                </ProtectedRoute>
              } />
              <Route path="/vendor/products" element={
                <ProtectedRoute allowedRoles={['vendor']}>
                  <VendorProducts />
                </ProtectedRoute>
              } />
              <Route path="/vendor/analytics" element={
                <ProtectedRoute allowedRoles={['vendor']}>
                  <VendorAnalytics />
                </ProtectedRoute>
              } />
              <Route path="/vendor/profile" element={
                <ProtectedRoute allowedRoles={['vendor']}>
                  <VendorProfile />
                </ProtectedRoute>
              } />
              
              {/* Admin Protected Routes */}
              <Route path="/admin/dashboard" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/reviews" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <ReviewModeration />
                </ProtectedRoute>
              } />
              <Route path="/admin/users" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <UserManagement />
                </ProtectedRoute>
              } />
              <Route path="/admin/settings" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminSettings />
                </ProtectedRoute>
              } />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
