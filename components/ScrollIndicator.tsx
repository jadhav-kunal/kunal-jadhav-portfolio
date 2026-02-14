
import React from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  activeIndex: number;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ activeIndex }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-50 pointer-events-none">
      {[0, 1, 2, 3].map((idx) => (
        <motion.div
          key={idx}
          animate={{
            height: activeIndex === idx ? 40 : 12,
            opacity: activeIndex === idx ? 1 : 0.4,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-[1px]"
          style={{ backgroundColor: 'var(--divider-color)' }}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;
