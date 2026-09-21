import React from 'react';
import { TESTIMONIALS } from '../data/productData';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc]" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] text-xs font-bold mb-3">
            آراء وتجارب القراء
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0b192c] tracking-tight leading-tight mb-4">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            انطباعات وتجارب حقيقية من متخصصين ورواد أعمال اقتنوا الدليل وطبقوا خطواته عملياً.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-[15px] sm:text-base leading-relaxed mb-6 font-normal">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-[#0b192c] text-white flex items-center justify-center font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-bold text-[#0b192c]">
                      {item.name}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {item.role}
                    </span>
                  </div>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>مشتري موثق</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
