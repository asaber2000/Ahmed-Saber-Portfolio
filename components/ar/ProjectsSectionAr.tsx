import React from 'react';
import Link from 'next/link';

export default function ArabicProjectsSection() {
  return (
    <section dir="rtl" className="w-full py-16 border-t border-zinc-900">
      
      {/* عنوان القسم */}
      <div className="mb-10 text-right">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          أبرز المشاريع والخبرات<span className="text-[#ff2e7e]">.</span>
        </h2>
      </div>

      <div className="space-y-6">
        
        {/* 1. البطاقة الرئيسية: السيو التقني وتحسين محركات الذكاء الاصطناعي */}
        <Link
          href="/ar/seo"
          className="group relative flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-750 transition-all duration-300"
        >
          {/* المصغرة البصرية */}
          <div className="w-full md:w-44 h-36 rounded-xl bg-gradient-to-br from-zinc-900 to-[#121214] border border-zinc-800 flex flex-col items-center justify-center p-4 shrink-0 text-center mb-4 md:mb-0">
            <div dir="ltr" className="flex items-center gap-1.5 text-xs font-mono text-[#ff2e7e] font-semibold">
              <span>SEO</span>
              <span className="text-zinc-600">+</span>
              <span>GEO</span>
            </div>
            <span className="text-xs text-zinc-400 mt-2">3 دراسات حالة رئيسية</span>
          </div>

          {/* التفاصيل */}
          <div className="flex-1 md:px-8 text-right w-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-medium text-[#ff2e7e] px-2.5 py-0.5 rounded bg-[#ff2e7e]/10">
                دراسات حالة ونتائج موثقة
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
              تحسين محركات البحث التقني (SEO) والظهور في الذكاء الاصطناعي (GEO)
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
              نتائج حقيقية لعملاء فعليين: تصدّر المركز الأول في الإمارات لشركة بيت النوخذة، نمو الأداء بنسبة +1845% لـ Tents Rental في السعودية، وتدقيق تقني صناعي لشركة Lloyds British في مصر.
            </p>
            
            {/* شارات الشركات */}
            <div className="flex flex-wrap gap-2 mt-4 text-xs text-zinc-300">
              <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                بيت النوخذة (Bait Al Nokhada)
              </span>
              <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                Tents Rental KSA
              </span>
              <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                Lloyds British
              </span>
            </div>
          </div>

          {/* السهم (معكوس ليتناسب مع العربية) */}
          <div className="hidden md:flex items-center text-zinc-600 group-hover:text-white transition-colors">
            <svg
              className="w-6 h-6 transform rotate-180 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>

        {/* 2. شبكة التطوير السحابي وهندسة الويب */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* بطاقة: تطوير الويب المتكامل */}
          <Link
            href="/ar/web"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-750 transition-all duration-300 text-right"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-medium text-zinc-400 px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  دراسة وتطبيق عملي
                </span>
                <span className="text-zinc-600 group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
                تطوير تطبيقات الويب المتكاملة (Full-Stack)
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
                خبرة هندسية مبنية على مسارات تدريبية وتطبيقات عملية باستخدام Next.js (App Router)، وTypeScript، وTailwind، مع ربط أنظمة إدارة المحتوى مثل Sanity Headless CMS.
              </p>
            </div>
            <div dir="ltr" className="mt-6 flex flex-wrap justify-end gap-2 text-[11px] font-mono text-zinc-500">
              <span>Next.js</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Sanity</span>
            </div>
          </Link>

          {/* بطاقة: البنية السحابية والأتمتة */}
          <Link
            href="/ar/cloud"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-750 transition-all duration-300 text-right"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-medium text-zinc-400 px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  دراسة وتطبيق عملي
                </span>
                <span className="text-zinc-600 group-hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
                هندسة الحوسبة السحابية والأتمتة (Cloud)
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
                بناء الأنظمة السحابية عبر مسارات AWS وتنفيذ مشاريع الأتمتة: إدارة خوادم EC2، تخزين S3، فصل قواعد بيانات RDS، وبناء مسارات أرشفة جوجل الآلية بـ Python.
              </p>
            </div>
            <div dir="ltr" className="mt-6 flex flex-wrap justify-end gap-2 text-[11px] font-mono text-zinc-500">
              <span>AWS Architecture</span>
              <span>•</span>
              <span>Python APIs</span>
              <span>•</span>
              <span>DevOps</span>
            </div>
          </Link>

        </div>

      </div>

    </section>
  );
}