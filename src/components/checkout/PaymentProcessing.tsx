import React, { useEffect, useState } from 'react';
import { Logo } from '../Logo';
import { OrderDetails } from '../../types';
import { ShieldCheck, Lock } from 'lucide-react';

interface PaymentProcessingProps {
  orderDetails: OrderDetails;
  shouldSimulateFail: boolean;
  onSuccess: () => void;
  onFail: () => void;
}

export const PaymentProcessing: React.FC<PaymentProcessingProps> = ({
  orderDetails,
  shouldSimulateFail,
  onSuccess,
  onFail,
}) => {
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    'الاتصال الآمن ببوابة الدفع المشفرة...',
    'التحقق من صحة بيانات البطاقة والاعتماد المصرفي...',
    'تسجيل وتأكيد العملية في سجلات النظام...',
    'إنشاء وتشفير رمز التحميل الرقمي الآمن...',
  ];

  useEffect(() => {
    // Step progression
    const t1 = setTimeout(() => setStepIndex(1), 800);
    const t2 = setTimeout(() => setStepIndex(2), 1600);
    const t3 = setTimeout(() => setStepIndex(3), 2400);

    // Final outcome
    const tFinal = setTimeout(() => {
      if (shouldSimulateFail) {
        onFail();
      } else {
        onSuccess();
      }
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tFinal);
    };
  }, [shouldSimulateFail, onFail, onSuccess]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between items-center py-12 px-4 select-none" dir="rtl">
      <Logo size="md" />

      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center my-auto">
        {/* Animated Radial Pulse / Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-ping opacity-25" />
          <div className="w-20 h-20 rounded-full border-4 border-blue-100 border-t-[#1d4ed8] animate-spin" />
          <Lock className="w-7 h-7 text-[#0b192c] absolute" />
        </div>

        <h2 className="text-2xl font-extrabold text-[#0b192c] mb-2">
          جارٍ معالجة الدفع...
        </h2>
        <p className="text-sm text-slate-500 mb-8 font-medium">
          يرجى الانتظار وعدم إغلاق الصفحة أو تحديثها.
        </p>

        {/* Dynamic Verification Step */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 mb-6 text-right">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse" />
            <span className="text-xs font-bold text-slate-700">
              خطوة {stepIndex + 1} من 4
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-medium transition-all duration-300">
            {steps[stepIndex]}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>جلسة دفع مشفرة بالكامل (256-bit SSL)</span>
        </div>
      </div>

      <div className="text-xs text-slate-400 text-center">
        <span>رقم العملية المؤقت: {orderDetails.orderId}</span>
      </div>
    </div>
  );
};
