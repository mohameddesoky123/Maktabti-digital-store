import React from 'react';
import { WHAT_IS_INSIDE } from '../data/productData';
import { Compass, Layers, FileText, Smartphone, Wrench, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-[#1d4ed8]" />,
  Layers: <Layers className="w-6 h-6 text-[#1d4ed8]" />,
  FileText: <FileText className="w-6 h-6 text-[#1d4ed8]" />,
  Smartphone: <Smartphone className="w-6 h-6 text-[#1d4ed8]" />,
  Wrench: <Wrench className="w-6 h-6 text-[#1d4ed8]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#1d4ed8]" />,
};

export const WhatsInside: React.FC = () => {
  return (
    <section id="inside" className="py-20 md:py-28 bg-white border-y border-slate-100" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] text-xs font-bold mb-3">
            محتويات الحزمة الرقمية
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0b192c] tracking-tight leading-tight mb-4">
            ماذا ستحصل عليه؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            تم إعداد كل عنصر داخل هذا الملف ليكون مرجعاً عملياً يمنحك قيمة حقيقية تدعم مسيرتك وتوفر عليك الوقت والجهد.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHAT_IS_INSIDE.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-[#f8fafc] hover:bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/70 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-13 h-13 rounded-xl bg-white group-hover:bg-blue-50/80 border border-slate-200/80 group-hover:border-blue-200 flex items-center justify-center mb-6 shadow-2xs transition-colors duration-200">
                  {iconMap[item.icon] || <FileText className="w-6 h-6 text-[#1d4ed8]" />}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#0b192c] mb-3 group-hover:text-[#1d4ed8] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Number indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>المكون 0{index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#1d4ed8] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
