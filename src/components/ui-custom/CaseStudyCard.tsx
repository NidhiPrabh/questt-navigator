
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
}

const CaseStudyCard = ({ title, description, image, link, className }: CaseStudyCardProps) => {
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-2xl shadow-lg bg-white transition-all duration-300 hover:shadow-xl group",
        className
      )}
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-5">{description}</p>
        
        <Link to={link}>
          <Button 
            variant="ghost" 
            className="group/btn p-0 h-auto hover:bg-transparent"
          >
            <span className="text-primary font-medium mr-2">Learn more</span>
            <ArrowRight 
              size={16} 
              className="text-primary transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
