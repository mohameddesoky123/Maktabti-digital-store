import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/productData';
import { MousePointerClick, CreditCard, DownloadCloud, ArrowLeft } from 'lucide-react';

interface HowItWorksProps {
  onOpenCheckout: () => void;
}

const stepIcons = [
  <MousePointerClick className="w-6 h-6 text-[#1d4ed8]" />,
  <CreditCard className="w-6 h-6 text-[#1d4ed8]" />,
  <DownloadCloud className="w-6 h-6 text-[#1d4ed8]" />,
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenCheckout }) => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-y border-slate-100" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] text-xs font-bold mb-3">
            تجربة رقمية فورية
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0b192c] tracking-tight leading-tight mb-4">
            كيف تحصل على الملف؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            ثلاث خطوات بسيطة فقط تفصلك عن امتلاك نسختك والبدء في الاستفادة من المحتوى فوراً.
          </p>
        </div>

        {/* Timeline (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-1/2 right-[15%] left-[15%] h-[2px] bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={step.step}
                className="bg-[#f8fafc] md:bg-transparent rounded-2xl p-6 sm:p-8 md:p-4 border border-slate-200/80 md:border-transparent flex flex-col items-center text-center group"
              >
                {/* Step badge & icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-[#1d4ed8] shadow-md flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
                    {stepIcons[index]}
                  </div>
                  {/* Step Number Tag */}
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-md bg-[#0b192c] text-white text-xs font-mono font-bold">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0b192c] mb-3 group-hover:text-[#1d4ed8] transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-[15px] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#0b192c] hover:text-[#1d4ed8] hover:bg-blue-50 rounded-xl transition-all cursor-pointer"
          >
            <span>ابدأ الآن واستلم ملفك في ثوانٍ</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
