
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  description,
  centered = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      {subtitle && (
        <p className="text-primary font-medium mb-2">{subtitle}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className={cn(
          "text-muted-foreground text-lg",
          centered && "max-w-2xl mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
