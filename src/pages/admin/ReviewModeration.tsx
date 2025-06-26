
import { useState } from 'react';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Search, CheckCircle, X, AlertTriangle, Star, Eye } from 'lucide-react';

const ReviewModeration = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const flaggedReviews = [
    {
      id: 1,
      reviewer: 'John Smith',
      product: 'Complete Web Development Course',
      rating: 5,
      content: 'Amazing course! Best product ever! Super amazing quality and fantastic value!',
      aiScore: 23,
      flagReason: 'Generic language patterns detected - potential fake review',
      date: '2024-01-16',
      severity: 'high',
      status: 'pending'
    },
    {
      id: 2,
      reviewer: 'Sarah Chen',
      product: 'Digital Marketing eBook',
      rating: 1,
      content: 'Not what I expected. Poor quality content.',
      aiScore: 45,
      flagReason: 'Inconsistent with purchase history and previous reviews',
      date: '2024-01-15',
      severity: 'medium',
      status: 'pending'
    },
    {
      id: 3,
      reviewer: 'Mike Johnson',
      product: 'Premium Design Assets',
      rating: 4,
      content: 'Good quality assets, useful for my projects. Would recommend.',
      aiScore: 67,
      flagReason: 'Minor inconsistencies detected in writing style',
      date: '2024-01-14',
      severity: 'low',
      status: 'reviewed'
    },
    {
      id: 4,
      reviewer: 'Emily Davis',
      product: 'Business License Templates',
      rating: 5,
      content: 'Perfect! Exactly what I needed for my business setup.',
      aiScore: 89,
      flagReason: 'Low confidence flag - manual review requested',
      date: '2024-01-13',
      severity: 'low',
      status: 'approved'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'approved':
        return 'bg-green-500/20 text-green-400';
      case 'deleted':
        return 'bg-red-500/20 text-red-400';
      case 'reviewed':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getAIScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400 border-green-500/30';
    if (score >= 50) return 'text-yellow-400 border-yellow-500/30';
    return 'text-red-400 border-red-500/30';
  };

  const handleApprove = (reviewId: number) => {
    console.log('Approving review:', reviewId);
    // Handle approval logic
  };

  const handleDelete = (reviewId: number) => {
    console.log('Deleting review:', reviewId);
    // Handle deletion logic
  };

  const filteredReviews = flaggedReviews.filter(review => {
    const matchesSearch = review.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.reviewer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || review.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <Layout userRole="admin" userName="Admin" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="admin" />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Review Moderation</h1>
                <p className="text-gray-400">Manage AI-flagged reviews and maintain platform integrity</p>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900/50 border-gray-800 focus:border-green-500"
                />
              </div>
              
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="bg-gray-900/50 border-gray-800 focus:border-green-500">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-800">
                  <SelectItem value="all">All Reviews</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="deleted">Deleted</SelectItem>
                  <SelectItem value="reviewed">Reviewed</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center space-x-2">
                <Badge className="bg-red-500/20 text-red-400">
                  {filteredReviews.filter(r => r.status === 'pending').length} Pending
                </Badge>
                <Badge className="bg-yellow-500/20 text-yellow-400">
                  {filteredReviews.filter(r => r.severity === 'high').length} High Priority
                </Badge>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id} className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-white text-lg">{review.product}</CardTitle>
                          <Badge className={getStatusColor(review.status)}>
                            {review.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <span>by {review.reviewer}</span>
                          <span>{review.date}</span>
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant="outline" 
                          className={getAIScoreColor(review.aiScore)}
                        >
                          AI: {review.aiScore}%
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={getSeverityColor(review.severity)}
                        >
                          {review.severity.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-2">Review Content:</h4>
                        <p className="text-gray-300 bg-gray-800/50 p-4 rounded-xl">{review.content}</p>
                      </div>
                      
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                          <div>
                            <p className="text-red-400 font-medium mb-1">AI Detection Alert</p>
                            <p className="text-red-300 text-sm">{review.flagReason}</p>
                          </div>
                        </div>
                      </div>
                      
                      {review.status === 'pending' && (
                        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                          <div className="flex items-center space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View Product
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-gray-500/30 text-gray-400 hover:bg-gray-500/10"
                            >
                              View User Profile
                            </Button>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button 
                              size="sm" 
                              onClick={() => handleApprove(review.id)}
                              className="bg-green-500 hover:bg-green-400 text-black"
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              onClick={() => handleDelete(review.id)}
                              variant="outline" 
                              className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                            >
                              <X className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bulk Actions */}
            <Card className="bg-gray-900/50 border-gray-800 mt-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-400" />
                  Moderation Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                    Approve All Low Risk
                  </Button>
                  <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                    Delete High Risk
                  </Button>
                  <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
                    Export Report
                  </Button>
                  <Button variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                    AI Model Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewModeration;
