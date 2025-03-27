
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeading from '@/components/ui-custom/SectionHeading';
import { BarChart2, MessageSquare, Shield, Zap, TrendingUp, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
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
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive AI Solutions for Financial Excellence
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Our specialized service offerings are designed to transform your financial operations and drive measurable business outcomes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Business Intelligence Section */}
        <section id="business-intelligence" className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 section-fade-in">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Business Intelligence
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Uncover Hidden Opportunities for Growth
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our system is configurable to identify hidden opportunities that help increase revenue and reduce costs. By analyzing your data with cutting-edge algorithms, Questt AI uncovers trends and patterns that enable strategic business decisions.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Advanced predictive analytics to forecast market trends</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Customer behavior insights for targeted strategies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Competitive analysis and market positioning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Revenue optimization through data-driven decision making</p>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button className="rounded-full">Learn More</Button>
                </Link>
              </div>
              
              <div className="order-1 lg:order-2 section-fade-in">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <BarChart2 className="text-primary" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold">Business Analytics Dashboard</h3>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-secondary/30">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-muted-foreground mb-2">Revenue</div>
                          <div className="text-2xl font-bold text-primary">$1.2M</div>
                          <div className="mt-2 text-xs flex items-center text-green-500">
                            <TrendingUp size={14} className="mr-1" />
                            <span>24% increase</span>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-muted-foreground mb-2">Customers</div>
                          <div className="text-2xl font-bold text-primary">8,642</div>
                          <div className="mt-2 text-xs flex items-center text-green-500">
                            <TrendingUp size={14} className="mr-1" />
                            <span>12% increase</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-sm font-medium">Monthly Growth</div>
                          <div className="text-xs text-muted-foreground">Last 6 months</div>
                        </div>
                        
                        <div className="h-32 flex items-end space-x-2">
                          {[35, 55, 40, 65, 70, 85].map((height, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center">
                              <div
                                className="w-full bg-primary/80 rounded-t-sm transition-all duration-500"
                                style={{ height: `${height}%` }}
                              ></div>
                              <div className="text-xs mt-2 text-muted-foreground">
                                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-sm font-medium">Key Insights</div>
                          <div className="text-xs text-primary font-medium">View All</div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 border-b pb-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <div className="text-sm">Product A shows 34% higher conversion</div>
                          </div>
                          <div className="flex items-center space-x-3 border-b pb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <div className="text-sm">Customer retention improved by 22%</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                            <div className="text-sm">New market opportunity identified</div>
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
        
        {/* Conversational Finance Section */}
        <section id="conversational-finance" className="py-20 px-6 md:px-10 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="section-fade-in">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MessageSquare className="text-primary" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold">Financial Conversation</h3>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium">CFO</span>
                        </div>
                        <div className="bg-secondary p-3 rounded-xl rounded-tl-none max-w-xs">
                          <p className="text-sm">What's our current cash flow projection for Q3?</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="bg-primary/10 p-3 rounded-xl rounded-tr-none max-w-xs">
                          <p className="text-sm">Based on current data, Q3 cash flow is projected at $2.4M, which is 18% higher than last year's Q3.</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium text-primary">AI</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium">CFO</span>
                        </div>
                        <div className="bg-secondary p-3 rounded-xl rounded-tl-none max-w-xs">
                          <p className="text-sm">What's driving the increase?</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="bg-primary/10 p-3 rounded-xl rounded-tr-none max-w-xs">
                          <p className="text-sm">Primary factors are the new product line (+12%), improved accounts receivable processing (+5%), and reduced operating costs in APAC region (+7%).</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium text-primary">AI</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="bg-primary/10 p-3 rounded-xl rounded-tr-none max-w-xs">
                          <p className="text-sm">Would you like me to generate a detailed report with supporting charts?</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium text-primary">AI</span>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Ask a financial question..."
                            className="w-full p-3 pr-12 rounded-full border focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                          />
                          <button className="absolute right-3 top-3 text-primary">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                          </button>
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
                  Conversational Finance
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Real-time Insights Through Natural Dialogue
                </h2>
                <p className="text-muted-foreground mb-6">
                  Stay ahead of the curve with real-time reporting and dynamic financial conversations. Our platform generates on-demand reports and engages directly with leadership, ensuring that critical financial decisions are backed by timely and accurate insights.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Instant answers to complex financial questions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Natural language processing for seamless interaction</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">On-demand report generation in multiple formats</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Contextual understanding of your business environment</p>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button className="rounded-full">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Risk Management Section */}
        <section id="risk-management" className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 section-fade-in">
                <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  Risk Management
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Proactive Risk Identification and Mitigation
                </h2>
                <p className="text-muted-foreground mb-6">
                  Compliance is key. Questt AI Systems ensures your business adheres to tax regulations and internal policies, reducing risk and maintaining robust governance. Our risk management agents are designed to safeguard your operations while keeping you informed.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Automated compliance monitoring and alerts</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Risk scoring and prioritization system</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Predictive risk analysis based on market trends</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check size={16} className="text-primary" />
                    </div>
                    <p className="text-foreground">Comprehensive audit trail and documentation</p>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button className="rounded-full">Learn More</Button>
                </Link>
              </div>
              
              <div className="order-1 lg:order-2 section-fade-in">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Shield className="text-primary" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold">Risk Management Console</h3>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-6">
                      <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                            <Shield className="text-red-500" size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium text-red-600">High Priority Alert</h4>
                            <p className="text-xs text-red-500">Detected 2 hours ago</p>
                          </div>
                        </div>
                        <p className="text-sm text-red-600 mb-3">
                          Potential compliance issue detected in international payment process - Section 4.3 of policy may be violated.
                        </p>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-red-500 text-white text-xs rounded-full">Review Now</button>
                          <button className="px-3 py-1 bg-white border border-red-200 text-red-500 text-xs rounded-full">Dismiss</button>
                        </div>
                      </div>
                      
                      <div className="bg-secondary/30 rounded-lg p-4">
                        <h4 className="font-medium mb-3">Risk Score Overview</h4>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="text-xs text-muted-foreground mb-1">Overall</div>
                            <div className="flex items-center">
                              <div className="text-lg font-bold text-amber-500">Medium</div>
                              <div className="ml-2 w-4 h-4 rounded-full bg-amber-500"></div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="text-xs text-muted-foreground mb-1">Compliance</div>
                            <div className="flex items-center">
                              <div className="text-lg font-bold text-green-500">Low</div>
                              <div className="ml-2 w-4 h-4 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="text-xs text-muted-foreground mb-1">Financial</div>
                            <div className="flex items-center">
                              <div className="text-lg font-bold text-red-500">High</div>
                              <div className="ml-2 w-4 h-4 rounded-full bg-red-500"></div>
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="font-medium mb-3 text-sm">Recent Policy Changes</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between bg-white p-2 rounded-lg text-sm">
                            <span>Tax Compliance Update</span>
                            <span className="text-xs text-muted-foreground">2 days ago</span>
                          </div>
                          <div className="flex items-center justify-between bg-white p-2 rounded-lg text-sm">
                            <span>Data Privacy Standard</span>
                            <span className="text-xs text-muted-foreground">1 week ago</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border rounded-lg p-4">
                        <h4 className="font-medium mb-3 flex items-center">
                          <Zap size={16} className="text-primary mr-2" />
                          Recommendations
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Update payment processing workflow documentation</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Conduct additional compliance training for finance team</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Review third-party vendor agreements</span>
                          </li>
                        </ul>
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
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us today to discover how Questt AI Systems can help you make smarter decisions and achieve sustainable growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8">Get Started</Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
