import React from 'react';
import { ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';
import { CurrencyCode } from '../types';
import { formatPrice } from '../utils/formatters';
import { BASE_PRICE_SAR } from '../data/productData';

interface FinalCtaProps {
  currentCurrency: CurrencyCode;
  onOpenCheckout: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ currentCurrency, onOpenCheckout }) => {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc]" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0b192c] rounded-3xl p-8 sm:p-14 lg:p-16 text-white text-center overflow-hidden shadow-2xl border border-slate-800">
          {/* Subtle ambient lighting */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-bold mb-6 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>ابدأ رحلتك اليوم</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
              جاهز للحصول على ملفك؟
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto font-normal">
              احصل على وصول رقمي سريع من خلال عملية شراء بسيطة وآمنة، وابدأ فوراً في قراءة الدليل وتطبيق نماذج العمل.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#0b192c] bg-white hover:bg-blue-50 active:scale-[0.98] rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>احصل على الملف الآن</span>
                <span className="bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded text-xs font-mono font-bold">
                  {formatPrice(BASE_PRICE_SAR, currentCurrency)}
                </span>
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>دفع مشفر بالكامل</span>
              </div>
              <span>•</span>
              <span>تحميل فوري في ثوانٍ</span>
              <span>•</span>
              <span>دفع لمرة واحدة فقط</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
