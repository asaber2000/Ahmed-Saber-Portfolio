'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ArabicFragmentsSection() {
    // حالة لوحة الرسم
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    // محاكاة مشغل التركيز
    const [isPlaying, setIsPlaying] = useState(false);

    // زر التفاعل السريع
    const [reacted, setReacted] = useState(false);

    // شريط الإنجازات المتحرك
    const achievements = [
        {
            title: 'المركز الأول تجارياً في الإمارات',
            desc: 'تفوق على المنافسين التقليديين في نتائج بحث دبي',
        },
        {
            title: '+108% نمو في مرات الظهور (GSC)',
            desc: 'ارتفاع من 108 آلاف إلى 225 ألف ظهور خلال 6 أشهر',
        },
        {
            title: '+239% زيادة المستخدمين النشطين (GA4)',
            desc: 'تجاوز متوسط أداء القطاع الصناعي بفارق كبير',
        },
        {
            title: 'رفع الأمان من Grade D إلى B',
            desc: 'تأمين ترويسات HTTP وتفعيل بروتوكولات HSTS',
        },
        {
            title: 'الاستشهاد في Google AI',
            desc: 'ظهور مباشر للعلامة التجارية في إجابات AI Overviews',
        },
    ];

    // دوال الرسم التفاعلي
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
        <section
            dir="rtl"
            className="w-full py-20 border-t border-zinc-900 bg-black text-white selection:bg-[#ff2e7e] selection:text-white"
        >
            {/* عنوان القسم */}
            <div className="mb-12 text-right">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    لمحات من أسلوب عملي<span className="text-[#ff2e7e]">.</span>
                </h2>
            </div>

            {/* شبكة البطاقات غير المتماثلة (Bento Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* البطاقة اليمنى: شريط النتائج والإنجازات (4 أعمدة) */}
                <div className="md:col-span-4 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between overflow-hidden relative h-[360px] text-right">
                    <div className="text-xs font-medium text-zinc-500 mb-3">
                        سجل النتائج المباشرة
                    </div>

                    {/* تمرير عمودي مستمر */}
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
                        +3 سنوات في قيادة السيو التقني داخل الإمارات.
                    </div>
                </div>

                {/* البطاقة الوسطى: لوحة الرسم التفاعلية (5 أعمدة) */}
                <div className="md:col-span-5 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between relative h-[360px]">
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                        <span>البداية كانت من السيو (SEO)</span>
                        <button
                            onClick={clearCanvas}
                            className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 text-xs transition-colors"
                        >
                            مسح اللوحة
                        </button>
                    </div>

                    {/* مساحة الرسم */}
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
                        <span className="absolute bottom-3 right-3 text-xs text-zinc-700 pointer-events-none">
                            ارسم أو اترك توقيعك هنا...
                        </span>
                    </div>

                    <div className="text-xs text-zinc-500 text-right">
                        شغوف بأدق تفاصيل التفاعل وجودة التنفيذ.
                    </div>
                </div>

                {/* البطاقة اليسرى: التحول إلى البرمجة والأتمتة (3 أعمدة) */}
                <div className="md:col-span-3 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between h-[360px] text-right">
                    <div dir="ltr" className="text-[11px] font-mono text-zinc-500 text-left">
            // transition
                    </div>

                    <div className="space-y-2.5 text-xs text-zinc-400 leading-relaxed py-4">
                        <div dir="ltr" className="text-zinc-600 font-mono text-[11px] text-left">
              /* automation leap */
                        </div>
                        <p className="text-white font-bold text-base">استخدمت البرمجة.</p>
                        <p className="text-zinc-400 text-xs leading-relaxed">
                            استبدلت التقارير اليدوية بأنظمة Python و Cloud Run وواجهات Indexing APIs.
                        </p>
                        <p dir="ltr" className="text-[#ff2e7e] font-mono text-[11px] mt-2 text-left">
                            crawlers_lag = 0
                        </p>
                    </div>

                    <div className="text-xs text-zinc-500 pt-3 border-t border-zinc-900">
                       {"الكود البرمجي > المهام المتكررة"}
                    </div>
                </div>

                {/* أسفل اليمين: الهوية وطريقة التفكير (4 أعمدة) */}
                <div className="md:col-span-4 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between text-right">
                    <div className="text-xs font-medium text-zinc-500">منهجية العمل</div>
                    <div className="my-6">
                        <div className="text-2xl font-black text-zinc-300 tracking-tight leading-snug">
                            أُفكّر.<br />
                            أُحسّن.<br />
                            أَبني.
                        </div>
                    </div>
                    <div className="text-xs text-zinc-500">
                        أربط الهندسة البرمجية بنمو الأعمال والنتائج.
                    </div>
                </div>

                {/* أسفل الوسط: أجواء التركيز العميق (4 أعمدة) */}
                <div className="md:col-span-4 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between text-right">
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                        <span>أجواء التركيز العميق</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>

                    <div className="my-4 flex items-center gap-4 p-3 rounded-xl bg-zinc-950 border border-zinc-850">
                        <div className="w-12 h-12 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                            </svg>
                        </div>
                        <div className="overflow-hidden text-right">
                            <div className="text-xs font-bold text-white truncate">
                                هندسة الصوت المحيطي
                            </div>
                            <div className="text-[11px] text-zinc-500 truncate">
                                إيقاعات هادئة للبرمجة والتركيز
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-full py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-300 transition-colors"
                    >
                        {isPlaying ? 'إيقاف مؤقت ⏸' : 'تشغيل موسيقى التركيز ▶'}
                    </button>
                </div>

                {/* أسفل اليسار: التنفيذ العملي المباشر (4 أعمدة) */}
                <div className="md:col-span-4 p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between text-right">
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                        <span>تنفيذ تقني مباشر</span>
                        <span dir="ltr" className="text-[11px] font-mono text-emerald-400">
                            AWS • Next.js
                        </span>
                    </div>

                    <div className="my-4 text-xs text-zinc-400 leading-relaxed">
                        لا أكتفي بالتخطيط فقط؛ بل أبني مخططات الـ Schema، وأضبط خوادم الـ Reverse Proxy، وأكتب الكود بنفسي.
                    </div>

                    <button
                        onClick={() => {
                            setReacted(true);
                            setTimeout(() => setReacted(false), 2000);
                        }}
                        className="w-full py-2.5 rounded-xl bg-[#ff2e7e] hover:bg-[#e0266e] text-white text-xs font-semibold shadow-lg shadow-[#ff2e7e]/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                        {reacted ? 'تم استلام الإشارة! 🚀' : 'أرسل إشارة سريعة ✨'}
                    </button>
                </div>
            </div>
        </section>
    );
}