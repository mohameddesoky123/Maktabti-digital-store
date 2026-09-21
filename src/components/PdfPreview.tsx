import React, { useState } from 'react';
import { PREVIEW_PAGES } from '../data/productData';
import {
  ChevronRight,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Lock,
  ArrowLeft,
  ShieldCheck,
  FileCheck2,
} from 'lucide-react';

interface PdfPreviewProps {
  onOpenCheckout: () => void;
}

export const PdfPreview: React.FC<PdfPreviewProps> = ({ onOpenCheckout }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalPages = PREVIEW_PAGES.length;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleZoomIn = () => {
    if (zoomLevel < 125) setZoomLevel((prev) => prev + 15);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 85) setZoomLevel((prev) => prev - 15);
  };

  // Render individual realistic preview pages
  const renderPageContent = (pageIndex: number) => {
    switch (pageIndex) {
      case 1:
        // Cover Page
        return (
          <div className="w-full h-full bg-[#0b192c] text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden select-none">
            {/* Ambient visual geometry */}
            <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-blue-600/30 blur-2xl" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-cyan-400/20 blur-2xl" />

            {/* Top header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-xs font-bold">
                  PDF
                </div>
                <span className="text-xs text-blue-200 font-semibold tracking-wider uppercase">
                  مكتبتي للنشر الرقمي
                </span>
              </div>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-300 font-mono">
                إصدار 2026
              </span>
            </div>

            {/* Middle Title & Artwork */}
            <div className="relative z-10 my-auto py-8 text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-[#38bdf8] text-xs font-bold mb-4 border border-blue-400/30">
                الدليل التنفيذي الشامل
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug mb-4">
                دليل المنتجات الرقمية والعمل الحر
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                المرجع العملي الموثوق لبناء وتسعير وإطلاق الأصول الرقمية الناجحة في العالم العربي، وتحقيق الاستقلال المالي خطوة بخطوة.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-slate-300">
                <div>
                  <span className="block text-slate-400">إعداد وتأليف:</span>
                  <span className="font-bold text-white text-sm">فريق مكتبتي للأبحاث الرقمية</span>
                </div>
                <div>
                  <span className="block text-slate-400">عدد الصفحات الكلي:</span>
                  <span className="font-bold text-white text-sm">148 صفحة</span>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>جميع الحقوق محفوظة © 2026</span>
              <span className="text-blue-300 font-mono text-[11px]">maktabti.com</span>
            </div>
          </div>
        );

      case 2:
        // Table of Contents
        return (
          <div className="w-full h-full bg-white text-slate-900 p-8 sm:p-10 flex flex-col justify-between select-none">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <div>
                  <span className="text-xs text-blue-700 font-bold uppercase tracking-wider block">
                    محتويات الدليل
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b192c]">
                    فهرس المحتويات والمنهجية
                  </h2>
                </div>
                <span className="text-xs font-mono text-slate-400">صفحة 02</span>
              </div>

              <div className="space-y-4">
                {[
                  { ch: 'الفصل الأول', title: 'أسس ومفاهيم العمل الرقمي المستدام', page: '14' },
                  { ch: 'الفصل الثاني', title: 'دراسة السوق العربي واكتشاف الفجوات المربحة', page: '38' },
                  { ch: 'الفصل الثالث', title: 'تصميم وبناء ملفات PDF والمنتجات الرقمية', page: '62' },
                  { ch: 'الفصل الرابع', title: 'استراتيجيات التسعير وبوابات الدفع الإلكترونية', page: '94' },
                  { ch: 'الفصل الخامس', title: 'التسويق، منصات البيع، وتحقيق المبيعات الأولى', page: '122' },
                  { ch: 'الملحق التطبيقي', title: 'نماذج العمل، القوالب، وقوائم المراجعة السريعة', page: '138' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-white text-slate-700 font-mono text-xs font-bold border border-slate-200">
                        {item.ch}
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      {item.page}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
              <span>دليل المنتجات الرقمية والعمل الحر</span>
              <span>مكتبتي للنشر الرقمي</span>
            </div>
          </div>
        );

      case 3:
        // Core Chapter Page
        return (
          <div className="w-full h-full bg-white text-slate-900 p-8 sm:p-10 flex flex-col justify-between select-none">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                <div>
                  <span className="text-xs text-blue-700 font-bold uppercase tracking-wider block">
                    الفصل الأول
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b192c]">
                    النموذج الرباعي لبناء منتج رقمي مستدام
                  </h2>
                </div>
                <span className="text-xs font-mono text-slate-400">صفحة 19</span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                المنتج الرقمي الناجح لا يعتمد على الصدفة أو الحظ، بل هو محصلة تقاطع أربعة أركان أساسية تضمن توفير قيمة استثنائية تجعل المستخدم راغباً في الشراء الفوري دون تردد:
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-100">
                  <span className="block text-xs font-bold text-blue-800 mb-1">1. حل مشكلة محددة</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    التركيز على وجع واضح يعاني منه المشتري واختصار وقته في حله.
                  </p>
                </div>
                <div className="p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-100">
                  <span className="block text-xs font-bold text-emerald-800 mb-1">2. التنسيق والسهولة</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    تصميم مقروء وواضح يمكن تطبيقه دون تعقيد أو الحاجة لخبير.
                  </p>
                </div>
                <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-100">
                  <span className="block text-xs font-bold text-amber-800 mb-1">3. التسعير العادل</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    قيمة ملموسة تعادل أضعاف السعر المطلوب بنموذج الشراء لمرة واحدة.
                  </p>
                </div>
                <div className="p-3.5 bg-indigo-50/80 rounded-xl border border-indigo-100">
                  <span className="block text-xs font-bold text-indigo-800 mb-1">4. التسليم الفوري</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    تجربة شراء رقمية خالية من أي احتكاك أو تأخير للمشتري.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border-r-4 border-blue-600 text-xs text-slate-700 leading-relaxed">
                💡 <span className="font-bold">قاعدة ذهبية:</span> إن أكثر ما يبحث عنه المشتري العربي في المنتجات الرقمية هو "الوقت المُوفر" و"الخطوات الواضحة القابلة للتطبيق الآن".
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
              <span>دليل المنتجات الرقمية والعمل الحر</span>
              <span>مكتبتي للنشر الرقمي</span>
            </div>
          </div>
        );

      case 4:
        // Worksheet
        return (
          <div className="w-full h-full bg-white text-slate-900 p-8 sm:p-10 flex flex-col justify-between select-none">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                <div>
                  <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider block">
                    ورقة عمل تطبيقية
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b192c]">
                    مصفوفة تقييم وتسعير الأفكار الرقمية
                  </h2>
                </div>
                <span className="text-xs font-mono text-slate-400">صفحة 78</span>
              </div>

              <p className="text-xs text-slate-600 mb-4">
                استخدم هذا الجدول لتصنيف أفكارك واختيار المنتج الأكثر قابلية للربح والانتشار:
              </p>

              <div className="border border-slate-200 rounded-xl overflow-hidden mb-4">
                <table className="w-full text-right text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">المعيار</th>
                      <th className="p-2.5">الوزن</th>
                      <th className="p-2.5">التقييم (1-10)</th>
                      <th className="p-2.5">الملاحظات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="p-2.5 font-semibold text-slate-800">حجم الطلب في السوق</td>
                      <td className="p-2.5">30%</td>
                      <td className="p-2.5 font-mono font-bold text-blue-600">8.5</td>
                      <td className="p-2.5">طلب متزايد على الأدلة العملية</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold text-slate-800">سرعة الإنتاج والإعداد</td>
                      <td className="p-2.5">25%</td>
                      <td className="p-2.5 font-mono font-bold text-blue-600">9.0</td>
                      <td className="p-2.5">يمكن إطلاقه خلال أسبوعين</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold text-slate-800">هامش الربح لكل عملية</td>
                      <td className="p-2.5">25%</td>
                      <td className="p-2.5 font-mono font-bold text-blue-600">9.5</td>
                      <td className="p-2.5">تكلفة متغيرة تقارب الصفر</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold text-slate-800">سهولة التسليم الرقمي</td>
                      <td className="p-2.5">20%</td>
                      <td className="p-2.5 font-mono font-bold text-blue-600">10.0</td>
                      <td className="p-2.5">تحميل فوري عبر رابط آمن</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800">
                ✓ <span className="font-bold">المجموع المرجح: 92/100</span> — الفكرة جاهزة للتنفيذ الفوري والانتقال لمرحلة بناء المحتوى.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
              <span>دليل المنتجات الرقمية والعمل الحر</span>
              <span>مكتبتي للنشر الرقمي</span>
            </div>
          </div>
        );

      case 5:
      default:
        // Resources & Tools
        return (
          <div className="w-full h-full bg-white text-slate-900 p-8 sm:p-10 flex flex-col justify-between select-none">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                <div>
                  <span className="text-xs text-indigo-700 font-bold uppercase tracking-wider block">
                    دليل المصادر والبرمجيات
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0b192c]">
                    بوابات الدفع والمنصات الموصى بها
                  </h2>
                </div>
                <span className="text-xs font-mono text-slate-400">صفحة 115</span>
              </div>

              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                مقارنة حصرية لأكثر الحلول استقراراً في منطقة الخليج ومصر وشمال أفريقيا لمعالجة الدفع وتسليم المنتجات الرقمية:
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">بوابات الدفع المحلية (مدى / Apple Pay)</span>
                    <span className="text-[11px] text-slate-500">معدل تحويل مرتفع وثقة عالية لدى المستخدم الخليجي.</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    موصى به
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">سيرفرات التخزين والتوزيع الآمن (Cloud CDN)</span>
                    <span className="text-[11px] text-slate-500">حماية الروابط بمدد انتهاء صلاحية مشفرة.</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                    حماية رقمية
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">منصات إرسال البريد الإلكتروني الآلي</span>
                    <span className="text-[11px] text-slate-500">إرسال روابط النسخ الاحتياطية وفواتير الشراء تلقائياً.</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-bold">
                    أتمتة كاملة
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
              <span>دليل المنتجات الرقمية والعمل الحر</span>
              <span>مكتبتي للنشر الرقمي</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="preview" className="py-20 md:py-28 bg-[#f8fafc]" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] text-xs font-bold mb-3">
            استعراض مباشر وشفاف
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0b192c] tracking-tight leading-tight mb-4">
            معاينة تفاعلية للملف
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            تصفح الصفحات الأولى من الملف لتتأكد بنفسك من جودة التنسيق، وضوح الخط، ورصانة المحتوى قبل الشراء.
          </p>
        </div>

        {/* Interactive PDF Reader Container */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden">
          {/* Reader Top Toolbar */}
          <div className="bg-[#0b192c] px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-slate-300">
            {/* Left: Document Info & Watermark notice */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <span className="text-xs sm:text-sm font-semibold text-white">
                معاينة تجريبية • 5 صفحات مختارة
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-blue-500/20 text-[#38bdf8] text-[11px] font-bold">
                نسخة محمية
              </span>
            </div>

            {/* Center: Pagination controls */}
            <div className="flex items-center gap-2 bg-slate-800/80 px-2.5 py-1 rounded-xl border border-slate-700">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-1 rounded hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-white"
                title="الصفحة السابقة"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <span className="text-xs sm:text-sm font-mono font-medium text-slate-200 px-2">
                صفحة <span className="font-bold text-white">{currentPage}</span> من{' '}
                <span>{totalPages}</span>
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-1 rounded hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-white"
                title="الصفحة التالية"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Zoom & Fullscreen */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 85}
                className="p-1.5 rounded-lg hover:bg-slate-800 disabled:opacity-30 text-slate-300 hover:text-white transition-colors"
                title="تصغير"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono text-slate-400 w-11 text-center">
                {zoomLevel}%
              </span>

              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 125}
                className="p-1.5 rounded-lg hover:bg-slate-800 disabled:opacity-30 text-slate-300 hover:text-white transition-colors"
                title="تكبير"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <div className="w-[1px] h-4 bg-slate-700 mx-1" />

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title={isFullscreen ? 'تصغير العرض' : 'عرض ملء الشاشة'}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Reader Canvas Area */}
          <div className="p-4 sm:p-8 md:p-10 flex justify-center items-center bg-slate-950/70 overflow-auto min-h-[460px] sm:min-h-[540px]">
            <div
              style={{
                transform: `scale(${zoomLevel / 100})`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease',
              }}
              className="relative w-full max-w-[500px] aspect-[1/1.414] shadow-2xl rounded-xl overflow-hidden border border-slate-200"
            >
              {/* Actual Page Content Render */}
              {renderPageContent(currentPage)}

              {/* Security Watermark Overlay */}
              <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center opacity-12 z-20">
                <span className="text-4xl font-extrabold text-slate-900 rotate-[-35deg] tracking-widest uppercase">
                  معاينة مكتبتي
                </span>
                <span className="text-base font-mono text-slate-900 rotate-[-35deg] mt-4">
                  maktabti.com • sample preview
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation Bar */}
          <div className="bg-[#0b192c] p-4 border-t border-slate-800 flex items-center justify-between gap-3 overflow-x-auto">
            <div className="flex items-center gap-2.5">
              {PREVIEW_PAGES.map((page) => (
                <button
                  key={page.pageNumber}
                  onClick={() => setCurrentPage(page.pageNumber)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                    currentPage === page.pageNumber
                      ? 'bg-[#1d4ed8] text-white shadow-xs'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span>صفحة {page.pageNumber}: </span>
                  <span className="opacity-90">{page.title}</span>
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400 shrink-0">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>الصفحات 6–148 متاحة بعد إتمام الشراء</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-8 max-w-4xl mx-auto bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0b192c]">
                أعجبك المحتوى وترغب بالحصول على الملف كاملاً؟
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                148 صفحة من المحتوى العملي المركز وقوالب العمل الجاهزة بانتظارك فوراً.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#0b192c] hover:bg-[#1d4ed8] rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <span>احصل على النسخة الكاملة الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Fullscreen Modal View if toggled */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col p-4 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-white">
            <div className="flex items-center gap-3">
              <span className="font-bold text-lg">معاينة الملف الكاملة — مكتبتي</span>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded">
                صفحة {currentPage} من {totalPages}
              </span>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-bold transition-colors cursor-pointer"
            >
              إغلاق ملء الشاشة
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
            <div className="w-full max-w-[620px] aspect-[1/1.414] shadow-2xl rounded-2xl overflow-hidden">
              {renderPageContent(currentPage)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
