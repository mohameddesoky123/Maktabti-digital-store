import React from 'react';
import { Logo } from '../Logo';
import { XCircle, RefreshCw, ArrowLeft, HelpCircle } from 'lucide-react';

interface PaymentFailedProps {
  onRetry: () => void;
  onBackToHome: () => void;
}

export const PaymentFailed: React.FC<PaymentFailedProps> = ({ onRetry, onBackToHome }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between items-center py-12 px-4" dir="rtl">
      <Logo size="md" onClick={onBackToHome} />

      <div className="w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center my-auto">
        {/* Soft Red Failed Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shadow-xs">
          <XCircle className="w-10 h-10" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c] mb-3">
          تعذر إتمام عملية الدفع
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm mx-auto mb-8">
          لم نتمكن من إتمام العملية. يرجى المحاولة مرة أخرى أو استخدام طريقة دفع أخرى.
        </p>

        {/* Possible Causes Help Card */}
        <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 mb-8 text-right text-xs sm:text-sm text-slate-600 space-y-2">
          <span className="font-bold text-[#0b192c] block mb-2">أسباب محتملة لعدم اكتمال العملية:</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>رصيد غير كافٍ في البطاقة المستخدمة.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>عدم تفعيل خاصية الشراء عبر الإنترنت (3D Secure) للبطاقة.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>انقطاع لحظي أثناء الاتصال بالبنك المصدر للبطاقة.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onRetry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-[#0b192c] hover:bg-[#1d4ed8] active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>حاول مرة أخرى</span>
          </button>

          <button
            onClick={onBackToHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] rounded-xl transition-all cursor-pointer"
          >
            <span>العودة للمتجر</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="text-xs text-slate-400 flex items-center gap-1.5">
        <HelpCircle className="w-3.5 h-3.5" />
        <span>إذا استمرت المشكلة، يرجى مراسلتنا عبر support@maktabti.com</span>
      </div>
    </div>
  );
};
