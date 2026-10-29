'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Bait Al Nokhada Tents',
    role: 'SEO & Web Engineering Specialist',
    period: '2024 — Present',
    location: 'Dubai / Abu Dhabi, UAE',
    highlights: [
      'Spearheading technical SEO architecture, Next.js web integrations, and entity schema graphs.',
      'Secured #1 commercial rankings across high-intent UAE B2B search terms and captured Google AI Overviews.',
      'Automated indexing pipelines using Python & Google Cloud APIs, cutting crawl latency to <24h.',
      'Hardened HTTP security response headers from Grade D to B, preventing clickjacking and asset vulnerabilities.'
    ],
    link: 'https://baitalnokhada.com'
  },
  {
    company: 'Lloyds British Egypt',
    role: 'Technical SEO Specialist',
    period: '2023 — 2024',
    location: 'Cairo, Egypt',
    highlights: [
      'Executed full-scale technical site audits for lifting equipment engineering & industrial inspection services.',
      'Optimized local map pack and regional search visibility for high-conversion enterprise B2B inquiries.',
      'Eliminated crawl errors, canonical duplicates, and render-blocking scripts across core service portals.'
    ]
  },
  {
    company: 'Inspire Design Solution',
    role: 'Marketing & Digital Specialist',
    period: '2022 — 2023',
    location: 'Giza, Egypt',
    highlights: [
      'Formulated cross-channel digital marketing campaigns and organic social reach strategies.',
      'Analyzed user conversion funnels and implemented actionable tracking events via web analytics.',
      'Collaborated on brand positioning and multi-platform promotional growth.'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24 border-t border-zinc-900 bg-black text-white selection:bg-[#ff2e7e] selection:text-white">
      
      {/* Title */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          Experience<span className="text-[#ff2e7e]">.</span>
        </h2>
      </div>

      {/* Central Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-850 md:-translate-x-1/2" />

        <div className="space-y-16 md:space-y-24">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                
                {/* Timeline Center Indicator */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-black border-2 border-white shadow-[0_0_10px_rgba(255,46,126,0.6)]" />
                </div>

                {/* Left/Right Column: Role & Responsibilities */}
                <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-left' : 'md:pl-12 md:text-left'}`}>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  
                  <ul className="mt-4 space-y-2 text-xs md:text-sm text-zinc-400 leading-relaxed font-sans list-none">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-[#ff2e7e] mt-1 shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.link && (
                    <div className="mt-4">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-zinc-500 hover:text-white transition-colors underline underline-offset-4"
                      >
                        Company site ↗
                      </a>
                    </div>
                  )}
                </div>

                {/* Left/Right Column: Company Badge & Period */}
                <div className={`pl-12 md:pl-0 w-full md:w-1/2 mt-4 md:mt-0 ${
                  isEven ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'
                }`}>
                  <div className={`inline-flex flex-col ${!isEven ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <span>{exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-zinc-400 mt-1">
                      {exp.period}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-600 mt-0.5">
                      {exp.location}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}