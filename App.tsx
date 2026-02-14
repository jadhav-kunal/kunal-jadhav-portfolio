import React, { useState, useEffect, useRef } from 'react';
import FloatingPreview from './components/FloatingPreview';
import ScrollIndicator from './components/ScrollIndicator';
import ThemeSwitcher from './components/ThemeSwitcher';
import ResumeButton from './components/ResumeButton';
import Footer from './components/Footer';
import RecruiterOverlay from './components/RecruiterOverlay';
import profilePic from './assets/profile.jpg';
import { projects, experience, contacts } from './data';
import { PreviewContent } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
);

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activePreview, setActivePreview] = useState<PreviewContent>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [isNameHovered, setIsNameHovered] = useState(false);

  const [invertTitle, setInvertTitle] = useState(false);
  const [invertUtility, setInvertUtility] = useState(false);

  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef<HTMLElement>(null), useRef<HTMLElement>(null), useRef<HTMLElement>(null), useRef<HTMLElement>(null)];
  const sectionTitles = ['intro', 'experience', 'projects', 'contact'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'r') {
        e.preventDefault();
        window.open('https://drive.google.com/uc?export=download&id=18YoLinC-EaZN5nnkH5_UT2p13lGEnH4I', '_blank');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex((ref) => ref.current === entry.target);
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isRecruiterMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isRecruiterMode]);

  useEffect(() => {
    setInvertTitle(false);
    setInvertUtility(false);
  }, [activeSection]);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const handlePanelHover = (idx: number, enter: boolean) => {
    const isMobile = window.innerWidth < 768;

    // Invert top-left title if hovering first panel
    if (idx === 0) setInvertTitle(enter);

    // Invert top-right utility if hovering last panel in row
    if (isMobile) {
      if (idx === 0) setInvertUtility(enter);
    } else {
      // Desktop/Tablet: 3 columns. Rightmost panels are index 2 and 5.
      if (idx === 2 || idx === 5) setInvertUtility(enter);
    }
  };

  const getContactIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'email': return <MailIcon />;
      case 'phone': return <PhoneIcon />;
      case 'linkedin': return <LinkedInIcon />;
      case 'github': return <GitHubIcon />;
      case 'leetcode': return <CodeIcon />;
      case 'resume': return <FileIcon />;
      default: return null;
    }
  };

  const adaptivePanelStyle = "transition-all duration-300 hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] border-[var(--divider-color)] theme-transition";

  return (
    <div className={`scroll-container theme-transition ${isRecruiterMode ? 'overflow-hidden' : ''}`} style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>

      <header className="fixed top-8 left-8 right-8 flex justify-between items-center z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeSection}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: invertTitle ? 0.9 : 0.6, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[14px] font-light tracking-widest lowercase"
              style={{ color: invertTitle ? 'var(--bg-color)' : 'var(--text-color)' }}
            >
              {sectionTitles[activeSection]}
            </motion.h2>
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-6 pointer-events-auto">
          <ResumeButton isInverted={invertUtility} />
          <ThemeSwitcher isInverted={invertUtility} />
        </div>
      </header>

      <ScrollIndicator activeIndex={activeSection} />

      {/* SECTION 1: INTRO */}
      <section ref={sectionRefs[0]} className="snap-section relative w-full h-screen flex items-center justify-center px-8 md:px-24">
        <div className="max-w-5xl w-full">
          <h1 className="text-[30px] md:text-[38px] leading-[1.2] font-normal tracking-tight max-w-4xl theme-transition">
            Hi, I’m <span
              className="font-bold cursor-help border-b border-dotted border-[var(--divider-color)] inline-block transition-all duration-300"
              onMouseEnter={() => {
                setActivePreview({ type: 'profile', data: { name: 'Kunal Jadhav', image: profilePic } });
                setIsNameHovered(true);
              }}
              onMouseLeave={() => {
                setActivePreview(null);
                setIsNameHovered(false);
              }}
            >
              {isNameHovered ? 'कुणाल जाधव' : 'Kunal Jadhav'}
            </span>
            <p>
              A software developer with 3+ years of experience building
              production-grade systems using <span className="font-bold">React, Node.js, TypeScript, Java, Spring Boot, and Azure.</span>
            </p>
            <p>
              I care about scalability and clean system design. Outside of work, I enjoy learning how things work,
              whether it’s distributed systems or everyday life.
            </p>

          </h1>
          <button
            onClick={() => setIsRecruiterMode(true)}
            className="text-[14px] opacity-40 hover:opacity-100 hover:underline transition-opacity duration-200 cursor-pointer mt-8 block w-fit tracking-tight"
          >
            → recruiter mode
          </button>
        </div>
      </section>



      {/* SECTION 2: EXPERIENCE */}
      <section ref={sectionRefs[1]} className="snap-section relative w-full h-screen flex flex-col md:flex-row border-t">
        {experience.map((exp, idx) => (
          <div
            key={exp.id}
            onMouseEnter={() => {
              setActivePreview({ type: 'experience', data: exp });
              handlePanelHover(idx, true);
            }}
            onMouseLeave={() => {
              setActivePreview(null);
              handlePanelHover(idx, false);
            }}
            className={`group relative flex-1 flex flex-col items-center justify-center ${idx !== experience.length - 1 ? 'md:border-r border-b md:border-b-0' : ''} ${adaptivePanelStyle}`}
          >
            <h3 className="text-[20px] md:text-[22px] font-medium mb-2">{exp.company}</h3>
            <p className="text-[14px] opacity-60">{exp.role}</p>
          </div>
        ))}
      </section>

      {/* SECTION 3: PROJECTS */}
      <section ref={sectionRefs[2]} className="snap-section relative w-full h-screen flex flex-col md:flex-row border-t">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            onMouseEnter={() => {
              setActivePreview({ type: 'project', data: project });
              handlePanelHover(idx, true);
            }}
            onMouseLeave={() => {
              setActivePreview(null);
              handlePanelHover(idx, false);
            }}
            className={`group relative flex-1 flex flex-col items-center justify-center ${idx !== projects.length - 1 ? 'md:border-r border-b md:border-b-0' : ''} ${adaptivePanelStyle}`}
          >
            <h3 className="text-[20px] md:text-[22px] font-medium mb-2">{project.name}</h3>
            <p className="text-[14px] opacity-60 mb-6">{project.tech}</p>
            <div className="flex gap-4">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] hover:underline transition-all" onClick={(e) => e.stopPropagation()}>[ live ]</a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] hover:underline transition-all" onClick={(e) => e.stopPropagation()}>[ code ]</a>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 4: CONTACT & FOOTER */}
      <section ref={sectionRefs[3]} className="snap-section relative w-full min-h-screen flex flex-col border-t">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 border-b border-[var(--divider-color)]">
          {contacts.map((contact, idx) => (
            <div
              key={contact.id}
              onMouseEnter={() => { handlePanelHover(idx, true); }}
              onMouseLeave={() => { handlePanelHover(idx, false); }}
              onClick={() => contact.type === 'copy' ? copyToClipboard(contact.value, contact.id) : window.open(contact.href, '_blank')}
              className={`group relative flex flex-col items-center justify-center cursor-pointer p-8 md:p-4 text-center ${adaptivePanelStyle} ${
                // Vertical dividers: only on columns 1 & 2 for md+
                (idx % 3 !== 2) ? 'md:border-r' : ''
                } ${
                // Horizontal divider: between first 3 and last 3 items for md+
                idx < 3 ? 'md:border-b' : ''
                } ${
                // Mobile border logic: bottom border for all except last
                idx !== contacts.length - 1 ? 'border-b md:border-b-inherit' : ''
                }`}
            >
              <div className="flex items-center gap-2 mb-4 opacity-40 group-hover:opacity-60 transition-opacity">
                {getContactIcon(contact.label)}
                <h3 className="text-[12px] uppercase tracking-widest leading-none font-medium">{contact.label}</h3>
              </div>
              <p className="text-[18px] md:text-[20px] xl:text-[22px] font-normal break-all px-2">{contact.value}</p>
              {contact.type === 'copy' && (
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-20 mt-4 group-hover:opacity-40 transition-opacity">click to copy</span>
              )}
              {contact.type === 'link' && (
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-20 mt-4 group-hover:opacity-40 transition-opacity">click to open</span>
              )}
              {contact.type === 'file' && (
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-20 mt-4 group-hover:opacity-40 transition-opacity">click to download</span>
              )}
              <AnimatePresence>
                {copiedId === contact.id && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute bottom-12 flex flex-col items-center">
                    <span className="text-[11px] font-medium tracking-wider px-3 py-1.5 border uppercase bg-[var(--bg-color)] text-[var(--text-color)] border-[var(--divider-color)]">Copied</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <Footer />
      </section>

      <FloatingPreview content={activePreview} mousePos={mousePos} />
      <RecruiterOverlay isOpen={isRecruiterMode} onClose={() => setIsRecruiterMode(false)} />
    </div>
  );
};

export default App;
