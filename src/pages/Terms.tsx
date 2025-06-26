
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, Scale, Users, Brain, Lock } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: <Users className="h-6 w-6 text-green-400" />,
      title: "User Responsibilities",
      content: [
        "Provide accurate information during account registration and verification",
        "Only submit authentic reviews based on genuine product experiences",
        "Respect intellectual property rights and platform community guidelines",
        "Report suspicious activity, fake reviews, or trust violations immediately",
        "Maintain account security and protect login credentials"
      ]
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-400" />,
      title: "AI Detection & Trust System",
      content: [
        "Our AI systems continuously monitor for fake reviews and fraudulent activity",
        "Trust scores are calculated using verified data and AI analysis algorithms",
        "Users consent to AI analysis of their reviews, behavior, and account activity",
        "AI decisions may be appealed through our human moderation process",
        "We reserve the right to update AI algorithms to improve detection accuracy"
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      title: "Prohibited Activities",
      content: [
        "Creating fake accounts or manipulating identity verification systems",
        "Posting false, misleading, or incentivized reviews for any product",
        "Attempting to circumvent or interfere with AI detection systems",
        "Coordinating review manipulation campaigns or vote brigading",
        "Using automated tools or bots to generate reviews or interactions"
      ]
    },
    {
      icon: <Scale className="h-6 w-6 text-yellow-400" />,
      title: "Platform Policies",
      content: [
        "We maintain the right to suspend or terminate accounts violating trust policies",
        "Vendors must accurately represent products and comply with authenticity standards",
        "All transactions are subject to verification and fraud prevention measures",
        "Dispute resolution follows our AI-assisted mediation process",
        "Platform availability and features may change with advance notice"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-500/20 text-green-400 mb-6">Terms of Service</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Platform Terms & Conditions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            By using TrustMarket AI, you agree to these terms which govern our AI-powered 
            trust verification system and community standards.
          </p>
        </div>

        {/* Effective Date */}
        <Card className="bg-blue-500/10 border-blue-500/30 mb-12">
          <CardContent className="p-6 text-center">
            <p className="text-blue-400">
              <strong>Effective Date:</strong> January 15, 2024 | 
              <strong className="ml-4">Last Modified:</strong> January 15, 2024
            </p>
          </CardContent>
        </Card>

        {/* Agreement Notice */}
        <Card className="bg-green-500/10 border-green-500/30 mb-12">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-green-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  These Terms of Service constitute a legally binding agreement between you and TrustMarket AI. 
                  By accessing or using our platform, you acknowledge that you have read, understood, and agree 
                  to be bound by these terms and our AI-powered trust verification processes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  {section.icon}
                  <span className="ml-3">{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* AI-Specific Terms */}
          <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Brain className="h-6 w-6 text-purple-400 mr-3" />
                AI Technology Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">AI Analysis Consent</h4>
                <p className="text-gray-300 mb-4">
                  By using our platform, you explicitly consent to AI analysis of your:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-green-400 font-medium">✓ Review content and patterns</p>
                    <p className="text-green-400 font-medium">✓ Account behavior and interactions</p>
                    <p className="text-green-400 font-medium">✓ Purchase history and preferences</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-400 font-medium">✓ Trust score calculations</p>
                    <p className="text-green-400 font-medium">✓ Fraud prevention screening</p>
                    <p className="text-green-400 font-medium">✓ Authenticity verification</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">AI Decision Appeals</h4>
                <p className="text-gray-300">
                  Users have the right to appeal AI-based decisions including account suspensions, 
                  review removals, or trust score adjustments through our human review process.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Enforcement & Violations */}
          <Card className="bg-red-500/10 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                Violations & Enforcement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Violations of these terms may result in the following enforcement actions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h5 className="font-semibold text-yellow-400">Warning Level</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Account warning notice</li>
                    <li>• Temporary feature restrictions</li>
                    <li>• Enhanced monitoring</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-semibold text-orange-400">Suspension Level</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Temporary account suspension</li>
                    <li>• Review posting restrictions</li>
                    <li>• Trust score penalties</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-semibold text-red-400">Termination Level</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Permanent account termination</li>
                    <li>• IP address blocking</li>
                    <li>• Legal action if applicable</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8 text-center">
              <Lock className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our legal and trust team is available to clarify any questions about these terms 
                or our AI-powered trust verification processes.
              </p>
              <div className="flex justify-center space-x-4">
                <Badge variant="outline" className="text-green-400 border-green-500/30">
                  legal@trustmarket.com
                </Badge>
                <Badge variant="outline" className="text-blue-400 border-blue-500/30">
                  Trust Policy Team
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
