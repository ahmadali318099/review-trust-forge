
import { useState } from 'react';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, MapPin, Calendar, Star, Shield } from 'lucide-react';

const VendorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Vendor Pro',
    email: 'vendor@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Experienced digital product creator specializing in web development courses and educational content.',
    website: 'https://vendorpro.com',
    joinDate: '2023-06-15'
  });

  const stats = [
    { label: 'Total Sales', value: '234', icon: Star },
    { label: 'Products', value: '18', icon: User },
    { label: 'Rating', value: '4.8', icon: Star },
    { label: 'Reviews', value: '156', icon: Shield }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  return (
    <Layout userRole="vendor" userName="Vendor Pro" showFooter={false}>
      <div className="flex min-h-screen">
        <Sidebar userRole="vendor" />
        
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
                <p className="text-gray-400">Manage your vendor profile information</p>
              </div>
              
              <Button 
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className={isEditing ? "bg-green-500 hover:bg-green-400 text-black" : "border-green-500/30 text-green-400 hover:bg-green-500/10"}
                variant={isEditing ? "default" : "outline"}
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </Button>
            </div>

            {/* Profile Card */}
            <Card className="bg-gray-900/50 border-gray-800 mb-8">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-400 rounded-2xl flex items-center justify-center">
                    <span className="text-black font-bold text-2xl">VP</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-2xl font-bold text-white">{profileData.name}</h2>
                      <Badge className="bg-green-500/20 text-green-400">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified Vendor
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Mail className="h-4 w-4 text-green-400" />
                        <span>{profileData.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Phone className="h-4 w-4 text-green-400" />
                        <span>{profileData.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="h-4 w-4 text-green-400" />
                        <span>{profileData.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Calendar className="h-4 w-4 text-green-400" />
                        <span>Joined {profileData.joinDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Profile Form */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Profile Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Full Name</label>
                      <Input
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        disabled={!isEditing}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Email Address</label>
                      <Input
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        disabled={!isEditing}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Phone Number</label>
                      <Input
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        disabled={!isEditing}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Location</label>
                      <Input
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        disabled={!isEditing}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 mb-2">Website</label>
                      <Input
                        value={profileData.website}
                        onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                        disabled={!isEditing}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Bio</label>
                    <Textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      disabled={!isEditing}
                      className="bg-gray-800/50 border-gray-700 focus:border-green-500 min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorProfile;
