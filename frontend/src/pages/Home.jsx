import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Badge } from '../components/ui/badge';
import { Phone, MessageCircle, CheckCircle, GraduationCap, Users, Clock, Monitor, Award, BookOpen, Laptop, MapPin, Star, Quote } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import LeadCaptureModal from '../components/LeadCaptureModal';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    city: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = '919221763659';

  const handleWhatsAppClick = () => {
    // Open modal to capture lead details
    setIsModalOpen(true);
  };

  const handleModalSuccess = (leadData) => {
    // After lead is saved, redirect to WhatsApp
    const message = `Hi, I'm ${leadData.name}. I want to learn MS-CIT.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919221763659';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.mobile || !formData.city) {
      toast.error('Please fill all fields');
      return;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Save lead to database
      await axios.post(`${API}/leads`, {
        name: formData.fullName,
        mobile: formData.mobile,
        city: formData.city,
        source: 'enquiry_form'
      });

      // Navigate to thank you page with lead data
      navigate('/thank-you', {
        state: {
          leadData: {
            name: formData.fullName,
            mobile: formData.mobile,
            city: formData.city
          }
        }
      });

      // Reset form
      setFormData({ fullName: '', mobile: '', city: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-black text-white py-3 px-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://customer-assets.emergentagent.com/job_3dada212-0c7a-49f3-82cf-10ce7550a554/artifacts/oc81m7m1_SMART%20LOGO%20150x150.png"
              alt="Smart Education Centre Logo"
              className="w-[60px] h-[60px] object-contain" />

            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent leading-tight">Smart Education Centre</h1>
              <p className="text-xs md:text-sm text-gray-300">Maharashtra Government Recognized</p>
            </div>
          </div>
          <div className="hidden md:flex gap-3">
            <Button onClick={handleCallClick} variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
            <Button onClick={() => handleWhatsAppClick()} className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-lg">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-95"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604177091072-b7b677a077f6)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge className="bg-amber-500 text-black hover:bg-amber-600 px-4 py-2 text-sm transition-all duration-300">Maharashtra Government Recognized</Badge>
              <Badge className="bg-amber-500 text-black hover:bg-amber-600 px-4 py-2 text-sm transition-all duration-300">Beginner Friendly</Badge>
              <Badge className="bg-amber-500 text-black hover:bg-amber-600 px-4 py-2 text-sm transition-all duration-300">Online + Recorded Classes</Badge>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              <span className="block mb-3">MS-CIT Online Course</span>
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-3">Government Recognized</span>
              <span className="block">Computer Certification</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Learn essential computer skills required for jobs, government exams, and daily digital work – 100% Online from Home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => handleWhatsAppClick()} size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-600 hover:to-yellow-700 text-lg px-8 py-6 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Enquiry
              </Button>
              <Button onClick={handleCallClick} size="lg" variant="outline" className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black text-lg px-8 py-6 transition-all duration-300 shadow-xl">
                <Phone className="mr-2 h-5 w-5" /> Request Call Back
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">Why MS-CIT Course <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Matters Today</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Mandatory for Government Jobs</h3>
                    <p className="text-gray-600">Mandatory or preferred for many Maharashtra government and semi-government jobs</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Build Computer Confidence</h3>
                    <p className="text-gray-600">Builds computer confidence for office and clerical work</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Digital Services Mastery</h3>
                    <p className="text-gray-600">Helps with online services like banking, forms, and digital payments</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-black">Widely Accepted</h3>
                    <p className="text-gray-600">Widely accepted certification across Maharashtra</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300"></div>
                <img src="https://images.unsplash.com/photo-1675664533677-2f3479b85c20" alt="Indian office professional" className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">What You Will Learn in <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">MS-CIT</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-4"></div>
            <p className="text-center text-amber-600 font-semibold text-lg mb-12">No prior computer knowledge required</p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-all duration-300"></div>
                <img src="https://images.unsplash.com/photo-1627599936744-51d288f89af4" alt="Students practicing on modern computers with LED monitors" className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
              </div>
              
              <div className="space-y-4 order-1 md:order-2">
                <Card className="border-l-4 border-amber-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-black">
                      <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-2 rounded-lg">
                        <Monitor className="h-5 w-5 text-black" />
                      </div>
                      Computer Fundamentals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Computer fundamentals & operating systems, Windows file and folder management</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-amber-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-black">
                      <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-black" />
                      </div>
                      MS Office Suite
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">MS Word, Excel & PowerPoint – complete practical training</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-amber-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-black">
                      <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-2 rounded-lg">
                        <Laptop className="h-5 w-5 text-black" />
                      </div>
                      Internet & Digital Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Internet usage, email, cyber safety and digital awareness</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Smart Education Centre */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">Why Learn MS-CIT With <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Smart Education Centre</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-amber-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                      <GraduationCap className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle className="text-lg text-black">Live Online Classes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">Expert guidance with interactive live sessions</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-amber-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle className="text-lg text-black">Recorded Lectures</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">Access recorded sessions for missed classes</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-amber-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                      <Award className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle className="text-lg text-black">Exam-Oriented</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">Teaching focused on exam success</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-amber-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader>
                    <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                      <Users className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle className="text-lg text-black">Personal Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">Doubt-solving & assistance till certification</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300"></div>
                <img src="https://images.unsplash.com/photo-1634464660153-468d44306ac4" alt="Indian teacher guiding students" className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">Who Can <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Join This Course?</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-amber-500">
                <CardHeader>
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-black">Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">10th / 12th pass & College students</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-amber-500">
                <CardHeader>
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-black">Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Job seekers & Office staff</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-amber-500">
                <CardHeader>
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-black">Everyone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Homemakers & Senior citizens</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-xl font-bold bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent mb-6">Age is not a barrier. Anyone can learn.</p>
              <div className="relative group inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-all duration-300"></div>
                <img src="https://customer-assets.emergentagent.com/job_3dada212-0c7a-49f3-82cf-10ce7550a554/artifacts/udp70l4j_ChatGPT%20Image%20Jan%2018%2C%202026%2C%2004_40_50%20PM.png" alt="Indian students learning computers" className="relative rounded-2xl shadow-2xl max-w-2xl w-full h-[300px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Course <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Details</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-amber-500 border-2 text-center hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-white">Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-400 font-bold text-xl">3 Months</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-amber-500 border-2 text-center hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Monitor className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-white">Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-400 font-bold text-xl">Online<br />(Live + Recorded)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-amber-500 border-2 text-center hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Laptop className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-white">Device</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-400 font-bold text-xl">Mobile / Laptop / Desktop</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-amber-500 border-2 text-center hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-white">Exam</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-400 font-bold text-xl">Official MS-CIT Online Exam</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">Certification You Will <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Receive</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-2 border-amber-500 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-black flex items-center gap-3">
                      <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-3 rounded-lg">
                        <Award className="h-8 w-8 text-black" />
                      </div>
                      Official MS-CIT Certificate
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Students receive the official <strong>MS-CIT Certificate</strong> issued under the authority of <strong>Maharashtra Knowledge Corporation Limited (MKCL)</strong>, recognized across Maharashtra.
                    </p>
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg border-l-4 border-amber-500">
                      <p className="text-gray-700 font-semibold">✓ Government-backed certification</p>
                      <p className="text-gray-700 font-semibold">✓ Accepted for job applications</p>
                      <p className="text-gray-700 font-semibold">✓ Valid across Maharashtra</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-300"></div>
                <img src="https://customer-assets.emergentagent.com/job_3dada212-0c7a-49f3-82cf-10ce7550a554/artifacts/tqa71y74_ms-cit%20certificate.jpg" alt="MS-CIT Certificate" className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">What Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Students Say</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-4"></div>
            <p className="text-center text-gray-600 text-lg mb-12">Real success stories from our MS-CIT students across Maharashtra</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Review 1 */}
              <Card className="border-2 border-gray-100 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                  <Quote className="h-8 w-8 text-amber-500 mb-3" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "Smart Education Centre made learning MS-CIT so easy! I got a government job and MS-CIT certificate was mandatory. The teachers explained everything clearly, even for someone like me who never touched a computer before."
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">RS</span>
                    </div>
                    <div>
                      <p className="font-bold text-black">Rajesh Salve</p>
                      <p className="text-sm text-gray-600">Government Job Aspirant, Dadar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Review 2 */}
              <Card className="border-2 border-gray-100 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                  <Quote className="h-8 w-8 text-amber-500 mb-3" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "Being a housewife, I had zero computer knowledge. Smart Education Centre's online classes were perfect - I could learn from home. Now I can handle all online work confidently. Thank you for the patience and support!"
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">PP</span>
                    </div>
                    <div>
                      <p className="font-bold text-black">Priya Patil</p>
                      <p className="text-sm text-gray-600">Homemaker, Worli</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Review 3 */}
              <Card className="border-2 border-gray-100 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                  <Quote className="h-8 w-8 text-amber-500 mb-3" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "Best decision for my career! I completed MS-CIT from Smart Education Centre while working. Recorded classes helped me a lot. Now I'm confident with Excel, Word, and all computer basics. Highly recommended!"
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">AM</span>
                    </div>
                    <div>
                      <p className="font-bold text-black">Amit More</p>
                      <p className="text-sm text-gray-600">Working Professional, Parel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Review 4 */}
              <Card className="border-2 border-gray-100 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                  <Quote className="h-8 w-8 text-amber-500 mb-3" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "Excellent teaching and support! I was nervous about computers, but the step-by-step guidance made it simple. MS-CIT certificate opened many job opportunities for me. Very grateful to Smart Education Centre!"
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">SK</span>
                    </div>
                    <div>
                      <p className="font-bold text-black">Sneha Kamble</p>
                      <p className="text-sm text-gray-600">College Student, Mumbai Central</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Review 5 */}
              <Card className="border-2 border-gray-100 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                  <Quote className="h-8 w-8 text-amber-500 mb-3" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "At 55, I thought I was too old to learn computers. Smart Education Centre proved me wrong! The teachers were patient, classes were easy to understand. Now I can do online banking and use WhatsApp confidently!"
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">VD</span>
                    </div>
                    <div>
                      <p className="font-bold text-black">Vijay Deshmukh</p>
                      <p className="text-sm text-gray-600">Retired Professional, Worli</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Review 6 */}
              <Card className="border-2 border-gray-100 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                  </div>
                  <Quote className="h-8 w-8 text-amber-500 mb-3" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "Perfect place for MS-CIT! Live classes, recorded videos, doubt-solving - everything was excellent. I cleared my exam in first attempt. All thanks to Smart Education Centre's dedicated team. Strongly recommended!"
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">MP</span>
                    </div>
                    <div>
                      <p className="font-bold text-black">Manish Pawar</p>
                      <p className="text-sm text-gray-600">Job Seeker, Lower Parel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-500 rounded-2xl px-8 py-6">
                <p className="text-3xl font-bold text-black mb-2">2500+ Students</p>
                <p className="text-gray-700 text-lg">Successfully Certified in MS-CIT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">Frequently Asked <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Questions</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-12"></div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border-2 border-gray-100 rounded-lg px-6 hover:border-amber-500 transition-all duration-300">
                <AccordionTrigger className="text-left font-semibold text-black hover:text-amber-600 transition-colors">
                  Is MS-CIT valid for government jobs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  Yes, it is a government-recognized certification in Maharashtra and is mandatory or preferred for many government and semi-government job positions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white border-2 border-gray-100 rounded-lg px-6 hover:border-amber-500 transition-all duration-300">
                <AccordionTrigger className="text-left font-semibold text-black hover:text-amber-600 transition-colors">
                  Can I attend classes using mobile?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  Yes, mobile is supported for attending live classes. However, a laptop or desktop is recommended for better practice and hands-on experience with MS Office applications.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white border-2 border-gray-100 rounded-lg px-6 hover:border-amber-500 transition-all duration-300">
                <AccordionTrigger className="text-left font-semibold text-black hover:text-amber-600 transition-colors">
                  What if I miss a live class?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  Don't worry! All live classes are recorded and provided to students. You can access the recorded lectures anytime and learn at your own pace.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white border-2 border-gray-100 rounded-lg px-6 hover:border-amber-500 transition-all duration-300">
                <AccordionTrigger className="text-left font-semibold text-black hover:text-amber-600 transition-colors">
                  Is prior computer knowledge required?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  No, the course starts from basics and is designed for complete beginners. We teach everything from computer fundamentals to advanced MS Office skills.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="bg-amber-500 text-black px-4 py-2 text-sm mb-4">Limited Seats Available</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Enquire <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Now</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-4"></div>
              <p className="text-gray-300 text-lg">Fill the form below and we'll get back to you with complete course details</p>
            </div>
            
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-amber-500 shadow-2xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white text-base">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 h-12 text-base"
                      required />

                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-white text-base">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 h-12 text-base"
                      required />

                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-white text-base">City *</Label>
                    <Input
                      id="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 h-12 text-base"
                      required />

                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-600 hover:to-yellow-700 h-14 text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    <MessageCircle className="mr-2 h-5 w-5" /> Get Course Details on WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-500 to-yellow-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Start Your Computer Learning Journey Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button onClick={handleCallClick} size="lg" className="bg-black text-amber-500 hover:bg-gray-900 text-lg px-8 py-6 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </Button>
            <Button onClick={() => handleWhatsAppClick()} size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Now
            </Button>
          </div>
          <p className="text-black font-semibold text-lg">Admissions Open | Online Batches Available</p>
        </div>
      </section>

      {/* Address & Location Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">Visit Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Centre</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <Card className="border-2 border-amber-500 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-black">Smart Education Centre</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-500">
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        BDD Chawl No. 48, Shop No. 18,<br/>
                        Opp. Jambori Maidan, Worli,<br/>
                        Mumbai - 400 018
                      </p>
                    </div>
                    <div className="space-y-3 pt-4">
                      <p className="flex items-center gap-3 text-gray-700">
                        <Phone className="h-5 w-5 text-amber-500" />
                        <span className="font-semibold">+91 9221763659</span>
                      </p>
                      <p className="flex items-center gap-3 text-gray-700">
                        <MessageCircle className="h-5 w-5 text-amber-500" />
                        <span className="font-semibold">WhatsApp: +91 9221763659</span>
                      </p>
                    </div>
                    <Button 
                      onClick={() => window.open('https://www.google.com/maps/dir//Smart+Education+Centre,+BDD+Chawl+No.+48,+Shop+No.+18,+Opp.+Jambori+Maidan,+Worli,+Mumbai+-+400018/@19.00222305428559,72.81729617466343', '_blank')}
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-600 hover:to-yellow-700 text-lg py-6 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl transform rotate-2 opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-500">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.396933247089!2d72.81729617466343!3d19.00222305428559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce91571b21e9%3A0x6a514b95150e2b88!2sSmart%20Education%20Centre!5e0!3m2!1sen!2sin!4v1768733190234!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Smart Education Centre Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Smart Education Centre</h3>
              <p className="text-gray-400 mb-3">Maharashtra Government Recognized MS-CIT Online Course Provider</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                BDD Chawl No. 48, Shop No. 18,<br/>
                Opp. Jambori Maidan, Worli,<br/>
                Mumbai - 400 018
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-amber-400 transition-colors cursor-pointer">About MS-CIT</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Course Details</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Certification</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Contact Us</li>
                <li onClick={() => navigate('/privacy')} className="hover:text-amber-400 transition-colors cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-500" />
                  +91 9221763659
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-amber-500" />
                  WhatsApp: +91 9221763659
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Smart Education Centre. All rights reserved. | MS-CIT Course - Maharashtra Government Recognized | <span onClick={() => navigate('/privacy')} className="hover:text-amber-400 transition-colors cursor-pointer underline">Privacy Policy</span></p>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-amber-500 shadow-2xl">
        <div className="flex gap-2 p-3">
          <Button 
            onClick={handleCallClick} 
            className="flex-1 bg-black text-amber-500 hover:bg-gray-900 py-6 text-base font-bold transition-all duration-300 shadow-lg"
          >
            <Phone className="mr-2 h-5 w-5" /> Call Now
          </Button>
          <Button 
            onClick={() => handleWhatsAppClick()} 
            className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-600 hover:to-yellow-700 py-6 text-base font-bold transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
          </Button>
        </div>
      </div>
    </div>);

};

export default Home;