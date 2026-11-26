'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ArabicFragmentsSection() {
  // 1. حالة لوحة الرسم وتوافقها مع الشاشات عالية الدقة
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // 2. حالة مشغل الصوت المحيطي للتركيز
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  // 3. حالة الخريطة النقطية الإقليمية
  const [hoveredCity, setHoveredCity] = useState<'dubai' | 'cairo' | 'gcc' | null>('dubai');

  // 4. حالة عقد البنية الهندسية التفاعلية
  const [activeNode, setActiveNode] = useState<number>(1);

  const achievements = [
    {
      title: 'المركز الأول تجارياً في الإمارات',
      desc: 'تفوق على المنافسين التقليديين في نتائج بحث دبي.',
    },
    {
      title: '+595% نمو الظهور في GSC',
      desc: 'ارتفاع من 17.3 ألف إلى 103 آلاف ظهور شهرياً.',
    },
    {
      title: '+239% زيادة المستخدمين النشطين',
      desc: 'تجاوز متوسط أداء القطاع الصناعي في GA4.',
    },
    {
      title: 'رفع الأمان من Grade D إلى A',
      desc: 'تأمين ترويسات HTTP الست وتفعيل HSTS.',
    },
    {
      title: 'الاستشهاد في Google AI',
      desc: 'ظهور مباشر كمرجع أول في إجابات AI Overviews.',
    },
  ];

  // رسم منحنى مبدئي نظيف وهادئ داخل اللوحة
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

  // تشغيل وإيقاف الصوت المحيطي للتركيز
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
    <section
      dir="rtl"
      className="w-full py-20 border-t border-zinc-900 bg-black text-white selection:bg-[#ff2e7e] selection:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* عنوان القسم */}
        <div className="mb-12 text-right">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            لمحات من أسلوب عملي<span className="text-[#ff2e7e]">.</span>
          </h2>
        </div>

        {/* ============================================================ */}
        {/* الصف الأول: الشبكة غير المتماثلة (4 أعمدة + 5 أعمدة + 3 أعمدة) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* العمود الأيمن (4 أعمدة): الخط الزمني للإنجازات + عنوان الخبرة */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between min-h-[450px] text-right">
            <div className="relative h-[275px] rounded-xl border border-zinc-900/90 bg-black/50 px-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
              {/* خط زمني عمودي على اليمين */}
              <div className="absolute top-0 bottom-0 right-7 w-px bg-zinc-800/80" />

              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                className="space-y-3.5 py-2"
              >
                {[...achievements, ...achievements].map((item, idx) => (
                  <div key={idx} className="relative flex items-center gap-4 pr-1">
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
                +3 سنوات في قيادة السيو التقني داخل الإمارات
              </h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                مضاعفة الزيارات العضوية المستهدفة، وتحسين مؤشرات الأداء والسرعة، والظهور في محركات الذكاء الاصطناعي.
              </p>
            </div>
          </div>

          {/* العمود الأوسط (5 أعمدة): لوحة الرسم + الصف السفلي (المنهجية + الصوت) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* البطاقة العلوية: لوحة الرسم التفاعلية */}
            <div className="p-6 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between flex-1 min-h-[265px] text-right">
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
                  className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-[11px] transition-colors"
                >
                  مسح اللوحة
                </button>
              </div>

              <div className="pt-4">
                <div className="text-base font-bold text-white">البداية كانت من السيو (SEO)</div>
                <p className="text-xs text-zinc-500 mt-0.5">
                  رسمتُ الكثير من مسارات البحث وخرائط المواقع، والآن جاء دورك لتجرب الرسم هنا!
                </p>
              </div>
            </div>

            {/* الصف السفلي داخل العمود الأوسط: المنهجية + مشغل الصوت */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
              <div className="sm:col-span-5 p-5 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col items-center justify-center text-center">
                <div className="text-xl font-black tracking-tight leading-snug">
                  <span className="text-zinc-600 block">أُفكّر.</span>
                  <span className="text-zinc-400 block">أُحسّن.</span>
                  <span className="text-white block">أَبني.</span>
                </div>
              </div>

              <div className="sm:col-span-7 p-4 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between text-right">
                <div className="h-20 rounded-xl bg-gradient-to-l from-emerald-950 via-teal-900/50 to-zinc-900 border border-emerald-500/20 p-3 flex items-end justify-between relative overflow-hidden">
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
                  <span dir="ltr" className="text-[10px] font-mono text-emerald-300/80">DEEP FOCUS</span>
                </div>

                <div className="pt-3 flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-white truncate">
                      إيقاع البرمجة والتركيز العميق
                    </div>
                    <div dir="ltr" className="mt-1.5 flex items-center gap-2">
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
                    aria-label={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
                    className="w-9 h-9 rounded-full bg-white hover:bg-zinc-200 text-black flex items-center justify-center shrink-0 transition-transform active:scale-95"
                  >
                    {isPlaying ? (
                      <span className="text-xs font-bold">❚❚</span>
                    ) : (
                      <span className="text-xs font-bold">▶</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* العمود الأيسر (3 أعمدة): نافذة الطرفية البرمجية (Terminal) */}
          <div className="lg:col-span-3 p-6 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between min-h-[450px] text-right">
            <div dir="ltr" className="rounded-xl bg-black/85 border border-zinc-900 overflow-hidden font-mono text-[11px] flex-1 flex flex-col text-left">
              {/* أزرار نافذة macOS */}
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
              <div className="text-lg font-bold text-white">استخدمتُ البرمجة</div>
              <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                استبدلتُ مهام السيو المتكررة بأدوات Python وتطبيقات Next.js وأتمتة السحابة.
              </p>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* الصف الثاني: العرض البصري الهادئ (الخريطة + منحنى البنية)    */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mt-5">
          
          {/* أسفل اليمين (4 أعمدة): خريطة النبض الإقليمي النقطية */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between min-h-[290px] text-right">
            <div className="relative w-full h-[175px] rounded-xl bg-black/80 border border-zinc-900 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 260 140" className="w-full h-full opacity-90">
                <defs>
                  <pattern id="mapDotsAr" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1" fill="rgba(255,255,255,0.16)" />
                  </pattern>
                </defs>
                <path
                  d="M25,35 Q65,25 95,40 T155,35 Q195,45 225,75 T195,115 Q145,120 105,100 T45,95 Q20,70 25,35 Z"
                  fill="url(#mapDotsAr)"
                />

                {/* القاهرة */}
                <g onMouseEnter={() => setHoveredCity('cairo')} className="cursor-pointer">
                  <circle cx="88" cy="62" r="10" fill="transparent" />
                  <circle
                    cx="88"
                    cy="62"
                    r={hoveredCity === 'cairo' ? '4' : '2.5'}
                    fill={hoveredCity === 'cairo' ? '#ff2e7e' : '#a1a1aa'}
                    className="transition-all duration-300"
                  />
                </g>

                {/* الخليج */}
                <g onMouseEnter={() => setHoveredCity('gcc')} className="cursor-pointer">
                  <circle cx="136" cy="76" r="10" fill="transparent" />
                  <circle
                    cx="136"
                    cy="76"
                    r={hoveredCity === 'gcc' ? '4' : '2.5'}
                    fill={hoveredCity === 'gcc' ? '#ff2e7e' : '#a1a1aa'}
                    className="transition-all duration-300"
                  />
                </g>

                {/* دبي */}
                <g onMouseEnter={() => setHoveredCity('dubai')} className="cursor-pointer">
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

              <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] text-zinc-400">
                <span>
                  {hoveredCity === 'dubai' && 'دبي، الإمارات • المركز الأول ونمو +595%'}
                  {hoveredCity === 'cairo' && 'القاهرة، مصر • مضاعفة الظهور +108%'}
                  {hoveredCity === 'gcc' && 'بنية سحابية إقليمية • استجابة أسرع من ثانية'}
                </span>
                <span className="text-[#ff2e7e]">●</span>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-base font-bold text-white">توسع إقليمي في الإمارات ومصر</div>
              <p className="text-xs text-zinc-500 mt-1">
                قيادة النمو العضوي وبناء حضور بحثي ثنائي اللغة (عربي وإنجليزي) في أسواق المنطقة.
              </p>
            </div>
          </div>

          {/* أسفل اليسار (8 أعمدة عريضة): منحنى ربط التخصصات التفاعلي */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-[#09090b] border border-zinc-900 flex flex-col justify-between min-h-[290px] text-right">
            <div
              dir="ltr"
              style={dotGridStyle}
              className="relative w-full h-[175px] rounded-xl bg-black/80 border border-zinc-900 overflow-hidden flex items-center justify-center"
            >
              <svg viewBox="0 0 600 160" className="w-full h-full">
                <path
                  d="M 85 115 C 180 115, 200 45, 300 45 C 400 45, 420 95, 515 40"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.14)"
                  strokeWidth="1.5"
                />
                <motion.path
                  d="M 85 115 C 180 115, 200 45, 300 45 C 400 45, 420 95, 515 40"
                  fill="none"
                  stroke="#ff2e7e"
                  strokeWidth="1.75"
                  initial={{ pathLength: 0.25, pathOffset: 0 }}
                  animate={{ pathOffset: [0, 0.75, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                />

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

              {/* مؤشر الاسم العائم */}
              <motion.div
                animate={{ x: [0, 14, -8, 0], y: [0, -8, 5, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                className="absolute bottom-3.5 right-6 flex items-start gap-0.5 pointer-events-none"
              >
                <svg className="w-3 h-3 text-[#ff2e7e] -mt-1.5 fill-current" viewBox="0 0 16 16">
                  <path d="M2 2l11 4.5-4.8 1.7L6.5 13 2 2z" />
                </svg>
                <span className="px-2 py-0.5 rounded bg-[#ff2e7e] text-white text-[10px] font-semibold">
                  أحمد
                </span>
              </motion.div>
            </div>

            <div className="pt-4">
              <div className="text-base font-bold text-white">تنفيذ تقني متكامل بيدي</div>
              <p className="text-xs text-zinc-500 mt-1">
                أبني المنظومة كاملة بنفسي — بدءاً من هيكلة البيانات والسيو، مروراً بتطوير المواقع، وحتى الأتمتة السحابية.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}