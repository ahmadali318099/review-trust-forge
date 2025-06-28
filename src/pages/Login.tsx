
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, User, Settings, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeRole, setActiveRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, login, isLoading } = useAuth();

  // Redirect if already logged in
  if (user) {
    const redirectPath = user.role === 'admin' ? '/admin/dashboard' : 
                        user.role === 'vendor' ? '/vendor/dashboard' : '/dashboard';
    return <Navigate to={redirectPath} replace />;
  }

  const roleInfo = {
    customer: {
      icon: <User className="h-4 w-4" />,
      title: 'Customer Login',
      description: 'Access AI-verified reviews and shop with confidence',
      color: 'from-blue-500 to-blue-400'
    },
    vendor: {
      icon: <Settings className="h-4 w-4" />,
      title: 'Vendor Login',
      description: 'Manage your products with AI-powered review protection',
      color: 'from-primary to-primary/80'
    },
    admin: {
      icon: <Users className="h-4 w-4" />,
      title: 'Admin Login',
      description: 'Monitor AI detection and moderate platform trust',
      color: 'from-destructive to-red-400'
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await login(email, password, activeRole);
      toast.success(`Welcome! Redirecting to ${activeRole} dashboard...`);
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="w-full max-w-md relative">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="font-sora font-bold text-2xl text-gradient">
              TrustMarket
            </span>
          </Link>
        </div>

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
              <TabsList className="grid w-full grid-cols-3 bg-muted/30">
                <TabsTrigger value="customer" className="text-xs">Customer</TabsTrigger>
                <TabsTrigger value="vendor" className="text-xs">Vendor</TabsTrigger>
                <TabsTrigger value="admin" className="text-xs">Admin</TabsTrigger>
              </TabsList>

              <TabsContent value={activeRole} className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-background/50 border-border/50 focus:border-primary pr-10"
                        required
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

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 text-muted-foreground">
                      <input type="checkbox" className="rounded border-border/50" />
                      <span>Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="text-primary hover:text-primary/80">
                      Forgot password?
                    </Link>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary hover:text-primary/80 font-medium">
                Join TrustMarket
              </Link>
            </div>

            {/* Demo badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
              <Badge variant="secondary" className="text-xs">
                AI-Powered Platform
              </Badge>
              <Badge variant="outline" className="text-xs">
                Verified Reviews Only
              </Badge>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing in, you agree to our{' '}
          <Link to="/terms" className="text-primary hover:text-primary/80">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-primary hover:text-primary/80">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
