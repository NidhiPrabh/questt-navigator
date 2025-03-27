
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, BarChart2, Shield, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const animatedElementsRef = useRef<HTMLDivElement>(null);

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
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-5 right-5 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-soft" />
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={animatedElementsRef} className="section-fade-in">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
              AI-Powered Financial Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Boost Your ROI with <span className="questt-gradient-text">Intelligent</span> Financial Insights
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Our advanced AI platform harnesses the power of your data to deliver actionable insights that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-6 shadow-md hover:shadow-lg group">
                  Get Started
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline" className="rounded-full px-6">
                  View Case Studies
                </Button>
              </Link>
            </div>
            
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md">
              <div className="flex items-center space-x-2">
                <BarChart2 className="text-primary w-5 h-5" />
                <span className="text-sm font-medium">Business Intelligence</span>
              </div>
              <div className="flex items-center space-x-2">
                <LineChart className="text-primary w-5 h-5" />
                <span className="text-sm font-medium">Conversational Finance</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="text-primary w-5 h-5" />
                <span className="text-sm font-medium">Risk Management</span>
              </div>
            </div>
          </div>
          
          <div className="section-fade-in">
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-primary/10 p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="h-6 bg-white/60 rounded-md w-1/2 mb-2"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-24 h-8 bg-primary/10 rounded-md"></div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-md bg-secondary"></div>
                        <div className="w-8 h-8 rounded-md bg-secondary"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="h-4 bg-secondary rounded-sm w-full"></div>
                      <div className="h-4 bg-secondary rounded-sm w-5/6"></div>
                      <div className="h-4 bg-secondary rounded-sm w-4/6"></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="h-20 rounded-lg bg-primary/5 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                      </div>
                      <div className="h-20 rounded-lg bg-primary/5 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                      </div>
                      <div className="h-20 rounded-lg bg-primary/5 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                      </div>
                    </div>
                    
                    <div className="h-32 bg-primary/5 rounded-lg flex items-center justify-center">
                      <div className="w-3/4 h-16 bg-white rounded-md shadow-sm flex items-center justify-center">
                        <div className="w-20 h-6 bg-primary/20 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full filter blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
