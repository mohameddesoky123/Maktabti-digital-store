import React, { useState, useEffect } from 'react';
import { AppView, CurrencyCode, OrderDetails } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatsInside } from './components/WhatsInside';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { PdfPreview } from './components/PdfPreview';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { LegalModals, ModalType } from './components/LegalModals';
import { CheckoutPage } from './components/checkout/CheckoutPage';
import { PaymentProcessing } from './components/checkout/PaymentProcessing';
import { PaymentFailed } from './components/checkout/PaymentFailed';
import { PaymentSuccess } from './components/checkout/PaymentSuccess';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('SAR');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [activeLegalModal, setActiveLegalModal] = useState<ModalType>(null);
  const [currentOrder, setCurrentOrder] = useState<OrderDetails | null>(null);
  const [shouldSimulateFail, setShouldSimulateFail] = useState(false);

  // Scroll spy for active section highlight
  useEffect(() => {
    if (currentView !== 'landing') return;

    const sectionIds = ['hero', 'inside', 'benefits', 'how-it-works', 'preview', 'reviews', 'faq'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Scroll to section helper
  const handleScrollToSection = (id: string) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handlers for checkout flow
  const handleOpenCheckout = () => {
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedToPayment = (orderDetails: OrderDetails, simulateFail: boolean = false) => {
    setCurrentOrder(orderDetails);
    setShouldSimulateFail(simulateFail);
    setCurrentView('processing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSuccess = () => {
    setCurrentView('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentFail = () => {
    setCurrentView('failed');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0b192c] selection:bg-[#2563eb] selection:text-white" dir="rtl">
      {/* 1. SEPARATE CHECKOUT SCREEN */}
      {currentView === 'checkout' && (
        <CheckoutPage
          currentCurrency={currentCurrency}
          onCurrencyChange={setCurrentCurrency}
          onBackToLanding={handleBackToLanding}
          onProceedToPayment={handleProceedToPayment}
        />
      )}

      {/* 2. PAYMENT PROCESSING SCREEN */}
      {currentView === 'processing' && currentOrder && (
        <PaymentProcessing
          orderDetails={currentOrder}
          shouldSimulateFail={shouldSimulateFail}
          onSuccess={handlePaymentSuccess}
          onFail={handlePaymentFail}
        />
      )}

      {/* 3. PAYMENT FAILED SCREEN */}
      {currentView === 'failed' && (
        <PaymentFailed
          onRetry={() => {
            setShouldSimulateFail(false);
            setCurrentView('checkout');
          }}
          onBackToHome={handleBackToLanding}
        />
      )}

      {/* 4. PAYMENT SUCCESS & DIGITAL DELIVERY SCREEN */}
      {currentView === 'success' && currentOrder && (
        <PaymentSuccess
          orderDetails={currentOrder}
          onBackToHome={handleBackToLanding}
        />
      )}

      {/* 5. PUBLIC LANDING PAGE */}
      {currentView === 'landing' && (
        <>
          <Navbar
            currentCurrency={currentCurrency}
            onCurrencyChange={setCurrentCurrency}
            onOpenCheckout={handleOpenCheckout}
            activeSection={activeSection}
          />

          <main>
            <Hero
              currentCurrency={currentCurrency}
              onOpenCheckout={handleOpenCheckout}
              onOpenPreview={() => handleScrollToSection('preview')}
            />

            <WhatsInside />

            <Benefits onOpenCheckout={handleOpenCheckout} />

            <HowItWorks onOpenCheckout={handleOpenCheckout} />

            <PdfPreview onOpenCheckout={handleOpenCheckout} />

            <Pricing
              currentCurrency={currentCurrency}
              onCurrencyChange={setCurrentCurrency}
              onOpenCheckout={handleOpenCheckout}
            />

            <Testimonials />

            <Faq />

            <FinalCta
              currentCurrency={currentCurrency}
              onOpenCheckout={handleOpenCheckout}
            />
          </main>

          <Footer
            onOpenModal={setActiveLegalModal}
            onNavigateSection={handleScrollToSection}
          />

          {/* Reusable Legal Modals */}
          <LegalModals
            activeModal={activeLegalModal}
            onClose={() => setActiveLegalModal(null)}
          />
        </>
      )}
    </div>
  );
}
