import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/productData';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-y border-slate-100" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] text-xs font-bold mb-3">
            إجابات واضحة
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0b192c] tracking-tight leading-tight mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            كل ما يدور في ذهنك حول آلية الشراء، تنسيق الملف، وطرق السداد والتسليم الرقمي الفوري.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#f8fafc] border-blue-200 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0b192c]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Dropdown Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-[15px] sm:text-base leading-relaxed border-t border-slate-200/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
