import React, { useState } from 'react';
import { Logo } from '../Logo';
import { OrderDetails } from '../../types';
import { PRODUCT_INFO } from '../../data/productData';
import {
  CheckCircle2,
  Download,
  Mail,
  ShieldCheck,
  FileText,
  Clock,
  ExternalLink,
  BookOpen,
  X,
} from 'lucide-react';

interface PaymentSuccessProps {
  orderDetails: OrderDetails;
  onBackToHome: () => void;
}

export const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ orderDetails, onBackToHome }) => {
  const [downloading, setDownloading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showReader, setShowReader] = useState(false);

  // Trigger actual file download simulation
  const handleDownloadPdf = () => {
    setDownloading(true);

    setTimeout(() => {
      // Create a genuine simulated document blob
      const content = `%PDF-1.4
%مكتبتي - Maktabti Digital Product Edition 2026
%Order: ${orderDetails.orderId}
%Customer: ${orderDetails.customerName} (${orderDetails.customerEmail})
1 0 obj
<< /Title (دليل المنتجات الرقمية والعمل الحر 2026)
   /Author (مكتبتي للنشر الرقمي)
   /Producer (Maktabti Secure PDF Engine)
>>
endobj
xref
0 1
trailer
<< /Root 1 0 R >>
%%EOF`;

      const blob = new Blob([content], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `دليل_المنتجات_الرقمية_2026_مكتبتي_${orderDetails.orderId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloading(false);
    }, 1000);
  };

  const handleSendEmail = () => {
    setEmailSent(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0b192c] py-10 px-4 sm:px-6" dir="rtl">
      {/* Top Bar */}
      <div className="max-w-2xl mx-auto flex items-center justify-between mb-8">
        <Logo size="sm" onClick={onBackToHome} />
        <button
          onClick={onBackToHome}
          className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#1d4ed8] transition-colors cursor-pointer"
        >
          العودة للمتجر الرئيسي
        </button>
      </div>

      {/* Main Success Container */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
        {/* Large Success Badge */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border-2 border-emerald-100 shadow-xs">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3 border border-emerald-200/60">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>تم التحقق من عملية الدفع بنجاح</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b192c] mb-2 tracking-tight">
            تم الدفع بنجاح!
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            ملفك أصبح جاهزًا للتحميل والمطالعة الفورية.
          </p>
        </div>

        {/* Order Details Receipt Box */}
        <div className="bg-[#f8fafc] rounded-2xl p-5 sm:p-6 border border-slate-200/80 mb-8 space-y-3 text-xs sm:text-sm">
          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2.5">
            <span className="text-slate-500">رقم الطلب المعتمد:</span>
            <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
              {orderDetails.orderId}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2.5">
            <span className="text-slate-500">المنتج المقتنى:</span>
            <span className="font-bold text-[#0b192c]">
              {PRODUCT_INFO.productTitle}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2.5">
            <span className="text-slate-500">البريد الإلكتروني المسجل:</span>
            <span className="font-mono text-slate-800" dir="ltr">
              {orderDetails.customerEmail}
            </span>
          </div>

          <div className="flex justify-between items-center pt-1">
            <span className="text-slate-500">تاريخ المعاملة:</span>
            <span className="text-slate-700">{orderDetails.date}</span>
          </div>
        </div>

        {/* Digital Delivery File Action Box */}
        <div className="bg-blue-50/60 rounded-2xl p-6 border border-blue-200/80 mb-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-14 bg-[#0b192c] text-white rounded-xl flex flex-col items-center justify-center p-1 shrink-0 shadow-2xs">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-[9px] font-mono font-bold">PDF</span>
            </div>
            <div className="text-right">
              <span className="text-base font-bold text-[#0b192c] block">
                ملفك جاهز للتحميل المباشر
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">
                {PRODUCT_INFO.fileSize} • جودة طباعة وشاشات عالية
              </span>
            </div>
          </div>

          {/* Download & Actions Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="w-full py-4 px-6 text-base font-bold text-white bg-[#0b192c] hover:bg-[#1d4ed8] active:scale-[0.99] rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75"
            >
              <Download className="w-5 h-5" />
              <span>
                {downloading ? 'جارٍ بدء التنزيل الآمن...' : 'تحميل الملف (PDF)'}
              </span>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleSendEmail}
                disabled={emailSent}
                className="py-3 px-4 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:bg-emerald-50 disabled:text-emerald-700 disabled:border-emerald-200"
              >
                <Mail className="w-4 h-4" />
                <span>
                  {emailSent
                    ? 'تم إرسال الرابط لبريدك ✓'
                    : 'إرسال رابط التحميل إلى بريدي'}
                </span>
              </button>

              <button
                onClick={() => setShowReader(true)}
                className="py-3 px-4 text-xs sm:text-sm font-semibold rounded-xl border border-blue-200 bg-blue-50/80 hover:bg-blue-100/70 text-blue-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>قراءة الدليل في المتصفح</span>
              </button>
            </div>
          </div>

          {/* Security and Expiry Note */}
          <div className="mt-5 pt-4 border-t border-blue-100 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>رابط التنزيل الآمن مشفر وصالح لجهازك</span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">
              Token: {orderDetails.downloadToken.substring(0, 14)}...
            </span>
          </div>
        </div>

        {/* Support Note */}
        <div className="text-center text-xs text-slate-500">
          <span>تواجه أي صعوبة في التحميل؟ تواصل معنا فوراً عبر </span>
          <span className="font-mono text-[#1d4ed8] font-bold">support@maktabti.com</span>
        </div>
      </div>

      {/* Embedded Online Reader Modal (Immediate Reading Experience) */}
      {showReader && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex flex-col p-4 sm:p-6" dir="rtl">
          <div className="max-w-4xl mx-auto w-full flex items-center justify-between pb-4 text-white">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="font-bold text-sm sm:text-base">
                القارئ الرقمي المباشر — {PRODUCT_INFO.productTitle}
              </span>
            </div>
            <button
              onClick={() => setShowReader(false)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-4xl mx-auto w-full flex-1 bg-white rounded-2xl shadow-2xl p-6 sm:p-10 overflow-y-auto text-right text-slate-800 leading-relaxed">
            <div className="border-b border-slate-200 pb-6 mb-6">
              <span className="text-xs text-blue-700 font-bold uppercase tracking-wider block mb-1">
                نسخة القراءة السريعة المرخصة لـ: {orderDetails.customerName}
              </span>
              <h2 className="text-2xl font-extrabold text-[#0b192c]">
                {PRODUCT_INFO.productTitle}
              </h2>
            </div>

            <div className="space-y-6 text-sm sm:text-base">
              <p className="text-slate-700">
                أهلاً بك في نسختك الكاملة من الدليل! يمكنك الاستمرار في قراءة فصول الدليل هنا في أي وقت، أو تنزيل ملف الـ PDF الأصلي عالي الدقة للاحتفاظ به دون اتصال بالإنترنت.
              </p>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">الفصل الأول: أسس العمل الرقمي والإنتاجية العالية</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  تعتبر المنتجات الرقمية من أكثر نماذج الأعمال كفاءة ومرونة في الاقتصاد الرقمي الحديث. فبمجرد صياغة خبرتك ومعرفتك في وثيقة عالية القيمة، تتضاعف إمكانيات الوصول للجمهور العربي من المحيط إلى الخليج دون تكاليف شحن أو تخزين.
                </p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-emerald-900 mb-2">نماذج العمل والتطبيقات المرفقة</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  تجد في نهاية ملف الـ PDF المرفق كافة أوراق العمل التفاعلية وقوائم التحقق القابلة للتعبئة مباشرة.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
              <button
                onClick={handleDownloadPdf}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0b192c] hover:bg-[#1d4ed8] text-white rounded-xl text-sm font-bold transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>تحميل ملف الـ PDF الكامل</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
