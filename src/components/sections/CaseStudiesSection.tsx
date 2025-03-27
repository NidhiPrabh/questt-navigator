
import React, { useEffect } from 'react';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import CaseStudyCard from '@/components/ui-custom/CaseStudyCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesSection = () => {
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
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <SectionHeading
            subtitle="Case Studies"
            title="Real Results for Real Businesses"
            className="section-fade-in mb-6 md:mb-0"
          />
          
          <Link to="/case-studies" className="section-fade-in">
            <Button
              variant="outline"
              className="rounded-full group"
            >
              <span>View all case studies</span>
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="section-fade-in" style={{ transitionDelay: '100ms' }}>
            <CaseStudyCard
              title="Retail Optimization"
              description="How a leading retailer improved inventory management and boosted sales by 24% using our AI-driven analytics."
              image="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&q=90"
              link="/case-studies#retail"
            />
          </div>
          
          <div className="section-fade-in" style={{ transitionDelay: '200ms' }}>
            <CaseStudyCard
              title="Wealth Management"
              description="A financial services firm leveraged our platform to deliver personalized advice and improve client portfolios by 18%."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&q=90"
              link="/case-studies#wealth-management"
            />
          </div>
          
          <div className="section-fade-in" style={{ transitionDelay: '300ms' }}>
            <CaseStudyCard
              title="Manufacturing Efficiency"
              description="How a global manufacturer reduced operational costs by 15% while improving supply chain resilience and forecasting."
              image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&q=90"
              link="/case-studies#manufacturing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
