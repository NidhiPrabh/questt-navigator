
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
          subtitle="What Our AI CFO Agents Do"
          title="Transforming Financial Data Into Strategic Advantage"
          description="Our AI CFO Agents are trained in advanced financial principles and leverage your complete dataset to drive your business towards greater revenue and reduced costs."
          centered
          className="section-fade-in"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="section-fade-in" style={{ transitionDelay: '100ms' }}>
            <FeatureCard
              icon={BarChart2}
              title="Business Intelligence"
              description="Our agents harness the power of data to identify untapped revenue streams and cost-saving opportunities, analyzing market trends and performance metrics for actionable insights."
            />
          </div>
          
          <div className="section-fade-in" style={{ transitionDelay: '200ms' }}>
            <FeatureCard
              icon={MessageSquare}
              title="Conversational Finance"
              description="Experience real-time financial reporting and dynamic discussions with your leadership team, ensuring that every decision is informed by timely data-driven insights."
            />
          </div>
          
          <div className="section-fade-in" style={{ transitionDelay: '300ms' }}>
            <FeatureCard
              icon={Shield}
              title="Risk & Management"
              description="Stay ahead of regulatory demands and internal policy requirements. Our agents monitor tax compliance and governance protocols, minimizing risks before they impact your business."
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
