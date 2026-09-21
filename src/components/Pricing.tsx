import React from 'react';
import { CurrencyCode } from '../types';
import { CURRENCIES, BASE_PRICE_SAR, ORIGINAL_PRICE_SAR, PRODUCT_INFO } from '../data/productData';
import { formatPrice } from '../utils/formatters';
import { Check, ShieldCheck, Zap, ArrowLeft, Clock, Sparkles } from 'lucide-react';

interface PricingProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onOpenCheckout: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenCheckout,
}) => {
  const currentPriceFormatted = formatPrice(BASE_PRICE_SAR, currentCurrency);
  const originalPriceFormatted = formatPrice(ORIGINAL_PRICE_SAR, currentCurrency);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-y border-slate-100" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] text-xs font-bold mb-3">
            استثمار لمرة واحدة
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0b192c] tracking-tight leading-tight mb-4">
            احصل على نسختك الآن
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            امتلك الدليل الكامل للأبد مع كافة التحديثات القادمة بسعر تشجيعي مخفض، دون أي اشتراكات دورية أو التزامات مستقبلية.
          </p>

          {/* Currency Switcher Bar */}
          <div className="mt-6 inline-flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200">
            {CURRENCIES.map((curr) => (
              <button
                key={curr.code}
                onClick={() => onCurrencyChange(curr.code)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  currentCurrency === curr.code
                    ? 'bg-white text-[#0b192c] shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <span>{curr.code}</span>
                <span className="hidden sm:inline-block mr-1 text-[11px] opacity-70">
                  ({curr.symbol})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Card Container */}
        <div className="max-w-xl mx-auto">
          <div className="relative bg-[#f8fafc] rounded-3xl p-8 sm:p-10 border-2 border-slate-200 shadow-xl hover:border-blue-300 transition-all duration-300">
            {/* Value Badge Tag */}
            <div className="absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1.5 rounded-full bg-[#1d4ed8] text-white text-xs font-extrabold shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>خصم لفترة محدودة — وفر 60%</span>
            </div>

            {/* Product Title and Description */}
            <div className="text-right border-b border-slate-200/80 pb-6 mb-6">
              <h3 className="text-2xl font-extrabold text-[#0b192c] mb-2">
                {PRODUCT_INFO.productTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {PRODUCT_INFO.productSubtitle}
              </p>
            </div>

            {/* Pricing Details */}
            <div className="flex items-baseline justify-between mb-6">
              <div className="text-right">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  السعر الحالي
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-[#0b192c] tracking-tight">
                    {currentPriceFormatted}
                  </span>
                  <span className="text-lg text-slate-400 line-through font-semibold">
                    {originalPriceFormatted}
                  </span>
                </div>
              </div>

              {/* Single Payment Pill */}
              <div className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold shrink-0">
                دفع مرة واحدة
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-3.5 mb-8">
              {[
                'ملف PDF رقمي تفاعلي عالي الدقة (148 صفحة)',
                'وصول فوري ومباشر للتحميل بعد الدفع في ثوانٍ',
                'دفع آمن ومشفر بأحدث المعايير البنكية',
                'بدون اشتراك شهري — امتلاك دائم للملف',
                '12 قالباً ومصفوفة عمل قابلة للتطبيق الفوري',
                'تحديثات وإضافات مستقبلية مجانية مدى الحياة',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-right">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-medium text-slate-800">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Purchase CTA */}
            <button
              onClick={onOpenCheckout}
              className="w-full py-4 px-6 text-base sm:text-lg font-bold text-white bg-[#0b192c] hover:bg-[#1d4ed8] active:scale-[0.99] rounded-2xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>اشترِ الآن</span>
              <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-mono font-medium">
                {currentPriceFormatted}
              </span>
              <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            </button>

            {/* Trust and Delivery Note */}
            <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>دفع إلكتروني آمن 100%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-blue-600" />
                <span>تحميل رقمي فوري</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
