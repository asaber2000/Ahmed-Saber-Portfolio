'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FragmentsSection() {
  // Canvas State
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Music Player Simulation
  const [isPlaying, setIsPlaying] = useState(false);

  // Interactive Reaction Ping
  const [reacted, setReacted] = useState(false);

  // Auto-scrolling achievements ticker
  const achievements = [
    { title: 'Ranked #1 Commercial UAE', desc: 'Outranked legacy competitors in Dubai' },
    { title: '+108% GSC Impressions', desc: 'Scaled from 108K to 225K in 6 months' },
    { title: '+239% GA4 Active Users', desc: 'Outperformed manufacturing industry median' },
    { title: 'Grade D → B Security', desc: 'Hardened HTTP headers & HSTS protocols' },
    { title: 'Google AI Citations', desc: 'Direct entity mention in AI Overviews' },
  ];

  // Canvas Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <section className="w-full py-20 border-t border-zinc-900 bg-black text-white selection:bg-[#ff2e7e] selection:text-white">
      
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Fragments of me<span className="text-[#ff2e7e]">.</span>
        </h2>
      </div>

      {/* Diego's Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

        {/* 1. Left Vertical Ticker Box (Span 4 cols) */}
        <div className="md:col-span-4 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between overflow-hidden relative h-[360px]">
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-3">
            Impact Stream
          </div>

          {/* Infinite Vertical Scroll */}
          <div className="relative flex-1 overflow-hidden mask-gradient-vertical">
            <motion.div
              animate={{ y: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
              className="space-y-4"
            >
              {[...achievements, ...achievements].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60"
                >
                  <div className="text-sm font-bold text-white">{item.title}</div>
                  <div className="text-xs text-zinc-400 mt-1">{item.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="pt-3 border-t border-zinc-900 text-xs text-zinc-500">
            3+ years leading technical search in UAE.
          </div>
        </div>

        {/* 2. Middle Interactive Drawing Canvas (Span 5 cols) */}
        <div className="md:col-span-5 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between relative h-[360px]">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>I started in SEO</span>
            <button
              onClick={clearCanvas}
              className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 text-[11px] transition-colors"
            >
              Clear
            </button>
          </div>

          {/* Smooth Canvas */}
          <div className="relative w-full flex-1 my-3 rounded-xl bg-black border border-zinc-900/80 cursor-crosshair overflow-hidden">
            <canvas
              ref={canvasRef}
              width={380}
              height={200}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              className="w-full h-full"
            />
            <span className="absolute bottom-3 left-3 text-[11px] text-zinc-700 pointer-events-none font-mono">
              draw or sign something...
            </span>
          </div>

          <div className="text-xs text-zinc-500">
            Obsessed with interaction detail & craft.
          </div>
        </div>

        {/* 3. Right Terminal Card: When I used code (Span 3 cols) */}
        <div className="md:col-span-3 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between h-[360px] font-mono">
          <div className="text-[11px] text-zinc-500">
            // transition
          </div>
          
          <div className="space-y-2 text-xs text-zinc-400 leading-relaxed py-4">
            <div className="text-zinc-600">/* automation leap */</div>
            <p className="text-white font-bold text-sm">I used code.</p>
            <p className="text-zinc-400 text-[11px]">
              Replaced manual reports with Python, Cloud Run & Indexing APIs.
            </p>
            <p className="text-[#ff2e7e] text-[11px] mt-2">
              crawlers_lag = 0
            </p>
          </div>

          <div className="text-[11px] text-zinc-500 pt-3 border-t border-zinc-900">
            Code &gt; Repetitive tasks
          </div>
        </div>

        {/* 4. Lower Left: Philosophy / Identity (Span 4 cols) */}
        <div className="md:col-span-4 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between">
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
            Mindset
          </div>
          <div className="my-6">
            <div className="text-2xl font-black text-zinc-300 tracking-tight leading-snug">
              thinker.<br />
              optimizer.<br />
              builder.
            </div>
          </div>
          <div className="text-xs text-zinc-500 font-mono">
            Bridging engineering & revenue.
          </div>
        </div>

        {/* 5. Lower Center: Spotify / Deep Work Widget (Span 4 cols) */}
        <div className="md:col-span-4 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Deep Work Soundtrack</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>

          <div className="my-4 flex items-center gap-4 p-3 rounded-xl bg-zinc-950 border border-zinc-850">
            <div className="w-12 h-12 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-white truncate">Ambient Architecture</div>
              <div className="text-[11px] text-zinc-500 truncate">Synthesizers & Focus Beats</div>
            </div>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-full py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 transition-colors"
          >
            {isPlaying ? 'Pause Focus Loop ⏸' : 'Play Focus Loop ▶'}
          </button>
        </div>

        {/* 6. Lower Right: Interactive Ping / Reaction (Span 4 cols) */}
        <div className="md:col-span-4 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>Hands-on Systems Lead</span>
            <span className="text-[11px] font-mono text-emerald-400">AWS • Next.js</span>
          </div>

          <div className="my-4 text-xs text-zinc-400 leading-relaxed">
            I don’t just delegate. I build the schema graphs, configure the reverse proxies, and ship the code directly.
          </div>

          <button
            onClick={() => {
              setReacted(true);
              setTimeout(() => setReacted(false), 2000);
            }}
            className="w-full py-2.5 rounded-xl bg-[#ff2e7e] hover:bg-[#e0266e] text-white font-mono text-xs font-semibold shadow-lg shadow-[#ff2e7e]/20 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            {reacted ? 'Ping Received! 🚀' : 'Send Fast Ping ✨'}
          </button>
        </div>

      </div>

    </section>
  );
}