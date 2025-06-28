import { useState } from 'react';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const SupportPage = () => {
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    priority: '',
    message: ''
  });

  const tickets = [
    {
      id: 'TIC-2024-001',
      subject: 'Issue with course download',
      category: 'Technical',
      priority: 'High',
      status: 'Open',
      date: '2024-01-15',
      lastUpdate: '2024-01-16'
    },
    {
      id: 'TIC-2024-002',
      subject: 'Refund request for eBook',
      category: 'Billing',
      priority: 'Medium',
      status: 'In Progress',
      date: '2024-01-10',
      lastUpdate: '2024-01-12'
    },
    {
      id: 'TIC-2024-003',
      subject: 'Account access problem',
      category: 'Account',
      priority: 'Low',
      status: 'Resolved',
      date: '2024-01-05',
      lastUpdate: '2024-01-08'
    }
  ];

  const faqItems = [
    {
      question: 'How do I download my purchased products?',
      answer: 'After purchase, you can download your products from your account dashboard or the email receipt you received.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee for all digital products. Contact support to request a refund.'
    },
    {
      question: 'How does the AI review detection work?',
      answer: 'Our AI analyzes review patterns, language, and user behavior to identify potentially fake reviews with 98% accuracy.'
    },
    {
      question: 'Can I share my purchased products?',
      answer: 'Digital products are licensed for personal use only. Sharing or redistribution is prohibited.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-red-500/20 text-red-400';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Resolved':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500/20 text-red-400';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Low':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support ticket submitted:', formData);
    // Handle form submission
  };

  return (
    <Layout userRole="customer" userName="John Doe" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="customer" />
        
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Support Center</h1>
              <p className="text-gray-400">Get help with your account, orders, and technical issues</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Support Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-900/50 border-gray-800 mb-8">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-green-400" />
                      Create Support Ticket
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 mb-2">Category</label>
                          <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                            <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-green-500">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-800">
                              <SelectItem value="technical">Technical Support</SelectItem>
                              <SelectItem value="billing">Billing & Payments</SelectItem>
                              <SelectItem value="account">Account Issues</SelectItem>
                              <SelectItem value="product">Product Questions</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-gray-300 mb-2">Priority</label>
                          <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                            <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-green-500">
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-800">
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2">Subject</label>
                        <Input
                          placeholder="Brief description of your issue"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2">Message</label>
                        <Textarea
                          placeholder="Please provide detailed information about your issue..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="bg-gray-800/50 border-gray-700 focus:border-green-500 min-h-[120px]"
                        />
                      </div>
                      
                      <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold">
                        Submit Ticket
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Existing Tickets */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Your Support Tickets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tickets.map((ticket) => (
                        <div key={ticket.id} className="p-4 bg-gray-800/50 rounded-xl">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-medium text-white">{ticket.subject}</h4>
                              <p className="text-green-400 text-sm">{ticket.id}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge className={getPriorityColor(ticket.priority)}>
                                {ticket.priority}
                              </Badge>
                              <Badge className={getStatusColor(ticket.status)}>
                                {ticket.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>Category: {ticket.category}</span>
                            <span>Created: {ticket.date}</span>
                            <span>Updated: {ticket.lastUpdate}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Info */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-green-400" />
                      <div>
                        <p className="text-white text-sm">Email Support</p>
                        <p className="text-gray-400 text-xs">support@trustmarket.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-green-400" />
                      <div>
                        <p className="text-white text-sm">Phone Support</p>
                        <p className="text-gray-400 text-xs">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-green-400" />
                      <div>
                        <p className="text-white text-sm">Business Hours</p>
                        <p className="text-gray-400 text-xs">Mon-Fri: 9AM-6PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {faqItems.map((item, index) => (
                        <div key={index} className="border-b border-gray-800 last:border-b-0 pb-4 last:pb-0">
                          <h4 className="font-medium text-white text-sm mb-2">{item.question}</h4>
                          <p className="text-gray-400 text-xs">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <p className="text-white font-medium">Average Response Time</p>
                      <p className="text-green-400 text-2xl font-bold">2 hours</p>
                      <p className="text-gray-400 text-xs">During business hours</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
