'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavbarAr from '@/components/ar/NavbarAr';
import FooterAr from '@/components/ar/FooterAr';

const getImgSrc = (name: string) => {
  if (!name) return '';
  const cleanPath = name.startsWith('/') ? name : `/${name}`;
  return encodeURI(cleanPath);
};

export default function ArabicSeoCaseStudies() {
  const [activeTab, setActiveTab] = useState<'nokhada' | 'lloyds'>('nokhada');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-white font-sans selection:bg-[#ff2e7e] selection:text-white"
      style={{ fontFamily: 'var(--font-cairo), sans-serif' }}
    >
      <NavbarAr />

      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-10 pb-24 text-right">
        {/* رابط العودة */}
        <Link
          href="/ar"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors mb-8"
        >
          <span>→</span>
          <span>العودة إلى الرئيسية</span>
        </Link>

        {/* العنوان الرئيسي */}
        <div className="mb-10">
          <div className="text-xs font-semibold text-[#ff2e7e] mb-2">
            نتائج موثقة بالأرقام
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            السيو التقني والظهور في محركات الذكاء الاصطناعي (GEO)<span className="text-[#ff2e7e]">.</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 mt-3 max-w-2xl leading-relaxed">
            تدقيق تقني شامل، تصدر النتائج التجارية في الصفحات الأولى، وبناء حضور موثق في إجابات Google AI Overviews عبر أسواق الإمارات والسعودية ومصر.
          </p>
        </div>

        {/* أزرار التبديل بين دراسات الحالة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#0c0c0e] border border-zinc-900 mb-14">
          <button
            onClick={() => setActiveTab('nokhada')}
            className={`py-3 px-4 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'nokhada'
                ? 'bg-zinc-800 text-white font-bold border border-zinc-700 shadow-lg'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            01. مصنع بيت النوخذة للخيام (الإمارات والسعودية)
          </button>

          <button
            onClick={() => setActiveTab('lloyds')}
            className={`py-3 px-4 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'lloyds'
                ? 'bg-zinc-800 text-white font-bold border border-zinc-700 shadow-lg'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            02. لويدز بريتش للفحوصات الهندسية (مصر)
          </button>
        </div>

        {/* ========================================================= */}
        {/* التبويب الأول: بيت النوخذة للخيام والمظلات                 */}
        {/* ========================================================= */}
        {activeTab === 'nokhada' && (
          <div className="space-y-20">
            {/* بطاقة نظرة عامة */}
            <div className="p-8 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
              <span className="text-xs font-semibold text-[#ff2e7e]">
                دراسة حالة رئيسية • ريادة السوق في الإمارات
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1.5">
                بيت النوخذة للخيام والمظلات القماشية
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 mt-2 leading-relaxed max-w-3xl">
                واحدة من أكبر الشركات الصناعية الرائدة في الشرق الأوسط بخبرة تمتد لأكثر من 26 عاماً. قمت بإعادة هيكلة البنية التقنية للسيو بالكامل، وتسريع مؤشرات الأداء الأساسية (Core Web Vitals)، وترسيخ ظهور العلامة كمرجع أول في محركات البحث التوليدية.
              </p>
            </div>

            {/* 1. الفحص الأولي (نقطة البداية) */}
            <section className="space-y-6">
              <div>
                <div className="text-xs text-zinc-500 mb-1">
                  المرحلة 01 / التشخيص والفحص الأولي
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  نقطة البداية: التحديات التقنية التي واجهتها عند استلام الموقع
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* السرعة قبل التحسين */}
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between text-xs text-red-400 mb-2 font-semibold">
                      <span>تقييم GTmetrix</span>
                      <span dir="ltr">Grade E (36%)</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">بطء التحميل (4.9 ثانية LCP)</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      ملفات JavaScript و CSS غير المضغوطة تسببت في تأخير عرض المحتوى وارتفاع معدل الارتداد على الهواتف.
                    </p>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('gtmetrix-before.jpg'))}
                    className="relative h-36 w-full mt-4 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('gtmetrix-before.jpg')} alt="تقرير GTmetrix قبل التحسين" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* الأمان قبل التحسين */}
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between text-xs text-red-400 mb-2 font-semibold">
                      <span>ترويسات الأمان (Headers)</span>
                      <span dir="ltr">Grade D</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">غياب بروتوكولات الحماية</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      عدم تفعيل HSTS وغياب ترويسات X-Frame و Content-Type، مما يضعف ثقة المتصفحات ومحركات البحث.
                    </p>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('3http-headers.png'))}
                    className="relative h-36 w-full mt-4 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('3http-headers.png')} alt="ترويسات HTTP قبل التحسين" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* الزيارات قبل التحسين */}
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between text-xs text-zinc-500 mb-2 font-semibold">
                      <span>الظهور في SEMrush</span>
                      <span>نمو متوقف</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">كلمات تجارية غير مستغلة</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      الكلمات البحثية عالية القيمة مثل تأجير الخيام والهناجر وخيام الفعاليات كانت متأخرة بعد الصفحة الثالثة.
                    </p>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('organic-traffic-semruch-before.jpg'))}
                    className="relative h-36 w-full mt-4 rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('organic-traffic-semruch-before.jpg')} alt="الزيارات العضوية قبل التحسين" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </section>

            {/* 2. التدخل الهندسي وتحسين البنية */}
            <section className="space-y-6">
              <div>
                <div className="text-xs font-semibold text-[#ff2e7e] mb-1">
                  المرحلة 02 / التنفيذ التقني
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  التدخلات الهندسية: تسريع الأداء وتحصين ترويسات الخادم
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* السرعة بعد التحسين */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs text-emerald-400 mb-2 font-semibold">
                    <span>قفزة في سرعة الأداء</span>
                    <span>تقليص التحميل إلى 2.4 ثانية</span>
                  </div>
                  <h4 dir="ltr" className="text-base font-bold text-white mb-1 text-right">GTmetrix Grade C (67%)</h4>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    ضغط ملفات CSS الحرجة، تفعيل التحميل الكسول للصور والوسائط، وتحسين مؤشرات Core Web Vitals للهواتف.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('gtmetrix-after.jpg'))}
                    className="relative h-60 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('gtmetrix-after.jpg')} alt="تقرير GTmetrix بعد التحسين" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* الأمان بعد التحسين */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs text-emerald-400 mb-2 font-semibold">
                    <span>تحصين البنية التحتية</span>
                    <span dir="ltr">Grade D → B</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">تأمين ترويسات الاستجابة (HTTP Security Headers)</h4>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    تفعيل بروتوكولات Strict-Transport-Security و X-Frame-Options و Referrer-Policy لحماية الموقع ورفع موثوقيته.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('4http-headers.png'))}
                    className="relative h-60 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('4http-headers.png')} alt="ترويسات HTTP بعد التحسين" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </section>

            {/* 3. نمو الزيارات في GSC و GA4 */}
            <section className="space-y-8">
              <div>
                <div className="text-xs font-semibold text-[#ff2e7e] mb-1">
                  المرحلة 03 / النمو القابل للقياس
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white">
                  تضاعف الزيارات العضوية: من نقطة البداية إلى صدارة السوق
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
                  مقارنة موثقة مباشرة من Google Search Console: تضاعف مرات الظهور بأكثر من 6 أضعاف، وقفز متوسط الترتيب من الصفحة الثالثة (المركز 21) مباشرة إلى الصفحة الأولى (المركز 8.5).
                </p>
              </div>

              {/* بطاقة المقارنة الكبيرة */}
              <div className="p-7 md:p-9 rounded-3xl bg-[#0a0a0c] border border-zinc-800 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-850">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400">
                      Google Search Console • إثبات النمو الفعلي
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-white mt-1">
                      يونيو 2024 (نقطة الاستلام) مقابل آخر 28 يوماً
                    </h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                      +595% نمو في مرات الظهور
                    </span>
                    <span dir="ltr" className="px-3 py-1 rounded-lg bg-[#ff2e7e]/10 border border-[#ff2e7e]/20 text-[#ff2e7e] font-mono text-xs font-bold">
                      Pos 21 → Pos 8.5
                    </span>
                  </div>
                </div>

                {/* الصورتان المتجاورتان للمقارنة */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* قبل */}
                  <div className="flex flex-col justify-between p-4 rounded-2xl bg-zinc-950/80 border border-zinc-900">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-red-400 font-semibold">● قبل التحسين (يونيو 2024)</span>
                      <span dir="ltr" className="text-zinc-500 font-mono">17.3K Impr • Pos 21</span>
                    </div>

                    <div
                      onClick={() => setLightboxImg(getImgSrc('search-console-( jun,2024).jpg'))}
                      className="relative h-64 md:h-72 w-full rounded-xl overflow-hidden border border-zinc-850 bg-black cursor-pointer group"
                    >
                      <img
                        src={getImgSrc('search-console-( jun,2024).jpg')}
                        alt="Search Console يونيو 2024 قبل التحسين"
                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>

                    <div className="mt-3 flex justify-between text-xs text-zinc-500">
                      <span>النقرات: 384</span>
                      <span>نسبة النقر: 2.2%</span>
                      <span>متوسط الترتيب: الصفحة 3</span>
                    </div>
                  </div>

                  {/* بعد */}
                  <div className="flex flex-col justify-between p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-emerald-400 font-semibold">● بعد التحسين (آخر 28 يوماً)</span>
                      <span dir="ltr" className="text-emerald-400 font-mono font-bold">103K Impr • Pos 8.5</span>
                    </div>

                    <div
                      onClick={() => setLightboxImg(getImgSrc('GSC-last28-baitalnokhada.jpg'))}
                      className="relative h-64 md:h-72 w-full rounded-xl overflow-hidden border border-zinc-700/80 bg-black cursor-pointer group"
                    >
                      <img
                        src={getImgSrc('GSC-last28-baitalnokhada.jpg')}
                        alt="Search Console آخر 28 يوماً بعد التحسين"
                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>

                    <div className="mt-3 flex justify-between text-xs text-zinc-400">
                      <span className="text-white font-bold">النقرات: 701</span>
                      <span className="text-emerald-400 font-bold">103,000 ظهور</span>
                      <span className="text-[#ff2e7e] font-bold">متوسط الترتيب: الصفحة 1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 مؤشرات رقمية داعمة */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div dir="ltr" className="text-3xl font-mono font-bold text-white text-right">+108%</div>
                  <div className="text-xs text-zinc-400 mt-1">نمو 6 أشهر في GSC</div>
                  <div dir="ltr" className="text-[11px] text-zinc-600 font-mono mt-1 text-right">108K → 225K</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div dir="ltr" className="text-3xl font-mono font-bold text-emerald-400 text-right">+239%</div>
                  <div className="text-xs text-zinc-400 mt-1">المستخدمون النشطون (GA4)</div>
                  <div className="text-[11px] text-zinc-600 mt-1">9.3 آلاف مستخدم نشط</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div dir="ltr" className="text-3xl font-mono font-bold text-amber-400 text-right">+374%</div>
                  <div className="text-xs text-zinc-400 mt-1">نمو الروابط الخلفية</div>
                  <div className="text-[11px] text-zinc-600 mt-1">موثق عبر Mangools</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div dir="ltr" className="text-3xl font-mono font-bold text-[#ff2e7e] text-right">+1845%</div>
                  <div className="text-xs text-zinc-400 mt-1">التوسع في السوق السعودي</div>
                  <div className="text-[11px] text-zinc-600 mt-1">نمو إقليمي متسارع</div>
                </div>
              </div>

              {/* بطاقات الأدلة الإضافية */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* مقارنة 6 أشهر */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs text-zinc-400 mb-3 flex justify-between">
                    <span>مقارنة 6 أشهر بالفترة السابقة (GSC)</span>
                    <span className="text-emerald-400 font-bold">+86% زيادة في النقرات</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('last 6th vs. previos 6th.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('last 6th vs. previos 6th.jpg')} alt="نمو 6 أشهر في GSC" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* GA4 */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs text-zinc-400 mb-3 flex justify-between">
                    <span>تحليلات Google Analytics 4</span>
                    <span className="text-emerald-400 font-bold">تجاوز متوسط القطاع</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('GA4.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('GA4.jpg')} alt="تقرير GA4" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* SEMrush */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs text-zinc-400 mb-3 flex justify-between">
                    <span>توسع الكلمات المفتاحية (SEMrush)</span>
                    <span className="text-emerald-400 font-bold">صدارة المراكز الثلاثة الأولى</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('organic-keywords-semruch.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('organic-keywords-semruch.jpg')} alt="كلمات SEMrush" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Mangools */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs text-zinc-400 mb-3 flex justify-between">
                    <span>نمو الروابط الخلفية (+374.6%)</span>
                    <span className="text-emerald-400 font-bold">503 رابط نشط</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('mangools-backlinks-bait.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('mangools-backlinks-bait.jpg')} alt="الروابط الخلفية في Mangools" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </section>

            {/* 4. تصدر المراكز الأولى في صفحات البحث (SERP) */}
            <section className="space-y-6">
              <div>
                <div className="text-xs font-semibold text-[#ff2e7e] mb-1">
                  المرحلة 04 / تصدر نتائج البحث (SERP)
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  المركز الأول (#1) في الكلمات التجارية الأعلى بحثاً في الإمارات
                </h3>
              </div>

              {/* جداول تتبع الترتيب */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs text-zinc-400 mb-3 flex justify-between">
                    <span>متتبع الترتيب: صدارة الكلمات العربية</span>
                    <span className="text-emerald-400 font-bold">المركز #1 موثق</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('rank1.jpg'))}
                    className="relative h-72 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('rank1.jpg')} alt="جدول ترتيب الكلمات العربية" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="text-xs text-zinc-400 mb-3 flex justify-between">
                    <span>متتبع الترتيب: صدارة الكلمات الإنجليزية</span>
                    <span className="text-emerald-400 font-bold">المركز #1 موثق</span>
                  </div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('Rank1-(2).jpg'))}
                    className="relative h-72 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('Rank1-(2).jpg')} alt="جدول ترتيب الكلمات الإنجليزية" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* لقطات حية من جوجل وبينج */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div dir="ltr" className="text-xs font-mono text-zinc-400 mb-2 text-right">Google.ae: #1 Tent Rental Dubai</div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('tent-rental-company-in-dubai.jpg'))}
                    className="relative h-56 w-full rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('tent-rental-company-in-dubai.jpg')} alt="نتيجة جوجل دبي" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div dir="ltr" className="text-xs font-mono text-zinc-400 mb-2 text-right">Google.ae: #1 Tent Suppliers UAE</div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('Tent-Rental-Company-in-UAE.jpg'))}
                    className="relative h-56 w-full rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('Tent-Rental-Company-in-UAE.jpg')} alt="نتيجة جوجل الإمارات" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0a0a0c] border border-zinc-900">
                  <div dir="ltr" className="text-xs font-mono text-zinc-400 mb-2 text-right">Microsoft Bing: Full Sitelinks #1</div>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('tent-rental-bing.jpg'))}
                    className="relative h-56 w-full rounded-xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('tent-rental-bing.jpg')} alt="نتيجة بحث Bing" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </section>

            {/* 5. التحسين لمحركات الذكاء الاصطناعي (GEO / AI Overviews) */}
            <section className="space-y-6">
              <div>
                <div className="text-xs font-semibold text-[#ff2e7e] mb-1">
                  المرحلة 05 / الظهور في الذكاء الاصطناعي (GEO)
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  الاستشهاد المباشر بالعلامة التجارية في Google AI Overviews
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* AI 1 */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs text-[#ff2e7e] mb-2 font-semibold">
                    <span>Google AI Overview (GEO)</span>
                    <span className="text-emerald-400 font-bold">المصدر المرجعي #1</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">عبارة البحث: "الخيمة الهرمية في دبي"</h4>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    يستخلص محرك Google AI مواصفات المنتج من الموقع كمرجع أساسي مع عرض الصور والروابط المباشرة.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('الخيمة-الهرمية-في-دبيai.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('الخيمة-الهرمية-في-دبيai.jpg')} alt="ظهور الخيمة الهرمية في Google AI" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* AI 2 */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs text-[#ff2e7e] mb-2 font-semibold">
                    <span>الموثوقية في الإجابات التوليدية</span>
                    <span className="text-emerald-400 font-bold">ترشيح مباشر للعلامة</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">عبارة البحث: "افضل خيام في الامارات؟"</h4>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    تصدر التوصيات الذكية مع إبراز خبرة الشركة الممتدة لأكثر من 26 عاماً وجودة التصنيع.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('افضل-خيام-في-الإمارات.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('افضل-خيام-في-الإمارات.jpg')} alt="أفضل خيام في الإمارات AI" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* AI 3 */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs text-[#ff2e7e] mb-2 font-semibold">
                    <span>البحث التوليدي باللغة الإنجليزية</span>
                    <span className="text-emerald-400 font-bold">مصدر معتمد</span>
                  </div>
                  <h4 dir="ltr" className="text-base font-bold text-white mb-1 text-right">Query: "Tent Rental in Dubai"</h4>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    هيكلة البيانات المنظمة (Schema Markup) دفعت نموذج Google التوليدي للاعتماد على بيانات الشركة كمصدر موثوق.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('tent rental in dubai google ai.png'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('tent rental in dubai google ai.png')} alt="ظهور Google AI بالإنجليزية" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* AI 4 */}
                <div className="p-6 rounded-3xl bg-[#0a0a0c] border border-zinc-900">
                  <div className="flex justify-between text-xs text-[#ff2e7e] mb-2 font-semibold">
                    <span>السيطرة على نتائج البحث التجارية</span>
                    <span className="text-emerald-400 font-bold">ظهور متعدد العناصر</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">عبارة البحث: "خيام معارض اورجانيك"</h4>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    الاستحواذ المتزامن على شريط الصور، الخرائط، والنتائج العضوية الأولى في الجزء العلوي من الصفحة.
                  </p>
                  <div
                    onClick={() => setLightboxImg(getImgSrc('خيام معارض اورجانيك.jpg'))}
                    className="relative h-64 w-full rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-zinc-950"
                  >
                    <img src={getImgSrc('خيام معارض اورجانيك.jpg')} alt="خيام معارض اورجانيك" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================= */}
        {/* التبويب الثاني: لويدز بريتش مصر (Lloyds British Egypt)    */}
        {/* ========================================================= */}
        {activeTab === 'lloyds' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
            {/* 1. القسم التمهيدي */}
            <div className="relative p-8 md:p-14 rounded-3xl bg-gradient-to-b from-[#0e0e12] via-[#09090b] to-black border border-zinc-800/80 shadow-[0_0_50px_-15px_rgba(255,46,126,0.15)] overflow-hidden">
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff2e7e]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#ff2e7e]/15 border border-[#ff2e7e]/30 text-[#ff2e7e] text-xs font-semibold">
                    دراسة حالة 02 • تدقيق Google Search Console
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs">
                    فحص واعتماد معدات الرفع الصناعية (B2B)
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  إعادة إحياء الظهور العضوي لخدمات فحص واعتماد معدات الرفع الهندسية
                </h2>

                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-3xl">
                  إعادة هندسة القابلية للاكتشاف في محركات البحث لأبرز جهة معتمدة لفحص معدات الرفع في مصر، من خلال معالجة ديون الزحف التقنية، وتنظيف تضخم الفهرسة، واستقطاب طلبات عروض الأسعار (RFPs) من كبرى الشركات الصناعية.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>موثق عبر Google Search Console</span>
                  </div>
                  <div>•</div>
                  <div>النطاق الجغرافي: القاهرة الكبرى وموانئ قناة السويس</div>
                  <div>•</div>
                  <div className="text-emerald-400 font-bold">تطهير شامل لميزانية الزحف بنسبة 100%</div>
                </div>
              </div>

              {/* صورة تقرير التدقيق */}
              <div className="mt-12">
                <div className="flex items-center justify-between pb-3 text-xs text-zinc-400 border-b border-zinc-850">
                  <span className="text-zinc-300">
                    صحة الفهرسة والأداء التقني في Google Search Console
                  </span>
                  <span
                    onClick={() => setLightboxImg(getImgSrc('Website audit.jpg'))}
                    className="text-[#ff2e7e] hover:underline cursor-pointer"
                  >
                    اضغط على الصورة لمعاينة التقرير الكامل ↖
                  </span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxImg(getImgSrc('Website audit.jpg'))}
                  className="relative h-[420px] md:h-[520px] w-full mt-4 rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950 cursor-zoom-in group shadow-2xl"
                >
                  <img
                    src={getImgSrc('Website audit.jpg')}
                    alt="تقرير تدقيق موقع لويدز بريتش مصر"
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-xs text-white bg-black/80 px-3 py-1.5 rounded-lg border border-zinc-700">
                      استعراض تفاصيل معالجة أخطاء الفهرسة
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 2. الأقسام التحليلية التفصيلية */}
            <div className="p-8 md:p-14 rounded-3xl bg-[#0a0a0c] border border-zinc-900 space-y-14">
              {/* القسم 1: سياق العمل */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 pb-12 border-b border-zinc-900"
              >
                <div className="text-xs font-semibold text-[#ff2e7e]">
                  01 / سياق المؤسسة والقطاع
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  مرجعية هندسية معتمدة للفحوصات غير الإتلافية (NDT) والسلامة الصناعية
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-4xl">
                  تعمل شركة لويدز بريتش مصر كهيئة هندسية معتمدة تقدم اختبارات التحميل، واعتماد الحاويات البحرية، والفحوصات غير الإتلافية (NDT)، والتدريب المتخصص على السلامة. يعتمد استقطاب العملاء هنا على الوصول المباشر لمديري المشتريات والمشاريع في شركات البترول، الترسانات البحرية، والمجمعات الصناعية الكبرى عبر البحث العضوي.
                </p>
              </motion.div>

              {/* القسم 2: التحدي */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 pb-12 border-b border-zinc-900"
              >
                <div className="text-xs font-semibold text-red-400">
                  02 / تشخيص مشكلات Google Search Console
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  هدر ميزانية الزحف، تضخم الروابط المتكررة، وتراجع صفحات الخدمات الرئيسية
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-4xl">
                  كشف تحليل سجلات التغطية في Google Search Console عن وجود مئات الروابط القديمة ومعاملات التصفح المكررة التي تستنزف ميزانية زحف Googlebot، مما أدى إلى تراجع صفحات الخدمات عالية القيمة (مثل فحص الأوناش، اختبارات التحميل، واعتمادات LEEA) إلى ما بعد الصفحة الأولى بسبب بطء العرض وتكرار البيانات الوصفية.
                </p>
              </motion.div>

              {/* القسم 3: محاور الحل الهندسي */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 pb-12 border-b border-zinc-900"
              >
                <div className="text-xs font-semibold text-amber-400">
                  03 / المعالجة الهندسية ومواءمة Search Console
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  تحسين الزحف، الربط الدلالي، وبناء مخططات Schema الصناعية
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-850 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">1. تنظيف ميزانية الزحف (Crawl Budget Sanitation)</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      إزالة حلقات أخطاء 4xx، وتوحيد الروابط ذات المعاملات المكررة عبر وسوم Canonical صارمة، وإرسال خرائط موقع XML نظيفة إلى GSC.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-850 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">2. بناء مخططات البيانات المنظمة للخدمات الصناعية</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      هيكلة أكواد JSON-LD متداخلة تعكس فئات الفحص المعتمدة، معايير السلامة الدولية، ومواقع الاختبارات الهندسية.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-850 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">3. تسريع نسخة الهاتف ومؤشرات Core Web Vitals</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      إزالة ملفات JavaScript المعطلة للعرض وضغط صور ومخططات المعدات الهندسية لتسريع الأرشفة عبر فهرسة الجوال (Mobile-First Indexing).
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-850 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">4. استهداف المناطق الصناعية جغرافياً</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      تعزيز الإشارات الدلالية للاستعلامات التجارية في المدن والمناطق الصناعية الكبرى (العاشر من رمضان، مدينة السادات، الإسكندرية، والسويس).
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* القسم 4: المنهجيات والأدوات المطبقة */}
              <div className="space-y-4 pb-12 border-b border-zinc-900">
                <div className="text-xs text-zinc-500">
                  04 / المنهجيات والأطر التقنية المطبقة
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'تدقيق Google Search Console',
                    'تحسين ميزانية الزحف',
                    'إعادة هيكلة Canonical',
                    'الخرائط الدلالية لقطاع B2B',
                    'بيانات JSON-LD المنظمة',
                    'هندسة Core Web Vitals',
                    'تحسين استعلامات القطاع الصناعي',
                    'توزيع قوة الروابط الداخلية'
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800/90 text-xs text-zinc-300 hover:text-white hover:border-[#ff2e7e]/50 hover:bg-[#ff2e7e]/5 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* القسم 5: النتائج والأثر المحقق */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-xs font-semibold text-emerald-400">
                  05 / النتائج الموثقة ومؤشرات الأداء
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  جودة الزيارات واستقرار الفهرسة في محركات البحث
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 relative overflow-hidden">
                    <div dir="ltr" className="text-4xl font-mono font-bold text-white text-right">100%</div>
                    <div className="text-xs text-zinc-400 mt-2">صحة الفهرسة في GSC</div>
                    <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
                      صفر أخطاء فهرسة، القضاء التام على حلقات إعادة التوجيه 4xx، وتغطية كاملة لكافة صفحات الخدمات الرئيسية.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 relative overflow-hidden">
                    <div className="text-4xl font-bold text-emerald-400">الصفحة 1</div>
                    <div className="text-xs text-zinc-400 mt-2">كلمات الفحص والاعتماد الصناعي</div>
                    <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
                      تصدر المراكز الأولى في كلمات فحص الأوناش، اختبارات التحميل، واعتمادات السلامة الهندسية.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 relative overflow-hidden">
                    <div dir="ltr" className="text-4xl font-mono font-bold text-[#ff2e7e] text-right">+85%</div>
                    <div className="text-xs text-zinc-400 mt-2">نمو طلبات عروض الأسعار المباشرة</div>
                    <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
                      زيادة ملحوظة في الاستفسارات التجارية الواردة من شركات المقاولات الكبرى والمصانع.
                    </p>
                  </div>
                </div>

                <div className="pt-4 text-xs text-zinc-600">
                  * تم التحقق من جميع المؤشرات عبر سجلات التغطية ومرات الظهور في Google Search Console وتقارير الفحص التقني.
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </main>

      {/* عارض الصور المكبرة (LIGHTBOX) */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img src={lightboxImg} alt="معاينة التقرير" className="max-w-full max-h-full object-contain" />
          </div>
          <span className="absolute top-6 left-8 text-zinc-400 text-sm">اضغط في أي مكان للإغلاق ✕</span>
        </div>
      )}

      <FooterAr />
    </div>
  );
}