'use client';

import React, { useEffect, useState } from 'react';

export default function ArabicHeroSection() {
  const [time, setTime] = useState<string>('');

  // توقيت دبي المباشر
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('ar-AE', {
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
      dir="rtl"
      className="relative w-full min-h-[94vh] bg-black text-white flex flex-col justify-between px-6 md:px-16 pt-8 pb-12 overflow-hidden selection:bg-[#ff2e7e] selection:text-white"
    >
      {/* حركة الشارة العائمة */}
      <style jsx global>{`
        @keyframes subtleFloat {
          0%, 100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(-6px, -8px);
          }
        }
        .animate-subtle-float {
          animation: subtleFloat 3.8s ease-in-out infinite;
        }
      `}</style>

      {/* الشريط العلوي: الموقع والتوقيت المحلي */}
      <div className="w-full flex justify-between items-center z-20 text-xs md:text-sm text-zinc-400">
        <div dir="ltr" className="font-mono tracking-tight">
          <span className="text-zinc-600">portfolio /</span> ahmedsaber.dev
        </div>
        <div className="flex items-center gap-2">
          <span>مقيم في دبي، الإمارات</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-200 font-mono">{time || '11:21 ص'}</span>
        </div>
      </div>

      {/* المنتصف: الصورة الشخصية + الشارة العائمة + العنوان الرئيسي */}
      <div className="relative my-auto flex flex-col items-center justify-center text-center select-none pt-24 pb-8">
        
        {/* حاوية الصورة والشارة */}
        <div className="relative w-64 md:w-80 h-72 md:h-96 -mb-28 md:-mb-36 z-0">
          
          {/* الصورة الشخصية */}
          <div className="w-full h-full filter grayscale contrast-125 opacity-90">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="أحمد صابر - مطور ويب وخبير سيو وحوسبة سحابية"
              className="w-full h-full object-cover object-top pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
              }}
            />
          </div>

          {/* شارة الاسم العائمة */}
          <div className="absolute top-8 left-2 md:top-10 md:-left-4 z-30 animate-subtle-float">
            <div className="relative flex items-center gap-1.5 px-3 py-1 rounded bg-[#ff2e7e] text-white text-xs font-medium shadow-lg shadow-[#ff2e7e]/20">
              <svg className="w-3 h-3 fill-current -scale-x-100" viewBox="0 0 24 24">
                <path d="M13.6 21.8L8.2 16.4l-4.2 4.2V2.8l17.8 8.6-6.6 2.4 4.8 5.6-6.4 2.4z" />
              </svg>
              أحمد صابر
            </div>
          </div>

        </div>

        {/* العنوان الرئيسي الضخم */}
        <h1 className="relative z-10 flex flex-col items-center mt-2">
          <span className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-2xl">
            أهلاً بك،
          </span>
          <span className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-tight text-white mt-1 md:mt-2 drop-shadow-2xl">
            أنا أحمد صابر<span className="text-[#ff2e7e]">.</span>
          </span>
        </h1>

      </div>

      {/* الشريط السفلي: الخبرة والتخصص */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 z-20 pt-8 border-t border-zinc-900/80 text-xs md:text-sm text-zinc-400">
        <div>
          أبني الأنظمة الرقمية وأضاعف الظهور في محركات البحث منذ{' '}
          <span className="text-zinc-200 font-mono">2023</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span>خبير السيو التقني (SEO) ومطور تطبيقات الويب والسحابة</span>
          <span className="text-zinc-700">•</span>
          <a
            href="#seo"
            className="text-white hover:text-[#ff2e7e] transition-colors underline underline-offset-4"
          >
            استعرض النتائج والمشاريع ↓
          </a>
        </div>
      </div>

    </section>
  );
}