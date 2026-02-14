
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PreviewContent } from '../types';

interface FloatingPreviewProps {
  content: PreviewContent;
  mousePos: { x: number; y: number };
}

const FloatingPreview: React.FC<FloatingPreviewProps> = ({ content, mousePos }) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (content?.type === 'project') {
      const interval = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % content.data.images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
    setImgIndex(0);
  }, [content]);

  if (!content) return null;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const desktopStyle = {
    top: mousePos.y + 20,
    left: mousePos.x + 20,
    position: 'fixed' as const,
  };

  const mobileStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'fixed' as const,
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={isMobile ? mobileStyle : desktopStyle}
        className="pointer-events-none z-50 w-72 md:w-80 bg-white border border-black overflow-hidden rounded-sm theme-transition"
      >
        {content.type === 'project' ? (
          <div className="w-full">
            <div className="relative h-48 w-full bg-[#F0F0F0]">
              <motion.img
                key={imgIndex}
                src={content.data.images[imgIndex]}
                alt={content.data.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="p-4 bg-white">
              <p className="text-[12px] uppercase tracking-wider font-medium">{content.data.name}</p>
              <p className="text-[11px] text-[#666666] mt-1">{content.data.tech}</p>
            </div>
          </div>
        ) : content.type === 'experience' ? (
          <div className="p-6 bg-white">
            <p className="text-[12px] uppercase tracking-wider font-bold mb-1">{content.data.company}</p>
            <p className="text-[13px] font-medium mb-1">{content.data.role}</p>
            <p className="text-[11px] text-[#666666] mb-4">{content.data.duration}</p>
            <ul className="space-y-2">
              {content.data.achievements.map((item, idx) => (
                <li key={idx} className="text-[12px] leading-snug flex items-start">
                  <span className="mr-2 mt-1 w-1 h-1 bg-black shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="w-full">
            <div className="relative h-72 w-full bg-[#F0F0F0]">
              <img
                src={content.data.image}
                alt={content.data.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white text-center">
              <p className="text-[12px] uppercase tracking-widest font-bold text-black">{content.data.name}</p>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingPreview;
