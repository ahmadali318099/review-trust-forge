import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, ShoppingCart, BookOpen, Code, Palette, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/components/CartContext';
import { toast } from '@/hooks/use-toast';

const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'All Categories', icon: Filter },
    { id: 'ebooks', name: 'eBooks', icon: BookOpen },
    { id: 'courses', name: 'Courses', icon: Code },
    { id: 'tools', name: 'Tools', icon: Palette },
    { id: 'licenses', name: 'Licenses', icon: Briefcase },
  ];

  const products = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      category: 'courses',
      price: 99,
      originalPrice: 199,
      rating: 4.9,
      reviews: 2847,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      instructor: 'John Smith',
      description: 'Master modern web development with React, Node.js, and more',
      popular: true,
      verified: true
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery eBook',
      category: 'ebooks',
      price: 29,
      originalPrice: 49,
      rating: 4.8,
      reviews: 1523,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      instructor: 'Sarah Johnson',
      description: 'Complete guide to digital marketing strategies and tactics'
    },
    {
      id: 3,
      title: 'Premium Design Assets Bundle',
      category: 'tools',
      price: 149,
      originalPrice: 299,
      rating: 4.9,
      reviews: 967,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      instructor: 'Design Pro',
      description: 'Professional design assets, templates, and resources'
    },
    {
      id: 4,
      title: 'Business License Templates',
      category: 'licenses',
      price: 79,
      originalPrice: 120,
      rating: 4.7,
      reviews: 642,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      instructor: 'Legal Corp',
      description: 'Legal templates and documents for business operations'
    },
    {
      id: 5,
      title: 'Python Programming Masterclass',
      category: 'courses',
      price: 89,
      originalPrice: 179,
      rating: 4.8,
      reviews: 1856,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      instructor: 'Tech Academy',
      description: 'Learn Python from basics to advanced concepts'
    },
    {
      id: 6,
      title: 'Cryptocurrency Trading Guide',
      category: 'ebooks',
      price: 39,
      originalPrice: 69,
      rating: 4.6,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop',
      instructor: 'Crypto Expert',
      description: 'Master cryptocurrency trading strategies and analysis'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under50' && product.price < 50) ||
                        (priceRange === '50to100' && product.price >= 50 && product.price <= 100) ||
                        (priceRange === 'over100' && product.price > 100);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <Layout userRole="customer" userName="John Doe">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Digital Products</h1>
          <p className="text-gray-400 text-lg">Discover premium digital products from verified creators</p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900/50 border-gray-800 focus:border-green-500"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="bg-gray-900/50 border-gray-800 focus:border-green-500">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-800">
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="bg-gray-900/50 border-gray-800 focus:border-green-500">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-800">
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="under50">Under $50</SelectItem>
              <SelectItem value="50to100">$50 - $100</SelectItem>
              <SelectItem value="over100">Over $100</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] overflow-hidden"
            >
              <div className="relative">
                {product.popular && (
                  <Badge className="absolute top-4 left-4 bg-green-500 text-black z-10">
                    Popular
                  </Badge>
                )}
                {product.verified && (
                  <Badge className="absolute top-4 right-4 bg-blue-500/20 text-blue-400 border-blue-500/30 z-10">
                    Verified
                  </Badge>
                )}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-green-400 border-green-500/30 capitalize">
                    {product.category}
                  </Badge>
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-gray-400 text-sm ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-green-400 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <p className="text-green-400 text-sm mb-4">
                  by {product.instructor}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-400">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to={`/product/${product.id}`}>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                      >
                        View
                      </Button>
                    </Link>
                    <Button 
                      size="sm" 
                      className="bg-green-500 hover:bg-green-400 text-black transition-all duration-300 hover:scale-105"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-green-500/30 text-green-400 hover:bg-green-500/10 px-12"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListing;
