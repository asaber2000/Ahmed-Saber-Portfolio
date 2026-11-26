'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FragmentsSection() {
  // 1. Drawing Canvas State & High-DPI Resize
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // 2. Ambient Audio Synth State
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  // 3. Minimalist Dot-Matrix Map Hover State
  const [hoveredCity, setHoveredCity] = useState<'dubai' | 'cairo' | 'gcc' | null>('dubai');

  // 4. Minimalist Interactive Graph Nodes
  const [activeNode, setActiveNode] = useState<number>(1);

  const achievements = [
    { title: 'Ranked #1 Commercial UAE', desc: 'Outranked legacy competitors in Dubai.' },
    { title: '+595% GSC Impressions', desc: 'Scaled from 17.3K to 103K / month.' },
    { title: '+239% GA4 Active Users', desc: 'Beat manufacturing industry median.' },
    { title: 'Grade D → A Security', desc: 'Hardened all 6 HTTP headers & HSTS.' },
    { title: 'Google AI Citations', desc: 'Direct #1 mention in AI Overviews.' },
  ];

  // Setup crisp canvas sizing + clean minimalist curve
  const drawInitialSketch = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 1.75;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(width * 0.25, height * 0.66);
    ctx.bezierCurveTo(
      width * 0.42,
      height * 0.62,
      width * 0.5,
      height * 0.36,
      width * 0.75,
      height * 0.32
    );
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        drawInitialSketch(ctx, rect.width, rect.height);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { x, y } = getCoordinates(e);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.8;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = container.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
  };

  // Ambient Focus Audio Player
  const toggleAudio = () => {
    if (isPlaying) {
      oscNodesRef.current.forEach((osc) => {
        try {
          osc.stop();
        } catch {}
      });
      oscNodesRef.current = [];
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    } else {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.03, ctx.currentTime);
      masterGain.connect(ctx.destination);

      const freqs = [130.81, 196.0, 246.94, 293.66];
      const nodes = freqs.map((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.connect(masterGain);
        osc.start();
        return osc;
      });

      oscNodesRef.current = nodes;
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setElapsed((prev) => (prev >= 180 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      oscNodesRef.current.forEach((osc) => {
        try {
          osc.stop();
        } catch {}
      });
    };
  }, []);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const dotGridStyle = {
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
    backgroundSize: '14px 14px',
  };

  return (
    <section className="w-full py-20 border-t border-zinc-900 bg-black text-white selection:bg-[#ff2e7e] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Fragments of me<span className="text-[#ff2e7e]">.</span>
          </h2>
        </div>

        {/* ============================================================ */}
        {/* ROW 1: ASYMMETRIC TOP BENTO (4 COLS + 5 COLS + 3 COLS)       */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* LEFT COLUMN (4 cols): Vertical Timeline Stream + Experience Headline */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between min-h-[450px]">
            <div className="relative h-[275px] rounded-xl border border-zinc-900/90 bg-black/50 px-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
              <div className="absolute top-0 bottom-0 left-7 w-px bg-zinc-800/80" />

              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                className="space-y-3.5 py-2"
              >
                {[...achievements, ...achievements].map((item, idx) => (
                  <div key={idx} className="relative flex items-center gap-4 pl-1">
                    <span className="w-4 h-4 rounded-full bg-[#09090b] border border-zinc-700 shrink-0 z-10" />
                    <div className="flex-1 p-3.5 rounded-lg bg-[#0d0d10] border border-zinc-800/70">
                      <div className="text-sm font-semibold text-zinc-100">{item.title}</div>
                      <div className="text-xs text-zinc-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug tracking-tight">
                3+ years leading technical search in UAE
              </h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Scaling high-intent organic traffic, Core Web Vitals, and AI visibility across enterprise markets.
              </p>
            </div>
          </div>

          {/* CENTER COLUMN (5 cols): Drawing Canvas + Bottom Split (Mindset + Audio) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Top Card: Interactive Drawing Pad */}
            <div className="p-6 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between flex-1 min-h-[265px]">
              <div
                ref={canvasContainerRef}
                style={dotGridStyle}
                className="relative w-full flex-1 rounded-xl bg-black/70 border border-zinc-900 cursor-crosshair overflow-hidden min-h-[165px]"
              >
                <canvas
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-full block touch-none"
                />
                <button
                  type="button"
                  onClick={clearCanvas}
                  className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-[11px] font-mono transition-colors"
                >
                  Clear
                </button>
              </div>

              <div className="pt-4">
                <div className="text-base font-bold text-white">I started in SEO</div>
                <p className="text-xs text-zinc-500 mt-0.5">
                  I've mapped enough search journeys already, now it's your turn to sketch!
                </p>
              </div>
            </div>

            {/* Bottom Row inside Center Column: Mindset + Ambient Player */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
              <div className="sm:col-span-5 p-5 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col items-center justify-center text-center">
                <div className="text-xl font-black tracking-tight leading-tight">
                  <span className="text-zinc-600 block">thinker.</span>
                  <span className="text-zinc-400 block">optimizer.</span>
                  <span className="text-white block">builder.</span>
                </div>
              </div>

              <div className="sm:col-span-7 p-4 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between">
                <div className="h-20 rounded-xl bg-gradient-to-r from-emerald-950 via-teal-900/50 to-zinc-900 border border-emerald-500/20 p-3 flex items-end justify-between relative overflow-hidden">
                  <div className="flex items-end gap-1 h-8">
                    {[40, 85, 55, 100, 65, 90, 45, 75].map((bar, i) => (
                      <motion.span
                        key={i}
                        animate={isPlaying ? { height: ['25%', `${bar}%`, '30%'] } : { height: '25%' }}
                        transition={{ repeat: Infinity, duration: 0.9 + i * 0.1, ease: 'easeInOut' }}
                        className="w-1 bg-emerald-400/80 rounded-full"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-300/80">DEEP FOCUS</span>
                </div>

                <div className="pt-3 flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-white truncate">
                      Midnight Deploy • Ambient Synth
                    </div>
                    <div className="mt-1.5 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${(elapsed / 180) * 100}%` }}
                          className="h-full bg-white transition-all duration-300"
                        />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">{formatTime(elapsed)}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={toggleAudio}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="w-9 h-9 rounded-full bg-white hover:bg-zinc-200 text-black flex items-center justify-center shrink-0 transition-transform active:scale-95"
                  >
                    {isPlaying ? (
                      <span className="text-xs font-bold">❚❚</span>
                    ) : (
                      <span className="text-xs font-bold ml-0.5">▶</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (3 cols): Full-Height Terminal Window Card */}
          <div className="lg:col-span-3 p-6 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between min-h-[450px]">
            <div className="rounded-xl bg-black/85 border border-zinc-900 overflow-hidden font-mono text-[11px] flex-1 flex flex-col">
              {/* macOS Terminal Dots */}
              <div className="px-3.5 py-2.5 border-b border-zinc-900 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="p-4 space-y-2 text-zinc-400 leading-relaxed flex-1 flex flex-col justify-center">
                <div className="text-zinc-300"> pnpm ahmed@skills init</div>
                <div className="text-emerald-400">✓ Loaded technical-seo.exe</div>
                <div className="text-emerald-400">✓ Built Next.js & Sanity CMS</div>
                <div className="text-emerald-400">✓ Automated Python Indexing</div>
                <div className="text-zinc-500">✓ Hardened HTTP Headers (A)</div>
                <div className="text-zinc-200 pt-2">
                  Success! Systems deployed<span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="text-lg font-bold text-white">I used code</div>
              <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                Replacing repetitive SEO tasks with Python scripts, Next.js apps & cloud automation.
              </p>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* ROW 2: MINIMALIST VISUAL SHOWCASE (QUIET, CLEAN & INTERACTIVE)*/}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mt-5">
          
          {/* BOTTOM LEFT (4 cols): Minimalist Dot-Matrix Regional Map */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between min-h-[290px]">
            <div className="relative w-full h-[175px] rounded-xl bg-black/80 border border-zinc-900 overflow-hidden flex items-center justify-center">
              {/* Subtle Dotted Regional Silhouette SVG */}
              <svg viewBox="0 0 260 140" className="w-full h-full opacity-90">
                <defs>
                  <pattern id="mapDots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1" fill="rgba(255,255,255,0.16)" />
                  </pattern>
                </defs>
                {/* Abstract MENA Landmass Mask filled with crisp dots */}
                <path
                  d="M25,35 Q65,25 95,40 T155,35 Q195,45 225,75 T195,115 Q145,120 105,100 T45,95 Q20,70 25,35 Z"
                  fill="url(#mapDots)"
                />

                {/* City 1: Cairo */}
                <g
                  onMouseEnter={() => setHoveredCity('cairo')}
                  className="cursor-pointer"
                >
                  <circle cx="88" cy="62" r="10" fill="transparent" />
                  <circle
                    cx="88"
                    cy="62"
                    r={hoveredCity === 'cairo' ? '4' : '2.5'}
                    fill={hoveredCity === 'cairo' ? '#ff2e7e' : '#a1a1aa'}
                    className="transition-all duration-300"
                  />
                </g>

                {/* City 2: GCC / Riyadh */}
                <g
                  onMouseEnter={() => setHoveredCity('gcc')}
                  className="cursor-pointer"
                >
                  <circle cx="136" cy="76" r="10" fill="transparent" />
                  <circle
                    cx="136"
                    cy="76"
                    r={hoveredCity === 'gcc' ? '4' : '2.5'}
                    fill={hoveredCity === 'gcc' ? '#ff2e7e' : '#a1a1aa'}
                    className="transition-all duration-300"
                  />
                </g>

                {/* City 3: Dubai (Primary Hub with soft pulse) */}
                <g
                  onMouseEnter={() => setHoveredCity('dubai')}
                  className="cursor-pointer"
                >
                  <circle cx="168" cy="72" r="12" fill="transparent" />
                  <circle
                    cx="168"
                    cy="72"
                    r="8"
                    fill="rgba(255, 46, 126, 0.18)"
                    className="animate-ping"
                  />
                  <circle
                    cx="168"
                    cy="72"
                    r={hoveredCity === 'dubai' ? '4.5' : '3'}
                    fill="#ff2e7e"
                    className="transition-all duration-300"
                  />
                </g>
              </svg>

              {/* Quiet Single-Line Readout at Bottom */}
              <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>
                  {hoveredCity === 'dubai' && 'Dubai, UAE • #1 SERP & +595% GSC'}
                  {hoveredCity === 'cairo' && 'Cairo, Egypt • +108% Search Scale'}
                  {hoveredCity === 'gcc' && 'GCC Edge • Sub-second Cloud Delivery'}
                </span>
                <span className="text-[#ff2e7e]">●</span>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-base font-bold text-white">Scaled across UAE & Egypt</div>
              <p className="text-xs text-zinc-500 mt-1">
                Driving regional organic growth & bilingual search authority across MENA.
              </p>
            </div>
          </div>

          {/* BOTTOM RIGHT (8 cols WIDE): Quiet, Sleek Interactive Curve & Node Canvas */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between min-h-[290px]">
            <div
              style={dotGridStyle}
              className="relative w-full h-[175px] rounded-xl bg-black/80 border border-zinc-900 overflow-hidden flex items-center justify-center"
            >
              {/* Clean Minimalist Bezier Architecture Curve */}
              <svg viewBox="0 0 600 160" className="w-full h-full">
                {/* Smooth Subtle Connecting Curve */}
                <path
                  d="M 85 115 C 180 115, 200 45, 300 45 C 400 45, 420 95, 515 40"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.14)"
                  strokeWidth="1.5"
                />
                {/* Animated Pink Glow Beam traveling along curve */}
                <motion.path
                  d="M 85 115 C 180 115, 200 45, 300 45 C 400 45, 420 95, 515 40"
                  fill="none"
                  stroke="#ff2e7e"
                  strokeWidth="1.75"
                  initial={{ pathLength: 0.25, pathOffset: 0 }}
                  animate={{ pathOffset: [0, 0.75, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                />

                {/* 3 Quiet Interactive Anchor Points */}
                {[
                  { id: 0, x: 85, y: 115, label: 'Technical SEO & Schema' },
                  { id: 1, x: 300, y: 45, label: 'Next.js & Headless CMS' },
                  { id: 2, x: 515, y: 40, label: 'AWS Cloud & Python APIs' },
                ].map((pt) => {
                  const isSelected = activeNode === pt.id;
                  return (
                    <g
                      key={pt.id}
                      onMouseEnter={() => setActiveNode(pt.id)}
                      className="cursor-pointer"
                    >
                      <circle cx={pt.x} cy={pt.y} r="18" fill="transparent" />
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isSelected ? '6' : '4'}
                        fill="#09090b"
                        stroke={isSelected ? '#ff2e7e' : '#71717a'}
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      <text
                        x={pt.x}
                        y={pt.y + 22}
                        textAnchor="middle"
                        fill={isSelected ? '#ffffff' : '#71717a'}
                        className="text-[10px] font-mono transition-colors duration-300 select-none"
                      >
                        {pt.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Subtle Floating Cursor Tag ("Ahmed") like Diego's quiet signature */}
              <motion.div
                animate={{ x: [0, 14, -8, 0], y: [0, -8, 5, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                className="absolute bottom-3.5 right-6 flex items-start gap-0.5 pointer-events-none"
              >
                <svg className="w-3 h-3 text-[#ff2e7e] -mt-1.5 fill-current" viewBox="0 0 16 16">
                  <path d="M2 2l11 4.5-4.8 1.7L6.5 13 2 2z" />
                </svg>
                <span className="px-2 py-0.5 rounded bg-[#ff2e7e] text-white text-[10px] font-semibold">
                  Ahmed
                </span>
              </motion.div>
            </div>

            <div className="pt-4">
              <div className="text-base font-bold text-white">Hands-on systems builder</div>
              <p className="text-xs text-zinc-500 mt-1">
                I build by example—connecting search architecture, modern web apps, and cloud automation directly.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}