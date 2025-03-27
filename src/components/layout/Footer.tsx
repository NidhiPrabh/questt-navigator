
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold questt-gradient-text">QUESTT</span>
              <span className="text-sm font-medium text-muted-foreground">AI SYSTEMS</span>
            </div>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs">
              Advanced AI platform designed to increase your ROI by harnessing the power of your data.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-background hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-muted-foreground hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#business-intelligence" className="text-muted-foreground hover:text-primary transition-colors">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/services#conversational-finance" className="text-muted-foreground hover:text-primary transition-colors">
                  Conversational Finance
                </Link>
              </li>
              <li>
                <Link to="/services#risk-management" className="text-muted-foreground hover:text-primary transition-colors">
                  Risk & Management
                </Link>
              </li>
              <li>
                <Link to="/case-studies#retail" className="text-muted-foreground hover:text-primary transition-colors">
                  Retail Solutions
                </Link>
              </li>
              <li>
                <Link to="/case-studies#wealth-management" className="text-muted-foreground hover:text-primary transition-colors">
                  Wealth Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  100 Financial Street, Silicon Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@questtai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-muted/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2023 Questt AI Systems. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
