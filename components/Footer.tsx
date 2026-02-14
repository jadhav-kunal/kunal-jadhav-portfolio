
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center border-t border-[var(--divider-color)] theme-transition">
      <div className="text-[12px] tracking-tight opacity-40 text-center space-y-1">
        <p>© 2026 Kunal Jadhav</p>
        <p>Built with React • Designed with intention</p>
        <p className="font-medium mt-2 opacity-60">Press R for resume</p>
      </div>
    </footer>
  );
};

export default Footer;
