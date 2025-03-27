
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart, BarChart2, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
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

  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 section-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Financial Operations?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Contact us today to discover how Questt AI Systems can drive smarter decisions and sustainable growth for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="rounded-full group">
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline" className="rounded-full">
                    View Success Stories
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <BarChart2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-sm">Business Intelligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <LineChart className="text-primary flex-shrink-0" size={20} />
                  <span className="text-sm">Conversational Finance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-primary flex-shrink-0" size={20} />
                  <span className="text-sm">Risk Management</span>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center section-fade-in">
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <BarChart2 className="text-primary" size={20} />
                    </div>
                    <h3 className="font-semibold">Increased Revenue</h3>
                  </div>
                  <p className="text-muted-foreground">
                    "Questt AI helped us identify hidden opportunities, resulting in a 32% increase in our quarterly revenue."
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm font-medium">CFO, Retail Corporation</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="text-primary" size={20} />
                    </div>
                    <h3 className="font-semibold">Risk Reduction</h3>
                  </div>
                  <p className="text-muted-foreground">
                    "The platform's risk management capabilities have saved us from potential compliance issues multiple times."
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm font-medium">COO, Financial Services</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
