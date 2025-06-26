
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, DollarSign, Users, Download, Calendar, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

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
                <h1 className="text-3xl font-bold text-white mb-2">Trust Analytics Dashboard</h1>
                <p className="text-gray-400">Monitor your sales performance and review authenticity metrics</p>
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
                      <p className="text-gray-400 text-sm">Verified Reviews</p>
                      <p className="text-2xl font-bold text-white">234</p>
                      <p className="text-green-400 text-sm">100% authentic</p>
                    </div>
                    <Shield className="h-8 w-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Trust Score</p>
                      <p className="text-2xl font-bold text-white">9.8/10</p>
                      <p className="text-green-400 text-sm">Excellent rating</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Blocked Fakes</p>
                      <p className="text-2xl font-bold text-white">47</p>
                      <p className="text-yellow-400 text-sm">AI detection active</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Revenue & Trust Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-800/50 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <p className="text-gray-400">Revenue and trust score correlation chart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Review Authenticity Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-800/50 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-400">AI detection performance metrics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Products Table */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Top Performing Products (Verified Reviews)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Web Development Course', sales: 89, revenue: '$8,811', trustScore: '9.8/10', verified: true },
                    { name: 'Digital Marketing Guide', sales: 67, revenue: '$3,283', trustScore: '9.5/10', verified: true },
                    { name: 'Design Assets Bundle', sales: 45, revenue: '$6,705', trustScore: '9.9/10', verified: true },
                  ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-white">{product.name}</h4>
                          {product.verified && (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          )}
                        </div>
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
                          <p className="text-gray-400">Trust Score</p>
                          <p className="text-blue-400 font-medium">{product.trustScore}</p>
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
