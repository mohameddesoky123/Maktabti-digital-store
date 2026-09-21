import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowLeft, Globe } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCIES } from '../data/productData';

interface NavbarProps {
  currentCurrency: CurrencyCode;
  onCurrencyChange: (code: CurrencyCode) => void;
  onOpenCheckout: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenCheckout,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'inside', label: 'ماذا ستحصل عليه؟' },
    { id: 'benefits', label: 'المميزات' },
    { id: 'how-it-works', label: 'كيف يعمل؟' },
    { id: 'preview', label: 'معاينة الملف' },
    { id: 'faq', label: 'الأسئلة الشائعة' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-transparent py-4 sm:py-5'
      }`}
      dir="rtl"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* RIGHT: Logo + Brand Name */}
          <div className="flex items-center gap-6 shrink-0">
            <Logo
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              size="md"
            />
          </div>

          {/* CENTER: Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-2 text-[15px] font-medium transition-colors duration-200 rounded-lg group ${
                    isActive
                      ? 'text-[#1d4ed8] font-semibold'
                      : 'text-[#0b192c]/85 hover:text-[#1d4ed8]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Smooth animated underline */}
                  <span
                    className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#1d4ed8] rounded-full transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* LEFT: Currency Selector + Primary CTA */}
          <div className="flex items-center gap-3">
            {/* Currency Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100/90 hover:bg-slate-200/80 rounded-lg border border-slate-200/70 transition-colors"
                title="تغيير العملة المعروضة"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{currentCurrency}</span>
              </button>

              {currencyDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setCurrencyDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50">
                    <div className="px-3 py-1 text-[11px] font-semibold text-slate-400">
                      اختر عملة العرض
                    </div>
                    {CURRENCIES.map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => {
                          onCurrencyChange(curr.code);
                          setCurrencyDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs text-right transition-colors ${
                          currentCurrency === curr.code
                            ? 'bg-blue-50 text-blue-700 font-semibold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{curr.name}</span>
                        <span className="font-mono text-slate-400">{curr.symbol}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Main CTA Button */}
            <button
              onClick={onOpenCheckout}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 text-sm sm:text-[15px] font-bold text-white bg-[#0b192c] hover:bg-[#1d4ed8] active:scale-[0.98] rounded-xl shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer group"
            >
              <span>احصل على الملف الآن</span>
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="القائمة الرئيسية"
              className="lg:hidden p-2 text-[#0b192c] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden">
          <div className="bg-white border-b border-slate-200 shadow-xl px-6 py-6 max-h-[calc(100vh-65px)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`flex items-center justify-between w-full py-3 px-4 text-base font-semibold rounded-xl text-right transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-[#1d4ed8]'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#1d4ed8]" />}
                  </button>
                );
              })}
            </div>

            {/* Mobile Currency & CTA */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span className="font-medium">العملة المعروضة:</span>
                <div className="flex gap-1.5 flex-wrap">
                  {CURRENCIES.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => onCurrencyChange(c.code)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                        currentCurrency === c.code
                          ? 'bg-[#0b192c] text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {c.code}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full py-3.5 px-4 text-base font-bold text-white bg-[#0b192c] hover:bg-[#1d4ed8] active:scale-[0.99] rounded-xl shadow-md text-center transition-all flex items-center justify-center gap-2"
              >
                <span>احصل على الملف الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
