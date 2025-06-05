import React from 'react';

interface PageContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContentWrapper({ children, className = '' }: PageContentWrapperProps) {
  return (
    <div className={`max-w-6xl mx-auto ${className}`}>
      {children}
    </div>
  );
}