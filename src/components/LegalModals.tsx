import React from 'react';
import { X, Shield, FileText, RefreshCw, Mail } from 'lucide-react';

export type ModalType = 'terms' | 'privacy' | 'refund' | 'contact' | null;

interface LegalModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  const renderContent = () => {
    switch (activeModal) {
      case 'terms':
        return {
          title: 'الشروط والأحكام',
          icon: <FileText className="w-5 h-5 text-blue-600" />,
          body: (
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                مرحباً بكم في منصة <strong>مكتبتي</strong>. باستخدامك لموقعنا وشراء المنتجات الرقمية المعروضة، فإنك توافق على الالتزام بالشروط والأحكام التالية:
              </p>
              <h4 className="font-bold text-[#0b192c] text-base">1. رخصة الاستخدام الفردي</h4>
              <p>
                جميع ملفات الـ PDF والمنتجات الرقمية المباعة مخصصة للاستخدام الشخصي أو المهني للمشتري فقط. يُحظر تماماً إعادة بيع، توزيع، أو مشاركة روابط التحميل أو المحتوى على منصات التخزين العامة بدون إذن خطي مسبق.
              </p>
              <h4 className="font-bold text-[#0b192c] text-base">2. الملكية الفكرية</h4>
              <p>
                كافة النصوص، التصاميم، القوالب، والعلامات التجارية المنشورة هي ملك حصري لمنصة "مكتبتي" ومحمية بموجب أنظمة حماية حقوق المؤلف المعمول بها دولياً وفي العالم العربي.
              </p>
              <h4 className="font-bold text-[#0b192c] text-base">3. التحديثات والتعديلات</h4>
              <p>
                نحتفظ بالحق في تحديث محتوى الملفات وتحسينها وتزويد المشترين بتلك التحديثات مجاناً كما هو معلن في تفاصيل المنتج.
              </p>
            </div>
          ),
        };

      case 'privacy':
        return {
          title: 'سياسة الخصوصية',
          icon: <Shield className="w-5 h-5 text-blue-600" />,
          body: (
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                في <strong>مكتبتي</strong>، نولي أقصى درجات العناية بحماية خصوصية وأمان بيانات عملائنا:
              </p>
              <h4 className="font-bold text-[#0b192c] text-base">1. جمع البيانات</h4>
              <p>
                نجمع فقط البيانات الضرورية لتنفيذ عملية الشراء والتسليم الرقمي، مثل الاسم والبريد الإلكتروني لإرسال روابط التنزيل وفاتورة الشراء.
              </p>
              <h4 className="font-bold text-[#0b192c] text-base">2. أمان المعاملات المالية</h4>
              <p>
                لا نقوم بتخزين أو الاطلاع على أرقام بطاقاتكم الائتمانية أو بيانات الدفع الحساسة نهائياً؛ حيث تتم معالجة كافة المدفوعات عبر بوابات دفع بنكية معتمدة ومشفرة بأعلى معايير التشفير (SSL 256-bit).
              </p>
              <h4 className="font-bold text-[#0b192c] text-base">3. عدم مشاركة البيانات</h4>
              <p>
                نلتزم التزاماً تاماً بعدم بيع أو تأجير أو مشاركة بياناتكم الشخصية مع أي أطراف ثالثة لأغراض دعائية إطلاقاً.
              </p>
            </div>
          ),
        };

      case 'refund':
        return {
          title: 'سياسة الاسترجاع والاستبدال',
          icon: <RefreshCw className="w-5 h-5 text-blue-600" />,
          body: (
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                نظراً للطبيعة الفورية وغير القابلة للإرجاع للمنتجات الرقمية (ملفات PDF التي يتم تنزيلها واقتناؤها فور الدفع):
              </p>
              <h4 className="font-bold text-[#0b192c] text-base">1. طبيعة المشتريات الرقمية</h4>
              <p>
                تُعتبر كافة عمليات الشراء نهائية بمجرد إنشاء وتفعيل رابط التحميل الآمن للملف.
              </p>
              <h4 className="font-bold text-[#0b192c] text-base">2. الحالات المؤهلة للاسترداد</h4>
              <p>
                يحق للعميل طلب استرداد كامل المبلغ في حالتين استثنائيتين:
                <br />
                أ) حدوث خطأ تقني أدى لخصم المبلغ دون توليد رابط التحميل، وتعذر الدعم الفني عن تزويده بالملف خلال 24 ساعة.
                <br />
                ب) تكرار عملية الخصم لنفس الطلب نتيجة خطأ في بوابة الدفع.
              </p>
              <h4 className="font-bold text-[#0b192c] text-base">3. إجراءات تقديم الطلب</h4>
              <p>
                يمكنك التواصل معنا عبر البريد المعتمد مع إرفاق رقم الطلب، ويتم الرد على طلبك خلال 48 ساعة عمل.
              </p>
            </div>
          ),
        };

      case 'contact':
        return {
          title: 'تواصل معنا',
          icon: <Mail className="w-5 h-5 text-blue-600" />,
          body: (
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                يسعدنا دائماً الاستماع إلى استفساراتكم ومساعدتكم في أي مرحلة من مراحل تجربة الشراء والتنزيل:
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-700">البريد الإلكتروني المباشر:</span>
                  <span className="font-mono text-blue-600 font-bold">support@maktabti.com</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-700">ساعات الدعم الفني:</span>
                  <span className="text-slate-600">على مدار الساعة (7 أيام أسبوعياً)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-700">متوسط وقت الاستجابة:</span>
                  <span className="text-emerald-700 font-semibold">أقل من ساعتين</span>
                </div>
              </div>
            </div>
          ),
        };

      default:
        return null;
    }
  };

  const content = renderContent();
  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      dir="rtl"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 relative max-h-[85vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
              {content.icon}
            </div>
            <h3 className="text-xl font-bold text-[#0b192c]">{content.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>{content.body}</div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0b192c] hover:bg-[#1d4ed8] text-white text-sm font-bold rounded-xl transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
