
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, Brain, Shield, Users, Star } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: "AI Detection",
      icon: <Brain className="h-5 w-5 text-green-400" />,
      faqs: [
        {
          question: "How does TrustMarket's AI detect fake reviews?",
          answer: "Our AI analyzes multiple factors including writing patterns, sentiment analysis, user behavior, timing patterns, and cross-references with verified purchase data. We use machine learning models trained on millions of authentic and fake reviews to achieve 99.2% accuracy."
        },
        {
          question: "What happens when a fake review is detected?",
          answer: "Fake reviews are automatically flagged and removed within minutes. The reviewer's account is flagged for suspicious activity, and vendors are notified. Repeat offenders face account suspension or permanent bans."
        },
        {
          question: "Can the AI make mistakes?",
          answer: "While our AI achieves 99.2% accuracy, we have human moderators who review edge cases. Users can also appeal decisions through our trust verification process."
        }
      ]
    },
    {
      category: "Trust & Security",
      icon: <Shield className="h-5 w-5 text-blue-400" />,
      faqs: [
        {
          question: "How do you verify user authenticity?",
          answer: "Users undergo multi-step verification including email confirmation, phone verification, and optional ID verification. We also track purchase history and review patterns to build trust scores."
        },
        {
          question: "What is a Trust Score?",
          answer: "Trust Scores are calculated based on verified purchases, authentic reviews, account age, and AI-verified interactions. Higher scores indicate more trustworthy users and vendors."
        },
        {
          question: "Is my personal data safe?",
          answer: "Yes, we use enterprise-grade encryption and follow strict data protection protocols. Personal data is never shared with third parties and is only used for trust verification purposes."
        }
      ]
    },
    {
      category: "For Customers",
      icon: <Users className="h-5 w-5 text-purple-400" />,
      faqs: [
        {
          question: "How do I know if reviews are authentic?",
          answer: "All reviews display AI verification badges and trust scores. Verified purchase badges indicate the reviewer actually bought the product. Our AI continuously monitors for authenticity."
        },
        {
          question: "Can I still leave honest negative reviews?",
          answer: "Absolutely! Our AI distinguishes between authentic negative feedback and fake reviews. Honest criticism based on real experiences is encouraged and protected."
        },
        {
          question: "What if I disagree with a product's trust score?",
          answer: "Trust scores are based on verified data and AI analysis. However, you can report concerns through our support system, and our team will investigate."
        }
      ]
    },
    {
      category: "For Vendors",
      icon: <Star className="h-5 w-5 text-yellow-400" />,
      faqs: [
        {
          question: "How does TrustMarket protect my business from fake reviews?",
          answer: "Our AI monitors your products 24/7, removing fake negative reviews and suspicious positive reviews. This ensures your reputation is based on authentic customer feedback."
        },
        {
          question: "What if competitors try to damage my ratings?",
          answer: "Our AI detects coordinated attacks and suspicious review patterns. Fake negative reviews from competitors are automatically flagged and removed, protecting your business."
        },
        {
          question: "Can I see analytics about my review authenticity?",
          answer: "Yes, our vendor dashboard provides detailed analytics including fake review attempts, AI detection rates, trust score trends, and authentic customer feedback insights."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-500/20 text-green-400 mb-6">Frequently Asked Questions</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Everything About AI Trust
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn how our advanced AI technology protects you from fake reviews and creates 
            a more trustworthy e-commerce experience.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-gray-900/50 border-gray-800 focus:border-green-500 text-white"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-bold text-white ml-3">{category.category}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border-gray-800"
                    >
                      <AccordionTrigger className="text-left text-white hover:text-green-400 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 leading-relaxed pt-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/30 mt-16">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our AI-powered support team is available 24/7 to help you understand 
              how our trust verification system works.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="outline" className="text-green-400 border-green-500/30">
                <Shield className="h-4 w-4 mr-2" />
                AI-Powered Support
              </Badge>
              <Badge variant="outline" className="text-blue-400 border-blue-500/30">
                <Brain className="h-4 w-4 mr-2" />
                Expert Assistance
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FAQ;
