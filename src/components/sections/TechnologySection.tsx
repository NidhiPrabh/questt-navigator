
import React, { useEffect } from 'react';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import { Database, Network, BrainCircuit, Users } from 'lucide-react';

const TechnologySection = () => {
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
        <SectionHeading
          subtitle="How It Works"
          title="Our Technology Framework"
          description="Our unique technology framework transforms raw data into precise, actionable insights"
          centered
          className="section-fade-in"
        />
        
        <div className="mt-16 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 w-3/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            <div className="section-fade-in" style={{ transitionDelay: '100ms' }}>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 mb-6">
                  <Database className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Connectors</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate all your data sources with our robust connector framework, enabling comprehensive data collection without disruption to your existing systems.
                </p>
              </div>
            </div>
            
            <div className="section-fade-in" style={{ transitionDelay: '200ms' }}>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 mb-6">
                  <Network className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Knowledge Graph (KG)</h3>
                <p className="text-muted-foreground">
                  Organize and contextualize your data with our advanced Knowledge Graph technology, providing a comprehensive understanding of relationships and patterns within your financial ecosystem.
                </p>
              </div>
            </div>
            
            <div className="section-fade-in" style={{ transitionDelay: '300ms' }}>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 mb-6">
                  <BrainCircuit className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Precision LLM</h3>
                <p className="text-muted-foreground">
                  Employ advanced language models specifically tuned for financial analysis to interpret complex information and generate insights with unprecedented accuracy and relevance.
                </p>
              </div>
            </div>
            
            <div className="section-fade-in" style={{ transitionDelay: '400ms' }}>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 mb-6">
                  <Users className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Specialized Agents</h3>
                <p className="text-muted-foreground">
                  Deploy purpose-built AI agents trained to execute tailored solutions across Business Intelligence, Conversational Finance, and Risk Management domains.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-secondary rounded-2xl p-8 section-fade-in">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 pr-0 md:pr-8 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">End-to-End Data Pipeline</h3>
              <p className="text-muted-foreground mb-4">
                Our innovative pipeline ensures that every decision you make is informed by deep, accurate insights drawn directly from your data. From initial collection to final analysis, we maintain data integrity and relevance throughout the process.
              </p>
              <p className="text-muted-foreground">
                This systematic approach allows for customization to your specific industry needs while maintaining the highest standards of data security and compliance.
              </p>
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="relative h-64 bg-white rounded-lg shadow-md p-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/5 flex items-center justify-center animate-pulse-soft">
                    <div className="w-36 h-36 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                          <BrainCircuit className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-3 left-3 w-12 h-2 bg-primary/20 rounded-full"></div>
                <div className="absolute top-3 right-3 w-8 h-2 bg-primary/20 rounded-full"></div>
                <div className="absolute bottom-3 left-3 w-10 h-2 bg-primary/20 rounded-full"></div>
                <div className="absolute bottom-3 right-3 w-14 h-2 bg-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
