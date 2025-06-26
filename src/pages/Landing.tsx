
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Search, Settings, Users, Bell, Eye } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Landing = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning algorithms detect fake reviews with 99.2% accuracy',
      color: 'from-primary to-primary/80'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Vendor Dashboard',
      description: 'Comprehensive tools for managing products, analytics, and review monitoring',
      color: 'from-secondary to-secondary/80'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Admin Moderation',
      description: 'Powerful admin panel for managing flagged reviews and user accounts',
      color: 'from-purple-500 to-purple-400'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring and instant alerts for suspicious review patterns',
      color: 'from-orange-500 to-orange-400'
    }
  ];

  const stats = [
    { value: '99.2%', label: 'Detection Accuracy' },
    { value: '2.5M+', label: 'Reviews Analyzed' },
    { value: '15K+', label: 'Active Vendors' },
    { value: '24/7', label: 'Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              🚀 AI-Powered Trust Platform
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-sora font-bold mb-6 leading-tight">
              <span className="text-gradient">Real Reviews.</span>
              <br />
              Real Trust.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Revolutionize your e-commerce experience with AI-powered fake review detection. 
              Build authentic customer trust and boost your business credibility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-2xl animate-scale-in">
                  Start Selling
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 text-lg font-semibold rounded-2xl animate-scale-in">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6 text-gradient">
              Key Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by advanced AI technology to ensure authentic customer experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-6 relative">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6 text-gradient">
                Ready to Build Trust?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of vendors who trust our AI-powered platform to maintain authentic customer relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-2xl">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 text-lg font-semibold rounded-2xl">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
