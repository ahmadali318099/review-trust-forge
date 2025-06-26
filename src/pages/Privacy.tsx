
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: <Database className="h-6 w-6 text-green-400" />,
      title: "Information We Collect",
      content: [
        "Account information (name, email, phone for verification)",
        "Purchase history and transaction data for trust scoring",
        "Review content and authenticity verification data",
        "Device and browser information for security purposes",
        "AI interaction data to improve detection accuracy"
      ]
    },
    {
      icon: <Eye className="h-6 w-6 text-blue-400" />,
      title: "How We Use Your Information",
      content: [
        "Detect and prevent fake reviews using AI analysis",
        "Calculate trust scores and verify user authenticity",
        "Provide personalized recommendations and experiences",
        "Improve our AI detection algorithms and platform security",
        "Communicate important updates about trust and security"
      ]
    },
    {
      icon: <Lock className="h-6 w-6 text-purple-400" />,
      title: "Data Protection & Security",
      content: [
        "End-to-end encryption for all sensitive data transmission",
        "Regular security audits and penetration testing",
        "Secure cloud infrastructure with enterprise-grade protection",
        "Limited access controls and employee data handling training",
        "AI-powered monitoring for unusual data access patterns"
      ]
    },
    {
      icon: <UserCheck className="h-6 w-6 text-yellow-400" />,
      title: "Your Rights & Control",
      content: [
        "Access and download your personal data at any time",
        "Request correction of inaccurate information",
        "Delete your account and associated data permanently",
        "Opt-out of non-essential communications and marketing",
        "Control privacy settings and data sharing preferences"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-500/20 text-green-400 mb-6">Privacy Policy</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Your Privacy Matters
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're committed to protecting your privacy while using AI to create a more trustworthy marketplace. 
            Here's how we handle your data with transparency and security.
          </p>
        </div>

        {/* Last Updated */}
        <Card className="bg-blue-500/10 border-blue-500/30 mb-12">
          <CardContent className="p-6 text-center">
            <p className="text-blue-400">
              <strong>Last Updated:</strong> January 15, 2024 | 
              <strong className="ml-4">Effective Date:</strong> January 15, 2024
            </p>
          </CardContent>
        </Card>

        {/* Main Content */}
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
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* AI-Specific Privacy */}
          <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="h-6 w-6 text-green-400 mr-3" />
                AI & Machine Learning Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Our AI systems are designed with privacy-first principles:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Review content is analyzed for patterns, not personal details
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  AI models are trained on anonymized, aggregated data only
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Personal identifiers are separated from AI training datasets
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  AI decisions can be explained and appealed through human review
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Data Sharing & Third Parties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                We never sell your personal data. Limited sharing occurs only in these situations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-400">What We Share</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Aggregated, anonymized analytics data</li>
                    <li>• Trust scores (not personal details)</li>
                    <li>• Public review content (as intended)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-400">What We Never Share</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Personal contact information</li>
                    <li>• Payment or financial details</li>
                    <li>• Private account information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Updates */}
          <Card className="bg-yellow-500/10 border-yellow-500/30">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Policy Updates & Contact</h3>
                  <p className="text-gray-300 mb-4">
                    We'll notify you of significant privacy policy changes via email. 
                    For questions about this policy or your privacy rights, contact our privacy team:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="outline" className="text-green-400 border-green-500/30">
                      privacy@trustmarket.com
                    </Badge>
                    <Badge variant="outline" className="text-blue-400 border-blue-500/30">
                      Data Protection Officer
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
