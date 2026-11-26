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

interface ProofBlockProps {
  badge: string;
  badgeColor?: 'red' | 'emerald' | 'pink' | 'amber';
  title: string;
  subtitle?: string;
  metricRight?: string;
  imgName: string;
  alt: string;
  footerLeft?: string;
  footerCenter?: string;
  footerRight?: string;
  onOpenZoom: (src: string) => void;
}

function CinemaProofCardAr({
  badge,
  badgeColor = 'emerald',
  title,
  subtitle,
  metricRight,
  imgName,
  alt,
  footerLeft,
  footerCenter,
  footerRight,
  onOpenZoom,
}: ProofBlockProps) {
  const badgeStyles = {
    red: 'bg-red-500/10 border-red-500/30 text-red-400',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    pink: 'bg-[#ff2e7e]/10 border-[#ff2e7e]/30 text-[#ff2e7e]',
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
  };

  const borderHighlight =
    badgeColor === 'red'
      ? 'border-zinc-800 hover:border-red-500/40'
      : badgeColor === 'pink'
      ? 'border-zinc-800 hover:border-[#ff2e7e]/40'
      : 'border-zinc-800 hover:border-emerald-500/40';

  return (
    <div
      className={`p-5 sm:p-8 rounded-3xl bg-[#0a0a0c] border ${borderHighlight} shadow-2xl transition-colors space-y-5 text-right`}
    >
      {/* شريط المعلومات العلوي */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`px-3 py-1 rounded-full border text-xs font-bold ${badgeStyles[badgeColor]}`}
            >
              {badge}
            </span>
            {metricRight && (
              <span dir="ltr" className="text-xs font-mono font-bold text-zinc-300">
                {metricRight}
              </span>
            )}
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-white">{title}</h4>
          {subtitle && (
            <p className="text-xs md:text-sm text-zinc-400 max-w-4xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => onOpenZoom(getImgSrc(imgName))}
          className="self-start md:self-center shrink-0 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-zinc-200 hover:text-white transition"
        >
          تكبير التقرير بدقة كاملة ↖
        </button>
      </div>

      {/* عرض الصورة بكامل العرض وبدون أي قص أو ارتفاع مقيد */}
      <div
        onClick={() => onOpenZoom(getImgSrc(imgName))}
        className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 cursor-zoom-in group shadow-inner"
      >
        <img
          src={getImgSrc(imgName)}
          alt={alt}
          className="w-full h-auto block object-contain group-hover:scale-[1.005] transition-transform duration-300"
        />
      </div>

      {/* شريط المؤشرات السفلي */}
      {(footerLeft || footerCenter || footerRight) && (
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 border-t border-zinc-900">
          <span>{footerLeft}</span>
          <span className="text-emerald-400 font-bold">{footerCenter}</span>
          <span className="text-[#ff2e7e] font-bold">{footerRight}</span>
        </div>
      )}
    </div>
  );
}

export default function ArabicSeoCaseStudies() {
  const [activeTab, setActiveTab] = useState<'nokhada' | 'lloyds'>('nokhada');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const openLightbox = (src: string) => {
    setZoomLevel(1);
    setLightboxImg(src);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
    setZoomLevel(1);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-white font-sans selection:bg-[#ff2e7e] selection:text-white"
      style={{ fontFamily: 'var(--font-cairo), sans-serif' }}
    >
      <NavbarAr />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-10 pb-28 text-right">
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
            نتائج موثقة بالأرقام • معاينة بالحجم الكامل
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            السيو التقني والظهور في محركات الذكاء الاصطناعي (GEO)<span className="text-[#ff2e7e]">.</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 mt-3 max-w-3xl leading-relaxed">
            تدقيق تقني شامل، تسريع الأداء، تصدر النتائج التجارية في الصفحات الأولى، وبناء حضور موثق في إجابات Google AI Overviews عبر أسواق الإمارات والسعودية ومصر.
          </p>
        </div>

        {/* أزرار التبديل بين دراسات الحالة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#0c0c0e] border border-zinc-900 mb-14 max-w-2xl">
          <button
            onClick={() => setActiveTab('nokhada')}
            className={`py-3.5 px-5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'nokhada'
                ? 'bg-zinc-800 text-white font-bold border border-zinc-700 shadow-lg'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            01. مصنع بيت النوخذة للخيام (الإمارات والسعودية)
          </button>

          <button
            onClick={() => setActiveTab('lloyds')}
            className={`py-3.5 px-5 rounded-xl text-xs font-semibold transition-all ${
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
          <div className="space-y-24">
            {/* بطاقة نظرة عامة + المؤشرات الرئيسية */}
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0e0e12] to-[#08080a] border border-zinc-800 space-y-8">
              <div>
                <span className="text-xs font-semibold text-[#ff2e7e]">
                  دراسة حالة رئيسية • ريادة السوق في الإمارات والسعودية
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mt-1.5">
                  بيت النوخذة للخيام والمظلات القماشية
                </h2>
                <p className="text-sm md:text-base text-zinc-400 mt-3 leading-relaxed max-w-4xl">
                  واحدة من أكبر الشركات الصناعية الرائدة في الشرق الأوسط بخبرة تمتد لأكثر من 26 عاماً. قمت بإعادة هيكلة البنية التقنية للسيو بالكامل، وتسريع مؤشرات الأداء الأساسية (Core Web Vitals)، وترسيخ ظهور العلامة كمرجع أول في محركات البحث التوليدية.
                </p>
              </div>

              {/* 8 مؤشرات رئيسية موثقة بالصور (صفين × 4 خانات) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div dir="ltr" className="text-2xl md:text-3xl font-mono font-bold text-emerald-400 text-right">
                    4.9s → 889ms
                  </div>
                  <div className="text-xs text-zinc-300 mt-1.5">تسريع التحميل بنسبة 82%</div>
                  <div dir="ltr" className="text-[11px] text-zinc-500 font-mono mt-1 text-right">
                    Grade E (36%) → Grade A (93%)
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div dir="ltr" className="text-2xl md:text-3xl font-mono font-bold text-white text-right">
                    +595%
                  </div>
                  <div className="text-xs text-zinc-300 mt-1.5">نمو مرات الظهور الشهرية</div>
                  <div dir="ltr" className="text-[11px] text-zinc-500 font-mono mt-1 text-right">
                    17.3K → 103K / Month
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div dir="ltr" className="text-2xl md:text-3xl font-mono font-bold text-[#ff2e7e] text-right">
                    Pos 21 → 8.5
                  </div>
                  <div className="text-xs text-zinc-300 mt-1.5">من الصفحة 3 إلى الصفحة 1</div>
                  <div className="text-[11px] text-zinc-500 mt-1">موثق في Search Console</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div dir="ltr" className="text-2xl md:text-3xl font-mono font-bold text-amber-400 text-right">
                    Grade D → A
                  </div>
                  <div className="text-xs text-zinc-300 mt-1.5">تحصين ترويسات الأمان</div>
                  <div dir="ltr" className="text-[11px] text-zinc-500 font-mono mt-1 text-right">
                    All 6 Headers Hardened
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div dir="ltr" className="text-2xl md:text-3xl font-mono font-bold text-emerald-400 text-right">
                    +239%
                  </div>
                  <div className="text-xs text-zinc-300 mt-1.5">المستخدمون النشطون (GA4)</div>
                  <div className="text-[11px] text-zinc-500 mt-1">9.3 آلاف مستخدم نشط</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div dir="ltr" className="text-2xl md:text-3xl font-mono font-bold text-white text-right">
                    +374.6%
                  </div>
                  <div className="text-xs text-zinc-300 mt-1.5">نمو الروابط الخلفية</div>
                  <div className="text-[11px] text-zinc-500 mt-1">503 رابط • Mangools</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div dir="ltr" className="text-2xl md:text-3xl font-mono font-bold text-amber-400 text-right">
                    Rank #1
                  </div>
                  <div className="text-xs text-zinc-300 mt-1.5">صدارة الكلمات التجارية</div>
                  <div className="text-[11px] text-zinc-500 mt-1">Google.ae و Bing Sitelinks</div>
                </div>

                <div className="p-5 rounded-2xl bg-black/70 border border-zinc-800">
                  <div dir="ltr" className="text-2xl md:text-3xl font-mono font-bold text-[#ff2e7e] text-right">
                    #1 Cited
                  </div>
                  <div className="text-xs text-zinc-300 mt-1.5">Google AI Overviews</div>
                  <div className="text-[11px] text-zinc-500 mt-1">مرجع أول بالعربي والإنجليزي</div>
                </div>
              </div>
            </div>

            {/* ===================================================== */}
            {/* المرحلة 01: السرعة والأداء أولاً (قبل -> بعد)         */}
            {/* ===================================================== */}
            <section className="space-y-8">
              <div className="border-b border-zinc-800 pb-5">
                <div className="text-xs font-semibold text-emerald-400 mb-1">
                  المرحلة 01 / هندسة السرعة ومؤشرات Core Web Vitals
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  طفرة سرعة الأداء: تقليص وقت التحميل من 4.9 ثانية إلى 2.4 ثانية
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-3xl leading-relaxed">
                  معالجة الملفات المعطلة للعرض، ضغط أكواد CSS الحرجة، وتفعيل التحميل الكسول للوسائط لتحسين تجربة الهواتف وسرعة أرشفة جوجل.
                </p>
              </div>

              <div className="space-y-10">
                <CinemaProofCardAr
                  badge="● قبل التحسين • فحص السرعة الأولي"
                  badgeColor="red"
                  metricRight="GTmetrix Grade E (36%) • 4.9s LCP"
                  title="بطء التحميل عند استلام الموقع (4.9 ثانية LCP)"
                  subtitle="ملفات JavaScript و CSS غير المضغوطة تسببت في تأخير عرض المحتوى وارتفاع معدل الارتداد على الهواتف."
                  imgName="gtmetrix-before.jpg"
                  alt="تقرير GTmetrix قبل التحسين"
                  footerLeft="وقت التحميل: 4.9 ثانية"
                  footerCenter="التقييم الأولي: 36% (Grade E)"
                  footerRight="معدل ارتداد مرتفع على الهواتف"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCardAr
                  badge="● بعد التحسين • قفزة في سرعة الأداء"
                  badgeColor="emerald"
                  metricRight="GTmetrix Grade A (93%) • 889ms LCP"
                  title="نتيجة التدخل الهندسي: الوصول إلى Grade A (93%) وتحميل في أقل من ثانية (889ms)"
                  subtitle="ضغط ملفات CSS الحرجة، تفعيل التحميل الكسول للصور والوسائط، وتحسين مؤشرات Core Web Vitals لتقليص وقت العرض من 4.9 ثانية إلى 889 مللي ثانية."
                  imgName="gtmetrix-after.jpg"
                  alt="تقرير GTmetrix بعد التحسين"
                  footerLeft="تقليص التحميل إلى 889ms (-82%)"
                  footerCenter="ارتفاع التقييم إلى 93% (Grade A)"
                  footerRight="TBT: 48ms • CLS: 0"
                  onOpenZoom={openLightbox}
                />
              </div>
            </section>

            {/* ===================================================== */}
            {/* المرحلة 02: تضاعف الترافيك (GSC, GA4, SEMrush, Mangools) */}
            {/* ===================================================== */}
            <section className="space-y-8">
              <div className="border-b border-zinc-800 pb-5">
                <div className="text-xs font-semibold text-[#ff2e7e] mb-1">
                  المرحلة 02 / تضاعف الزيارات العضوية والظهور
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  6 أضعاف نمو في البحث: إثباتات Google Search Console و GA4 و SEMrush
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-3xl leading-relaxed">
                  بيانات موثقة بالحجم الكامل توضح رحلة النمو من الصفحة الثالثة في يونيو 2024 إلى أكثر من 103,000 ظهور شهري، و9.3 آلاف مستخدم نشط، ونمو +1845% في السوق السعودي.
                </p>
              </div>

              <div className="space-y-10">
                {/* 1. GSC قبل التحسين (يونيو 2024) */}
                <CinemaProofCardAr
                  badge="● قبل التحسين • يونيو 2024"
                  badgeColor="red"
                  metricRight="17.3K Impr • Avg Pos 21"
                  title="تقرير Google Search Console عند استلام الموقع (يونيو 2024)"
                  subtitle="عند استلام الدومين كانت الكلمات التجارية للخيام والمظلات متأخرة في الصفحة الثالثة مع معدل نقر منخفض."
                  imgName="search-console-( jun,2024).jpg"
                  alt="Search Console يونيو 2024 قبل التحسين"
                  footerLeft="إجمالي النقرات: 384"
                  footerCenter="17,300 ظهور • نسبة النقر: 2.2%"
                  footerRight="متوسط الترتيب: 21 (الصفحة 3)"
                  onOpenZoom={openLightbox}
                />

                {/* 2. GSC بعد التحسين (آخر 28 يوماً) */}
                <CinemaProofCardAr
                  badge="● بعد التحسين • آخر 28 يوماً"
                  badgeColor="emerald"
                  metricRight="103K Impr (+595%) • Avg Pos 8.5"
                  title="تقرير Google Search Console: تضاعف الظهور 6 أضعاف والوصول للصفحة الأولى"
                  subtitle="إعادة هيكلة الصفحات باللغتين، بناء البيانات المنظمة (Schema)، وتحسين الصفحات التجارية دفعت متوسط الترتيب مباشرة للصفحة الأولى."
                  imgName="GSC-last28-baitalnokhada.jpg"
                  alt="Search Console آخر 28 يوماً بعد التحسين"
                  footerLeft="إجمالي النقرات: 701 (+82.5%)"
                  footerCenter="103,000 ظهور (+595%)"
                  footerRight="متوسط الترتيب: 8.5 (الصفحة 1)"
                  onOpenZoom={openLightbox}
                />

                {/* 4. GA4 */}
                <CinemaProofCardAr
                  badge="● موثق عبر Google Analytics 4"
                  badgeColor="emerald"
                  metricRight="9.3K Active Users (+239%)"
                  title="تحليلات Google Analytics 4: 9.3 آلاف مستخدم نشط"
                  subtitle="تجاوز متوسط أداء القطاع الصناعي مع ارتفاع مدة تصفح المواصفات الهندسية وطلبات عروض الأسعار المباشرة."
                  imgName="GA4.jpg"
                  alt="تقرير GA4"
                  footerLeft="المستخدمون النشطون: 9,300"
                  footerCenter="معدل النمو: +239%"
                  footerRight="تجاوز متوسط القطاع"
                  onOpenZoom={openLightbox}
                />

                {/* 5. SEMRUSH طفرة الزيارات العضوية */}
                <CinemaProofCardAr
                  badge="● بعد التحسين • طفرة الزيارات في SEMrush"
                  badgeColor="emerald"
                  metricRight="935+ زيارة شهرية • ذروة ~1.3K"
                  title="انفجار الزيارات العضوية في SEMrush: تعويض الإعلانات المدفوعة بالنمو الطبيعي"
                  subtitle="الاستحواذ على الكلمات البحثية عالية القيمة لتأجير وتصنيع الخيام والهناجر، مما ضاعف الزيارات المجانية وقلل الاعتماد على الإعلانات المدفوعة."
                  imgName="organic-traffic-semruch-before.jpg"
                  alt="طفرة الزيارات العضوية في SEMrush"
                  footerLeft="ذروة الزيارات العضوية: ~1.3K"
                  footerCenter="تقليل الاعتماد على الإعلانات"
                  footerRight="زيارات تجارية عالية الجودة"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCardAr
                  badge="● بعد التحسين • SEMrush"
                  badgeColor="emerald"
                  metricRight="Top 3 & Top 10 Dominance"
                  title="توسع الكلمات المفتاحية العضوية في SEMrush"
                  subtitle="قفزة كبيرة في عدد الكلمات المصنفة ضمن المراكز الثلاثة الأولى والعشرة الأولى في أسواق الخليج."
                  imgName="organic-keywords-semruch.jpg"
                  alt="كلمات SEMrush"
                  onOpenZoom={openLightbox}
                />

                {/* 6. Mangools */}
                <CinemaProofCardAr
                  badge="● بناء الموثوقية الخارجية (Off-Page SEO)"
                  badgeColor="amber"
                  metricRight="+374.6% Backlinks • 503 Active"
                  title="نمو الروابط الخلفية (+374.6%) الموثق عبر Mangools"
                  subtitle="بناء شبكة روابط خلفية نظيفة وعالية الموثوقية في الأدلة التجارية والمنصات الصناعية بالمنطقة."
                  imgName="mangools-backlinks-bait.jpg"
                  alt="الروابط الخلفية في Mangools"
                  footerLeft="503 رابط خلفي نشط"
                  footerCenter="نمو بنسبة +374.6%"
                  footerRight="ملف روابط نظيف 100%"
                  onOpenZoom={openLightbox}
                />
              </div>
            </section>

            {/* ===================================================== */}
            {/* المرحلة 03: تحصين الأمان (قبل -> بعد)                  */}
            {/* ===================================================== */}
            <section className="space-y-8">
              <div className="border-b border-zinc-800 pb-5">
                <div className="text-xs font-semibold text-amber-400 mb-1">
                  المرحلة 03 / تحصين البنية التحتية والأمان
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  ترقية ترويسات الأمان HTTP Security Headers: من Grade D إلى Grade A
                </h3>
              </div>

              <div className="space-y-10">
                <CinemaProofCardAr
                  badge="● قبل التحسين • ثغرات الترويسات"
                  badgeColor="red"
                  metricRight="Security Headers Grade D"
                  title="غياب بروتوكولات الحماية عند الفحص الأولي"
                  subtitle="عدم تفعيل HSTS وغياب ترويسات X-Frame و Content-Type، مما يضعف ثقة المتصفحات ومحركات البحث."
                  imgName="3http-headers.png"
                  alt="ترويسات HTTP قبل التحسين"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCardAr
                  badge="● بعد التحسين • بنية محصّنة"
                  badgeColor="emerald"
                  metricRight="Security Headers Grade A Verified"
                  title="تأمين ترويسات الاستجابة بالكامل (Grade A)"
                  subtitle="تفعيل جميع بروتوكولات الحماية الستة: Content-Security-Policy و Permissions-Policy و Strict-Transport-Security (HSTS) و X-Frame-Options و Referrer-Policy و X-Content-Type-Options."
                  imgName="4http-headers.png"
                  alt="ترويسات HTTP بعد التحسين"
                  onOpenZoom={openLightbox}
                />
              </div>
            </section>

            {/* ===================================================== */}
            {/* المرحلة 04: تصدر المركز الأول #1 (SERP)               */}
            {/* ===================================================== */}
            <section className="space-y-8">
              <div className="border-b border-zinc-800 pb-5">
                <div className="text-xs font-semibold text-[#ff2e7e] mb-1">
                  المرحلة 04 / تصدر نتائج البحث (SERP)
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  المركز الأول (#1) في الكلمات التجارية الأعلى بحثاً في الإمارات (عربي وإنجليزي)
                </h3>
              </div>

              <div className="space-y-10">
                <CinemaProofCardAr
                  badge="● متتبع الترتيب • صدارة الكلمات العربية"
                  badgeColor="emerald"
                  metricRight="Verified #1"
                  title="جدول ترتيب الكلمات المفتاحية العربية: المركز #1 في الإمارات"
                  subtitle="تصدر الكلمات التجارية الأعلى بحثاً لتأجير وتصنيع الخيام الهرمية وخيام الفعاليات والمعارض."
                  imgName="rank1.jpg"
                  alt="جدول ترتيب الكلمات العربية"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCardAr
                  badge="● متتبع الترتيب • صدارة الكلمات الإنجليزية"
                  badgeColor="emerald"
                  metricRight="Verified #1"
                  title="جدول ترتيب الكلمات المفتاحية الإنجليزية: المركز #1 في الإمارات"
                  subtitle="الحفاظ على المركز الأول للكلمات التجارية الخاصة بتوريد وتأجير الخيام والهناجر."
                  imgName="Rank1-(2).jpg"
                  alt="جدول ترتيب الكلمات الإنجليزية"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCardAr
                  badge="● إثبات حي من Google.ae"
                  badgeColor="emerald"
                  metricRight="#1 Organic Result"
                  title='نتيجة بحث حية في Google.ae: "Tent Rental Company in Dubai"'
                  subtitle="الاستحواذ على المركز الأول عضوياً متفوقاً على المنصات الإعلانية والأدلة المنافسة."
                  imgName="tent-rental-company-in-dubai.jpg"
                  alt="نتيجة جوجل دبي"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCardAr
                  badge="● إثبات حي من Google.ae"
                  badgeColor="emerald"
                  metricRight="#1 Organic Result"
                  title='نتيجة بحث حية في Google.ae: "Tent Rental Company in UAE"'
                  subtitle="تصدر نتائج البحث على مستوى دولة الإمارات بالكامل لخدمات تصنيع وتأجير الخيام."
                  imgName="Tent-Rental-Company-in-UAE.jpg"
                  alt="نتيجة جوجل الإمارات"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCardAr
                  badge="● إثبات حي من Microsoft Bing"
                  badgeColor="emerald"
                  metricRight="#1 + Full Sitelinks"
                  title="محرك بحث Microsoft Bing: المركز الأول مع الروابط الفرعية الكاملة"
                  subtitle="ظهور متكامل يغطي الجزء العلوي من الصفحة مع روابط الأقسام المباشرة لزيادة التحويلات."
                  imgName="tent-rental-bing.jpg"
                  alt="نتيجة بحث Bing"
                  onOpenZoom={openLightbox}
                />
              </div>
            </section>

            {/* ===================================================== */}
            {/* المرحلة 05: الظهور في الذكاء الاصطناعي (GEO)          */}
            {/* ===================================================== */}
            <section className="space-y-8">
              <div className="border-b border-zinc-800 pb-5">
                <div className="text-xs font-semibold text-[#ff2e7e] mb-1">
                  المرحلة 05 / الظهور في محركات الذكاء الاصطناعي (GEO)
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  الاستشهاد المباشر بالعلامة التجارية في Google AI Overviews
                </h3>
              </div>

              <div className="space-y-10">
                <CinemaProofCardAr
                  badge="● Google AI Overview (GEO)"
                  badgeColor="pink"
                  metricRight="المصدر المرجعي #1"
                  title='عبارة البحث: "الخيمة الهرمية في دبي"'
                  subtitle="يستخلص محرك Google AI مواصفات المنتج من الموقع كمرجع أساسي مع عرض الصور والروابط المباشرة."
                  imgName="الخيمة-الهرمية-في-دبيai.jpg"
                  alt="ظهور الخيمة الهرمية في Google AI"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCardAr
                  badge="● الموثوقية في الإجابات التوليدية"
                  badgeColor="pink"
                  metricRight="ترشيح مباشر للعلامة"
                  title='عبارة البحث: "افضل خيام في الامارات؟"'
                  subtitle="تصدر التوصيات الذكية مع إبراز خبرة الشركة الممتدة لأكثر من 26 عاماً وجودة التصنيع."
                  imgName="افضل-خيام-في-الإمارات.jpg"
                  alt="أفضل خيام في الإمارات AI"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCardAr
                  badge="● البحث التوليدي باللغة الإنجليزية"
                  badgeColor="pink"
                  metricRight="مصدر معتمد"
                  title='عبارة البحث: "Tent Rental in Dubai"'
                  subtitle="هيكلة البيانات المنظمة (Schema Markup) دفعت نموذج Google التوليدي للاعتماد على بيانات الشركة كمصدر موثوق."
                  imgName="tent rental in dubai google ai.png"
                  alt="ظهور Google AI بالإنجليزية"
                  onOpenZoom={openLightbox}
                />

                <CinemaProofCardAr
                  badge="● السيطرة على نتائج البحث التجارية"
                  badgeColor="emerald"
                  metricRight="ظهور متعدد العناصر"
                  title='عبارة البحث: "خيام معارض اورجانيك"'
                  subtitle="الاستحواذ المتزامن على شريط الصور، الخرائط، والنتائج العضوية الأولى في الجزء العلوي من الصفحة."
                  imgName="خيام معارض اورجانيك.jpg"
                  alt="خيام معارض اورجانيك"
                  onOpenZoom={openLightbox}
                />
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
            {/* 1. القسم التمهيدي واستعراض الإثباتات */}
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
                  مضاعفة الظهور العضوي لخدمات فحص واعتماد معدات الرفع الهندسية
                </h2>

                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-3xl">
                  إعادة بناء حضور محركات البحث لأبرز جهة معتمدة لفحص معدات الرفع في مصر، عبر حل مشكلات الزحف التقنية، وتنظيف الصفحات المكررة غير المفيدة، واستقطاب طلبات عروض الأسعار (RFPs) من كبرى الشركات الصناعية.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>موثق عبر Google Search Console</span>
                  </div>
                  <div>•</div>
                  <div>النطاق الجغرافي: القاهرة الكبرى وموانئ قناة السويس</div>
                  <div>•</div>
                  <div className="text-emerald-400 font-bold">تنظيف شامل لمسارات الزحف بنسبة 100%</div>
                </div>
              </div>

              {/* الصور الثلاث بالحجم الكامل ومتتالية */}
              <div className="mt-12 space-y-12">

                {/* الصورة 1: نمو 6 أشهر في Google Search Console */}
                <div>
                  <div className="flex items-center justify-between pb-3 text-xs text-zinc-400 border-b border-zinc-800">
                    <span className="text-zinc-300 font-semibold">
                      Google Search Console: قفزة النقرات ومرات الظهور خلال 6 أشهر (+108% نمو في الظهور)
                    </span>
                    <span
                      onClick={() => openLightbox(getImgSrc('last 6th vs. previos 6th.jpg'))}
                      className="text-[#ff2e7e] hover:underline cursor-pointer font-bold"
                    >
                      اضغط على الصورة لمعاينة التقرير الكامل ↖
                    </span>
                  </div>

                  <div
                    onClick={() => openLightbox(getImgSrc('last 6th vs. previos 6th.jpg'))}
                    className="w-full mt-4 rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950 cursor-zoom-in group shadow-2xl"
                  >
                    <img
                      src={getImgSrc('last 6th vs. previos 6th.jpg')}
                      alt="مقارنة 6 أشهر في Google Search Console لشركة لويدز بريتش مصر"
                      className="w-full h-auto block object-contain group-hover:scale-[1.005] transition-transform duration-500"
                    />
                    <div className="px-5 py-3 bg-zinc-950/95 border-t border-zinc-800 flex flex-wrap justify-between items-center gap-2">
                      <span dir="ltr" className="text-xs font-mono text-zinc-300">
                        Clicks: 2.62K → 4.87K (+85.9%) • Impressions: 108K → 225K (+108.3%) • Avg Pos: 22.3 → 17.9
                      </span>
                      <span className="text-xs font-bold text-[#ff2e7e]">تكبير HD ↖</span>
                    </div>
                  </div>
                </div>

                {/* الصورة 2: مؤشر الأداء والظهور */}
                <div>
                  <div className="flex items-center justify-between pb-3 text-xs text-zinc-400 border-b border-zinc-800">
                    <span className="text-zinc-300 font-semibold">
                      منحنى نمو الظهور والأداء في نتائج البحث (+413.93% نمو في مؤشر الأداء)
                    </span>
                    <span
                      onClick={() => openLightbox(getImgSrc('performance ( last period).webp'))}
                      className="text-[#ff2e7e] hover:underline cursor-pointer font-bold"
                    >
                      اضغط على الصورة لمعاينة التقرير الكامل ↖
                    </span>
                  </div>

                  <div
                    onClick={() => openLightbox(getImgSrc('performance ( last period).webp'))}
                    className="w-full mt-4 rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950 cursor-zoom-in group shadow-2xl"
                  >
                    <img
                      src={getImgSrc('performance ( last period).webp')}
                      alt="مؤشر الأداء والظهور لشركة لويدز بريتش مصر"
                      className="w-full h-auto block object-contain group-hover:scale-[1.005] transition-transform duration-500"
                    />
                    <div className="px-5 py-3 bg-zinc-950/95 border-t border-zinc-800 flex flex-wrap justify-between items-center gap-2">
                      <span dir="ltr" className="text-xs font-mono text-zinc-300">
                        Performance Index: 17.83/100 (+413.93%) • Visibility Index: 5.39/100 (+232.43%)
                      </span>
                      <span className="text-xs font-bold text-[#ff2e7e]">تكبير HD ↖</span>
                    </div>
                  </div>
                </div>

                {/* الصورة 3: تقرير التدقيق التقني للموقع */}
                <div>
                  <div className="flex items-center justify-between pb-3 text-xs text-zinc-400 border-b border-zinc-800">
                    <span className="text-zinc-300 font-semibold">
                      صحة الفهرسة والتدقيق التقني الشامل في Google Search Console
                    </span>
                    <span
                      onClick={() => openLightbox(getImgSrc('Website audit.jpg'))}
                      className="text-[#ff2e7e] hover:underline cursor-pointer font-bold"
                    >
                      اضغط على الصورة لمعاينة التقرير الكامل ↖
                    </span>
                  </div>

                  <div
                    onClick={() => openLightbox(getImgSrc('Website audit.jpg'))}
                    className="w-full mt-4 rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950 cursor-zoom-in group shadow-2xl"
                  >
                    <img
                      src={getImgSrc('Website audit.jpg')}
                      alt="تقرير التدقيق التقني لموقع لويدز بريتش مصر"
                      className="w-full h-auto block object-contain group-hover:scale-[1.005] transition-transform duration-500"
                    />
                    <div className="px-5 py-3 bg-zinc-950/95 border-t border-zinc-800 flex justify-between items-center">
                      <span className="text-xs text-zinc-300">
                        ملخص الفحص التقني ومعالجة أخطاء الزحف والفهرسة
                      </span>
                      <span className="text-xs font-bold text-[#ff2e7e]">تكبير HD ↖</span>
                    </div>
                  </div>
                </div>

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
                  01 / طبيعة الشركة والسوق المستهدف
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  مرجعية هندسية معتمدة للفحوصات غير الإتلافية (NDT) والسلامة الصناعية
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-4xl">
                  تعمل شركة لويدز بريتش مصر كهيئة هندسية معتمدة تقدم اختبارات التحميل، واعتماد الحاويات البحرية، والفحوصات غير الإتلافية (NDT)، والتدريب المتخصص على السلامة. يعتمد نمو أعمال الشركة على الوصول المباشر لمديري المشتريات والمشاريع في شركات البترول، الترسانات البحرية، والمصانع الكبرى عندما يبحثون عن جهات اعتماد موثوقة في جوجل.
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
                  02 / المشكلات التقنية في Google Search Console
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  استنزاف ميزانية الزحف، تضخم الروابط المكررة، وتراجع صفحات الخدمات
                </h3>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-4xl">
                  أظهر فحص سجلات التغطية في Google Search Console وجود مئات الروابط القديمة ومعاملات التصفح المكررة التي تستهلك وقت زحف عناكب جوجل (Googlebot) بدون فائدة، مما تسبب في تراجع صفحات الخدمات الرئيسية (مثل فحص الأوناش، اختبارات التحميل، واعتمادات LEEA) إلى ما بعد الصفحة الأولى بسبب بطء التحميل وتكرار العناوين الوصفية.
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
                  03 / خطة المعالجة التقنية ومواءمة Search Console
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  تنظيم الزحف، الربط الدلالي، وبناء البيانات المنظمة (Schema)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">1. تنظيف مسارات الزحف (Crawl Budget Sanitation)</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      إغلاق حلقات أخطاء 4xx، وتوحيد الروابط ذات المعاملات المكررة باستخدام وسوم Canonical دقيقة، وتحديث خرائط الموقع XML في Search Console.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">2. بناء مخططات Schema للخدمات الهندسية</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      كتابة أكواد JSON-LD منظمة توضح لمحركات البحث تخصصات الفحص المعتمدة، معايير السلامة الدولية، ومواقع الاختبارات الهندسية.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">3. تسريع التصفح على الهاتف ومؤشرات الأداء</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      تقليل ملفات JavaScript التي تؤخر عرض الصفحة وضغط صور ومخططات المعدات الهندسية لتسريع الأرشفة في فهرسة الجوال (Mobile-First Indexing).
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="text-base font-bold text-white mb-2">4. استهداف المدن والمناطق الصناعية جغرافياً</div>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                      تقوية الإشارات الجغرافية للكلمات التجارية داخل أكبر التجمعات الصناعية في مصر (العاشر من رمضان، مدينة السادات، الإسكندرية، والسويس).
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* القسم 4: المنهجيات والأدوات المطبقة */}
              <div className="space-y-4 pb-12 border-b border-zinc-900">
                <div className="text-xs text-zinc-500">
                  04 / المنهجيات والأدوات التقنية المطبقة
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
                  05 / النتائج المحققة ومؤشرات النمو
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  جودة الزيارات واستقرار الفهرسة في محركات البحث
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
                    <div dir="ltr" className="text-4xl font-mono font-bold text-white text-right">100%</div>
                    <div className="text-xs text-zinc-400 mt-2">صحة الفهرسة في GSC</div>
                    <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
                      صفر أخطاء فهرسة، القضاء التام على حلقات إعادة التوجيه 4xx، وتغطية كاملة لكافة صفحات الخدمات الرئيسية.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
                    <div className="text-4xl font-bold text-emerald-400">الصفحة 1</div>
                    <div className="text-xs text-zinc-400 mt-2">كلمات الفحص والاعتماد الصناعي</div>
                    <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
                      تصدر المراكز الأولى في كلمات فحص الأوناش، اختبارات التحميل، واعتمادات السلامة الهندسية.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
                    <div dir="ltr" className="text-4xl font-mono font-bold text-[#ff2e7e] text-right">+85%</div>
                    <div className="text-xs text-zinc-400 mt-2">نمو طلبات عروض الأسعار المباشرة</div>
                    <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
                      زيادة ملحوظة في الاستفسارات التجارية الواردة من شركات المقاولات الكبرى والمصانع.
                    </p>
                  </div>
                </div>

                <div className="pt-4 text-xs text-zinc-600">
                  - تم التحقق من جميع المؤشرات عبر سجلات التغطية ومرات الظهور في Google Search Console وتقارير الفحص التقني.
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        </main>

      {/* عارض الصور المكبرة التفاعلي (LIGHTBOX WITH ZOOM) */}
      {lightboxImg && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md"
        >
          {/* شريط أدوات التكبير */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-7xl flex items-center justify-between mb-4 px-4 py-2.5 rounded-2xl bg-zinc-900/95 border border-zinc-800"
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel((z) => Math.max(1, Number((z - 0.5).toFixed(2))))}
                disabled={zoomLevel <= 1}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-xs font-bold text-white"
              >
                - تصغير
              </button>
              <span dir="ltr" className="px-2.5 text-xs font-mono text-emerald-400 font-bold">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.5, Number((z + 0.5).toFixed(2))))}
                disabled={zoomLevel >= 2.5}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 text-xs font-bold text-white"
              >
                + تكبير
              </button>
              {zoomLevel > 1 && (
                <button
                  onClick={() => setZoomLevel(1)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-300"
                >
                  إعادة ضبط
                </button>
              )}
            </div>

            <button
              onClick={closeLightbox}
              className="px-4 py-1.5 rounded-lg bg-[#ff2e7e] hover:bg-[#e0246d] text-white text-xs font-bold"
            >
              إغلاق ✕
            </button>
          </div>

          {/* حاوية التمرير والتكبير */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-7xl max-h-[84vh] w-full overflow-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-3 flex items-center justify-center"
          >
            <img
              src={lightboxImg}
              alt="معاينة التقرير بدقة كاملة"
              onClick={() => setZoomLevel((z) => (z === 1 ? 1.75 : 1))}
              style={{
                width: `${zoomLevel * 100}%`,
                maxWidth: zoomLevel === 1 ? '100%' : 'none',
              }}
              className="h-auto object-contain transition-all duration-200 cursor-zoom-in"
            />
          </div>
        </div>
      )}

      <FooterAr />
    </div>
  );
}