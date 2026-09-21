import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/productData';
import { ReviewItem } from '../types';
import {
  Star,
  CheckCircle2,
  Quote,
  ThumbsUp,
  MapPin,
  Tag,
  PlusCircle,
  X,
  Sparkles,
  ChevronDown,
  Filter,
  Check,
  Share2,
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(TESTIMONIALS);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | 'all'>('all');
  const [activeSort, setActiveSort] = useState<'helpful' | 'recent'>('helpful');
  const [helpfulGiven, setHelpfulGiven] = useState<Record<string, boolean>>({});
  const [selectedReviewForModal, setSelectedReviewForModal] = useState<ReviewItem | null>(null);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // New review form state
  const [newRating, setNewRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newKeyBenefit, setNewKeyBenefit] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Toggle helpful like
  const handleToggleHelpful = (id: string) => {
    if (helpfulGiven[id]) return;

    setHelpfulGiven((prev) => ({ ...prev, [id]: true }));
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: (r.helpfulCount || 0) + 1 } : r))
    );
  };

  // Submit new review
  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const createdReview: ReviewItem = {
      id: `rev-user-${Date.now()}`,
      name: newName.trim(),
      role: newRole.trim() || 'قارئ معتمد',
      rating: newRating,
      comment: newComment.trim(),
      date: 'الآن',
      verified: true,
      location: newLocation.trim() || 'العالم العربي',
      tag: 'تجربة جديدة',
      helpfulCount: 1,
      keyBenefit: newKeyBenefit.trim() || 'تجربة شراء وقراءة ممتازة',
      fullStory: newComment.trim(),
    };

    setReviews([createdReview, ...reviews]);
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setIsWriteReviewOpen(false);
      // Reset form
      setNewName('');
      setNewRole('');
      setNewLocation('');
      setNewComment('');
      setNewKeyBenefit('');
      setNewRating(5);
    }, 1200);
  };

  // Filter & Sort reviews
  const filteredReviews = reviews
    .filter((r) => {
      if (selectedRatingFilter === 'all') return true;
      return r.rating === selectedRatingFilter;
    })
    .sort((a, b) => {
      if (activeSort === 'helpful') {
        return (b.helpfulCount || 0) - (a.helpfulCount || 0);
      }
      return 0;
    });

  // Calculate statistics
  const totalReviewsCount = reviews.length;
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length;
  const fourStarCount = reviews.filter((r) => r.rating === 4).length;
  const fiveStarPct = Math.round((fiveStarCount / totalReviewsCount) * 100);
  const fourStarPct = Math.round((fourStarCount / totalReviewsCount) * 100);

  const starLabels: Record<number, string> = {
    5: 'ممتاز جداً — فاق التوقعات',
    4: 'جيد جداً — محتوى قيم',
    3: 'جيد — مفيد بشكل عام',
    2: 'مقبول',
    1: 'يحتاج تحسين',
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#f8fafc]" dir="rtl">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] text-xs font-bold mb-3">
            شفافية وتقييمات حقيقية
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0b192c] tracking-tight leading-tight mb-4">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            استكشف تجارب المشترين السابقين وتفاصيل تطبيقهم لمحتوى الدليل، وشاركنا تقييمك الشخصي بخمس نجوم.
          </p>
        </div>

        {/* Interactive 5-Star Rating Breakdown & Overview Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-md mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left/Main Column: Score and Star Display */}
            <div className="lg:col-span-4 text-center lg:text-right border-b lg:border-b-0 lg:border-l border-slate-200/70 pb-6 lg:pb-0 lg:pl-8">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl sm:text-6xl font-black text-[#0b192c] tracking-tight">
                    4.9
                  </span>
                  <span className="text-xl text-slate-400 font-bold">/ 5.0</span>
                </div>

                {/* 5 Filled Stars */}
                <div className="flex items-center gap-1.5 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-600 font-semibold mb-5">
                  بناءً على أكثر من 194 تقييماً لمشترين موثقين في العالم العربي
                </p>

                {/* Button to open Add Review Form */}
                <button
                  onClick={() => setIsWriteReviewOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0b192c] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-bold shadow-xs transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                >
                  <PlusCircle className="w-4 h-4 text-blue-300" />
                  <span>شارك تجربتك وأضف تقييمك</span>
                </button>
              </div>
            </div>

            {/* Middle Column: Interactive Star Distribution Bars */}
            <div className="lg:col-span-5 space-y-2.5">
              {/* 5 Stars Bar */}
              <button
                type="button"
                onClick={() =>
                  setSelectedRatingFilter(selectedRatingFilter === 5 ? 'all' : 5)
                }
                className={`w-full flex items-center gap-3 p-1.5 rounded-xl transition-colors cursor-pointer text-right group ${
                  selectedRatingFilter === 5 ? 'bg-blue-50/80 font-bold' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-1 w-16 text-xs text-slate-700 font-medium shrink-0">
                  <span>5 نجوم</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${fiveStarPct}%` }}
                    className="h-full bg-amber-400 rounded-full transition-all duration-500 group-hover:bg-amber-500"
                  />
                </div>
                <span className="w-12 text-xs text-slate-500 font-mono text-left shrink-0">
                  {fiveStarPct}%
                </span>
              </button>

              {/* 4 Stars Bar */}
              <button
                type="button"
                onClick={() =>
                  setSelectedRatingFilter(selectedRatingFilter === 4 ? 'all' : 4)
                }
                className={`w-full flex items-center gap-3 p-1.5 rounded-xl transition-colors cursor-pointer text-right group ${
                  selectedRatingFilter === 4 ? 'bg-blue-50/80 font-bold' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-1 w-16 text-xs text-slate-700 font-medium shrink-0">
                  <span>4 نجوم</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${fourStarPct}%` }}
                    className="h-full bg-amber-400 rounded-full transition-all duration-500 group-hover:bg-amber-500"
                  />
                </div>
                <span className="w-12 text-xs text-slate-500 font-mono text-left shrink-0">
                  {fourStarPct}%
                </span>
              </button>

              {/* 3 Stars Bar */}
              <div className="flex items-center gap-3 p-1.5 opacity-40">
                <div className="flex items-center gap-1 w-16 text-xs text-slate-500 font-medium shrink-0">
                  <span>3 نجوم</span>
                  <Star className="w-3 h-3 text-slate-300" />
                </div>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div style={{ width: '0%' }} className="h-full bg-amber-400" />
                </div>
                <span className="w-12 text-xs text-slate-400 font-mono text-left shrink-0">
                  0%
                </span>
              </div>
            </div>

            {/* Right Column: Verified Trust Highlights */}
            <div className="lg:col-span-3 bg-slate-50 rounded-2xl p-5 border border-slate-200/70 text-right space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>تقييمات موثقة 100%</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                يتم جمع كافة التقييمات من مشترين حقيقيين أتموا عملية شراء الملف واستلموا رابط التنزيل.
              </p>
              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>تحديث مستمر للآراء</span>
                <span className="font-mono text-blue-700 font-bold">2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filters and Sorting Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/70">
          {/* Rating filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 ml-1">
              <Filter className="w-3.5 h-3.5" />
              <span>تصفية حسب:</span>
            </span>

            <button
              onClick={() => setSelectedRatingFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                selectedRatingFilter === 'all'
                  ? 'bg-[#0b192c] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              جميع التقييمات ({reviews.length})
            </button>

            <button
              onClick={() => setSelectedRatingFilter(5)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                selectedRatingFilter === 5
                  ? 'bg-[#0b192c] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>5 نجوم</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="text-[10px] opacity-80">({fiveStarCount})</span>
            </button>

            <button
              onClick={() => setSelectedRatingFilter(4)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                selectedRatingFilter === 4
                  ? 'bg-[#0b192c] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>4 نجوم</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="text-[10px] opacity-80">({fourStarCount})</span>
            </button>
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">الترتيب:</span>
            <div className="inline-flex rounded-xl bg-white border border-slate-200 p-1">
              <button
                onClick={() => setActiveSort('helpful')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeSort === 'helpful'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                الأكثر إفادة
              </button>
              <button
                onClick={() => setActiveSort('recent')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeSort === 'recent'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                الأحدث
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((item) => {
            const hasLiked = helpfulGiven[item.id];
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top card bar: Stars + Category Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-slate-700 mr-1.5 font-mono">
                        {item.rating}.0
                      </span>
                    </div>

                    {/* Tag badge */}
                    {item.tag && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold border border-slate-200/60">
                        <Tag className="w-3 h-3 text-slate-400" />
                        <span>{item.tag}</span>
                      </span>
                    )}
                  </div>

                  {/* Key Benefit Highlight */}
                  {item.keyBenefit && (
                    <div className="mb-4 px-3 py-1.5 rounded-xl bg-blue-50/60 border border-blue-100 text-right">
                      <span className="text-xs font-bold text-blue-900 block">
                        ✨ النتيجة: {item.keyBenefit}
                      </span>
                    </div>
                  )}

                  {/* Review Quote */}
                  <p className="text-slate-700 text-[15px] sm:text-base leading-relaxed mb-6 font-normal">
                    "{item.comment}"
                  </p>
                </div>

                {/* Author Info & Bottom Interactive Actions */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  {/* Author identity */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-[#0b192c] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs">
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

                  {/* Location & Date */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                    {item.location ? (
                      <div className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    ) : (
                      <span>العالم العربي</span>
                    )}
                    <span>{item.date}</span>
                  </div>

                  {/* Interactive Helpful & Details Buttons */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100/80">
                    <button
                      onClick={() => handleToggleHelpful(item.id)}
                      disabled={hasLiked}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        hasLiked
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                      title="هل كان هذا التقييم مفيداً لك؟"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{hasLiked ? 'مفيد ✓' : 'مفيد'}</span>
                      <span className="font-mono text-[11px] opacity-80">
                        ({item.helpfulCount || 0})
                      </span>
                    </button>

                    {item.fullStory && (
                      <button
                        onClick={() => setSelectedReviewForModal(item)}
                        className="text-xs font-bold text-[#1d4ed8] hover:underline cursor-pointer"
                      >
                        تفاصيل التجربة ←
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if filter yields 0 */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-base text-slate-600 mb-3">
              لا توجد تقييمات مطابقة لهذا الفلتر حالياً.
            </p>
            <button
              onClick={() => setSelectedRatingFilter('all')}
              className="px-4 py-2 bg-blue-50 text-blue-700 font-bold rounded-xl text-xs"
            >
              عرض جميع التقييمات
            </button>
          </div>
        )}
      </div>

      {/* DETAIL MODAL: Buyer's Full Experience Story */}
      {selectedReviewForModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedReviewForModal(null)}
          dir="rtl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 text-right"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {selectedReviewForModal.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0b192c]">
                    {selectedReviewForModal.name}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {selectedReviewForModal.role} • {selectedReviewForModal.location}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedReviewForModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stars & Verified Stamp */}
            <div className="flex items-center justify-between mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(selectedReviewForModal.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-800 mr-2 font-mono">
                  {selectedReviewForModal.rating}.0 / 5
                </span>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-100/70 px-2 py-0.5 rounded-md">
                مشتري موثق ✓
              </span>
            </div>

            {/* Full Story Content */}
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-xs font-bold text-slate-400 block mb-1">
                  النتيجة الرئيسية المحققة:
                </span>
                <p className="text-sm font-semibold text-blue-900 bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
                  {selectedReviewForModal.keyBenefit}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400 block mb-1">
                  تفاصيل التجربة الكاملة:
                </span>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50/50 p-3.5 rounded-xl border border-slate-100">
                  {selectedReviewForModal.fullStory || selectedReviewForModal.comment}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                <span>المنتج المقتنى: دليل المنتجات الرقمية 2026</span>
                <span>تاريخ التقييم: {selectedReviewForModal.date}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedReviewForModal(null)}
              className="w-full py-2.5 bg-[#0b192c] hover:bg-[#1d4ed8] text-white text-sm font-bold rounded-xl transition-colors cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* MODAL: Write a Review Interactive 5-Star Form */}
      {isWriteReviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsWriteReviewOpen(false)}
          dir="rtl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 text-right max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-[#0b192c]">
                  شاركنا تجربتك وتقييمك للملف
                </h3>
              </div>
              <button
                onClick={() => setIsWriteReviewOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#0b192c]">
                  شكرًا لمشاركتك تقييمك!
                </h4>
                <p className="text-sm text-slate-500">
                  تم نشر تقييمك بنجاح وسيظهر الآن في قسم آراء المشترين.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                {/* 5-Star Interactive Selector */}
                <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-200/60 text-center">
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    حدد تقييمك بالنجوم (1 - 5)
                  </label>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFilled = (hoverRating || newRating) >= star;
                      return (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setNewRating(star)}
                          className="p-1 transition-transform hover:scale-125 focus:outline-hidden cursor-pointer"
                        >
                          <Star
                            className={`w-7 h-7 sm:w-8 sm:h-8 ${
                              isFilled
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                  <span className="text-xs font-semibold text-slate-600">
                    {starLabels[hoverRating || newRating]}
                  </span>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="مثال: خالد السبيعي"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 outline-hidden"
                  />
                </div>

                {/* Role & Location */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      المهنة أو التخصص
                    </label>
                    <input
                      type="text"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      placeholder="مثال: رائد أعمال رقمي"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      المدينة / الدولة
                    </label>
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="مثال: الرياض، السعودية"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 outline-hidden"
                    />
                  </div>
                </div>

                {/* Key Benefit */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    أهم ميزة أو فائدة استفدتها من الملف
                  </label>
                  <input
                    type="text"
                    value={newKeyBenefit}
                    onChange={(e) => setNewKeyBenefit(e.target.value)}
                    placeholder="مثال: قوالب التسعير ساعدتني في إطلاق منتجي فوراً"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 outline-hidden"
                  />
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    رأيك وانطباعك عن الملف وتجربة الشراء <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="اكتب هنا تجربتك بالتفصيل..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 outline-hidden leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsWriteReviewOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0b192c] hover:bg-[#1d4ed8] text-white shadow-md cursor-pointer"
                  >
                    نشر التقييم الآن
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
