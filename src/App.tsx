/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import StorySection from './components/StorySection';
import ProductsShowcase from './components/ProductsShowcase';
import MarqueeBanner from './components/MarqueeBanner';
import FeeCalculator from './components/FeeCalculator';
import LeadershipSection from './components/LeadershipSection';
import Testimonials from './components/Testimonials';
import DeveloperApiSection from './components/DeveloperApiSection';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import SignUpModal from './components/SignUpModal';

export default function App() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#011B33] flex flex-col font-sans selection:bg-[#00C3F8]/30 selection:text-[#011B33]">
      {/* Navigation Top Bar & Mobile Menu */}
      <Navbar
        onOpenCheckoutDemo={() => setCheckoutModalOpen(true)}
        onOpenSignUp={() => setSignUpModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section matching reference curved card */}
        <Hero
          onOpenCheckoutDemo={() => setCheckoutModalOpen(true)}
          onOpenSignUp={() => setSignUpModalOpen(true)}
        />

        {/* 4-Column Key Metrics */}
        <StatsBar />

        {/* "Turning Ideas Into Market Leaders" Story & Photo Cards */}
        <StorySection />

        {/* "Our Solutions" Interactive Capabilities Showcase */}
        <ProductsShowcase
          onOpenCheckoutDemo={() => setCheckoutModalOpen(true)}
          onOpenSignUp={() => setSignUpModalOpen(true)}
        />

        {/* Marquee Banner Divider */}
        <MarqueeBanner />

        {/* Transparent Paystack Pricing & Volume Calculator */}
        <FeeCalculator
          onOpenSignUp={() => setSignUpModalOpen(true)}
        />

        {/* Leadership & Builders Grid */}
        <LeadershipSection />

        {/* Customer Proof & Testimonials */}
        <Testimonials />

        {/* Developer REST API & SDKs Showcase */}
        <DeveloperApiSection
          onOpenCheckoutDemo={() => setCheckoutModalOpen(true)}
          onOpenSignUp={() => setSignUpModalOpen(true)}
        />

        {/* Lead Capture Contact Section */}
        <ContactCta
          onOpenCheckoutDemo={() => setCheckoutModalOpen(true)}
        />
      </main>

      {/* Standout Vibrant Footer matching reference */}
      <Footer
        onOpenCheckoutDemo={() => setCheckoutModalOpen(true)}
        onOpenSignUp={() => setSignUpModalOpen(true)}
      />

      {/* Interactive Paystack Checkout Demo Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
      />

      {/* Sign Up / Account Creation Modal */}
      <SignUpModal
        isOpen={signUpModalOpen}
        onClose={() => setSignUpModalOpen(false)}
        onOpenCheckoutDemo={() => setCheckoutModalOpen(true)}
      />
    </div>
  );
}
