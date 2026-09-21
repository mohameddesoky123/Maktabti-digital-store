import React from 'react';
import { ArrowLeft, Eye, ShieldCheck, Zap, FileText, CheckCircle2 } from 'lucide-react';
import { CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';
import { BASE_PRICE_SAR, ORIGINAL_PRICE_SAR } from '../data/productData';

interface HeroProps {
  currentCurrency: CurrencyCode;
  onOpenCheckout: () => void;
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentCurrency,
  onOpenCheckout,
  onOpenPreview,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-radial from-blue-50/40 via-transparent to-transparent"
      dir="rtl"
    >
      {/* Subtle background ambient mesh glow */}
      <div className="absolute top-12 right-1/4 -z-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-slate-100/60 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* RIGHT COLUMN: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[13px] font-semibold text-slate-700">
                منتج رقمي • وصول فوري
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#0b192c] tracking-tight leading-[1.18] mb-6">
              كل ما تحتاجه في{' '}
              <span className="text-[#1d4ed8] relative inline-block">
                ملف PDF واحد
                <svg
                  className="absolute -bottom-2 right-0 w-full h-2.5 text-blue-200/80 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0 8C25 2 75 2 100 8"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-[19px] text-slate-600 leading-[1.8] max-w-[580px] mb-8 font-normal">
              دليل عملي وتطبيقي شامل صُمم ليختصر عليك سنوات من التجربة والخطأ في إطلاق المنتجات الرقمية والعمل الحر. ملف رقمي عالي الدقة، جاهز للتحميل الفوري بعد عملية دفع آمنة لمرة واحدة فقط.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-[#0b192c] hover:bg-[#1d4ed8] active:scale-[0.98] rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer group"
              >
                <span>احصل على الملف الآن</span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-mono font-medium">
                  {formatPrice(BASE_PRICE_SAR, currentCurrency)}
                </span>
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              </button>

              <button
                onClick={onOpenPreview}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#0b192c] bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-300 rounded-xl shadow-xs transition-all duration-200 hover:border-slate-400 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-slate-500" />
                <span>شاهد المعاينة</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 border-t border-slate-200/70 w-full grid grid-cols-3 gap-2 text-slate-600 text-xs sm:text-[13px]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>دفع لمرة واحدة</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                <span>تحميل فوري مباشر</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>دفع مشفر وآمن 100%</span>
              </div>
            </div>
          </div>

          {/* LEFT COLUMN: Premium Realistic PDF Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center relative select-none">
            {/* Layered Document Presentation with realistic depth */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[1/1.3] perspective-1000">
              {/* Back Page Shadow Layers */}
              <div className="absolute inset-0 bg-white/70 rounded-2xl shadow-lg border border-slate-200/60 translate-x-4 translate-y-4 rotate-2 transform-gpu" />
              <div className="absolute inset-0 bg-white/90 rounded-2xl shadow-xl border border-slate-200/80 translate-x-2 translate-y-2 rotate-1 transform-gpu" />

              {/* Main Document Cover */}
              <div
                onClick={onOpenPreview}
                className="relative w-full h-full bg-[#0b192c] rounded-2xl shadow-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between text-white overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Book Spine Simulation on right (RTL book opens left) */}
                <div className="absolute top-0 right-0 bottom-0 w-3 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
                
                {/* Subtle geometric cover accent */}
                <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full bg-blue-600/20 blur-xl pointer-events-none" />
                <div className="absolute bottom-4 -right-10 w-44 h-44 rounded-full bg-cyan-400/10 blur-lg pointer-events-none" />

                {/* Top Cover Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-blue-200 uppercase font-mono">
                      PDF EDITION
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-300 bg-white/10 px-2 py-0.5 rounded-full">
                    2026
                  </span>
                </div>

                {/* Middle Cover Artwork & Title */}
                <div className="relative z-10 my-auto py-4">
                  <div className="inline-block mb-3 px-2.5 py-1 rounded bg-blue-500/20 text-[#38bdf8] text-xs font-bold border border-blue-400/30">
                    المرجع التنفيذي المعتمد
                  </div>
                  <h2 className="text-2xl sm:text-[26px] font-extrabold text-white leading-snug mb-3">
                    دليل المنتجات الرقمية والعمل الحر
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                    استراتيجيات عملية من الفكرة والتصميم إلى بوابات الدفع وتحقيق المبيعات في العالم العربي.
                  </p>

                  {/* Clean vector mock page graphics */}
                  <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-2">
                    <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                      <span className="block text-base font-extrabold text-white">148</span>
                      <span className="text-[10px] text-slate-400">صفحة كاملة</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                      <span className="block text-base font-extrabold text-white">12</span>
                      <span className="text-[10px] text-slate-400">نموذج وقالب</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                      <span className="block text-base font-extrabold text-[#38bdf8]">A4</span>
                      <span className="text-[10px] text-slate-400">جاهز للطباعة</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Cover Footer */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-200">مكتبتي للنشر الرقمي</span>
                  <span className="font-mono text-[11px] text-blue-300">maktabti.com</span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0b192c]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 z-20">
                  <Eye className="w-8 h-8 text-blue-400" />
                  <span className="text-sm font-bold text-white">انقر لتصفح المعاينة التفاعلية</span>
                  <span className="text-xs text-blue-200">5 صفحات تجريبية متاحة</span>
                </div>
              </div>

              {/* Floating Card 1: Instant Access */}
              <div className="absolute -top-4 -right-6 sm:-right-8 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-200/80 flex items-center gap-2.5 z-30 animate-bounce duration-1000">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 font-bold shrink-0">
                  ⚡
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-slate-900">وصول فوري</span>
                  <span className="block text-[11px] text-slate-500">تحميل مباشر بعد الدفع</span>
                </div>
              </div>

              {/* Floating Card 2: One-time purchase */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-200/80 flex items-center gap-2.5 z-30">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold shrink-0">
                  ✓
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-slate-900">شراء لمرة واحدة</span>
                  <span className="block text-[11px] text-slate-500">بدون أي اشتراك شهري</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
