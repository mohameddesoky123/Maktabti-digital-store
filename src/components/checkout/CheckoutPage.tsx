import React, { useState } from 'react';
import { Logo } from '../Logo';
import { CurrencyCode, OrderDetails } from '../../types';
import { BASE_PRICE_SAR, PRODUCT_INFO } from '../../data/productData';
import { formatPrice, getConvertedAmount } from '../../utils/formatters';
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  CreditCard,
  FileText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

interface CheckoutPageProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (code: CurrencyCode) => void;
  onBackToLanding: () => void;
  onProceedToPayment: (orderDetails: OrderDetails, shouldSimulateFail?: boolean) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  currentCurrency,
  onCurrencyChange,
  onBackToLanding,
  onProceedToPayment,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple_pay' | 'local_pay'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  // QA testing flag for demonstration
  const [simulateFailure, setSimulateFailure] = useState(false);

  const priceFormatted = formatPrice(BASE_PRICE_SAR, currentCurrency);
  const numericAmount = getConvertedAmount(BASE_PRICE_SAR, currentCurrency);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('يرجى إدخال الاسم الكامل لمتابعة الشراء.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('يرجى إدخال بريد إلكتروني صالح لاستلام رابط تحميل الملف وفاتورة الشراء.');
      return;
    }
    if (paymentMethod === 'card') {
      if (cardNumber.replace(/\s/g, '').length < 15) {
        setErrorMsg('يرجى إدخال رقم بطاقة دفع صحيح.');
        return;
      }
      if (!cardExpiry || !cardCvc) {
        setErrorMsg('يرجى استكمال بيانات تاريخ الانتهاء ورمز الأمان CVC.');
        return;
      }
    }
    if (!acceptTerms) {
      setErrorMsg('يرجى الموافقة على شروط الاستخدام الرقمي وسياسة الخصوصية.');
      return;
    }

    const orderId = `MKT-${Math.floor(100000 + Math.random() * 900000)}`;
    const downloadToken = `token_${Math.random().toString(36).substring(2, 15)}_${Date.now()}`;

    const details: OrderDetails = {
      orderId,
      customerName: fullName.trim(),
      customerEmail: email.trim(),
      phone: phone.trim() || undefined,
      currency: currentCurrency,
      amount: numericAmount,
      date: new Date().toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      paymentMethod,
      downloadToken,
    };

    onProceedToPayment(details, simulateFailure);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0b192c]" dir="rtl">
      {/* Top Checkout Header */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Logo size="sm" onClick={onBackToLanding} />

          <button
            onClick={onBackToLanding}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#1d4ed8] transition-colors cursor-pointer"
          >
            <span>العودة للمتجر</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Checkout Body */}
      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="mb-8 text-right">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1d4ed8] bg-blue-50 px-2.5 py-1 rounded-full mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>جلسة شراء مشفرة وآمنة</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b192c]">
            إتمام الطلب والتسليم الرقمي
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            أكمل بياناتك بالأسفل للحصول على الملف ورابط التحميل الفوري.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* RIGHT COLUMN (RTL): Customer Information & Payment */}
            <div className="lg:col-span-7 space-y-6">
              {/* Error Notification if any */}
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Section 1: Customer Information */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
                  <h2 className="text-base sm:text-lg font-bold text-[#0b192c] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[#1d4ed8] flex items-center justify-center text-xs font-bold font-mono">
                      1
                    </span>
                    <span>بيانات المشتري والتسليم</span>
                  </h2>
                  <span className="text-xs text-slate-400">إلزامية لإرسال الملف</span>
                </div>

                <div className="space-y-4 text-right">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                      الاسم الكامل <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="مثال: عبدالله محمد"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 outline-hidden text-sm bg-slate-50/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      dir="ltr"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 outline-hidden text-sm bg-slate-50/50 transition-all text-left"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      ستصلك نسخة احتياطية من رابط تحميل الـ PDF وفاتورة الشراء على هذا البريد فوراً.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                      رقم الجوال <span className="text-slate-400 font-normal">(اختياري للإشعارات)</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 5x xxx xxxx"
                      dir="ltr"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1d4ed8] focus:ring-2 focus:ring-blue-100 outline-hidden text-sm bg-slate-50/50 transition-all text-left"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Payment Method */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
                  <h2 className="text-base sm:text-lg font-bold text-[#0b192c] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[#1d4ed8] flex items-center justify-center text-xs font-bold font-mono">
                      2
                    </span>
                    <span>طريقة الدفع الآمن</span>
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>تشفير 256-bit</span>
                  </div>
                </div>

                {/* Method Selector Tabs */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#1d4ed8] bg-blue-50/50 text-[#1d4ed8] font-bold shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mx-auto mb-1 text-inherit" />
                    <span className="text-xs block">بطاقة بنكية / مدى</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple_pay')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'apple_pay'
                        ? 'border-[#1d4ed8] bg-blue-50/50 text-[#1d4ed8] font-bold shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-5 h-5 mx-auto mb-1 flex items-center justify-center font-bold text-xs">
                      
                    </div>
                    <span className="text-xs block">Apple Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('local_pay')}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'local_pay'
                        ? 'border-[#1d4ed8] bg-blue-50/50 text-[#1d4ed8] font-bold shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Sparkles className="w-5 h-5 mx-auto mb-1 text-inherit" />
                    <span className="text-xs block">محفظة رقمية</span>
                  </button>
                </div>

                {/* Card Fields when card selected */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4 text-right bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        رقم البطاقة (Visa / Mastercard / Mada)
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').substring(0, 16);
                            const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
                            setCardNumber(formatted);
                          }}
                          placeholder="4000 1234 5678 9010"
                          dir="ltr"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-mono focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-hidden text-left"
                        />
                        <div className="absolute right-3 top-2.5 text-xs text-slate-400 font-bold">
                          💳
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          تاريخ الانتهاء
                        </label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').substring(0, 4);
                            if (val.length >= 2) {
                              setCardExpiry(`${val.substring(0, 2)}/${val.substring(2)}`);
                            } else {
                              setCardExpiry(val);
                            }
                          }}
                          placeholder="MM/YY"
                          dir="ltr"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-mono text-center focus:border-blue-600 outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          رمز الأمان (CVC)
                        </label>
                        <input
                          type="password"
                          maxLength={4}
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ''))}
                          placeholder="•••"
                          dir="ltr"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-mono text-center focus:border-blue-600 outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'apple_pay' && (
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs text-slate-600">
                    <p className="font-semibold text-slate-900 mb-1">الدفع السريع بلمسة واحدة</p>
                    <p>
                      عند النقر على "متابعة للدفع"، ستفتح لك نافذة Apple Pay الرسمية لتأكيد العملية عبر Face ID أو Touch ID.
                    </p>
                  </div>
                )}

                {paymentMethod === 'local_pay' && (
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs text-slate-600">
                    <p className="font-semibold text-slate-900 mb-1">دعم المحافظ الإقليمية</p>
                    <p>
                      سيتم توجيهك بأمان لاستكمال الدفع عبر محفظتك الرقمية المعتمدة (stc pay أو المحافظ المحلية).
                    </p>
                  </div>
                )}

                {/* Terms Agreement */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded mt-0.5 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-xs text-slate-600 select-none cursor-pointer">
                    أوافق على <span className="font-bold text-slate-900">شروط الاستخدام الرقمي</span> وسياسة خصوصية البيانات وتأكيد استلام ملف الـ PDF فوراً.
                  </label>
                </div>
              </div>

              {/* Demo Mode Toggle helper (for reviewing failed vs success states) */}
              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium">تجربة حالة فشل الدفع (للمعاينة البرمجية):</span>
                <button
                  type="button"
                  onClick={() => setSimulateFailure(!simulateFailure)}
                  className={`px-3 py-1 rounded-lg font-bold text-xs transition-colors ${
                    simulateFailure
                      ? 'bg-red-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-700'
                  }`}
                >
                  {simulateFailure ? 'مفعل (ستفشل المعاملة)' : 'معطل (ستنجح المعاملة)'}
                </button>
              </div>
            </div>

            {/* LEFT COLUMN (RTL): Order Summary Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-md sticky top-24">
                <h3 className="text-base font-bold text-[#0b192c] border-b border-slate-100 pb-3 mb-4">
                  ملخص الطلب
                </h3>

                {/* Product Preview Card */}
                <div className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 mb-5">
                  <div className="w-14 h-18 bg-[#0b192c] rounded-lg text-white flex flex-col items-center justify-center p-1.5 shrink-0 shadow-2xs">
                    <FileText className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-[8px] font-mono uppercase text-slate-300">PDF</span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-[#0b192c] block line-clamp-1">
                      {PRODUCT_INFO.productTitle}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {PRODUCT_INFO.fileSize}
                    </span>
                    <span className="inline-block mt-1 text-[10px] font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                      نسخة رقمية دائمة
                    </span>
                  </div>
                </div>

                {/* Pricing Line Items */}
                <div className="space-y-2.5 text-xs sm:text-sm border-b border-slate-100 pb-4 mb-4">
                  <div className="flex justify-between text-slate-600">
                    <span>قيمة الدليل الرقمي</span>
                    <span className="font-semibold text-slate-800">{priceFormatted}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>رسوم التسليم الرقمي الفوري</span>
                    <span className="text-emerald-600 font-bold">مجاناً</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>التحديثات المستقبلية مدى الحياة</span>
                    <span className="text-emerald-600 font-bold">مشمولة</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-base font-extrabold text-[#0b192c]">المجموع النهائي</span>
                  <div className="text-left">
                    <span className="text-2xl font-black text-[#1d4ed8] tracking-tight">
                      {priceFormatted}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-medium">
                      دفع لمرة واحدة فقط
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-base font-bold text-white bg-[#0b192c] hover:bg-[#1d4ed8] active:scale-[0.99] rounded-xl shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>متابعة للدفع الآمن ({priceFormatted})</span>
                </button>

                {/* Security badges */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>تحميل فوري</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>ضمان الأمان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
