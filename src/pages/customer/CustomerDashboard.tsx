import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart, Package, Star, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  const stats = [
    { label: 'Total Orders', value: '12', icon: ShoppingBag, color: 'text-blue-400' },
    { label: 'Reviews Written', value: '8', icon: Heart, color: 'text-green-400' },
    { label: 'Products Owned', value: '24', icon: Package, color: 'text-purple-400' },
    { label: 'Average Rating', value: '4.8', icon: Star, color: 'text-yellow-400' },
  ];

  const recentOrders = [
    {
      id: 1,
      product: 'Complete Web Development Course',
      price: '$99',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      product: 'Digital Marketing Mastery',
      price: '$49',
      date: '2024-01-10',
      status: 'completed'
    },
    {
      id: 3,
      product: 'Premium Design Assets',
      price: '$149',
      date: '2024-01-05',
      status: 'processing'
    }
  ];

  const recentReviews = [
    {
      id: 1,
      product: 'Web Development Course',
      rating: 5,
      status: 'approved',
      date: '2024-01-16'
    },
    {
      id: 2,
      product: 'Marketing eBook',
      rating: 4,
      status: 'pending',
      date: '2024-01-12'
    }
  ];

  return (
    <Layout userRole="customer" userName="John Doe" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="customer" />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John!</h1>
              <p className="text-gray-400">Here's what's happening with your account</p>
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
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-green-400" />
                    Recent Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                        <div>
                          <h4 className="font-medium text-white">{order.product}</h4>
                          <p className="text-gray-400 text-sm">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-400">{order.price}</p>
                          <Badge 
                            variant={order.status === 'completed' ? 'default' : 'secondary'}
                            className={order.status === 'completed' ? 'bg-green-500/20 text-green-400' : ''}
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/orders">
                    <Button variant="outline" className="w-full mt-4 border-green-500/30 text-green-400 hover:bg-green-500/10">
                      View All Orders
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Recent Reviews */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-green-400" />
                    Recent Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReviews.map((review) => (
                      <div key={review.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                        <div>
                          <h4 className="font-medium text-white">{review.product}</h4>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <Badge 
                          variant={review.status === 'approved' ? 'default' : 'secondary'}
                          className={review.status === 'approved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}
                        >
                          {review.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Link to="/reviews">
                    <Button variant="outline" className="w-full mt-4 border-green-500/30 text-green-400 hover:bg-green-500/10">
                      View All Reviews
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-gray-900/50 border-gray-800 mt-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="/products">
                    <Button className="w-full bg-green-500 hover:bg-green-400 text-black">
                      Browse Products
                    </Button>
                  </Link>
                  <Link to="/orders">
                    <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
                      Track Orders
                    </Button>
                  </Link>
                  <Link to="/support">
                    <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
                      Get Support
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

export default CustomerDashboard;
