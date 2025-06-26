
import { useState } from 'react';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings, Shield, Zap, Bell, Database, Download } from 'lucide-react';

const AdminSettings = () => {
  const [aiThreshold, setAiThreshold] = useState([75]);
  const [autoModeration, setAutoModeration] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [systemMaintenance, setSystemMaintenance] = useState(false);

  const [settings, setSettings] = useState({
    siteName: 'TrustMarket',
    supportEmail: 'support@trustmarket.com',
    maxFileSize: '50',
    sessionTimeout: '24',
    backupFrequency: 'daily'
  });

  const handleSave = () => {
    console.log('Saving settings...', { settings, aiThreshold, autoModeration });
    // Save logic would go here
  };

  return (
    <Layout userRole="admin" userName="Admin" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="admin" />
        
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">System Settings</h1>
                <p className="text-gray-400">Configure platform settings and AI parameters</p>
              </div>
              
              <Button onClick={handleSave} className="bg-green-500 hover:bg-green-400 text-black">
                Save Changes
              </Button>
            </div>

            <div className="space-y-8">
              {/* AI Configuration */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-green-400" />
                    AI Review Detection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-4">
                      AI Confidence Threshold: {aiThreshold[0]}%
                    </label>
                    <Slider
                      value={aiThreshold}
                      onValueChange={setAiThreshold}
                      max={100}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-gray-400 text-sm mt-2">
                      Reviews with AI confidence below this threshold will be flagged for manual review
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-gray-300 font-medium">Auto-Moderation</label>
                      <p className="text-gray-400 text-sm">Automatically delete reviews with very low AI scores</p>
                    </div>
                    <Switch
                      checked={autoModeration}
                      onCheckedChange={setAutoModeration}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Model Version</label>
                      <Select defaultValue="v2.1">
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-green-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800">
                          <SelectItem value="v2.1">AI Model v2.1 (Latest)</SelectItem>
                          <SelectItem value="v2.0">AI Model v2.0</SelectItem>
                          <SelectItem value="v1.9">AI Model v1.9</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Training Data Update</label>
                      <Select defaultValue="weekly">
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-green-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800">
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* System Configuration */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-green-400" />
                    General Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Site Name</label>
                      <Input
                        value={settings.siteName}
                        onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Support Email</label>
                      <Input
                        value={settings.supportEmail}
                        onChange={(e) => setSettings({...settings, supportEmail: e.target.value})}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Max File Size (MB)</label>
                      <Input
                        value={settings.maxFileSize}
                        onChange={(e) => setSettings({...settings, maxFileSize: e.target.value})}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Session Timeout (hours)</label>
                      <Input
                        value={settings.sessionTimeout}
                        onChange={(e) => setSettings({...settings, sessionTimeout: e.target.value})}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-gray-300 font-medium">Maintenance Mode</label>
                      <p className="text-gray-400 text-sm">Enable to temporarily disable public access</p>
                    </div>
                    <Switch
                      checked={systemMaintenance}
                      onCheckedChange={setSystemMaintenance}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-green-400" />
                    Notification Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-gray-300 font-medium">Email Notifications</label>
                      <p className="text-gray-400 text-sm">Receive email alerts for flagged reviews and system events</p>
                    </div>
                    <Switch
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Alert Recipients</label>
                      <Input
                        placeholder="admin@example.com, security@example.com"
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Alert Frequency</label>
                      <Select defaultValue="immediate">
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-green-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800">
                          <SelectItem value="immediate">Immediate</SelectItem>
                          <SelectItem value="hourly">Hourly Digest</SelectItem>
                          <SelectItem value="daily">Daily Digest</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Database & Backup */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Database className="h-5 w-5 mr-2 text-green-400" />
                    Database & Backup
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Backup Frequency</label>
                      <Select 
                        value={settings.backupFrequency} 
                        onValueChange={(value) => setSettings({...settings, backupFrequency: value})}
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-green-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800">
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Retention Period (days)</label>
                      <Input
                        defaultValue="30"
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
                      <Download className="h-4 w-4 mr-2" />
                      Create Backup Now
                    </Button>
                    <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                      View Backup History
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-400" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Password Complexity</label>
                      <Select defaultValue="high">
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-green-500">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-800">
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Login Attempts Limit</label>
                      <Input
                        defaultValue="5"
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10">
                      View Security Logs
                    </Button>
                    <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                      Force Password Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminSettings;
