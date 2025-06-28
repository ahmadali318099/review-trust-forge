
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Download, Zap, Shield, Star, ArrowRight, BookOpen, Code, Palette, Briefcase, CheckCircle, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      title: 'Complete Web Development Course',
      category: 'Course',
      price: '$99',
      rating: 4.9,
      reviews: 2847,
      image: '/placeholder.svg',
      icon: <Code className="h-6 w-6" />,
      popular: true,
      verified: true
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery eBook',
      category: 'eBook',
      price: '$29',
      rating: 4.8,
      reviews: 1523,
      image: '/placeholder.svg',
      icon: <BookOpen className="h-6 w-6" />,
      verified: true
    },
    {
      id: 3,
      title: 'Premium Design Assets Pack',
      category: 'Tools',
      price: '$149',
      rating: 4.9,
      reviews: 967,
      image: '/placeholder.svg',
      icon: <Palette className="h-6 w-6" />,
      verified: true
    },
    {
      id: 4,
      title: 'Business License Templates',
      category: 'License',
      price: '$79',
      rating: 4.7,
      reviews: 642,
      image: '/placeholder.svg',
      icon: <Briefcase className="h-6 w-6" />,
      verified: true
    }
  ];

  const categories = [
    { name: 'eBooks', count: '2.5K+', icon: <BookOpen className="h-8 w-8" /> },
    { name: 'Courses', count: '1.2K+', icon: <Code className="h-8 w-8" /> },
    { name: 'Licenses', count: '800+', icon: <Shield className="h-8 w-8" /> },
    { name: 'Tools', count: '1.8K+', icon: <Zap className="h-8 w-8" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Verified Customer',
      content: 'Finally, a platform where I can trust the reviews! The AI detection gives me confidence in every purchase.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Vendor',
      content: 'As a seller, I love that genuine reviews are protected. My authentic customers get heard!',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Verified Customer',
      content: 'No more fake reviews misleading me. This platform has revolutionized my online shopping experience.',
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'AI-Powered Detection',
      description: '99.2% accuracy in identifying fake reviews using advanced machine learning algorithms'
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: 'Verified Reviews Only',
      description: 'Every review is authenticated and verified before appearing on product pages'
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Real-Time Monitoring',
      description: 'Continuous monitoring and instant removal of suspicious review patterns'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-400/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <Badge className="mb-8 bg-green-500/20 text-green-400 border-green-500/30 text-lg px-6 py-2 animate-scale-in">
              🛡️ AI-Powered Review Authentication
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent">
                Shop Smarter.
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Trust Verified.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              The world's first AI-powered e-commerce platform that detects and eliminates fake reviews
              <br />
              <span className="text-green-400">Authentic reviews. Genuine trust. Better decisions.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-400 text-black px-12 py-4 text-lg font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105 animate-scale-in"
                >
                  Shop with Confidence
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 animate-scale-in delay-200"
                >
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                AI-Powered Trust
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced machine learning algorithms ensure every review is authentic
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] cursor-pointer animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Verified Product Categories
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every product backed by authenticated reviews and verified ratings
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] cursor-pointer animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {category.name}
                  </h3>
                  <p className="text-green-400 font-medium">
                    {category.count} verified products
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Verified Products
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Products with 100% authentic reviews and verified ratings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] cursor-pointer animate-fade-in overflow-hidden" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div className="flex gap-2 absolute top-4 left-4 z-10">
                    {product.popular && (
                      <Badge className="bg-green-500 text-black">
                        Popular
                      </Badge>
                    )}
                    {product.verified && (
                      <Badge className="bg-blue-500 text-white">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-green-400 border-green-500/30">
                      {product.category}
                    </Badge>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-green-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {product.reviews} verified reviews
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">
                      {product.price}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-green-500 hover:bg-green-400 text-black opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Trusted by Real Customers
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Hear from verified customers about their authentic shopping experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-gray-900/50 border-gray-800 hover:border-green-500/30 transition-all duration-300 animate-fade-in" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-green-400 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-400/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Ready for Authentic Shopping?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of customers who shop with confidence knowing every review is real and every rating is verified.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-400 text-black px-12 py-4 text-lg font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-105"
                >
                  Start Shopping
                  <Shield className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-green-500/30 text-green-400 hover:bg-green-500/10 px-12 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
