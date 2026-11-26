import React from 'react';
import Link from 'next/link';

export default function ArabicProjectsSection() {
  return (
    <section id="seo" dir="rtl" className="w-full py-16 border-t border-zinc-900 scroll-mt-10">
      
      {/* عنوان القسم */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-right">
        <div>
          <span className="text-xs font-semibold text-[#ff2e7e]">
            مسارات التخصص • اضغط على أي بطاقة لاستعراض التفاصيل
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
            تخصصاتي وأعمالي<span className="text-[#ff2e7e]">.</span>
          </h2>
        </div>
        <p className="text-xs text-zinc-500">
          اختر المجال للاطلاع على النتائج الموثقة والبنية التقنية
        </p>
      </div>

      <div className="space-y-6">
        
        {/* 1. البطاقة الرئيسية: السيو التقني وتحسين محركات الذكاء الاصطناعي */}
        <Link
          href="/ar/seo"
          className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-800/90 hover:border-[#ff2e7e]/60 hover:bg-[#0e0e11] transition-all duration-300 shadow-lg"
        >
          {/* المصغرة البصرية */}
          <div className="w-full md:w-44 h-36 rounded-xl bg-gradient-to-br from-zinc-900 to-[#121214] border border-zinc-800 group-hover:border-[#ff2e7e]/40 flex flex-col items-center justify-center p-4 shrink-0 text-center mb-5 md:mb-0 transition-colors">
            <div dir="ltr" className="flex items-center gap-1.5 text-sm font-mono text-[#ff2e7e] font-bold">
              <span>SEO</span>
              <span className="text-zinc-600">+</span>
              <span>GEO</span>
            </div>
            <span className="text-xs text-zinc-200 mt-2 font-medium">دراستا حالة موثقتان</span>
            <span className="text-[11px] text-emerald-400 mt-1">نتائج وأرقام حقيقية</span>
          </div>

          {/* التفاصيل */}
          <div className="flex-1 md:px-8 text-right w-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold text-[#ff2e7e] px-2.5 py-0.5 rounded bg-[#ff2e7e]/10 border border-[#ff2e7e]/20">
                دراسات حالة ونتائج موثقة
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
              تحسين محركات البحث التقني (SEO) والظهور في الذكاء الاصطناعي (GEO)
            </h3>
            <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
              نتائج حقيقية لعملاء فعليين: تصدّر المركز الأول في الإمارات لشركة بيت النوخذة (+595% نمو الظهور وتقييم Grade A للسرعة والأمان)، ومضاعفة الزيارات بنسبة +108% لشركة Lloyds British في مصر.
            </p>
            
            {/* شارات الشركات + زر دخول واضح */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-zinc-900">
              <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                  بيت النوخذة (الإمارات)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                  Lloyds British (مصر)
                </span>
              </div>

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 group-hover:bg-[#ff2e7e] border border-zinc-700 group-hover:border-[#ff2e7e] text-xs font-bold text-white transition-all">
                <span>استعرض دراسات الحالة</span>
                <span>↖</span>
              </span>
            </div>
          </div>
        </Link>

        {/* 2. شبكة هندسة الويب والحوسبة السحابية */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* بطاقة: هندسة وتطوير المواقع */}
          <Link
            href="/ar/web"
            className="group relative flex flex-col justify-between p-6 md:p-7 rounded-2xl bg-[#0a0a0a] border border-zinc-800/90 hover:border-[#ff2e7e]/60 hover:bg-[#0e0e11] transition-all duration-300 text-right shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-medium text-zinc-300 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                  بناء مواقع متكاملة
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 group-hover:bg-[#ff2e7e] border border-zinc-800 group-hover:border-[#ff2e7e] text-xs font-bold text-zinc-200 group-hover:text-white transition-all">
                  <span>افتح الصفحة</span>
                  <span>↖</span>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
                هندسة المواقع وأنظمة إدارة المحتوى (Web & CMS)
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
                تنفيذ المواقع بالكامل عبر مسارين: التطوير البرمجي الحديث باستخدام Next.js و TypeScript و Sanity CMS، وبناء مواقع WordPress الاحترافية (مثل مشروع Mirage Heights) المهيأة للسرعة والسيو.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div dir="ltr" className="flex items-center gap-2 font-mono text-zinc-400">
                <span>Next.js</span>
                <span>•</span>
                <span>Sanity CMS</span>
                <span>•</span>
                <span>WordPress</span>
              </div>
              <span className="text-[#ff2e7e] font-bold group-hover:underline">استعرض التطبيقات ←</span>
            </div>
          </Link>

          {/* بطاقة: البنية السحابية والأتمتة */}
          <Link
            href="/ar/cloud"
            className="group relative flex flex-col justify-between p-6 md:p-7 rounded-2xl bg-[#0a0a0a] border border-zinc-800/90 hover:border-[#ff2e7e]/60 hover:bg-[#0e0e11] transition-all duration-300 text-right shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-medium text-zinc-300 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                  أنظمة سحابية وأتمتة
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 group-hover:bg-[#ff2e7e] border border-zinc-800 group-hover:border-[#ff2e7e] text-xs font-bold text-zinc-200 group-hover:text-white transition-all">
                  <span>افتح الصفحة</span>
                  <span>↖</span>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff2e7e] transition-colors">
                هندسة الحوسبة السحابية والأتمتة (Cloud)
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed">
                نشر وإدارة البنية السحابية على AWS (خوادم EC2، تخزين S3، شبكة CloudFront، وفصل قواعد بيانات RDS) وبناء أدوات الأرشفة الآلية عبر Python و Google Indexing API.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div dir="ltr" className="flex items-center gap-2 font-mono text-zinc-400">
                <span>AWS Cloud</span>
                <span>•</span>
                <span>Python APIs</span>
                <span>•</span>
                <span>Automation</span>
              </div>
              <span className="text-[#ff2e7e] font-bold group-hover:underline">استعرض البنية والأدوات ←</span>
            </div>
          </Link>

        </div>

      </div>

    </section>
  );
}