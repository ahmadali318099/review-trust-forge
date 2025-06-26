
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Eye, EyeOff, User, Settings, Check } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeRole, setActiveRole] = useState('customer');

  const roleInfo = {
    customer: {
      icon: <User className="h-4 w-4" />,
      title: 'Customer Registration',
      description: 'Join the trusted community with verified reviews and authentic ratings',
      color: 'from-blue-500 to-blue-400'
    },
    vendor: {
      icon: <Settings className="h-4 w-4" />,
      title: 'Vendor Registration',
      description: 'Sell your products with AI-powered fake review protection',
      color: 'from-primary to-primary/80'
    }
  };

  const benefits = [
    'AI-powered fake review detection',
    'Real-time fraud monitoring',
    'Verified customer authentication',
    '99.2% detection accuracy',
    'Trusted seller protection'
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="w-full max-w-4xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <Link to="/" className="inline-flex items-center space-x-2 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <span className="font-sora font-bold text-2xl text-gradient">
                  TrustMarket
                </span>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-sora font-bold mb-4 text-gradient">
                Join the Trust Revolution
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the future of e-commerce with AI-powered review authentication and verified customer trust.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">99.2%</div>
                <div className="text-sm text-muted-foreground">AI Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">50K+</div>
                <div className="text-sm text-muted-foreground">Trusted Members</div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl animate-scale-in">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${roleInfo[activeRole].color} flex items-center justify-center text-white`}>
                  {roleInfo[activeRole].icon}
                </div>
              </div>
              <CardTitle className="text-2xl font-sora font-bold text-foreground">
                {roleInfo[activeRole].title}
              </CardTitle>
              <p className="text-muted-foreground text-sm mt-2">
                {roleInfo[activeRole].description}
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Role Selection */}
              <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-muted/30">
                  <TabsTrigger value="customer">Customer</TabsTrigger>
                  <TabsTrigger value="vendor">Vendor</TabsTrigger>
                </TabsList>

                <TabsContent value="customer" className="mt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create a strong password"
                          className="bg-background/50 border-border/50 focus:border-primary pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl">
                      Join as Trusted Customer
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="vendor" className="mt-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        placeholder="Your Business Name"
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name</Label>
                      <Input
                        id="contactName"
                        placeholder="Your Full Name"
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessEmail">Business Email</Label>
                      <Input
                        id="businessEmail"
                        type="email"
                        placeholder="business@example.com"
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessDescription">Business Description</Label>
                      <Textarea
                        id="businessDescription"
                        placeholder="Tell us about your business and products..."
                        className="bg-background/50 border-border/50 focus:border-primary resize-none"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vendorPassword">Password</Label>
                      <div className="relative">
                        <Input
                          id="vendorPassword"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create a strong password"
                          className="bg-background/50 border-border/50 focus:border-primary pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl">
                      Join as Verified Vendor
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
                  Sign in
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                <Badge variant="secondary" className="text-xs">
                  AI-Protected
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Verified Platform
                </Badge>
                <Badge className="text-xs bg-secondary/20 text-secondary">
                  Trusted Community
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By creating an account, you agree to our{' '}
          <Link to="/terms" className="text-primary hover:text-primary/80">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/trust-policy" className="text-primary hover:text-primary/80">
            Trust Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
