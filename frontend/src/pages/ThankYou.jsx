import React, { useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, MessageCircle, Phone, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const leadData = location.state?.leadData;

  const whatsappNumber = '919221763659';

  const handleWhatsAppClick = () => {
    const message = leadData?.name 
      ? `Hi, I'm ${leadData.name}. I want to learn MS-CIT.`
      : 'Hi, I want to learn MS-CIT.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919221763659';
  };

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <Card className="border-2 border-amber-500 shadow-2xl">
          <CardContent className="pt-12 pb-8">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full p-4 animate-bounce">
                <CheckCircle className="h-16 w-16 text-black" />
              </div>
            </div>

            {/* Thank You Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
              Thank You{leadData?.name ? `, ${leadData.name}` : ''}!
            </h1>
            <p className="text-xl text-center text-gray-700 mb-2">
              Your enquiry has been received successfully
            </p>
            <p className="text-center text-gray-600 mb-8">
              We'll get back to you shortly to help you start your MS-CIT journey
            </p>

            {/* Lead Info Display */}
            {leadData && (
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-6 mb-8 border-l-4 border-amber-500">
                <h3 className="font-bold text-lg mb-3 text-black">Your Details:</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Name:</strong> {leadData.name}</p>
                  <p><strong>Mobile:</strong> {leadData.mobile}</p>
                  {leadData.city && <p><strong>City:</strong> {leadData.city}</p>}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-4 mb-6">
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-600 hover:to-yellow-700 py-6 text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Continue To WhatsApp
              </Button>

              <Button 
                onClick={handleCallClick}
                variant="outline"
                className="w-full border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black py-6 text-lg font-bold transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Us Now
              </Button>
            </div>

            {/* Back to Home */}
            <div className="text-center">
              <Button 
                onClick={() => navigate('/')}
                variant="ghost"
                className="text-gray-600 hover:text-amber-600"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            <strong className="text-black">Smart Education Centre</strong><br/>
            BDD Chawl No. 48, Shop No. 18, Opp. Jambori Maidan, Worli, Mumbai - 400 018
          </p>
          <p className="text-gray-600">
            Call: <a href="tel:+919221763659" className="text-amber-600 hover:underline">+91 9221763659</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
