
import { useState } from 'react';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Package, Plus, Search, Edit, Trash2, Eye, Star } from 'lucide-react';

const VendorProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Complete Web Development Course',
      category: 'Course',
      price: 99,
      sales: 89,
      rating: 4.9,
      reviews: 156,
      status: 'active',
      created: '2024-01-01'
    },
    {
      id: 2,
      name: 'Digital Marketing eBook',
      category: 'eBook',
      price: 49,
      sales: 67,
      rating: 4.7,
      reviews: 89,
      status: 'active',
      created: '2024-01-05'
    },
    {
      id: 3,
      name: 'Premium Design Assets',
      category: 'Tools',
      price: 149,
      sales: 45,
      rating: 4.8,
      reviews: 67,
      status: 'draft',
      created: '2024-01-10'
    },
    {
      id: 4,
      name: 'Business License Kit',
      category: 'License',
      price: 79,
      sales: 23,
      rating: 4.6,
      reviews: 34,
      status: 'inactive',
      created: '2024-01-12'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'draft':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'inactive':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout userRole="vendor" userName="Vendor Pro" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="vendor" />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">My Products</h1>
                <p className="text-gray-400">Manage your digital product catalog</p>
              </div>
              
              <Button className="bg-green-500 hover:bg-green-400 text-black">
                <Plus className="h-4 w-4 mr-2" />
                Add New Product
              </Button>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900/50 border-gray-800 focus:border-green-500"
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2">{product.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-green-400 border-green-500/30">
                            {product.category}
                          </Badge>
                          <Badge className={getStatusColor(product.status)}>
                            {product.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400">Price</p>
                          <p className="font-bold text-green-400">${product.price}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Sales</p>
                          <p className="font-bold text-white">{product.sales}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Rating</p>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="font-medium text-white">{product.rating}</span>
                            <span className="text-gray-400 text-xs ml-1">({product.reviews})</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-400">Created</p>
                          <p className="text-white">{product.created}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="flex-1 border-green-500/30 text-green-400 hover:bg-green-500/10">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats Summary */}
            <Card className="bg-gray-900/50 border-gray-800 mt-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Package className="h-5 w-5 mr-2 text-green-400" />
                  Product Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{products.length}</p>
                    <p className="text-gray-400 text-sm">Total Products</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">{products.filter(p => p.status === 'active').length}</p>
                    <p className="text-gray-400 text-sm">Active</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-400">{products.filter(p => p.status === 'draft').length}</p>
                    <p className="text-gray-400 text-sm">Drafts</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{products.reduce((sum, p) => sum + p.sales, 0)}</p>
                    <p className="text-gray-400 text-sm">Total Sales</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorProducts;
