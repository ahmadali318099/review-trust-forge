
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Search, ArrowLeft, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Badge className="bg-red-500/20 text-red-400 mb-6">Error 404</Badge>
          
          <div className="mb-8">
            <AlertTriangle className="h-24 w-24 text-red-400 mx-auto mb-6" />
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-400 mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Our AI systems couldn't locate this trusted resource.
            </p>
          </div>

          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">What you can do:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Check the URL for typos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Browse our trusted products</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Search for what you need</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <span className="text-gray-300">Contact our support team</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-green-500 hover:bg-green-400 text-black font-semibold">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                <Search className="h-4 w-4 mr-2" />
                Browse Products
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-400 hover:bg-gray-800"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
