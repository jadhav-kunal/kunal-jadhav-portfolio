
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RecruiterOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const RecruiterOverlay: React.FC<RecruiterOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/5 backdrop-blur-[2px]"
          />
          
          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-[700px] max-h-[85vh] bg-[var(--bg-color)] border border-[var(--divider-color)] rounded-lg p-10 md:p-14 flex flex-col items-center text-center overflow-hidden theme-transition"
          >
            {/* Close Icon */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-8 text-[28px] opacity-30 hover:opacity-100 transition-opacity leading-none cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>

            {/* Block 1: Identity */}
            <div className="mb-10">
              <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight">Kunal Jadhav</h2>
              <p className="text-[14px] opacity-60 mt-1">kjadha12@asu.edu | +1 (970) 970 0102</p>
              <p className="text-[11px] opacity-40 uppercase tracking-[0.2em] mt-2">Phoenix, AZ • Open to Relocation</p>
            </div>

            {/* Block 2: Education */}
            <div className="mb-10 space-y-1.5">
              <p className="text-[14px] md:text-[15px]">MS Computer Science — Arizona State University</p>
              <p className="text-[14px] md:text-[15px]">BE Computer Science — University of Mumbai</p>
            </div>

            {/* Block 3: Core Stack */}
            <div className="mb-10 max-w-lg">
              <p className="text-[13px] md:text-[14px] tracking-tight font-normal opacity-80 leading-relaxed">
                • React • Node.js • TypeScript • NestJS • Java • Spring Boot • Azure </p>
                <p className="text-[13px] md:text-[14px] tracking-tight font-normal opacity-80 leading-relaxed">
                • Cosmos DB • Docker • SQL • Microservices • Event-driven Systems • Jira
              </p>
            </div>

            {/* Block 4: Impact Metrics */}
            <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 w-full">
              <div>
                <p className="text-[20px] font-medium">Top 10 / 250+</p>
                <p className="text-[10px] uppercase tracking-wider opacity-40 mt-1">Excellence Award recipient</p>
              </div>
              <div>
                <p className="text-[20px] font-medium">10000+</p>
                <p className="text-[10px] uppercase tracking-wider opacity-40 mt-1">lines of legacy code modernized</p>
              </div>
              <div>
                <p className="text-[20px] font-medium">Led 8</p>
                <p className="text-[10px] uppercase tracking-wider opacity-40 mt-1">developers and QAs team</p>
              </div>
              <div>
                <p className="text-[20px] font-medium"> &#60; 5 mins</p>
                <p className="text-[10px] uppercase tracking-wider opacity-40 mt-1">downtime during 1M+ record migration</p>
              </div>
            </div>

            {/* Utility Row */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10 text-[13px] opacity-60">
              <a href="https://drive.google.com/file/d/18YoLinC-EaZN5nnkH5_UT2p13lGEnH4I/view?usp=sharing" target="_blank" className="hover:underline hover:opacity-100 transition-all cursor-pointer">resume</a>
              <a href="https://github.com/jadhav-kunal" target="_blank" className="hover:underline hover:opacity-100 transition-all cursor-pointer">github</a>
              <a href="https://leetcode.com/kunal" target="_blank" className="hover:underline hover:opacity-100 transition-all cursor-pointer">leetcode</a>
              <a href="https://linkedin.com/in/jadhav-kunal" target="_blank" className="hover:underline hover:opacity-100 transition-all cursor-pointer">linkedin</a>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-4">
              <p className="text-[12px] opacity-30 italic">Designed for 10-second evaluation.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RecruiterOverlay;
