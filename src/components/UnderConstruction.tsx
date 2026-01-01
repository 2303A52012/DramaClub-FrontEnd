import React from 'react';

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-card rounded-xl shadow-lg border border-dashed border-accent/60">
      <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mb-4 text-accent">
        <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
        <path fill="currentColor" d="M11 10h2v5h-2zm0 6h2v2h-2z"/>
      </svg>
      <h2 className="text-2xl font-bold text-accent mb-2">Under Construction</h2>
      <p className="text-muted-foreground text-center max-w-xs">
        This feature or page is currently under construction. Please check back soon!
      </p>
    </div>
  );
};

export default UnderConstruction;
