
import React, { useEffect } from 'react';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import FeatureCard from '@/components/ui-custom/FeatureCard';
import { 
  LineChart, 
  BarChart2, 
  PieChart, 
  Zap, 
  Shield, 
  Lock, 
  TrendingUp, 
  Settings, 
  MessageSquare
} from 'lucide-react';

const FeaturesSection = () => {
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
    <section className="py-20 px-6 md:px-10 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What We Do"
          title="Transforming Financial Data Into Strategic Advantage"
          description="Our solution is built on the foundation of rigorous financial principles and leverages your complete dataset to deliver actionable insights."
          centered
          className="section-fade-in"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="section-fade-in" style={{ transitionDelay: '100ms' }}>
            <FeatureCard
              icon={BarChart2}
              title="Business Intelligence"
              description="Identify hidden opportunities with cutting-edge algorithms that uncover trends and patterns for strategic business decisions."
            />
          </div>
          
          <div className="section-fade-in" style={{ transitionDelay: '200ms' }}>
            <FeatureCard
              icon={MessageSquare}
              title="Conversational Finance"
              description="Stay ahead with real-time reporting and dynamic financial conversations that ensure critical decisions are backed by timely insights."
            />
          </div>
          
          <div className="section-fade-in" style={{ transitionDelay: '300ms' }}>
            <FeatureCard
              icon={Shield}
              title="Risk Management"
              description="Ensure your business adheres to tax regulations and internal policies, reducing risk and maintaining robust governance."
            />
          </div>
          
          <div className="section-fade-in" style={{ transitionDelay: '400ms' }}>
            <FeatureCard
              icon={Zap}
              title="Rapid Implementation"
              description="Get up and running quickly with our streamlined onboarding process and intuitive platform design."
            />
          </div>
          
          <div className="section-fade-in" style={{ transitionDelay: '500ms' }}>
            <FeatureCard
              icon={TrendingUp}
              title="Growth Strategies"
              description="Leverage data-driven insights to identify and capitalize on growth opportunities in your market."
            />
          </div>
          
          <div className="section-fade-in" style={{ transitionDelay: '600ms' }}>
            <FeatureCard
              icon={Lock}
              title="Secure Data Handling"
              description="Your financial data is protected with enterprise-grade security protocols and encryption standards."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
