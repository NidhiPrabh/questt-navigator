
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold questt-gradient-text">QUESTT</span>
          <span className="text-sm font-medium text-muted-foreground">AI SYSTEMS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link font-medium">
            Home
          </Link>
          <Link to="/services" className="nav-link font-medium">
            Services
          </Link>
          <Link to="/technology" className="nav-link font-medium">
            Technology
          </Link>
          <Link to="/case-studies" className="nav-link font-medium">
            Case Studies
          </Link>
          <Link to="/contact" className="nav-link font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button
            className="rounded-full px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg p-4 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4 mt-2">
              <Link
                to="/"
                className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/technology"
                className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link
                to="/case-studies"
                className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                className="w-full rounded-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
