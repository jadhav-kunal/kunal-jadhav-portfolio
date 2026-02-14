
import { Project, Experience, ContactItem } from './types';

export const projects: Project[] = [
  {
    id: 'p1',
    name: 'Real Store - an E-Commerce App',
    tech: 'Node.js / React / Redux / Next.JS',
    liveUrl: 'https://real-store-web.vercel.app/',
    codeUrl: 'https://github.com/jadhav-kunal/Real-Store-Web',
    images: [
      'https://raw.githubusercontent.com/jadhav-kunal/Real-Store-Web/main/screenshots/homepage.png',
      'https://raw.githubusercontent.com/jadhav-kunal/Real-Store-Web/main/screenshots/basket.png',
      'https://raw.githubusercontent.com/jadhav-kunal/Real-Store-Web/main/screenshots/payment.png',
      'https://raw.githubusercontent.com/jadhav-kunal/Real-Store-Web/main/screenshots/orders.png'
    ]
  },
  {
    id: 'p2',
    name: 'Capture - A Photography Portfolio Website',
    tech: 'React / Framer / Styled Components',
    liveUrl: 'https://capture-0f4a72.netlify.app/',
    codeUrl: 'https://github.com/jadhav-kunal/capture-portfolio',
    images: [
      'https://user-images.githubusercontent.com/54142448/227007422-98640a4d-f168-4bd3-91ef-20362b7e91b8.png',
      'https://raw.githubusercontent.com/jadhav-kunal/capture-portfolio/main/src/img/brave_screenshot_capture-0f4a72.netlify.app%20(1).png',
      'https://raw.githubusercontent.com/jadhav-kunal/capture-portfolio/main/src/img/brave_screenshot_capture-0f4a72.netlify.app.png'
    ]
  },
  {
    id: 'p3',
    name: 'Modern Bank App',
    tech: 'React / Javascript / CSS',
    liveUrl: 'https://hoobank-eef310.netlify.app/',
    codeUrl: 'https://github.com/jadhav-kunal/bank-modern-web',
    images: [
      'https://raw.githubusercontent.com/jadhav-kunal/bank-modern-web/main/src/assets/brave_screenshot_hoobank-eef310.netlify.app.png',
      'https://raw.githubusercontent.com/jadhav-kunal/bank-modern-web/main/src/assets/brave_screenshot_hoobank-eef310.netlify.app%20(1).png',
      'https://raw.githubusercontent.com/jadhav-kunal/bank-modern-web/main/src/assets/brave_screenshot_hoobank-eef310.netlify.app%20(2).png'
    ]
  }
];

export const experience: Experience[] = [
  {
    id: 'e1',
    company: 'PwC',
    role: 'Senior Full Stack Developer',
    duration: 'Aug 2024 - Dec 2025',
    achievements: [
      'Designed and scaled 6+ core microservices using NestJS and React',
      'Migrated 1M+ records from SQL to Azure Cosmos DB with <5 min downtime',
      'Reduced distributed processing latency by 25% via event-driven architecture',
      'Conducted interviews and onboarded new developers'
    ]
  },
  {
    id: 'e2',
    company: 'Infosys',
    role: 'Technology Lead',
    duration: 'Feb 2024 - July 2024',
    achievements: [
      'Led 5 developers and 3 QAs across feature delivery',
      'Reduced engineering rework by 40% through improved architecture planning',
      'Increased sprint velocity by 20%',
      'Resolved high-priority production defects impacting 40 business areas'
    ]
  },
  {
    id: 'e3',
    company: 'Mindstix',
    role: 'Member of Technical Staff',
    duration: 'July 2022 - Jan 2024',
    achievements: [
      'Optimized ETL pipeline for 120 files, cutting processing time by 50%+',
      'Refactored 10,000+ lines of legacy code, reducing bugs by 60%',
      'Ranked Top 10 out of 250+ employees',
      '2nd place in company-wide hackathon'
    ]
  }
];


export const contacts: ContactItem[] = [
  {
    id: 'c1',
    label: 'Email',
    value: 'kjadha12@asu.edu',
    type: 'copy'
  },
  {
    id: 'c2',
    label: 'Phone',
    value: '+1 (970) 970 0102',
    type: 'copy'
  },
  {
    id: 'c3',
    label: 'LinkedIn',
    value: 'linkedin.com/in/jadhav-kunal',
    type: 'link',
    href: 'https://linkedin.com/in/jadhav-kunal'
  },
  {
    id: 'c4',
    label: 'GitHub',
    value: 'github.com/jadhav-kunal',
    type: 'link',
    href: 'https://github.com/jadhav-kunal'
  },
  {
    id: 'c5',
    label: 'LeetCode',
    value: 'leetcode.com/jadhav-kunal',
    type: 'link',
    href: 'https://leetcode.com/u/jadhav-kunal/'
  },
  {
    id: 'c6',
    label: 'Resume',
    value: 'Download PDF',
    type: 'file',
    href: 'https://drive.google.com/uc?export=download&id=18YoLinC-EaZN5nnkH5_UT2p13lGEnH4I'
  }
];
