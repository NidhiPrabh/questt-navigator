
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import { Database, Network, BrainCircuit, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Technology = () => {
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
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-10 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto section-fade-in">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Our Technology
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Technology Behind Questt AI Systems
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Our innovative technology framework transforms raw data into precise, actionable insights to power your financial decisions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Technology Framework */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              subtitle="Technology Framework"
              title="A Four-Pillar Approach to Financial Intelligence"
              description="Our comprehensive technology stack is designed to deliver exceptional results through a systematic approach to financial data analysis."
              centered
              className="section-fade-in"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg section-fade-in" style={{ transitionDelay: '100ms' }}>
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl mb-6">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Connectors</h3>
                <p className="text-muted-foreground mb-6">
                  Seamlessly integrate all your data sources with our robust connector framework, enabling comprehensive data collection without disruption to your existing systems.
                </p>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Native integration with 200+ data sources</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Real-time and batch processing capabilities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Secure, encrypted data transmission</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Custom connector development for proprietary systems</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg section-fade-in" style={{ transitionDelay: '200ms' }}>
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl mb-6">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Knowledge Graph (KG)</h3>
                <p className="text-muted-foreground mb-6">
                  Organize and contextualize your data with our advanced Knowledge Graph technology, providing a comprehensive understanding of relationships and patterns within your financial ecosystem.
                </p>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Contextual data relationships and dependencies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Ontology-based financial data modeling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Semantic analysis of financial terminology</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Historical data pattern recognition</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg section-fade-in" style={{ transitionDelay: '300ms' }}>
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl mb-6">
                  <BrainCircuit className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Precision LLM</h3>
                <p className="text-muted-foreground mb-6">
                  Employ advanced language models specifically tuned for financial analysis to interpret complex information and generate insights with unprecedented accuracy and relevance.
                </p>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Financial domain-specific language model training</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Multi-language financial terminology support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Continuous learning from new financial data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Context-aware response generation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg section-fade-in" style={{ transitionDelay: '400ms' }}>
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Specialized Agents</h3>
                <p className="text-muted-foreground mb-6">
                  Deploy purpose-built AI agents trained to execute tailored solutions across Business Intelligence, Conversational Finance, and Risk Management domains.
                </p>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Role-specific agent training and specialization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Inter-agent communication and collaboration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Autonomous task execution and reporting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Human-in-the-loop oversight and direction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Architecture */}
        <section className="py-20 px-6 md:px-10 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              subtitle="Technical Architecture"
              title="The Engine Behind Financial Insights"
              description="Our sophisticated technical architecture ensures reliability, security, and scalability for enterprises of all sizes."
              centered
              className="section-fade-in"
            />
            
            <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg section-fade-in">
              <div className="relative h-96 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  {/* Data Layer */}
                  <div className="absolute bottom-6 left-0 right-0 mx-auto w-5/6 h-16 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20">
                    <span className="font-medium">Data Sources & Connectors</span>
                  </div>
                  
                  {/* Processing Layer */}
                  <div className="absolute bottom-24 left-0 right-0 mx-auto w-4/6 h-16 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                    <span className="font-medium">ETL & Data Processing</span>
                  </div>
                  
                  {/* Knowledge Layer */}
                  <div className="absolute bottom-[168px] left-0 right-0 mx-auto w-3/6 h-16 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                    <span className="font-medium">Knowledge Graph</span>
                  </div>
                  
                  {/* AI Layer */}
                  <div className="absolute bottom-[240px] left-0 right-0 mx-auto w-2/6 h-16 bg-primary/30 rounded-lg flex items-center justify-center border border-primary/40">
                    <span className="font-medium text-white">AI Core (Precision LLM)</span>
                  </div>
                  
                  {/* Application Layer */}
                  <div className="absolute top-6 left-0 right-0 mx-auto w-5/6 grid grid-cols-3 gap-3">
                    <div className="h-12 bg-green-100 rounded-lg flex items-center justify-center border border-green-200">
                      <span className="font-medium text-sm">Business Intelligence</span>
                    </div>
                    <div className="h-12 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                      <span className="font-medium text-sm">Conversational Finance</span>
                    </div>
                    <div className="h-12 bg-purple-100 rounded-lg flex items-center justify-center border border-purple-200">
                      <span className="font-medium text-sm">Risk Management</span>
                    </div>
                  </div>
                  
                  {/* Connection Lines */}
                  <div className="absolute inset-0">
                    {/* Vertical lines connecting layers */}
                    <div className="absolute bottom-22 left-1/2 transform -translate-x-1/2 w-0.5 h-[250px] bg-gradient-to-t from-primary/40 to-primary/10"></div>
                    
                    {/* Horizontal lines connecting applications */}
                    <div className="absolute top-[54px] left-1/3 w-1/3 h-0.5 bg-primary/20"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Our platform is built on a cloud-native architecture that scales dynamically with your business needs. From small teams to enterprise-wide deployments, Questt AI Systems adapts to your data volume and processing requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Security First Design</h3>
                  <p className="text-muted-foreground">
                    Security is embedded at every layer of our architecture. We implement industry-leading encryption, access controls, and compliance measures to protect your sensitive financial data.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integration Flexibility</h3>
                  <p className="text-muted-foreground">
                    Whether you need API-based integration with existing systems or standalone deployment, our architecture supports multiple integration patterns to fit seamlessly into your technology ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Data Security */}
        <section className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="section-fade-in">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Data Security
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Enterprise-Grade Security and Compliance
                </h2>
                <p className="text-muted-foreground mb-8">
                  We understand that financial data requires the highest level of protection. Our platform implements multiple layers of security and maintains compliance with global financial regulations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">End-to-End Encryption</h3>
                      <p className="text-muted-foreground">
                        All data is encrypted both in transit and at rest using AES-256 encryption, ensuring your information remains secure throughout the entire processing pipeline.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Role-Based Access Control</h3>
                      <p className="text-muted-foreground">
                        Granular permission settings allow you to control exactly who has access to what data, ensuring information is only available to authorized personnel.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Compliance Framework</h3>
                      <p className="text-muted-foreground">
                        Our platform is designed to meet GDPR, SOC 2, HIPAA, and industry-specific financial regulations, helping you maintain compliance while leveraging advanced AI capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="section-fade-in">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold">Security Certifications</h3>
                  </div>
                  
                  <div className="p-6 grid grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span className="text-primary font-bold">SOC2</span>
                      </div>
                      <span className="text-sm text-center text-muted-foreground">SOC 2 Type II Certified</span>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span className="text-primary font-bold">GDPR</span>
                      </div>
                      <span className="text-sm text-center text-muted-foreground">GDPR Compliant</span>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span className="text-primary font-bold">ISO</span>
                      </div>
                      <span className="text-sm text-center text-muted-foreground">ISO 27001 Certified</span>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span className="text-primary font-bold">HIPAA</span>
                      </div>
                      <span className="text-sm text-center text-muted-foreground">HIPAA Compliant</span>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-primary/5 border-t">
                    <h4 className="font-medium mb-4">Security Monitoring</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Threat Detection</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Intrusion Prevention</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Vulnerability Scanning</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Data Loss Prevention</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-10 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center section-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Power of Questt AI Technology
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a personalized demo to see how our advanced technology can transform your financial operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8 group">
                  <span>Request a Demo</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Technology;
