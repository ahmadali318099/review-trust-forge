import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Star, Search, CheckCircle, AlertTriangle, X, Edit } from 'lucide-react';

const ReviewHistory = () => {
  const reviews = [
    {
      id: 1,
      product: 'Complete Web Development Course',
      rating: 5,
      date: '2024-01-16',
      status: 'approved',
      aiScore: 95,
      content: 'Amazing course! Very comprehensive and well-structured. The instructor explains complex concepts clearly and provides practical examples.',
      flagReason: null
    },
    {
      id: 2,
      product: 'Digital Marketing Mastery',
      rating: 4,
      date: '2024-01-12',
      status: 'pending',
      aiScore: 87,
      content: 'Great content overall. The strategies are practical and up-to-date. Could use more case studies.',
      flagReason: null
    },
    {
      id: 3,
      product: 'Premium Design Assets',
      rating: 3,
      date: '2024-01-08',
      status: 'flagged',
      aiScore: 45,
      content: 'Not what I expected. Quality is okay but overpriced.',
      flagReason: 'Potentially biased - inconsistent with purchase history'
    },
    {
      id: 4,
      product: 'Business License Templates',
      rating: 5,
      date: '2024-01-05',
      status: 'deleted',
      aiScore: 23,
      content: 'Best product ever! Amazing quality and super useful!',
      flagReason: 'Detected as potentially fake - generic language patterns'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/20 text-green-400';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'flagged':
        return 'bg-orange-500/20 text-orange-400';
      case 'deleted':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
        return <AlertTriangle className="h-4 w-4" />;
      case 'flagged':
        return <AlertTriangle className="h-4 w-4" />;
      case 'deleted':
        return <X className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getAIScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400 border-green-500/30';
    if (score >= 60) return 'text-yellow-400 border-yellow-500/30';
    return 'text-red-400 border-red-500/30';
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
                <h1 className="text-3xl font-bold text-white mb-2">Review History</h1>
                <p className="text-gray-400">Track your product reviews and their AI authenticity scores</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search reviews..."
                    className="pl-10 bg-gray-900/50 border-gray-800 focus:border-green-500 w-64"
                  />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Reviews</p>
                      <p className="text-2xl font-bold text-white">8</p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Approved</p>
                      <p className="text-2xl font-bold text-green-400">5</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Flagged</p>
                      <p className="text-2xl font-bold text-orange-400">2</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-orange-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Avg AI Score</p>
                      <p className="text-2xl font-bold text-white">87%</p>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg">{review.product}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
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
                          <span className="text-gray-400 text-sm">{review.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant="outline" 
                          className={getAIScoreColor(review.aiScore)}
                        >
                          AI: {review.aiScore}%
                        </Badge>
                        <Badge className={getStatusColor(review.status)}>
                          {getStatusIcon(review.status)}
                          <span className="ml-1 capitalize">{review.status}</span>
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-300">{review.content}</p>
                      
                      {review.flagReason && (
                        <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                          <div className="flex items-start space-x-2">
                            <AlertTriangle className="h-5 w-5 text-orange-400 mt-0.5" />
                            <div>
                              <p className="text-orange-400 font-medium mb-1">Review Flagged</p>
                              <p className="text-orange-300 text-sm">{review.flagReason}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <div className="flex items-center space-x-2">
                          {review.status === 'approved' && (
                            <Badge className="bg-green-500/20 text-green-400">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified Authentic
                            </Badge>
                          )}
                          {review.aiScore >= 90 && (
                            <Badge className="bg-blue-500/20 text-blue-400">
                              High Trust Score
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {review.status !== 'deleted' && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          )}
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-gray-500/30 text-gray-400 hover:bg-gray-500/10"
                          >
                            View Product
                          </Button>
                        </div>
                      </div>
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
                Load More Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewHistory;
