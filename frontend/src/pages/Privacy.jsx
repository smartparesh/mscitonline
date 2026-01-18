import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-black text-white py-3 px-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_3dada212-0c7a-49f3-82cf-10ce7550a554/artifacts/oc81m7m1_SMART%20LOGO%20150x150.png" 
              alt="Smart Education Centre Logo" 
              className="w-[60px] h-[60px] object-contain"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent leading-tight">Smart Education Centre</h1>
              <p className="text-xs md:text-sm text-gray-300">Maharashtra Government Recognized</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-4 rounded-full">
              <Shield className="h-12 w-12 text-black" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy outlines how Smart Education Centre collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last Updated: January 2025</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Information We Collect */}
          <Card className="mb-8 border-2 border-amber-500 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg">
                  <Database className="h-6 w-6 text-black" />
                </div>
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Personal Information</h3>
                <p className="leading-relaxed">When you enquire about our MS-CIT course or register, we collect:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Full Name</li>
                  <li>Mobile Number</li>
                  <li>City/Location</li>
                  <li>Email Address (if provided)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2 text-black">Usage Information</h3>
                <p className="leading-relaxed">We may collect information about how you interact with our website, including:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Device information</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="mb-8 border-2 border-amber-500 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg">
                  <UserCheck className="h-6 w-6 text-black" />
                </div>
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your enquiries about MS-CIT courses</li>
                <li>Process your course registration</li>
                <li>Send you course updates and important information</li>
                <li>Communicate batch schedules and class timings</li>
                <li>Provide customer support and assistance</li>
                <li>Improve our services and website experience</li>
                <li>Send promotional materials (only with your consent)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="mb-8 border-2 border-amber-500 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-black" />
                </div>
                Information Sharing and Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed font-semibold text-black">We do NOT sell, trade, or rent your personal information to third parties.</p>
              <p className="leading-relaxed">We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Maharashtra Knowledge Corporation Limited (MKCL)</strong> - For official MS-CIT course registration and examination purposes</li>
                <li><strong>Service Providers</strong> - With trusted partners who assist us in operating our website and conducting our business (e.g., WhatsApp for communication)</li>
                <li><strong>Legal Requirements</strong> - When required by law or to protect our rights and safety</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="mb-8 border-2 border-amber-500 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg">
                  <Lock className="h-6 w-6 text-black" />
                </div>
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed">We take the security of your personal information seriously and implement appropriate measures to protect it:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Secure data storage and encryption</li>
                <li>Limited access to personal information (only authorized staff)</li>
                <li>Regular security assessments and updates</li>
                <li>Secure communication channels (HTTPS, encrypted messaging)</li>
              </ul>
              <p className="leading-relaxed mt-4">However, please note that no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8 border-2 border-amber-500 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg">
                  <UserCheck className="h-6 w-6 text-black" />
                </div>
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access</strong> - Request a copy of your personal information</li>
                <li><strong>Correction</strong> - Update or correct inaccurate information</li>
                <li><strong>Deletion</strong> - Request deletion of your personal data (subject to legal obligations)</li>
                <li><strong>Opt-out</strong> - Unsubscribe from promotional communications at any time</li>
                <li><strong>Withdraw Consent</strong> - Withdraw your consent for data processing</li>
              </ul>
              <p className="leading-relaxed mt-4">To exercise any of these rights, please contact us using the details below.</p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="mb-8 border-2 border-amber-500 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg">
                  <Database className="h-6 w-6 text-black" />
                </div>
                Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed">Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve website functionality</li>
              </ul>
              <p className="leading-relaxed mt-4">You can control cookies through your browser settings. However, disabling cookies may affect your website experience.</p>
            </CardContent>
          </Card>

          {/* Third-Party Links */}
          <Card className="mb-8 border-2 border-amber-500 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-black" />
                </div>
                Third-Party Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed">Our website may contain links to third-party websites (e.g., WhatsApp, Google Maps). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="mb-8 border-2 border-amber-500 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                Changes to This Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8 border-2 border-amber-500 shadow-xl bg-gradient-to-r from-amber-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg">
                  <UserCheck className="h-6 w-6 text-black" />
                </div>
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed">If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:</p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500 space-y-3">
                <p className="font-bold text-black text-lg">Smart Education Centre</p>
                <p>BDD Chawl No. 48, Shop No. 18,<br/>Opp. Jambori Maidan, Worli,<br/>Mumbai - 400 018</p>
                <p><strong>Phone:</strong> +91 9221763659</p>
                <p><strong>WhatsApp:</strong> +91 9221763659</p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/')} 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-600 hover:to-yellow-700 text-lg px-8 py-6 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2025 Smart Education Centre. All rights reserved. | MS-CIT Course - Maharashtra Government Recognized</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
