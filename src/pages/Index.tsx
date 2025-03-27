
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TechnologySection from '@/components/sections/TechnologySection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import CTASection from '@/components/sections/CTASection';
import StatsSection from '@/components/ui-custom/StatsSection';

const Index = () => {
  // Initialize the intersection observer for animation
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <StatsSection
          title="Driving Measurable Results"
          stats={[
            { value: 32, suffix: "%", label: "Average ROI Increase" },
            { value: 65, suffix: "%", label: "Time Saved on Reporting" },
            { value: 98, suffix: "%", label: "Data Accuracy" },
            { value: 24, suffix: "/7", label: "Real-time Monitoring" },
          ]}
          className="section-fade-in"
        />
        
        <FeaturesSection />
        
        <TechnologySection />
        
        <CaseStudiesSection />
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
