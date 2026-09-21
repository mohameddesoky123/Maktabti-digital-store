import React from 'react';
import { Check, ArrowLeft, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { BENEFITS_LIST } from '../data/productData';

interface BenefitsProps {
  onOpenCheckout: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOpenCheckout }) => {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-[#f8fafc] overflow-hidden" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* SIDE 1: Premium Visual Feature Spread */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl overflow-hidden">
              {/* Decorative gradient patch */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-2xl -z-10" />

              {/* Header inside the visual card */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1d4ed8] flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">مواصفات النسخة</span>
                    <span className="block text-sm font-bold text-[#0b192c]">معايير إنتاج فائقة الدقة</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                  نسخة معتمدة
                </span>
              </div>

              {/* Visualized Page Layout Highlights */}
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1d4ed8] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0b192c] mb-1">خطوط عربية مقروءة ومريحة للعين</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      تم اختيار أحجام خطوط وأوزان عربية حديثة مع مسافات أسطر متزنة تمنع إجهاد العين أثناء المطالعة المطولة.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1d4ed8] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0b192c] mb-1">فهرس تفاعلي متقدم وروابط سريعة</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      انقر على أي عنوان داخل الفهرس للانتقال مباشرة إلى الصفحة المطلوبة بنقرة واحدة داخل أي تطبيق قارئ PDF.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1d4ed8] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0b192c] mb-1">تنسيق مخصص للشاشات والطباعة</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      دقة رسومات متجهة (Vector) لا تفقد وضوحها عند التكبير، مع هوامش متناسقة تتيح طباعتها ككتاب مادي.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>تأكيد جودة المحتوى بنسبة 100%</span>
                </div>
                <div className="flex items-center gap-1 text-[#1d4ed8] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>مكتبتي 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* SIDE 2: Benefits List & CTA */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3">
              قيمة استثنائية
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0b192c] tracking-tight leading-tight mb-5">
              لماذا هذا الملف؟
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              في عالم مليء بالمعلومات المشتتة والمحتوى غير المنظم، يأتي هذا الدليل ليقدم حلاً مركزاً يعفيك من البحث الطويل، ويمنحك مرجعاً متكاملاً تملكه للأبد.
            </p>

            {/* Checkmark List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-9">
              {BENEFITS_LIST.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs hover:border-blue-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[15px] font-medium text-slate-800 leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <button
              onClick={onOpenCheckout}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-[#0b192c] hover:bg-[#1d4ed8] active:scale-[0.98] rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer group"
            >
              <span>احصل على الملف الآن</span>
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
