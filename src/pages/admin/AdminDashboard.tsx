
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Users, Flag, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '12,847', icon: Users, color: 'text-blue-400', change: '+234' },
    { label: 'Flagged Reviews', value: '45', icon: Flag, color: 'text-red-400', change: '+12' },
    { label: 'AI Accuracy', value: '98.7%', icon: Shield, color: 'text-green-400', change: '+0.3%' },
    { label: 'Active Vendors', value: '1,247', icon: TrendingUp, color: 'text-purple-400', change: '+87' },
  ];

  const recentFlags = [
    {
      id: 1,
      reviewer: 'John Smith',
      product: 'Web Dev Course',
      aiScore: 23,
      reason: 'Generic language patterns detected',
      date: '2024-01-16',
      severity: 'high'
    },
    {
      id: 2,
      reviewer: 'Sarah Chen',
      product: 'Marketing eBook',
      aiScore: 45,
      reason: 'Inconsistent with purchase history',
      date: '2024-01-15',
      severity: 'medium'
    },
    {
      id: 3,
      reviewer: 'Mike Johnson',
      product: 'Design Assets',
      aiScore: 67,
      reason: 'Potential bias detected',
      date: '2024-01-14',
      severity: 'low'
    }
  ];

  const systemMetrics = [
    { label: 'Reviews Processed Today', value: '1,234' },
    { label: 'False Positives', value: '0.8%' },
    { label: 'Manual Reviews Required', value: '23' },
    { label: 'System Uptime', value: '99.9%' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500/20 text-red-400';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'low':
        return 'bg-orange-500/20 text-orange-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <Layout userRole="admin" userName="Admin" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="admin" />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-gray-400">Monitor system performance and review moderation</p>
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
              {/* Recent Flagged Reviews */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
                    Recent Flagged Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentFlags.map((flag) => (
                      <div key={flag.id} className="p-4 bg-gray-800/50 rounded-xl">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-medium text-white">{flag.product}</h4>
                            <p className="text-gray-400 text-sm">by {flag.reviewer}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-red-400 border-red-500/30">
                              AI: {flag.aiScore}%
                            </Badge>
                            <Badge className={getSeverityColor(flag.severity)}>
                              {flag.severity}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{flag.reason}</p>
                        <p className="text-gray-500 text-xs">{flag.date}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/admin/reviews">
                    <Button variant="outline" className="w-full mt-4 border-red-500/30 text-red-400 hover:bg-red-500/10">
                      Review All Flags
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* System Metrics */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-400" />
                    System Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                        <span className="text-gray-300">{metric.label}</span>
                        <span className="font-bold text-green-400">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-medium">All systems operational</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-gray-900/50 border-gray-800 mt-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-400" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Link to="/admin/reviews">
                    <Button className="w-full bg-red-500 hover:bg-red-400 text-white">
                      Review Flags
                    </Button>
                  </Link>
                  <Link to="/admin/users">
                    <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
                      User Management
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
                    Export Reports
                  </Button>
                  <Link to="/admin/settings">
                    <Button variant="outline" className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                      System Settings
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

export default AdminDashboard;
