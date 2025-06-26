
import { useState } from 'react';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Search, Shield, Ban, UserCheck, Mail, Calendar } from 'lucide-react';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'customer',
      status: 'active',
      joinDate: '2024-01-15',
      orders: 12,
      reviews: 8,
      flaggedReviews: 0
    },
    {
      id: 2,
      name: 'Vendor Pro',
      email: 'vendor@example.com',
      role: 'vendor',
      status: 'active',
      joinDate: '2023-06-15',
      products: 18,
      sales: 234,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      role: 'customer',
      status: 'flagged',
      joinDate: '2023-12-20',
      orders: 3,
      reviews: 15,
      flaggedReviews: 5
    },
    {
      id: 4,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'vendor',
      status: 'suspended',
      joinDate: '2023-08-10',
      products: 5,
      sales: 67,
      rating: 3.2
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-500/20 text-purple-400';
      case 'vendor':
        return 'bg-blue-500/20 text-blue-400';
      case 'customer':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'flagged':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'suspended':
        return 'bg-red-500/20 text-red-400';
      case 'banned':
        return 'bg-red-700/20 text-red-300';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleUserAction = (userId: number, action: string) => {
    console.log(`Performing ${action} on user ${userId}`);
    // Handle user actions
  };

  return (
    <Layout userRole="admin" userName="Admin" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="admin" />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
                <p className="text-gray-400">Manage users, vendors, and platform access</p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Users</p>
                      <p className="text-2xl font-bold text-white">12,847</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Active Vendors</p>
                      <p className="text-2xl font-bold text-white">1,247</p>
                    </div>
                    <Shield className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Flagged Users</p>
                      <p className="text-2xl font-bold text-yellow-400">23</p>
                    </div>
                    <Ban className="h-8 w-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">New This Month</p>
                      <p className="text-2xl font-bold text-white">342</p>
                    </div>
                    <UserCheck className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900/50 border-gray-800 focus:border-green-500"
                />
              </div>
              
              <Select value={filterRole} onValueChange={setFilterRole}>
                <SelectTrigger className="bg-gray-900/50 border-gray-800 focus:border-green-500">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-800">
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="customer">Customers</SelectItem>
                  <SelectItem value="vendor">Vendors</SelectItem>
                  <SelectItem value="admin">Admins</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="bg-gray-900/50 border-gray-800 focus:border-green-500">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-800">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="flagged">Flagged</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                  <SelectItem value="banned">Banned</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                Export Users
              </Button>
            </div>

            {/* Users Table */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">User List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center">
                          <span className="text-black font-bold text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-1">
                            <h4 className="font-medium text-white">{user.name}</h4>
                            <Badge className={getRoleColor(user.role)}>
                              {user.role}
                            </Badge>
                            <Badge className={getStatusColor(user.status)}>
                              {user.status}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-gray-400 text-sm">
                            <div className="flex items-center">
                              <Mail className="h-3 w-3 mr-1" />
                              {user.email}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {user.joinDate}
                            </div>
                            {user.role === 'customer' && (
                              <>
                                <span>{user.orders} orders</span>
                                <span>{user.reviews} reviews</span>
                                {user.flaggedReviews > 0 && (
                                  <span className="text-red-400">{user.flaggedReviews} flagged</span>
                                )}
                              </>
                            )}
                            {user.role === 'vendor' && (
                              <>
                                <span>{user.products} products</span>
                                <span>{user.sales} sales</span>
                                <span>★ {user.rating}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {user.status === 'active' && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleUserAction(user.id, 'suspend')}
                            className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10"
                          >
                            Suspend
                          </Button>
                        )}
                        {user.status === 'flagged' && (
                          <>
                            <Button 
                              size="sm" 
                              onClick={() => handleUserAction(user.id, 'clear')}
                              className="bg-green-500 hover:bg-green-400 text-black"
                            >
                              Clear Flag
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => handleUserAction(user.id, 'ban')}
                              className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                            >
                              Ban
                            </Button>
                          </>
                        )}
                        {user.status === 'suspended' && (
                          <Button 
                            size="sm" 
                            onClick={() => handleUserAction(user.id, 'reactivate')}
                            className="bg-green-500 hover:bg-green-400 text-black"
                          >
                            Reactivate
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                        >
                          View Details
                        </Button>
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

export default UserManagement;
