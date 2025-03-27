
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, LineChart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
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
                Success Stories
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Real Results for Real Businesses
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Discover how Questt AI Systems has helped organizations across industries transform their financial operations and drive measurable business outcomes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Retail Case Study */}
        <section id="retail" className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 section-fade-in">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Retail Industry
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Global Retail Chain Optimizes Inventory and Boosts Sales
                </h2>
                <p className="text-muted-foreground mb-6">
                  A leading international retail chain with over 500 locations faced challenges with inventory management, resulting in frequent stockouts and excess inventory costs. They turned to Questt AI Systems to revolutionize their approach.
                </p>
                
                <div className="mb-8 space-y-6">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Challenge</h3>
                    <p className="text-muted-foreground">
                      The retailer struggled with traditional forecasting methods that couldn't account for rapidly changing consumer behaviors, seasonal trends, and regional variations, resulting in approximately $8M in annual losses due to inventory inefficiencies.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Solution</h3>
                    <p className="text-muted-foreground">
                      Questt AI implemented our Business Intelligence solution with custom-trained models for retail inventory optimization. The system analyzed historical sales data, market trends, weather patterns, and even social media sentiment to create highly accurate demand forecasts.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-primary mb-1">24%</div>
                        <div className="text-sm text-muted-foreground">Increase in Sales</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-primary mb-1">31%</div>
                        <div className="text-sm text-muted-foreground">Reduced Stockouts</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-primary mb-1">$12M</div>
                        <div className="text-sm text-muted-foreground">Annual Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="rounded-full group">
                      <span>Request Similar Solution</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/services#business-intelligence">
                    <Button variant="outline" className="rounded-full">
                      Explore BI Services
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 section-fade-in">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <BarChart2 className="text-primary" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold">Retail Analytics Dashboard</h3>
                      </div>
                    </div>
                    
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e7?auto=format&q=90"
                        alt="Retail Case Study"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                        <div className="text-white text-lg font-semibold mb-2">
                          GlobalMart Retail Chain
                        </div>
                        <p className="text-white/80 text-sm">
                          "Questt AI transformed our inventory management and gave us predictive capabilities we never thought possible."
                        </p>
                        <div className="mt-2 text-white/60 text-xs">
                          — Sarah Johnson, Chief Operations Officer
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-secondary/30">
                      <h4 className="font-medium mb-4">Implementation Timeline</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Data Integration</span>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Completed</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Model Training</span>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Completed</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Pilot Deployment</span>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Completed</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Full Rollout</span>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full filter blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Wealth Management Case Study */}
        <section id="wealth-management" className="py-20 px-6 md:px-10 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="section-fade-in">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <LineChart className="text-primary" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold">Wealth Management Platform</h3>
                      </div>
                    </div>
                    
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&q=90"
                        alt="Wealth Management Case Study"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                        <div className="text-white text-lg font-semibold mb-2">
                          Horizon Financial Advisors
                        </div>
                        <p className="text-white/80 text-sm">
                          "The conversational finance capabilities have revolutionized how we interact with clients and manage their portfolios."
                        </p>
                        <div className="mt-2 text-white/60 text-xs">
                          — Michael Roberts, Managing Director
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-secondary/30">
                      <h4 className="font-medium mb-4">Key Improvements</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-sm text-muted-foreground mb-1">Client Satisfaction</div>
                          <div className="flex items-center">
                            <div className="text-lg font-bold text-primary mr-2">92%</div>
                            <div className="text-xs text-green-500">↑ 18%</div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-sm text-muted-foreground mb-1">Portfolio Performance</div>
                          <div className="flex items-center">
                            <div className="text-lg font-bold text-primary mr-2">+18%</div>
                            <div className="text-xs text-green-500">↑ 7%</div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-sm text-muted-foreground mb-1">Client Retention</div>
                          <div className="flex items-center">
                            <div className="text-lg font-bold text-primary mr-2">95%</div>
                            <div className="text-xs text-green-500">↑ 12%</div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="text-sm text-muted-foreground mb-1">New Clients</div>
                          <div className="flex items-center">
                            <div className="text-lg font-bold text-primary mr-2">+28%</div>
                            <div className="text-xs text-green-500">↑ 15%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full filter blur-2xl"></div>
                </div>
              </div>
              
              <div className="section-fade-in">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Wealth Management
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Financial Advisory Firm Enhances Client Experience
                </h2>
                <p className="text-muted-foreground mb-6">
                  Horizon Financial Advisors, a wealth management firm with $2.5B in assets under management, sought to enhance client engagement and improve portfolio performance through AI-driven insights.
                </p>
                
                <div className="mb-8 space-y-6">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Challenge</h3>
                    <p className="text-muted-foreground">
                      The firm's advisors spent more than 60% of their time generating reports and answering routine client questions, leaving little time for strategic planning and personalized advice. Client satisfaction was declining and portfolio performance was below industry averages.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Solution</h3>
                    <p className="text-muted-foreground">
                      Questt AI implemented our Conversational Finance platform, allowing clients to engage directly with an AI-powered advisor for portfolio updates, performance reviews, and routine questions. For advisors, we deployed a strategic insights system that identified optimization opportunities across client portfolios.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Results</h3>
                    <p className="text-muted-foreground mb-4">
                      Within six months, the system dramatically transformed the firm's operations and performance metrics. Advisors reported spending 40% more time on strategic activities, while client satisfaction scores improved by 18%.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="rounded-full group">
                      <span>Request Similar Solution</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/services#conversational-finance">
                    <Button variant="outline" className="rounded-full">
                      Explore CF Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Manufacturing Case Study */}
        <section id="manufacturing" className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 section-fade-in">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Manufacturing
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Global Manufacturer Reduces Risk and Optimizes Supply Chain
                </h2>
                <p className="text-muted-foreground mb-6">
                  A multinational manufacturing company with operations in 12 countries faced significant challenges in managing supply chain risks and ensuring compliance across diverse regulatory environments.
                </p>
                
                <div className="mb-8 space-y-6">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Challenge</h3>
                    <p className="text-muted-foreground">
                      The company struggled with supply chain disruptions that cost an average of $15M annually, while also facing increasing regulatory pressure and compliance costs across multiple jurisdictions. Traditional risk management approaches were reactive and ineffective.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Solution</h3>
                    <p className="text-muted-foreground">
                      Questt AI deployed our comprehensive Risk Management solution, which incorporated regulatory databases from all operating regions and implemented predictive risk modeling for supply chain disruptions. The system continuously monitored global events, supplier performance, and regulatory changes to provide proactive alerts.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-primary mb-1">73%</div>
                        <div className="text-sm text-muted-foreground">Risk Reduction</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-primary mb-1">15%</div>
                        <div className="text-sm text-muted-foreground">Cost Savings</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="text-3xl font-bold text-primary mb-1">42%</div>
                        <div className="text-sm text-muted-foreground">Faster Response</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="rounded-full group">
                      <span>Request Similar Solution</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/services#risk-management">
                    <Button variant="outline" className="rounded-full">
                      Explore RM Services
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 section-fade-in">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Shield className="text-primary" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold">Risk Management Dashboard</h3>
                      </div>
                    </div>
                    
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&q=90"
                        alt="Manufacturing Case Study"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                        <div className="text-white text-lg font-semibold mb-2">
                          Atlas Manufacturing Group
                        </div>
                        <p className="text-white/80 text-sm">
                          "For the first time, we have visibility into potential disruptions before they impact our operations. This has transformed our approach to risk management."
                        </p>
                        <div className="mt-2 text-white/60 text-xs">
                          — David Chen, Chief Risk Officer
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-secondary/30">
                      <h4 className="font-medium mb-4">Risk Insights</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Supply Chain Resilience</span>
                            <span className="text-xs text-green-500">Improved</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Regulatory Compliance</span>
                            <span className="text-xs text-green-500">Excellent</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Operational Risk</span>
                            <span className="text-xs text-amber-500">Moderate</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full" style={{ width: '68%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full filter blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-10 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center section-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team of experts is ready to help you transform your financial operations with AI-powered solutions tailored to your specific business needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 group">
                <span>Contact Us Today</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
