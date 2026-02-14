
import React from 'react';

interface ResumeButtonProps {
  isInverted?: boolean;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ isInverted }) => {
  return (
    <a
      href="https://drive.google.com/file/d/18YoLinC-EaZN5nnkH5_UT2p13lGEnH4I/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[14px] font-medium transition-all duration-300 decoration-[1px] underline-offset-4 opacity-70 hover:opacity-100 hover:underline"
      style={{ color: isInverted ? 'var(--bg-color)' : 'var(--text-color)' }}
    >
      resume ↗
    </a>
  );
};

export default ResumeButton;
