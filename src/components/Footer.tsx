import React from 'react';
import { Logo } from './Logo';
import { ModalType } from './LegalModals';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, onNavigateSection }) => {
  return (
    <footer className="bg-[#0b192c] text-white pt-16 pb-12 border-t border-slate-800" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-6 lg:col-span-5 text-right">
            <div className="mb-4">
              <Logo
                variant="light"
                size="md"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm mb-6">
              منصتك للوصول إلى المنتجات الرقمية بسهولة. نوفر أدلة ووثائق PDF استراتيجية عالية الدقة والفاعلية لرواد الأعمال والمحترفين في العالم العربي.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>تسوق إلكتروني معتمد مع تسليم رقمي فوري وآمن</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 lg:col-span-3 text-right">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('hero')}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('inside')}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  ماذا ستحصل عليه؟
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('benefits')}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  المميزات
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('how-it-works')}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  كيف يعمل؟
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('preview')}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  معاينة الملف
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('faq')}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  الأسئلة الشائعة
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Policies & Support */}
          <div className="md:col-span-3 lg:col-span-4 text-right">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              الدعم والسياسات
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onOpenModal('contact')}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  تواصل معنا
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('terms')}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  الشروط والأحكام
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('privacy')}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  سياسة الخصوصية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('refund')}
                  className="hover:text-blue-300 transition-colors cursor-pointer"
                >
                  سياسة الاسترجاع
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <p>© 2026 مكتبتي. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-1">
            <span>صُنعت بعناية لخدمة المحتوى الرقمي العربي</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
