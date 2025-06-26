import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Star, ShoppingCart, Download, Shield, Clock, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { useCart } from '@/components/CartContext';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    price: 99,
    originalPrice: 199,
    rating: 4.9,
    reviews: 2847,
    instructor: 'John Smith',
    category: 'Course',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    description: 'Master modern web development with React, Node.js, MongoDB, and more. This comprehensive course covers everything from HTML/CSS basics to advanced full-stack development.',
    features: [
      '40+ hours of video content',
      'Hands-on projects',
      'Certificate of completion',
      'Lifetime access',
      '24/7 support',
      'Mobile friendly'
    ],
    verified: true,
    aiScore: 98
  };

  const reviews = [
    {
      id: 1,
      user: 'Sarah Chen',
      rating: 5,
      date: '2024-01-15',
      content: 'Amazing course! Very comprehensive and well-structured. The instructor explains complex concepts clearly.',
      verified: true,
      aiScore: 95
    },
    {
      id: 2,
      user: 'Mike Johnson',
      rating: 4,
      date: '2024-01-10',
      content: 'Great content overall. Could use more practical examples in some sections.',
      verified: true,
      aiScore: 87
    },
    {
      id: 3,
      user: 'Lisa Wang',
      rating: 5,
      date: '2024-01-08',
      content: 'Excellent course! I learned so much and built several projects. Highly recommended!',
      verified: true,
      aiScore: 92
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'instructor', label: 'Instructor' }
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category.toLowerCase(),
        image: product.image
      });
    }
    
    toast({
      title: "Added to cart!",
      description: `${quantity}x ${product.title} added to your cart.`,
    });
  };

  return (
    <Layout userRole="customer" userName="John Doe">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="outline" className="text-green-400 border-green-500/30">
                  {product.category}
                </Badge>
                {product.verified && (
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  AI Score: {product.aiScore}%
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">{product.title}</h1>
              
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="ml-1">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-1" />
                  <span>by {product.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>Last updated: Jan 2024</span>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-8 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-800 mb-6">
              <div className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 px-1 border-b-2 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'border-green-500 text-green-400'
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">About This Course</h3>
                  <p className="text-gray-300 leading-relaxed">{product.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What You'll Get</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Customer Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-medium">{product.rating}</span>
                    <span className="text-gray-400">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Review Form */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Write a Review</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Rating</label>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => setRating(star)}
                              className="focus:outline-none"
                            >
                              <Star
                                className={`h-6 w-6 ${
                                  star <= rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-600 hover:text-yellow-400'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Your Review</label>
                        <Textarea
                          placeholder="Share your experience with this product..."
                          value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}
                          className="bg-gray-800/50 border-gray-700 focus:border-green-500 text-white min-h-[100px]"
                        />
                      </div>
                      <Button className="bg-green-500 hover:bg-green-400 text-black">
                        Submit Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id} className="bg-gray-900/50 border-gray-800">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-white">{review.user}</span>
                              {review.verified && (
                                <Badge className="bg-green-500/20 text-green-400 text-xs">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
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
                              className={`text-xs ${
                                review.aiScore >= 90 
                                  ? 'text-green-400 border-green-500/30' 
                                  : 'text-yellow-400 border-yellow-500/30'
                              }`}
                            >
                              AI: {review.aiScore}%
                            </Badge>
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          </div>
                        </div>
                        <p className="text-gray-300">{review.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="space-y-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-xl">JS</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{product.instructor}</h3>
                        <p className="text-gray-400 mb-4">Senior Full Stack Developer & Instructor</p>
                        <p className="text-gray-300">
                          John has over 10 years of experience in web development and has taught 
                          thousands of students worldwide. He specializes in modern JavaScript 
                          frameworks and full-stack development.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Purchase Card */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900/50 border-gray-800 sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-green-400">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <Badge className="bg-red-500/20 text-red-400">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <span className="text-gray-300">Quantity:</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0 border-gray-600"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="text-white font-medium w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0 border-gray-600"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <Button 
                    className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 transition-all duration-300 hover:scale-105"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </Button>
                  <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
                    Buy Now
                  </Button>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Shield className="h-4 w-4 mr-2 text-green-400" />
                    30-day money-back guarantee
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Download className="h-4 w-4 mr-2 text-green-400" />
                    Instant download access
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2 text-green-400" />
                    Lifetime access
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

export default ProductDetail;
