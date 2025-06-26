
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, MessageSquare, Shield } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-green-400" />,
      title: "Email Support",
      value: "trust@trustmarket.com",
      description: "Get help with AI detection and platform issues"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-400" />,
      title: "Phone Support",
      value: "+1 (555) AI-TRUST",
      description: "24/7 support for urgent trust violations"
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-400" />,
      title: "Headquarters",
      value: "123 AI Trust Boulevard, Tech Valley, CA 94043",
      description: "Visit our AI research and development center"
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-400" />,
      title: "Business Hours",
      value: "24/7 AI Monitoring",
      description: "Human support: Mon-Fri 9AM-6PM PST"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-500/20 text-green-400 mb-6">Contact Us</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about our AI detection system? Need help with trust verification? 
            Our team of experts is here to help you build a more trustworthy marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-green-400" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <Input 
                  placeholder="AI Detection Question" 
                  className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your trust verification needs..."
                  className="bg-gray-800/50 border-gray-700 focus:border-green-500 min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold">
                <Shield className="h-4 w-4 mr-2" />
                Send Secure Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Support</h3>
                <p className="text-gray-300 mb-6">
                  Our support team uses the same AI technology that powers our fake review detection 
                  to provide faster, more accurate assistance with your trust and verification needs.
                </p>
                <div className="flex space-x-3">
                  <Badge variant="outline" className="text-green-400 border-green-500/30">
                    99.2% Accuracy
                  </Badge>
                  <Badge variant="outline" className="text-blue-400 border-blue-500/30">
                    24/7 Monitoring
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {method.icon}
                    <div>
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-green-400 font-medium mb-2">{method.value}</p>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <Card className="bg-gray-900/50 border-gray-800 mt-16">
          <CardContent className="p-8 text-center">
            <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Secure Communication</h3>
            <p className="text-gray-400">
              All communications are encrypted and monitored by our AI systems for authenticity and security.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact;
