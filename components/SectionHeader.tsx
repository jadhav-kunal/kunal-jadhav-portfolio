
import React from 'react';

interface SectionHeaderProps {
  title: string;
  isInverted?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, isInverted }) => {
  return (
    <div className="absolute top-8 left-8 z-20 pointer-events-none">
      <h2 
        className={`text-[14px] font-light tracking-widest lowercase transition-all duration-300 ${isInverted ? 'opacity-90' : 'opacity-60'}`}
        style={{ color: isInverted ? 'var(--bg-color)' : 'var(--text-color)' }}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
