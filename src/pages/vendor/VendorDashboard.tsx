
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, Package, DollarSign, Star, TrendingUp, Users, Eye, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorDashboard = () => {
  const stats = [
    { label: 'Total Revenue', value: '$12,847', icon: DollarSign, color: 'text-green-400', change: '+12%' },
    { label: 'Products Sold', value: '234', icon: Package, color: 'text-blue-400', change: '+8%' },
    { label: 'Active Products', value: '18', icon: Eye, color: 'text-purple-400', change: '+2%' },
    { label: 'Avg Rating', value: '4.8', icon: Star, color: 'text-yellow-400', change: '+0.2%' },
  ];

  const recentSales = [
    {
      id: 1,
      product: 'Complete Web Development Course',
      customer: 'John Doe',
      amount: '$99',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      product: 'Digital Marketing eBook',
      customer: 'Sarah Chen',
      amount: '$49',
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      product: 'Premium Design Assets',
      customer: 'Mike Johnson',
      amount: '$149',
      date: '2024-01-13',
      status: 'processing'
    }
  ];

  const topProducts = [
    {
      name: 'Web Development Course',
      sales: 89,
      revenue: '$8,811',
      rating: 4.9
    },
    {
      name: 'Digital Marketing Guide',
      sales: 67,
      revenue: '$3,283',
      rating: 4.7
    },
    {
      name: 'Design Assets Bundle',
      sales: 45,
      revenue: '$6,705',
      rating: 4.8
    }
  ];

  return (
    <Layout userRole="vendor" userName="Vendor Pro" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="vendor" />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Vendor Dashboard</h1>
              <p className="text-gray-400">Welcome back! Here's your business overview</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                        <p className="text-green-400 text-sm mt-1">{stat.change}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Sales */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-green-400" />
                    Recent Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentSales.map((sale) => (
                      <div key={sale.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                        <div>
                          <h4 className="font-medium text-white">{sale.product}</h4>
                          <p className="text-gray-400 text-sm">{sale.customer} • {sale.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-400">{sale.amount}</p>
                          <Badge 
                            variant={sale.status === 'completed' ? 'default' : 'secondary'}
                            className={sale.status === 'completed' ? 'bg-green-500/20 text-green-400' : ''}
                          >
                            {sale.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/vendor/analytics">
                    <Button variant="outline" className="w-full mt-4 border-green-500/30 text-green-400 hover:bg-green-500/10">
                      View All Sales
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Top Products */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                    Top Performing Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                        <div>
                          <h4 className="font-medium text-white">{product.name}</h4>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-gray-400 text-sm">{product.sales} sales</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                              <span className="text-yellow-400 text-sm">{product.rating}</span>
                            </div>
                          </div>
                        </div>
                        <p className="font-bold text-green-400">{product.revenue}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/vendor/products">
                    <Button variant="outline" className="w-full mt-4 border-green-500/30 text-green-400 hover:bg-green-500/10">
                      Manage Products
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-gray-900/50 border-gray-800 mt-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Package className="h-5 w-5 mr-2 text-green-400" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Link to="/vendor/products">
                    <Button className="w-full bg-green-500 hover:bg-green-400 text-black">
                      Add New Product
                    </Button>
                  </Link>
                  <Link to="/vendor/analytics">
                    <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
                      View Analytics
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                  <Link to="/vendor/profile">
                    <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
                      Update Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorDashboard;
