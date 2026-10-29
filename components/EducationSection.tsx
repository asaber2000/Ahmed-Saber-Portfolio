'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
  title: string;
  issuer: string;
  year: string;
  credentialUrl: string;
}

// العمود الأول: الدرجة الأكاديمية + شهادات السيو، الجيو والأناليتكس (GA4)
const leftColumnItems: EducationItem[] = [
  {
    title: "Bachelor's Degree in Commerce",
    issuer: 'Ain Shams University',
    year: '2022',
    credentialUrl: '#',
  },
  {
    title: 'SEO Foresight: LLMs & AI Updates',
    issuer: 'SE Ranking',
    year: '2025',
    credentialUrl: 'https://seranking.com',
  },
  {
    title: 'Ahrefs Certified Marketing Platform',
    issuer: 'Ahrefs Academy',
    year: '2025',
    credentialUrl: 'https://ahrefs.com',
  },
  {
    title: 'Google Analytics 4 Certification (GA4)',
    issuer: 'Google Skillshop',
    year: '2024',
    credentialUrl: 'https://skillshop.google.com',
  },
  {
    title: 'International & Local SEO Certification',
    issuer: 'SEMrush Academy',
    year: '2024',
    credentialUrl: 'https://www.semrush.com',
  },
  {
    title: 'HubSpot Inbound SEO Specialist (I & II)',
    issuer: 'HubSpot Academy',
    year: '2024',
    credentialUrl: 'https://academy.hubspot.com',
  },
  {
    title: 'SE Ranking Advanced Search Intelligence',
    issuer: 'SE Ranking',
    year: '2024',
    credentialUrl: 'https://seranking.com',
  },
];

// العمود الثاني: الكلاود من AWS وشهادات جوجل السحابية وبايثون
const rightColumnItems: EducationItem[] = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    year: '2026',
    credentialUrl: 'https://aws.amazon.com',
  },
  {
    title: 'AWS SimuLearn - Cloud Practitioner Badge',
    issuer: 'Amazon Web Services (AWS) • Credly Verified',
    year: '2025',
    credentialUrl: 'https://www.credly.com',
  },
  {
    title: 'Vertex AI: Model Evaluation & Deployments',
    issuer: 'Google Cloud Platform',
    year: '2025',
    credentialUrl: 'https://cloud.google.com',
  },
  {
    title: 'Generative AI Operations on Cloud',
    issuer: 'Google Cloud Platform',
    year: '2025',
    credentialUrl: 'https://cloud.google.com',
  },
  {
    title: 'Model Armor: Securing AI Deployments',
    issuer: 'Google Cloud Platform',
    year: '2025',
    credentialUrl: 'https://cloud.google.com',
  },
  {
    title: 'Python for Scripting & Automation',
    issuer: 'Kaggle Verified',
    year: '2025',
    credentialUrl: 'https://www.kaggle.com',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-24 border-t border-zinc-900 bg-black text-white selection:bg-[#ff2e7e] selection:text-white">
      
      {/* Title */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          Education<span className="text-[#ff2e7e]">.</span>
        </h2>
        <p className="text-sm md:text-base text-zinc-400 mt-2 font-normal">
          Academic foundation, verified AWS & Google Cloud credentials, and search intelligence certifications.
        </p>
      </div>

      {/* 2-Column Minimalist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        
        {/* Column 01: Academic, SEO & GEO */}
        <div className="space-y-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff2e7e] pb-3 border-b border-zinc-800 flex items-center justify-between">
            <span>01 / ACADEMIC, SEO & GEO INTELLIGENCE</span>
            <span className="text-zinc-600 font-normal">7 Credentials</span>
          </div>
          
          <div className="space-y-8">
            {leftColumnItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base md:text-[17px] font-bold text-white group-hover:text-[#ff2e7e] transition-colors leading-snug"
                  >
                    <span>{item.title}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[#ff2e7e] -translate-y-0.5">
                      ↗
                    </span>
                  </a>
                  <div className="text-xs md:text-sm text-zinc-400 mt-1 font-sans">
                    {item.issuer}
                  </div>
                </div>
                <div className="text-xs md:text-sm font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors shrink-0 pt-0.5">
                  {item.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 02: Cloud Architecture & Scripting */}
        <div className="space-y-8">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-300 pb-3 border-b border-zinc-800 flex items-center justify-between">
            <span>02 / CLOUD ARCHITECTURE & SCRIPTING</span>
            <span className="text-zinc-600 font-normal">6 Credentials</span>
          </div>
          
          <div className="space-y-8">
            {rightColumnItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base md:text-[17px] font-bold text-white group-hover:text-[#ff2e7e] transition-colors leading-snug"
                  >
                    <span>{item.title}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-[#ff2e7e] -translate-y-0.5">
                      ↗
                    </span>
                  </a>
                  <div className="text-xs md:text-sm text-zinc-400 mt-1 font-sans">
                    {item.issuer}
                  </div>
                </div>
                <div className="text-xs md:text-sm font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors shrink-0 pt-0.5">
                  {item.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}