'use client';

import React from 'react';

export default function ArabicExperienceSection() {
  const experiences = [
    {
      period: '2023 — الحاضر',
      role: 'أخصائي سيو تقني ومطور ويب (SEO & Web Developer)',
      company: 'Bait Al Nokhada Tents Factory LLC',
      location: 'دبي، الإمارات العربية المتحدة',
      current: true,
      description:
        'قيادة استراتيجية السيو التقني وهندسة المحتوى والـ GEO للموقع الرئيسي ومشاريع الفعاليات الكبرى، مع تطوير حلول ويب مخصصة وأتمتة تقارير الأداء.',
      highlights: [
        'تصدّر المركز الأول تجارياً في نتائج بحث الإمارات ومضاعفة الزيارات العضوية.',
        'بناء مسارات أتمتة سحابية باستخدام AWS Lambda و S3 و Athena لتحليل بيانات Google Search Console.',
        'تطوير صفحات المشاريع الكبرى (مثل GITEX و Dubai Airshow) وتحسين سرعة الأداء وتجربة المستخدم.',
      ],
      tags: ['Technical SEO', 'GEO', 'Next.js', 'AWS Lambda', 'GSC & GA4'],
    },
    {
      period: 'نوفمبر 2022 — يونيو 2023',
      role: 'أخصائي تسويق رقمي ومنصات تواصل (Social Media Specialist)',
      company: 'Inspire Design Solution',
      location: 'الجيزة، مصر',
      current: false,
      description:
        'إدارة الحملات الرقمية، تحسين ظهور المحتوى، وبناء استراتيجيات التفاعل الرقمي لعملاء القطاعات التجارية والهندسية.',
      highlights: [
        'تخطيط وتنفيذ حملات المحتوى الرقمي وتحليل مؤشرات الأداء والوصول.',
        'تحسين تجربة الهبوط (Landing Pages) لرفع معدلات التحويل من الحملات.',
      ],
      tags: ['Digital Strategy', 'Content Optimization', 'Analytics'],
    },
  ];

  const certificationsAndEducation = [
    {
      title: 'AWS Cloud Practitioner Essentials & Technical Essentials',
      issuer: 'Amazon Web Services (AWS) • SimuLearn',
      year: '2026',
    },
    {
      title: 'Bachelor of Commerce (بكالوريوس التجارة)',
      issuer: 'Ain Shams University (جامعة عين شمس)',
      year: '2022',
    },
  ];

  return (
    <section
      id="experience"
      dir="rtl"
      className="w-full py-20 border-t border-zinc-900 bg-black text-white selection:bg-[#ff2e7e] selection:text-white"
    >
      {/* عنوان القسم */}
      <div className="mb-12 text-right">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          الخبرات والشهادات<span className="text-[#ff2e7e]">.</span>
        </h2>
      </div>

      {/* الجدول الزمني للخبرات */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-900 hover:border-zinc-800 transition-colors text-right"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-400 mt-1">
                  <span dir="ltr" className="font-mono text-zinc-200">
                    {exp.company}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start md:self-center">
                {exp.current && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                )}
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                  {exp.period}
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-4">
              {exp.description}
            </p>

            <ul className="space-y-2 mb-5">
              {exp.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs md:text-sm text-zinc-300 flex items-start gap-2.5"
                >
                  <span className="text-[#ff2e7e] mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div dir="ltr" className="flex flex-wrap justify-end gap-2">
              {exp.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-950 border border-zinc-800/80 text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* الشهادات المعتمدة والتعليم */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {certificationsAndEducation.map((cert, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-[#0a0a0a] border border-zinc-900 flex flex-col justify-between text-right"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] text-[#ff2e7e] font-medium px-2 py-0.5 rounded bg-[#ff2e7e]/10">
                  اعتماد وشهادة
                </span>
                <span className="text-xs font-mono text-zinc-500">{cert.year}</span>
              </div>
              <h4 dir="ltr" className="text-sm md:text-base font-bold text-white text-right mt-2">
                {cert.title}
              </h4>
            </div>
            <p dir="ltr" className="text-xs font-mono text-zinc-400 mt-3 text-right">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}