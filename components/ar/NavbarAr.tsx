import React from 'react';
import Link from 'next/link';

export default function ArabicNavbar() {
  return (
    <header dir="rtl" className="w-full bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/ar" dir="ltr" className="font-mono text-sm tracking-wider font-semibold text-white">
          AHMED_SABER<span className="text-[#ff2e7e]">.dev</span>
        </Link>
        <nav className="flex items-center gap-6 text-xs md:text-sm font-medium text-zinc-400">
          <Link href="/ar" className="hover:text-white transition-colors">
            الرئيسية
          </Link>
          <Link href="/ar/seo" className="hover:text-white transition-colors">
            تحسين البحث (SEO & GEO)
          </Link>
          <Link href="/ar/web" className="hover:text-white transition-colors">
            تطوير الويب
          </Link>
          <Link href="/ar/cloud" className="hover:text-white transition-colors">
            الحوسبة السحابية
          </Link>
        </nav>
      </div>
    </header>
  );
}