
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, DollarSign, Users, Download, Calendar } from 'lucide-react';

const VendorAnalytics = () => {
  return (
    <Layout userRole="vendor" userName="Vendor Pro" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="vendor" />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
                <p className="text-gray-400">Track your sales performance and customer insights</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Card className="bg-gray-900/50 border-gray-800 p-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-green-400" />
                    <span className="text-white text-sm">Last 30 days</span>
                  </div>
                </Card>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Revenue</p>
                      <p className="text-2xl font-bold text-white">$12,847</p>
                      <p className="text-green-400 text-sm">+12% from last month</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Orders</p>
                      <p className="text-2xl font-bold text-white">234</p>
                      <p className="text-green-400 text-sm">+8% from last month</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Customers</p>
                      <p className="text-2xl font-bold text-white">189</p>
                      <p className="text-green-400 text-sm">+15% from last month</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Conversion</p>
                      <p className="text-2xl font-bold text-white">12.3%</p>
                      <p className="text-green-400 text-sm">+2.1% from last month</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Revenue Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-800/50 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <p className="text-gray-400">Revenue chart would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Product Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-800/50 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-400">Product performance chart would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Products Table */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Top Performing Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Web Development Course', sales: 89, revenue: '$8,811', conversion: '15.2%' },
                    { name: 'Digital Marketing Guide', sales: 67, revenue: '$3,283', conversion: '12.8%' },
                    { name: 'Design Assets Bundle', sales: 45, revenue: '$6,705', conversion: '18.4%' },
                  ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{product.name}</h4>
                      </div>
                      <div className="flex items-center space-x-8 text-sm">
                        <div className="text-center">
                          <p className="text-gray-400">Sales</p>
                          <p className="text-white font-medium">{product.sales}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-400">Revenue</p>
                          <p className="text-green-400 font-medium">{product.revenue}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-400">Conversion</p>
                          <p className="text-blue-400 font-medium">{product.conversion}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorAnalytics;
