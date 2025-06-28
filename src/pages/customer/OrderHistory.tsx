import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Package, Download, Search, Calendar, DollarSign } from 'lucide-react';

const OrderHistory = () => {
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      total: 99,
      status: 'completed',
      items: [
        {
          name: 'Complete Web Development Course',
          price: 99,
          type: 'Course',
          downloadLink: '/downloads/web-dev-course'
        }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-10',
      total: 178,
      status: 'completed',
      items: [
        {
          name: 'Digital Marketing Mastery',
          price: 49,
          type: 'eBook',
          downloadLink: '/downloads/marketing-ebook'
        },
        {
          name: 'Premium Design Assets',
          price: 129,
          type: 'Tools',
          downloadLink: '/downloads/design-assets'
        }
      ]
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-05',
      total: 79,
      status: 'processing',
      items: [
        {
          name: 'Business License Templates',
          price: 79,
          type: 'License',
          downloadLink: null
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400';
      case 'processing':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'cancelled':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Layout userRole="customer" userName="John Doe" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="customer" />
        
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Order History</h1>
                <p className="text-gray-400">Track and manage your digital product purchases</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search orders..."
                    className="pl-10 bg-gray-900/50 border-gray-800 focus:border-green-500 w-64"
                  />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Orders</p>
                      <p className="text-2xl font-bold text-white">12</p>
                    </div>
                    <Package className="h-8 w-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Spent</p>
                      <p className="text-2xl font-bold text-white">$1,247</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">This Month</p>
                      <p className="text-2xl font-bold text-white">3</p>
                    </div>
                    <Calendar className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Orders List */}
            <div className="space-y-6">
              {orders.map((order) => (
                <Card key={order.id} className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-white">{order.id}</CardTitle>
                        <p className="text-gray-400 text-sm mt-1">{order.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-xl font-bold text-green-400">${order.total}</p>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                          <div className="flex-1">
                            <h4 className="font-medium text-white">{item.name}</h4>
                            <div className="flex items-center space-x-4 mt-1">
                              <Badge variant="outline" className="text-green-400 border-green-500/30">
                                {item.type}
                              </Badge>
                              <span className="text-gray-400 text-sm">${item.price}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {item.downloadLink && (
                              <Button 
                                size="sm" 
                                className="bg-green-500 hover:bg-green-400 text-black"
                              >
                                <Download className="h-4 w-4 mr-1" />
                                Download
                              </Button>
                            )}
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                className="border-green-500/30 text-green-400 hover:bg-green-500/10"
              >
                Load More Orders
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderHistory;
