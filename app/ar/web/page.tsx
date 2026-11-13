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

interface ProjectShowcase {
  id: string;
  tag: string;
  title: string;
  category: string;
  status: string;
  description: string;
  architecturePoints: string[];
  stack: string[];
  imagePath: string;
  imageCaption: string;
}

const webProjects: ProjectShowcase[] = [
  {
    id: 'nokhada-rebuild',
    tag: 'بنية الجيل الجديد (Next-Gen Architecture)',
    title: 'منصة بيت النوخذة المؤسسية للويب',
    category: 'بنية متكاملة منفصلة (Decoupled Full-Stack)',
    status: 'قيد التطوير النشط',
    description:
      'بعد رصد البطء التدريجي والتقادم المعماري في المنصة التقليدية القديمة، قمت بقيادة وهندسة إعادة بناء شاملة للموقع من الصفر. يجمع التصميم الجديد بين واجهة Next.js App Router ونظام إدارة محتوى مرن (Headless Sanity CMS)، مما يمنح فريق المحتوى مرونة كاملة في التعديل البصري مع ضمان استجابة فائقة السرعة عبر شبكة Vercel Edge في دول الخليج.',
    architecturePoints: [
      'الاعتماد على Next.js 15 App Router ومكونات الخادم (RSC) لتقليص حجم JavaScript المحمّل على المتصفح إلى الحد الأدنى.',
      'ربط نظام Sanity CMS المنفصل مع التحديث الفوري التلقائي للصفحات (On-Demand ISR) عبر Webhooks.',
      'النشر السحابي عبر Vercel Edge لضمان زمن استجابة أول بايت (TTFB) أقل من 150 مللي ثانية للزوار في دبي والرياض والقاهرة.',
      'مولدات بيانات منظمة (Structured Metadata) مدمجة بالكامل للتوافق مع معايير Google Rich Results.'
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Sanity Studio', 'Vercel Edge', 'Node.js'],
    imagePath: 'web-nokhada-preview.jpg',
    imageCaption: 'بنية واجهة Next.js ولوحة التحكم المرئية في Sanity CMS'
  },
  {
    id: 'high-velocity-landings',
    tag: 'محركات الحملات التجارية السريعة',
    title: 'صفحات هبوط تكتيكية فائقة السرعة بـ Next.js',
    category: 'محركات استقطاب عملاء الفعاليات والمعارض',
    status: 'مُطلقة في بيئة الإنتاج',
    description:
      'مع انطلاق المواسم التجارية الكبرى في الإمارات والسعودية، تصبح سرعة التنفيذ والأداء عاملاً حاسماً. طورت صفحات هبوط مستقلة وخفيفة الوزن مبنية بالكامل بـ React و Next.js دون أي أعباء من أنظمة إدارة المحتوى التقليدية، مما حقق سرعات تحميل شبه لحظية على الهواتف ومعدلات تحويل مرتفعة لطلبات التأجير.',
    architecturePoints: [
      'خلو تام من السكربتات الخارجية غير الضرورية، مما حقق تقييم +98 في مؤشرات Lighthouse للهواتف.',
      'نماذج استقطاب عملاء مخصصة وسلسة مربوطة بإشعارات البريد الفورية وواجهة Google Sheets API.',
      'توليد تلقائي لبطاقات المشاركة الاجتماعية (OpenGraph & Twitter Cards) لتعزيز التفاعل عبر الحملات الإعلانية.',
      'تتبع دقيق للتحويلات عبر مستمعات أحداث مخصصة وخفيفة في Google Analytics 4.'
    ],
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Google Cloud API'],
    imagePath: 'web-landing-preview.jpg',
    imageCaption: 'واجهة صفحات الهبوط التكتيكية ومسار استقبال طلبات العملاء'
  },
  {
    id: 'real-estate-wordpress',
    tag: 'هندسة أنظمة إدارة المحتوى المخصصة',
    title: 'منصة تسويق عقاري مخصصة الأداء على WordPress',
    category: 'هندسة PropTech مخصصة بدون إضافات ثقيلة',
    status: 'تعمل في بيئة الإنتاج',
    description:
      'بنيت منصة متكاملة لعرض وتسويق العقارات من الصفر على نواة WordPress دون الاعتماد على أدوات بناء الصفحات البطيئة (Page Builders). قمت بتصميم أنواع منشورات وتصنيفات مخصصة بلغة PHP مع استعلامات قواعد بيانات محسّنة تتيح للزوار البحث والتصفية الفورية بين العقارات التجارية والسكنية بأقل وزن ممكن لهيكل الصفحة (DOM).',
    architecturePoints: [
      'تطوير قوالب PHP مخصصة بالكامل لتجنب تضخم الكود والاستعلامات الزائدة الناتجة عن الإضافات الجاهزة.',
      'بناء تصنيفات وحقول بيانات مخصصة لأنواع العقارات، الفئات السعرية، والمواقع الجغرافية.',
      'تحسين فهرسة جداول MySQL وتخزين الاستعلامات المؤقت (Query Caching) لعرض قوائم العقارات لحظياً.',
      'خط معالجة آلي لتحويل الصور إلى صيغة WebP المتجاوبة مع تفعيل التحميل الكسول (Lazy-Loading).'
    ],
    stack: ['WordPress Core', 'PHP 8.2', 'MySQL Optimization', 'Tailwind CSS', 'JavaScript'],
    imagePath: 'web-realestate-preview.jpg',
    imageCaption: 'هيكلة عرض العقارات، نظام التصفية السريع، والواجهة المتجاوبة'
  },
  {
    id: 'server-hardening',
    tag: 'البنية التحتية والاعتمادية',
    title: 'تحصين الخوادم الإنتاجية وسد الثغرات الأمنية',
    category: 'أمن الخوادم وهندسة الوكيل العكسي (Reverse Proxy)',
    status: 'معيار تشغيلي معتمد',
    description:
      'أثبتت الممارسة العملية في البنية التحتية السحابية أن إعدادات الخادم تؤثر مباشرة في كفاءة زحف محركات البحث واستقرار الموقع. قمت بضبط خوادم Nginx كوكيل عكسي محصّن، وعزل قواعد البيانات، وتطبيق سياسات تشفير SSL/TLS صارمة، مما رفع تقييم أمان النطاق إلى الدرجة B.',
    architecturePoints: [
      'تفعيل ترويسات Strict-Transport-Security (HSTS) و X-Content-Type-Options وقواعد الحماية من هجمات Clickjacking.',
      'ضبط التخزين المؤقت الدقيق (Micro-Caching) في Nginx لحماية الخوادم الخلفية أثناء ذروة الزيارات المفاجئة.',
      'حماية ميزانية الزحف عبر تقييد برامج السحب العشوائية (Bad Scrapers) ومنح الأولوية لعناكب البحث الموثوقة.',
      'إغلاق المنافذ غير المستخدمة وتأمين الوصول إلى الخوادم عبر مفاتيح SSH المشفرة فقط.'
    ],
    stack: ['Nginx', 'Ubuntu Linux', 'SSL/TLS Cryptography', 'Cloudflare Edge', 'Bash Scripting'],
    imagePath: 'web-server-preview.jpg',
    imageCaption: 'فحص ترويسات استجابة HTTP ومؤشرات تحصين الخادم في بيئة الإنتاج'
  }
];

export default function ArabicWebEngineeringPage() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-white selection:bg-[#ff2e7e] selection:text-white"
      style={{ fontFamily: 'var(--font-cairo), sans-serif' }}
    >
      <NavbarAr />

      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-12 pb-28 text-right">
        {/* رابط العودة */}
        <Link
          href="/ar"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors mb-10"
        >
          <span>→</span>
          <span>العودة إلى الرئيسية</span>
        </Link>

        {/* 1. القسم التمهيدي (HERO) */}
        <section className="relative p-8 md:p-14 rounded-3xl bg-gradient-to-b from-[#0e0e12] via-[#09090b] to-black border border-zinc-850 shadow-2xl mb-24 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff2e7e]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#ff2e7e]/15 border border-[#ff2e7e]/30 text-[#ff2e7e] text-xs font-semibold">
                تطوير الويب المتكامل والبرمجة
              </span>
              <span className="px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs">
                تعلم مستمر • تطبيق عملي في بيئات الإنتاج
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              الهندسة البرمجية المستمرة ومعمارية الويب الحديثة
            </h1>

            <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal max-w-3xl">
              لم أتعامل يوماً مع تحسين محركات البحث كتخصص معزول عن البرمجة. بدافع الفضول الهندسي وساعات طويلة من الدراسة والتطبيق العملي، تعمقت في هندسة البرمجيات الحديثة—بناء تطبيقات ويب مخصصة، تطوير الخدمات الخلفية، وإدارة البنية التحتية للخوادم.
            </p>

            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal max-w-3xl">
              اليوم، تمنحني هذه الخبرة المزدوجة القدرة ليس فقط على تشخيص المشكلات واقتراح الحلول، بل على كتابة الكود البرمجي بنفسي، ربط أنظمة إدارة المحتوى المنفصلة (Headless CMS)، نشر الخدمات السحابية، وتأمين الخوادم.
            </p>

            {/* شريط المواصفات السريعة */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-t border-zinc-850">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span dir="ltr" className="font-mono">Next.js 15 & React 19</span>
              </div>
              <div>•</div>
              <div dir="ltr" className="font-mono">Headless Sanity CMS</div>
              <div>•</div>
              <div>معمارية WordPress مخصصة</div>
              <div>•</div>
              <div className="text-[#ff2e7e] font-semibold">تحصين خوادم Linux و Nginx</div>
            </div>
          </div>
        </section>

        {/* 2. عرض مشاريع تطوير الويب */}
        <section className="space-y-28">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-12 rounded-3xl bg-[#0a0a0c] border border-zinc-850 space-y-8 shadow-2xl relative"
            >
              {/* رأس المشروع */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-850">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-0.5 rounded-full bg-[#ff2e7e]/10 border border-[#ff2e7e]/20 text-[#ff2e7e] text-xs font-semibold">
                      {project.tag}
                    </span>
                    <span className="text-zinc-500 text-xs">•</span>
                    <span className="text-zinc-400 text-xs">{project.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mt-1.5">
                    {project.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
                  <span className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-emerald-400 font-semibold">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* السياق الهندسي للمشروع */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-zinc-400">
                  السياق الهندسي وهدف التطوير
                </h3>
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* معاينة المشروع الكبيرة */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="text-zinc-300">{project.imageCaption}</span>
                  <span
                    onClick={() => setLightboxImg(getImgSrc(project.imagePath))}
                    className="text-[#ff2e7e] hover:underline cursor-pointer"
                  >
                    اضغط على الصورة للتكبير ↖
                  </span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.008 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxImg(getImgSrc(project.imagePath))}
                  className="relative h-[360px] md:h-[480px] w-full rounded-2xl overflow-hidden border border-zinc-800 bg-[#070709] cursor-zoom-in group shadow-2xl flex items-center justify-center"
                >
                  <img
                    src={getImgSrc(project.imagePath)}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = getImgSrc('vercel.jpg');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-xs text-white bg-black/85 px-3 py-1.5 rounded-lg border border-zinc-700">
                      معاينة المخطط المعماري بدقة كاملة
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* المخرجات التقنية الرئيسية */}
              <div className="space-y-4 pt-4 border-t border-zinc-850">
                <h3 className="text-xs font-bold text-[#ff2e7e]">
                  أبرز المخرجات والمواصفات التقنية
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.architecturePoints.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-850 text-xs md:text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="text-[#ff2e7e] font-bold mt-0.5">◃</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* التقنيات المستخدمة */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs text-zinc-500 ml-2">التقنيات المستخدمة:</span>
                {project.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    dir="ltr"
                    className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      {/* عارض الصور المكبرة (LIGHTBOX) */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img src={lightboxImg} alt="معاينة مكبرة للمشروع" className="max-w-full max-h-full object-contain" />
          </div>
          <span className="absolute top-6 left-8 text-zinc-400 text-sm">اضغط في أي مكان للإغلاق ✕</span>
        </div>
      )}

      <FooterAr />
    </div>
  );
}