import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import "../globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "أحمد صابر | مهندس سحابة AWS، خبير SEO، ومطور ويب",
  description:
    "بورتفوليو أحمد صابر — متخصص في البنية التحتية السحابية AWS، تحسين محركات البحث التقني (Technical SEO)، وتطوير تطبيقات الويب الحديثة.",
  alternates: {
    canonical: "/ar",
    languages: {
      en: "/",
      ar: "/ar",
    },
  },
};

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className={`${cairo.variable} ${geistMono.variable} font-sans min-h-full flex flex-col antialiased`}
      style={{ fontFamily: "var(--font-cairo), sans-serif" }}
    >
      {children}
    </div>
  );
}