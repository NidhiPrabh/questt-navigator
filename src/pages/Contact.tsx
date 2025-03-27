
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.section-fade-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      
      // Reset the form submission status after a delay
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-10 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto section-fade-in">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Transform Your Financial Operations
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Ready to harness the power of AI for your business? Contact us today to discover how Questt AI Systems can drive smarter decisions and sustainable growth.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="section-fade-in">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below, and our team will get back to you within 24 hours to discuss how we can help your business leverage AI for financial excellence.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      How can we help?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs and challenges..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full px-8 py-2 h-12"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : formSubmitted ? (
                        <span className="flex items-center">
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Message Sent!
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="section-fade-in">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                  <div className="aspect-video relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6379550734034!2d-122.08385548469728!3d37.42239997982626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6863cefb193fcc7f!2sGoogle%20Building%2041!5e0!3m2!1sen!2sus!4v1657035477548!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Questt AI Systems Location"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-primary" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Office Location</h4>
                          <p className="text-muted-foreground">
                            100 Financial Street, Silicon Valley, CA 94025
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="text-primary" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Email Address</h4>
                          <a href="mailto:info@questtai.com" className="text-primary hover:underline">
                            info@questtai.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="text-primary" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Phone Number</h4>
                          <a href="tel:+15551234567" className="text-primary hover:underline">
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t">
                      <h4 className="font-medium mb-4">Office Hours</h4>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 px-6 md:px-10 bg-secondary">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 section-fade-in">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our services and technology.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md section-fade-in" style={{ transitionDelay: '100ms' }}>
                <h3 className="font-semibold text-lg mb-2">How long does implementation typically take?</h3>
                <p className="text-muted-foreground">
                  Implementation timelines vary based on your organization's size and needs. Typically, initial setup takes 2-4 weeks, with full deployment within 2-3 months. Our team works closely with you to establish a realistic timeline and ensure a smooth transition.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md section-fade-in" style={{ transitionDelay: '200ms' }}>
                <h3 className="font-semibold text-lg mb-2">How do you ensure the security of our financial data?</h3>
                <p className="text-muted-foreground">
                  Security is our priority. We employ end-to-end encryption, strict access controls, and regular security audits. Our platform is compliant with industry standards including SOC 2, GDPR, and financial regulations. We never store your raw data longer than necessary.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md section-fade-in" style={{ transitionDelay: '300ms' }}>
                <h3 className="font-semibold text-lg mb-2">Can your solutions integrate with our existing systems?</h3>
                <p className="text-muted-foreground">
                  Yes, our platform is designed for seamless integration. We offer connectors for most major financial and ERP systems, as well as custom API development for proprietary systems. Our implementation team will work with your IT department to ensure smooth data flow.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md section-fade-in" style={{ transitionDelay: '400ms' }}>
                <h3 className="font-semibold text-lg mb-2">What kind of ROI can we expect?</h3>
                <p className="text-muted-foreground">
                  While results vary by industry and implementation, our clients typically see ROI within 6-9 months. This comes through cost reductions, process efficiencies, and revenue optimization. Our case studies show improvements ranging from 15% to over 30% in key financial metrics.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md section-fade-in" style={{ transitionDelay: '500ms' }}>
                <h3 className="font-semibold text-lg mb-2">Do you offer customized solutions for specific industries?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We recognize that each industry has unique challenges and opportunities. Our platform includes specialized modules for retail, financial services, manufacturing, healthcare, and other sectors, with customization options to address your specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
