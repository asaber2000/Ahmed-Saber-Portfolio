'use client';

import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [time, setTime] = useState<string>('');

  // Live UAE Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dubai',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[94vh] bg-black text-white flex flex-col justify-between px-6 md:px-16 pt-8 pb-12 overflow-hidden selection:bg-[#ff2e7e] selection:text-white"
    >
      {/* Keyframe Animation for Floating Badge */}
      <style jsx global>{`
        @keyframes subtleFloat {
          0%, 100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(6px, -8px);
          }
        }
        .animate-subtle-float {
          animation: subtleFloat 3.8s ease-in-out infinite;
        }
      `}</style>

      {/* Top Bar: Location & Local Time */}
      <div className="w-full flex justify-between items-center z-20 text-xs md:text-sm text-zinc-400 font-mono tracking-tight">
        <div>
          <span className="text-zinc-600">portfolio /</span> ahmedsaber.dev
        </div>
        <div className="flex items-center gap-2">
          <span>Based in Dubai, UAE</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-200">{time || '11:21 AM'}</span>
        </div>
      </div>

      {/* Center Stage: Headshot + Micro-floating Badge + Massive Typography */}
      <div className="relative my-auto flex flex-col items-center justify-center text-center select-none pt-24 pb-8">
        
        {/* Container for Photo & Badge together to lock coordinates */}
        <div className="relative w-64 md:w-80 h-72 md:h-96 -mb-28 md:-mb-36 z-0">
          
          {/* Portrait Image (Raised higher, crisp grayscale cutout) */}
          <div className="w-full h-full filter grayscale contrast-125 opacity-90">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="Ahmed Saber"
              className="w-full h-full object-cover object-top pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
              }}
            />
          </div>

          {/* Figma-style Floating Badge: In close orbit of the head, automatic micro-float */}
          <div className="absolute top-8 right-2 md:top-10 md:-right-4 z-30 animate-subtle-float">
            <div className="relative flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ff2e7e] text-white text-[11px] font-mono font-medium tracking-wide shadow-lg shadow-[#ff2e7e]/20">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M13.6 21.8L8.2 16.4l-4.2 4.2V2.8l17.8 8.6-6.6 2.4 4.8 5.6-6.4 2.4z" />
              </svg>
              Ahmed
            </div>
          </div>

        </div>

        {/* Massive Typography: Overlaying bottom of portrait */}
        <div className="relative z-10 flex flex-col items-center mt-2">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-2xl">
            Hi there
          </h1>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none text-white mt-1 md:mt-2 drop-shadow-2xl">
            I am Ahmed<span className="text-[#ff2e7e]">.</span>
          </h1>
        </div>

      </div>

      {/* Bottom Subtext */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 z-20 pt-8 border-t border-zinc-900/80 text-xs md:text-sm text-zinc-400 font-sans">
        <div>
          Scaling search visibility & systems since <span className="text-zinc-200 font-mono">2023</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Technical SEO Strategist & Full-Stack Engineer</span>
          <span className="text-zinc-700">•</span>
          <a
            href="#seo"
            className="text-white hover:text-[#ff2e7e] transition-colors underline underline-offset-4"
          >
            Explore Proof ↓
          </a>
        </div>
      </div>

    </section>
  );
}