
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCounter from './AnimatedCounter';

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

interface StatsSectionProps {
  title: string;
  description?: string;
  stats: StatItemProps[];
  className?: string;
}

const StatsSection = ({ title, description, stats, className }: StatsSectionProps) => {
  return (
    <div className={cn("py-16 px-6 md:px-10 bg-secondary", className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="mb-2">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="text-3xl md:text-4xl text-primary"
                />
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
