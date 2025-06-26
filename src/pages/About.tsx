
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Brain, Users, Award, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-green-400" />,
      title: "Advanced AI Detection",
      description: "Our proprietary AI algorithms analyze patterns, sentiment, and behavior to identify fake reviews with 99.2% accuracy."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Real-Time Protection",
      description: "Continuous monitoring ensures fake reviews are detected and removed within minutes of posting."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Verified Community",
      description: "Every user undergoes verification, creating a trusted ecosystem of authentic buyers and sellers."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-400" />,
      title: "Trust Certification",
      description: "Products and vendors receive trust scores based on authentic feedback and AI verification."
    }
  ];

  const stats = [
    { label: "Fake Reviews Detected", value: "2.3M+", color: "text-red-400" },
    { label: "Verified Users", value: "850K+", color: "text-green-400" },
    { label: "Protected Products", value: "1.2M+", color: "text-blue-400" },
    { label: "Detection Accuracy", value: "99.2%", color: "text-purple-400" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-green-500/20 text-green-400 mb-6">About TrustMarket AI</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Revolutionizing E-commerce Trust
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're building the world's first AI-powered e-commerce platform that eliminates fake reviews, 
            ensuring every purchase decision is based on authentic, verified feedback.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-20">
          <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop" 
              alt="AI Technology" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">How We're Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission */}
        <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/30 mb-20">
          <CardContent className="p-12 text-center">
            <Target className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To restore trust in e-commerce by creating a platform where every review is authentic, 
              every rating is genuine, and every purchase decision is informed by real customer experiences. 
              We believe in transparency, authenticity, and the power of AI to create a better marketplace for everyone.
            </p>
          </CardContent>
        </Card>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Built by Experts</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Our team combines decades of experience in AI, e-commerce, and cybersecurity to deliver 
            the most advanced fake review detection system available.
          </p>
          <div className="flex justify-center space-x-6">
            <Badge variant="outline" className="text-green-400 border-green-500/30">
              <CheckCircle className="h-4 w-4 mr-2" />
              AI Research Team
            </Badge>
            <Badge variant="outline" className="text-blue-400 border-blue-500/30">
              <CheckCircle className="h-4 w-4 mr-2" />
              Security Experts
            </Badge>
            <Badge variant="outline" className="text-purple-400 border-purple-500/30">
              <CheckCircle className="h-4 w-4 mr-2" />
              E-commerce Veterans
            </Badge>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
