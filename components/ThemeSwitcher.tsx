
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type ThemeName = 'default' | 'mint' | 'lavender' | 'peach' | 'sky';

interface ThemeConfig {
  bg: string;
  text: string;
  divider: string;
}

const themes: Record<ThemeName, ThemeConfig> = {
  default: { bg: '#F7F6F2', text: '#000000', divider: '#000000' },
  mint: { bg: '#EDF7F2', text: '#0E1A14', divider: '#0E1A14' },
  lavender: { bg: '#F3EFFA', text: '#1C1628', divider: '#1C1628' },
  peach: { bg: '#FFF1E8', text: '#2A1B14', divider: '#2A1B14' },
  sky: { bg: '#EEF4FA', text: '#0F1C2B', divider: '#0F1C2B' },
};

interface ThemeSwitcherProps {
  isInverted?: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isInverted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<ThemeName>('default');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as ThemeName;
    if (saved && themes[saved]) {
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (name: ThemeName) => {
    const config = themes[name];
    const root = document.documentElement;
    root.style.setProperty('--bg-color', config.bg);
    root.style.setProperty('--text-color', config.text);
    root.style.setProperty('--divider-color', config.divider);
    setActiveTheme(name);
    localStorage.setItem('portfolio-theme', name);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center transition-colors duration-300" style={{ color: isInverted ? 'var(--bg-color)' : 'var(--text-color)' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-5 h-5 rounded-full border border-current flex items-center justify-center hover:scale-110 transition-transform opacity-60 hover:opacity-100"
        title="Switch Theme"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-current" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full right-0 mt-3 bg-[var(--bg-color)] border border-[var(--divider-color)] py-2 w-32 z-[60]"
          >
            {(Object.keys(themes) as ThemeName[]).map((name) => (
              <button
                key={name}
                onClick={() => applyTheme(name)}
                className={`w-full text-left px-4 py-1.5 text-[12px] uppercase tracking-widest hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors ${
                  activeTheme === name ? 'font-bold underline' : 'font-light'
                }`}
                style={{ color: 'var(--text-color)' }}
              >
                {name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
