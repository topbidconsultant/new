/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ShieldCheck,
  Phone,
  Mail,
  Award,
  CheckCircle2,
  FileText,
  FileCheck2,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Send,
  Building2,
  BadgeCheck,
  HelpCircle,
  ChevronDown,
  Menu,
  X,
  Layers,
  ArrowRight,
  TrendingUp,
  Landmark,
  Calculator,
  UserCheck,
  Lock,
  Headphones,
  SlidersHorizontal
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Startup India (DPIIT) Certificate Registration',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Interactive Estimator State
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Startup India (DPIIT) Certificate',
    'GeM Portal Registration & Setup'
  ]);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const messageText = `*New Inquiry - TopBid Consultant*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Required Service:* ${formData.service}\n*Message:* ${formData.message || 'None'}`;
    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/918160016309?text=${encoded}`;

    setFormSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  const toggleService = (srv: string) => {
    setSelectedServices(prev =>
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const faqItems = [
    {
      q: 'Startup India (DPIIT) Certificate ke kya tender fayde hain?',
      a: 'DPIIT Startup Certificate prapt karne ke baad aapko central/state govt aur GeM tenders me 100% EMD (Earnest Money Deposit) exemption milta hai, prior turnover aur prior experience requirements me relaxation milti hai, aur 3 saal ke liye Section 80-IAC Income Tax Holiday claim kiya ja sakta hai. Isse working capital block nahi hota!'
    },
    {
      q: 'GeM Registration me kya-kya documents lagte hain?',
      a: 'GeM registration ke liye primary documents hain: PAN Card (Company/Proprietor), Aadhaar Card (linked mobile number), GST Certificate, Active Current Bank Account details (cancelled cheque / bank statement), ITR acknowledgment receipts (last 2-3 years), aur Digital Signature Certificate (DSC Class 3).'
    },
    {
      q: 'GeM OEM Vendor Assessment me kitna time lagta hai?',
      a: 'GeM OEM Vendor Assessment (conducted by QCI / RITES) complete hone me approximately 2 to 2.5 Months ka standard time lagta hai. Is duration me hum desktop assessment, manufacturing document vetting, declaration drafting aur final clearance tak poora end-to-end support provide karte hain.'
    },
    {
      q: 'Kya bina experience ke new startups tender bid kar sakte hain?',
      a: 'Haan! Startup India DPIIT recognition certificate hone par government procurement policy ke antargat "Prior Experience" aur "Prior Turnover" criteria se exemption di jaati hai. Hum ensure karte hain ki bidding documents me exemption clause properly cite kiya jaye.'
    },
    {
      q: 'Dedicated Tender Executive service me TopBid kya provide karta hai?',
      a: 'Dedicated Tender Executive aapki company ke liye daily GeM & CPPP/State portals monitor karta hai, relevant tenders identify karta hai, line-by-line compliance sheet banata hai, BoQ rates calculate karta hai, DSC encryption ke saath tender portal pe timely upload karta hai, aur shortfall letters ka representation draft karta hai.'
    },
    {
      q: 'Payment kaise karein aur receipt kaise milegi?',
      a: 'Aap official UPI ID (s0004829467681811@slc) ya Slice Small Finance Bank ke Current Account me direct NEFT/RTGS/IMPS kar sakte hain. Payment hone ke baad screenshot WhatsApp (+91 81600 16309) par share karne par GST Tax Invoice turant provide kiya jata hai.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 🟢 Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/918160016309?text=Hello%20TopBid%20Consultant,%20I%20need%20assistance%20with%20Startup%20India%20Certificate%20/%20GeM%20/%20Tender%20Bidding."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp TopBid"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-white animate-bounce"
        >
          <i className="fa-brands fa-whatsapp text-3xl"></i>
        </a>
      </div>

      {/* 🔝 Top Official Verification Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline" /> Govt. Registered Enterprise
            </span>
            <span className="text-slate-300 font-mono text-[11px] flex items-center gap-1">
              GST / Reg No: <strong className="text-amber-400 font-bold tracking-wider">24BNWPG6766M1Z3</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <a
              href="mailto:support@topbidconsultant.com"
              className="hover:text-amber-400 transition flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" /> support@topbidconsultant.com
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="tel:+918160016309"
              className="hover:text-amber-400 transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 81600 16309
            </a>
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-md group-hover:bg-blue-800 transition">
                <i className="fa-solid fa-gavel text-xl text-amber-400"></i>
              </div>
              <div>
                <span className="text-2xl font-black text-slate-900 tracking-tight flex items-baseline">
                  TopBid<span className="text-amber-500">.</span>
                </span>
                <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                  Consultant
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 font-semibold text-slate-700 items-center text-sm">
              <a href="#home" className="hover:text-blue-900 transition">Home</a>
              <a href="#gem-spotlight" className="hover:text-blue-900 transition text-blue-900 font-bold">GeM Registration</a>
              <a href="#startup-india" className="hover:text-amber-600 transition font-bold text-amber-600">Startup India</a>
              <a href="#services" className="hover:text-blue-900 transition">Tender Services</a>
              <a href="#why-choose-us" className="hover:text-blue-900 transition">Why Choose Us</a>
              <a href="#iso-certifications" className="hover:text-blue-900 transition">ISO Standards</a>
              <a href="#paynow" className="hover:text-amber-600 transition font-bold text-amber-600 flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                <Landmark className="w-3.5 h-3.5" /> Pay Now
              </a>
              <a href="#contact" className="hover:text-blue-900 transition">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition shadow-sm text-sm flex items-center gap-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-slate-900 p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 font-medium text-sm animate-in fade-in slide-in-from-top-2 duration-150">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-900"
            >
              Home
            </a>
            <a
              href="#gem-spotlight"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-blue-900 font-bold hover:text-blue-800"
            >
              GeM Registration
            </a>
            <a
              href="#startup-india"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-amber-600 font-bold hover:text-amber-700"
            >
              Startup India Certificate (DPIIT)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-900"
            >
              Tender Services & Bidding
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-900"
            >
              Why Choose Us
            </a>
            <a
              href="#iso-certifications"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-900"
            >
              ISO Standards
            </a>
            <a
              href="#paynow"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-amber-600 font-bold hover:text-amber-700"
            >
              Pay Now (UPI & Bank)
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-900"
            >
              About Us
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 hover:text-blue-900"
            >
              FAQs
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-center mt-2 bg-blue-900 text-white rounded-xl font-bold"
            >
              Get Free Quote
            </a>
          </div>
        )}
      </header>

      {/* 🌟 TOP FULL-WIDTH CONTINUOUS AUTO-SCROLLER */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 py-3.5 border-b border-amber-500/40 overflow-hidden relative shadow-lg">
        <div className="max-w-7xl mx-auto px-4 mb-2 flex justify-between items-center text-xs">
          <span className="text-amber-400 font-extrabold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span> GeM, Startup India DPIIT & Tender Solutions
          </span>
          <span className="text-slate-400 text-[11px] hidden sm:inline">Hover to pause auto-scroll</span>
        </div>

        <div className="animate-full-scroll gap-4 py-1">
          {/* Card 1 */}
          <div className="w-[280px] bg-slate-800/95 border-2 border-amber-400/80 p-3.5 rounded-2xl text-white shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-base shrink-0">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <div>
                <span className="text-[9px] uppercase font-black text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">DPIIT Govt of India</span>
                <h4 className="font-bold text-xs mt-0.5">Startup India Certificate</h4>
              </div>
            </div>
            <p className="text-[11px] text-slate-300 mt-2">DPIIT recognition for 100% EMD waiver & 80-IAC tax benefits.</p>
          </div>

          {/* Card 2 */}
          <div className="w-[280px] bg-slate-800/95 border border-blue-400/50 p-3.5 rounded-2xl text-white shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shrink-0">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div>
                <span className="text-[9px] uppercase font-black text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded">GeM Portal</span>
                <h4 className="font-bold text-xs mt-0.5">GeM Registration</h4>
              </div>
            </div>
            <p className="text-[11px] text-slate-300 mt-2">Seller/Buyer onboarding, tax assessment & catalog sync.</p>
          </div>

          {/* Card 3 */}
          <div className="w-[280px] bg-slate-800/95 border border-slate-700 p-3.5 rounded-2xl text-white shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-base shrink-0">
                <i className="fa-solid fa-trademark"></i>
              </div>
              <div>
                <span className="text-[9px] uppercase font-black text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">OEM Hub</span>
                <h4 className="font-bold text-xs mt-0.5">Brand & Vendor Assessment</h4>
              </div>
            </div>
            <p className="text-[11px] text-slate-300 mt-2">QCI vendor assessment & trademark pairing approvals.</p>
          </div>

          {/* Card 4 */}
          <div className="w-[280px] bg-slate-800/95 border border-purple-400/50 p-3.5 rounded-2xl text-white shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-base shrink-0">
                <i className="fa-solid fa-gavel"></i>
              </div>
              <div>
                <span className="text-[9px] uppercase font-black text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded">Tender Win</span>
                <h4 className="font-bold text-xs mt-0.5">5000+ Bids Submitted</h4>
              </div>
            </div>
            <p className="text-[11px] text-slate-300 mt-2">Pan-India tender preparation and portal submission.</p>
          </div>

          {/* Card 5 (Duplicate for loop) */}
          <div className="w-[280px] bg-slate-800/95 border-2 border-amber-400/80 p-3.5 rounded-2xl text-white shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-base shrink-0">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <div>
                <span className="text-[9px] uppercase font-black text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">DPIIT Govt of India</span>
                <h4 className="font-bold text-xs mt-0.5">Startup India Certificate</h4>
              </div>
            </div>
            <p className="text-[11px] text-slate-300 mt-2">DPIIT recognition for 100% EMD waiver & 80-IAC tax benefits.</p>
          </div>

          {/* Card 6 (Duplicate for loop) */}
          <div className="w-[280px] bg-slate-800/95 border border-blue-400/50 p-3.5 rounded-2xl text-white shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shrink-0">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div>
                <span className="text-[9px] uppercase font-black text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded">GeM Portal</span>
                <h4 className="font-bold text-xs mt-0.5">GeM Registration</h4>
              </div>
            </div>
            <p className="text-[11px] text-slate-300 mt-2">Seller/Buyer onboarding, tax assessment & catalog sync.</p>
          </div>
        </div>
      </div>

      {/* 1. 🎥 Hero Section */}
      <section id="home" className="relative min-h-[86vh] flex items-center py-16 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center animate-video-motion opacity-30 filter contrast-125 brightness-90"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-businessman-working-on-a-laptop-42998-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
                <Award className="w-4 h-4 text-amber-400" /> One Stop Solution: GeM to Tender Success
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Your Growth, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
                  Our Expertise.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Pan-India GeM, Startup India (DPIIT) certification & E-Tendering consultancy. We manage technical compliance, eligibility scrutiny, BoQ pricing, OEM vendor assessment, and end-to-end portal submission with zero errors.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/918160016309?text=Hello%20TopBid%20Consultant,%20I%20want%20to%20discuss%20GeM%20/%20Tender%20Bidding."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition flex items-center gap-2 shadow-lg shadow-emerald-600/30"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i> WhatsApp Us
                </a>
                <a
                  href="#startup-india"
                  className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black transition flex items-center gap-2 shadow-lg shadow-amber-500/30"
                >
                  <Award className="w-5 h-5 text-slate-950" /> Get Startup Certificate
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-xs sm:text-sm font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Compliance
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" /> DPIIT Certified
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" /> 5000+ Bids Done
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white p-8 rounded-3xl shadow-2xl space-y-6">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider">
                  Dedicated Service
                </span>
                <h3 className="text-2xl font-bold">Dedicated Person for Your Tender & Bidding Work</h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Daily portal search, line-by-line document compliance, certificate drafting, and live encrypted portal submission handled by experts across Pan India.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 bg-slate-900/70 p-3.5 rounded-xl border border-white/10">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">100% Transparency & Trust</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-900/70 p-3.5 rounded-xl border border-white/10">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">Accurate | Timely | Reliable Submission</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="block text-center w-full py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold uppercase tracking-wider transition border border-white/20"
                >
                  Assign Dedicated Person Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 🛒 GEM REGISTRATION SPOTLIGHT SECTION */}
      <section id="gem-spotlight" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold">
                <i className="fa-solid fa-cart-shopping text-amber-400"></i> Government e-Marketplace (GeM) Portal
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                GEM Registration
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                Do you wish to buy or sell goods and services on the Government e-marketplace (GeM portal)? If yes, get expert support for easy GEM registration in India.
              </p>

              <div className="pt-4 pb-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-amber-400 flex items-center justify-center gap-2">
                  <span>What’s included?</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left pt-2">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5 hover:border-amber-400 transition">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg shrink-0">
                    <Headphones className="w-5 h-5 text-slate-950" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Expert Support</h4>
                    <p className="text-[11px] text-slate-300">Dedicated 1-on-1 advisor for your onboarding.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5 hover:border-amber-400 transition">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg shrink-0">
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Tax Assessment Support</h4>
                    <p className="text-[11px] text-slate-300">ITR linking, turnover declaration & GST check.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5 hover:border-amber-400 transition">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg shrink-0">
                    <i className="fa-solid fa-trademark"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Assistance in Brand Registration</h4>
                    <p className="text-[11px] text-slate-300">Fast OEM brand approval & pairing access.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5 hover:border-amber-400 transition">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg shrink-0">
                    <TrendingUp className="w-5 h-5 text-slate-950" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Dominating the Industry</h4>
                    <p className="text-[11px] text-slate-300">Optimized catalog to rank high on buyer searches.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5 hover:border-amber-400 transition">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg shrink-0">
                    <Layers className="w-5 h-5 text-slate-950" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">End-to-end Assistance</h4>
                    <p className="text-[11px] text-slate-300">From account signup to live bid submission.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5 hover:border-amber-400 transition">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-slate-950" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Helped Sellers Successfully</h4>
                    <p className="text-[11px] text-slate-300">500+ businesses winning govt contracts.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm font-semibold text-amber-300 text-center sm:text-left">
                  Let our experts assist you with GEM registration without any hassle.
                </p>
                <a
                  href="https://wa.me/918160016309?text=Hello%20TopBid%20Consultant,%20I%20want%20to%20register%20on%20GeM%20portal%20with%20expert%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm transition shadow-lg shadow-amber-500/30 shrink-0 flex items-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i> Start GeM Registration Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 🚀 STARTUP INDIA (DPIIT) CERTIFICATE SPOTLIGHT SECTION */}
      <section id="startup-india" className="py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold">
                <Award className="w-4 h-4 text-amber-600" /> Department for Promotion of Industry and Internal Trade (DPIIT)
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Get Your <span className="text-blue-900">Startup India Certificate</span> & Unlock Tender Benefits
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                TopBid Consultant provides fast-track assistance to help your enterprise obtain the official{' '}
                <strong>DPIIT Certificate of Recognition</strong> under the Startup India Scheme, unlocking immense legal, financial, and tender procurement exemptions.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-900 transition">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">100% EMD & Bid Security Exemption</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Participate in central, state, and GeM tenders without blocking working capital in Earnest Money Deposits (EMD).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-900 transition">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">3-Year Income Tax Holiday (Section 80-IAC)</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Claim 100% tax deduction on profits for 3 consecutive financial years out of the first 10 years of business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-900 transition">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    <BadgeCheck className="w-4 h-4 text-blue-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">80% Patent & 50% Trademark Fee Rebates</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Fast-tracked intellectual property registration with massive government statutory fee reductions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-900 transition">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    <FileCheck2 className="w-4 h-4 text-purple-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Self-Certification Compliance</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Self-certify compliance under 6 labor laws and 3 environmental laws without routine inspections for up to 5 years.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/918160016309?text=Hello%20TopBid%20Consultant,%20I%20want%20to%20apply%20for%20a%20Startup%20India%20(DPIIT)%20Certificate."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition shadow-md shadow-amber-500/20"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i> Apply For Startup India Certificate
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <h3 className="text-xl font-extrabold text-white">Certificate Eligibility Criteria</h3>
                  <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
                    DPIIT Norms
                  </span>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span>
                      <strong>Entity Type:</strong> Incorporated as a Private Limited Company, Limited Liability Partnership (LLP), or Registered Partnership Firm.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span>
                      <strong>Age of Entity:</strong> Not exceeding 10 years from the date of incorporation / registration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span>
                      <strong>Annual Turnover:</strong> Should not exceed ₹100 Crore in any financial year since incorporation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span>
                      <strong>Original Business:</strong> Entity must not be formed by splitting up or reconstructing an existing business.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span>
                      <strong>Innovation & Scalability:</strong> Working towards innovation, improvement of products/processes/services, or scalable business models.
                    </span>
                  </li>
                </ul>

                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 text-xs text-slate-300 leading-relaxed">
                  <p className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-hand-holding-dollar"></i> Fast-Track Application Assistance:
                  </p>
                  Hum aapka business pitch deck, innovation write-up, MOA/Partnership deed, aur National Single Window System (NSWS) par complete filing handle karte hain.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 🛠️ TENDER & GEM SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Bidding Operations</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">GeM & Government E-Tender Management</h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Everything your enterprise needs from portal onboarding to winning high-value tender contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-amber-300 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl shadow">
                    <i className="fa-solid fa-user-gear"></i>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                    OEM Priority
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">(OEM) Vendor Assessment</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete guidance for QCI / RITES vendor assessment (completed in 2 to 2.5 months), manufacturing capacity validation, and assessment exemption filing on GeM.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-blue-200 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center text-xl shadow">
                    <i className="fa-solid fa-trademark"></i>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                    Brand Onboarding
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Brand Approval & Pairing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast-track GeM brand registration, Trademark verification, OEM dashboard management, and authorizing reseller brand pairings.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-boxes-stacked"></i>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    E-Catalog
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Product Listing & Catalog Upload</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bulk product uploading, technical spec matching, category approvals, MRP validation, and live buyer search optimization.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-hand-holding-hand"></i>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Service Providers
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Service Listing & Custom SLA</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Listing manpower, security, housekeeping, IT, catering, transport, and consulting services with customized price matrix setups.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-file-contract"></i>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    Technical
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Technical & Commercial Bid Preparation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Line-by-line compliance matrix drafting, non-blacklisting declarations, strategic BoQ pricing analysis, and L1 optimization.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center text-xl">
                    <i className="fa-solid fa-user-tie"></i>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                    Dedicated Support
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Dedicated Tender Executive</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A personal bidding expert assigned exclusively to your business for continuous portal tracking, query handling, and DSC submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💡 CUSTOM SERVICE PLAN SELECTOR */}
      <section id="customizer" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Instant Package Selector & WhatsApp Plan */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Quick Plan Customizer</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">Select Your Services</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center text-lg font-bold">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Choose the services you need to prepare an instant customized package for discussion with our senior consultants.
              </p>

              <div className="space-y-2.5">
                {[
                  { id: 'Startup India (DPIIT) Certificate', tag: 'EMD Exemption', desc: 'Full NSWS portal application & pitch documentation' },
                  { id: 'GeM Portal Registration & Setup', tag: 'Portal Access', desc: 'Profile completion, Bank & GST verification' },
                  { id: 'OEM Vendor Assessment (QCI/RITES)', tag: 'Direct OEM', desc: '2-2.5 months guidance & plant inspection prep' },
                  { id: 'Brand Registration & Product Uploading', tag: 'Catalog', desc: 'Trademark linking & category approval' },
                  { id: 'Dedicated Tender Executive (Monthly)', tag: 'End-to-End', desc: 'Daily portal searches & live tender bidding' },
                  { id: 'ISO 9001:2015 QMS Certification', tag: 'Audit Support', desc: 'Accredited certificate for tender score points' }
                ].map(item => {
                  const isChecked = selectedServices.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleService(item.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                        isChecked
                          ? 'bg-blue-900/5 border-blue-900 text-slate-900 font-semibold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center text-xs font-bold transition ${
                            isChecked ? 'bg-blue-900 text-white' : 'border border-slate-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold flex items-center gap-2">
                            {item.id}
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-normal">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/918160016309?text=${encodeURIComponent(
                    `Hello TopBid Consultant, I am interested in a customized plan with the following services:\n${selectedServices.map(s => `- ${s}`).join('\n')}\nPlease share pricing and timeline details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i> Send Selected Plan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 🏆 ISO CERTIFICATIONS SECTION */}
      <section id="iso-certifications" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Standardization & Quality</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">ISO Certifications & Audit Support</h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Accredited certification for all major global ISO standards required in government and corporate tenders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-amber-300 hover:border-blue-900 hover:shadow-md transition">
              <span className="text-[10px] font-extrabold text-amber-700 uppercase bg-amber-100 px-2 py-0.5 rounded">Quality Standard</span>
              <h4 className="font-extrabold text-slate-900 text-sm mt-2 mb-1">ISO 9001:2015</h4>
              <p className="text-xs text-slate-500">Quality Management System (QMS) for tender qualification.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-900 hover:shadow-md transition">
              <span className="text-[10px] font-extrabold text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded">Environment</span>
              <h4 className="font-extrabold text-slate-900 text-sm mt-2 mb-1">ISO 14001 EMS</h4>
              <p className="text-xs text-slate-500">Environmental Management System compliance.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-900 hover:shadow-md transition">
              <span className="text-[10px] font-extrabold text-blue-700 uppercase bg-blue-50 px-2 py-0.5 rounded">Health & Safety</span>
              <h4 className="font-extrabold text-slate-900 text-sm mt-2 mb-1">ISO 45001</h4>
              <p className="text-xs text-slate-500">Occupational Health & Safety Management System.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-900 hover:shadow-md transition">
              <span className="text-[10px] font-extrabold text-purple-700 uppercase bg-purple-50 px-2 py-0.5 rounded">Data Security</span>
              <h4 className="font-extrabold text-slate-900 text-sm mt-2 mb-1">ISO 27001 ISMS</h4>
              <p className="text-xs text-slate-500">Information Security Management for IT & software vendors.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-900 hover:shadow-md transition">
              <span className="text-[10px] font-extrabold text-rose-700 uppercase bg-rose-50 px-2 py-0.5 rounded">Food Safety</span>
              <h4 className="font-extrabold text-slate-900 text-sm mt-2 mb-1">ISO 22000 FSMS</h4>
              <p className="text-xs text-slate-500">Food Safety Management System for catering & FMCG.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-900 hover:shadow-md transition">
              <span className="text-[10px] font-extrabold text-amber-700 uppercase bg-amber-50 px-2 py-0.5 rounded">Energy</span>
              <h4 className="font-extrabold text-slate-900 text-sm mt-2 mb-1">ISO 50001</h4>
              <p className="text-xs text-slate-500">Energy Management System for plant efficiency.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-900 hover:shadow-md transition">
              <span className="text-[10px] font-extrabold text-red-700 uppercase bg-red-50 px-2 py-0.5 rounded">Medical</span>
              <h4 className="font-extrabold text-slate-900 text-sm mt-2 mb-1">ISO 13485</h4>
              <p className="text-xs text-slate-500">Quality Management for Medical Devices manufacturers.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-900 hover:shadow-md transition">
              <span className="text-[10px] font-extrabold text-teal-700 uppercase bg-teal-50 px-2 py-0.5 rounded">Anti-Bribery</span>
              <h4 className="font-extrabold text-slate-900 text-sm mt-2 mb-1">ISO 37001:2016</h4>
              <p className="text-xs text-slate-500">Anti-Bribery Management Systems for corporate tenders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ⭐ WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">Our Competitive Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-1">Why Choose TopBid Consultant?</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              We combine deep regulatory expertise, advanced bid analytics, and dedicated 1-on-1 support to maximize your government contract wins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/90 border border-slate-700 p-7 rounded-2xl hover:border-amber-400 transition group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5 group-hover:bg-amber-500 group-hover:text-slate-900 transition">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Dedicated Tender Executive</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                A personal bidding expert assigned exclusively to your business for continuous portal tracking, document preparation, and live submission.
              </p>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 p-7 rounded-2xl hover:border-amber-400 transition group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mb-5 group-hover:bg-emerald-500 group-hover:text-slate-900 transition">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero Rejection Guarantee</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Rigorous multi-layer technical compliance mapping and certificate vetting ensures your tender is never disqualified on technical or documentation grounds.
              </p>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 p-7 rounded-2xl hover:border-amber-400 transition group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mb-5 group-hover:bg-blue-500 group-hover:text-slate-900 transition">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Strategic BoQ & Pricing Analysis</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Competitive rate evaluation and margin protection strategy to give your company the highest probability of winning the L1 position profitably.
              </p>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 p-7 rounded-2xl hover:border-amber-400 transition group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl mb-5 group-hover:bg-purple-500 group-hover:text-slate-900 transition">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">All Portals Under One Roof</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Comprehensive expertise covering GeM Portal, Central CPPP/eProcure, Indian Railways (IREPS), Defense, NHAI, and all State e-Tendering portals.
              </p>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 p-7 rounded-2xl hover:border-amber-400 transition group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5 group-hover:bg-amber-500 group-hover:text-slate-900 transition">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">100% Data Confidentiality</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Complete security and strict confidentiality for your corporate documents, pricing strategies, proprietary catalogs, and digital signatures (DSC).
              </p>
            </div>

            <div className="bg-slate-800/90 border border-slate-700 p-7 rounded-2xl hover:border-amber-400 transition group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mb-5 group-hover:bg-emerald-500 group-hover:text-slate-900 transition">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Post-Bid & Representation Support</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Active support through technical query drafting, shortfall representations, pre-bid meetings, reverse auction (RA) strategy, and contract finalization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 💳 PAY NOW SECTION */}
      <section id="paynow" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Fast & Secure</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Pay Now - Bank & UPI Options</h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Pay securely via UPI QR Code or Direct Bank Transfer (IMPS / NEFT / RTGS).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* UPI QR Code Card */}
            <div className="lg:col-span-5 bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-8 text-center flex flex-col justify-between shadow-sm hover:shadow-md transition">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
                  <i className="fa-solid fa-qrcode"></i> Instant UPI Pay Now
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">Scan & Pay Using Any UPI App</h3>

                <div className="my-5 mx-auto max-w-[260px] p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl shadow-md flex flex-col items-center justify-center">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=s0004829467681811@slc%26pn=TOPBID%20CONSULTANT%26cu=INR"
                    alt="TopBid Consultant UPI QR Code"
                    className="w-48 h-48 sm:w-52 sm:h-52 object-contain rounded-lg"
                  />
                  <span className="text-slate-800 font-black text-xs mt-2">
                    BHIM <span className="text-orange-500">UPI</span>
                  </span>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-2 max-w-sm mx-auto shadow-sm">
                  <div className="text-left overflow-hidden">
                    <span className="block text-[9px] uppercase font-bold text-slate-400">Official UPI ID</span>
                    <span id="upi-text" className="text-xs font-mono font-black text-blue-950 truncate block">
                      s0004829467681811@slc
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('s0004829467681811@slc', 'upi')}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition flex items-center gap-1.5"
                  >
                    {copiedType === 'upi' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Bank Account Transfer Card */}
            <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="space-y-6">
                <div>
                  <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">Direct Bank Transfer</span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">Bank Account Information</h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1">
                    Official Current Account for consultancy, GeM setup & bidding services.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-xl">
                    <span className="block text-slate-400 text-xs font-medium">Account Name</span>
                    <span className="text-sm sm:text-base font-bold text-white block mt-1">TOPBID CONSULTANT</span>
                  </div>

                  <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-xl">
                    <span className="block text-slate-400 text-xs font-medium">Bank Name</span>
                    <span className="text-sm sm:text-base font-bold text-white block mt-1">SLICE SMALL FINANCE BANK</span>
                  </div>

                  <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="block text-slate-400 text-xs font-medium">Account Number</span>
                      <span className="text-sm sm:text-base font-mono font-bold text-amber-400 block mt-1">
                        033311501088321
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard('033311501088321', 'acc')}
                      className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition"
                      title="Copy Account Number"
                    >
                      {copiedType === 'acc' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="block text-slate-400 text-xs font-medium">IFSC Code</span>
                      <span className="text-sm sm:text-base font-mono font-bold text-amber-400 block mt-1">
                        NESF0000333
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard('NESF0000333', 'ifsc')}
                      className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition"
                      title="Copy IFSC Code"
                    >
                      {copiedType === 'ifsc' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-xl sm:col-span-2">
                    <span className="block text-slate-400 text-xs font-medium">Account Type</span>
                    <span className="text-xs sm:text-sm font-semibold text-white block mt-1">Current Account</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-300">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <i className="fa-solid fa-receipt text-amber-400"></i> Send Payment Screenshot
                  </p>
                  <p>Share payment receipt on WhatsApp for instant invoice confirmation.</p>
                </div>
                <a
                  href="https://wa.me/918160016309?text=Hello%20TopBid%20Consultant,%20I%20have%20made%20the%20payment.%20Here%20is%20my%20receipt."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-lg shadow-emerald-600/30"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i> Share Receipt
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 🏢 ABOUT US SECTION */}
      <section id="about" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs font-bold">
                <Award className="w-4 h-4 text-amber-600" /> Verified GST Reg: 24BNWPG6766M1Z3
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Over <span className="text-blue-900">5000+ Bids Submitted</span> with Proven Success Pan India
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                TopBid Consultant is a registered Pan India GeM & Government E-Tendering advisory firm headquartered in Ahmedabad, Gujarat. Having successfully processed and submitted over <strong>5000+ tenders</strong> across central, state, and PSU portals, we help businesses win contracts with 100% compliant documentation.
              </p>

              <div className="space-y-3 text-slate-700 text-sm font-medium">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>5000+ Bids Submitted Pan India:</strong> Flawlessly managed across GeM, CPPP, Railways & State Portals.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>500+ Happy & Satisfied Clients:</strong> Trusted by manufacturers, suppliers, and service providers.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>100% Technical Accuracy:</strong> Zero rejection record due to document non-compliance.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 text-white font-bold hover:bg-blue-800 transition text-sm shadow-md"
                >
                  Start Your Next Tender Bid <ArrowRight className="w-4 h-4 text-amber-400" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 border-2 border-amber-300 p-6 rounded-2xl text-center shadow-sm hover:shadow-md hover:border-blue-900 transition">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl mx-auto mb-3 shadow">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900">5000+</h3>
                  <p className="text-xs sm:text-sm font-bold text-amber-600 mt-1">Bids Submitted</p>
                  <p className="text-[11px] text-slate-500 mt-1 font-semibold uppercase tracking-wider">Pan India Portals</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center shadow-sm hover:shadow-md hover:border-blue-900 transition">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center text-xl mx-auto mb-3">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900">500+</h3>
                  <p className="text-xs sm:text-sm font-bold text-blue-900 mt-1">Happy Clients</p>
                  <p className="text-[11px] text-slate-500 mt-1">Satisfied Businesses</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center shadow-sm hover:shadow-md hover:border-blue-900 transition">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl mx-auto mb-3">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900">100%</h3>
                  <p className="text-xs sm:text-sm font-bold text-emerald-700 mt-1">Compliance Rate</p>
                  <p className="text-[11px] text-slate-500 mt-1">Zero Technical Errors</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center shadow-sm hover:shadow-md hover:border-blue-900 transition">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center text-xl mx-auto mb-3">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900">24/7</h3>
                  <p className="text-xs sm:text-sm font-bold text-blue-900 mt-1">Dedicated Support</p>
                  <p className="text-[11px] text-slate-500 mt-1">Personal Tender Executive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ❓ FAQ SECTION */}
      <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center text-sm sm:text-base hover:bg-slate-50 transition"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-amber-500 shrink-0" />
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. 📞 Contact & Lead Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">Let's Win Together</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">Ready to Win Big Government Tenders?</h2>
                <p className="text-blue-100 text-sm sm:text-base">
                  Contact TopBid Consultant today for Startup India (DPIIT) Certificate, GeM registration, OEM vendor assessment, ISO certificates, and tender bidding support.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center text-amber-400 text-base shrink-0 mt-1">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <p className="text-[11px] text-blue-200 font-medium uppercase tracking-wider">Office Address</p>
                      <p className="font-bold text-white text-xs sm:text-sm leading-relaxed">
                        Mahaveer Nagar, Near Geratpur Railway Station,
                        <br />
                        Ahmedabad, Gujarat - 382435
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center text-amber-400 text-base shrink-0">
                      <Phone className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-blue-200 font-medium uppercase tracking-wider">Call Support</p>
                      <div className="space-x-2">
                        <a href="tel:+918160016309" className="font-bold text-white hover:text-amber-400 transition text-xs sm:text-sm">
                          +91 81600 16309
                        </a>
                        <span>/</span>
                        <a href="tel:+919102796261" className="font-bold text-white hover:text-amber-400 transition text-xs sm:text-sm">
                          +91 91027 96261
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center text-amber-400 text-base shrink-0">
                      <Mail className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-blue-200 font-medium uppercase tracking-wider">Official Email</p>
                      <a href="mailto:support@topbidconsultant.com" className="font-bold text-white hover:text-amber-400 transition text-xs sm:text-sm">
                        support@topbidconsultant.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Lead Form */}
              <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Company / Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 text-sm"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone / WhatsApp Number</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Select Required Service</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 text-sm bg-white"
                    >
                      <option>Startup India (DPIIT) Certificate Registration</option>
                      <option>GeM Portal Registration & Setup</option>
                      <option>GeM Brand Approval & Product Listing</option>
                      <option>GeM OEM Vendor Assessment & Exemption</option>
                      <option>ISO Certification (9001, 14001, 27001, 45001, etc.)</option>
                      <option>Complete Tender Bidding (GeM / Non GeM)</option>
                      <option>Dedicated Person for Tender Work</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Message / Requirements (Optional)</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-900 text-sm"
                      placeholder="Any specific tender reference or requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold tracking-wide transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i> Send Instant WhatsApp Inquiry
                  </button>

                  {formSubmitted && (
                    <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-emerald-800 text-xs font-medium text-center">
                      WhatsApp chat opened! Our senior consultant will respond promptly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-900 text-center sm:text-left">
            <div className="md:col-span-1">
              <span className="text-xl font-black text-white tracking-tight">
                TopBid<span className="text-amber-500">.</span>
              </span>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Premier Government e-Marketplace (GeM), Startup India (DPIIT) & Pan-India Tender Bidding Advisory firm.
              </p>
              <p className="text-[11px] text-slate-500 mt-2 font-mono">GST Reg: 24BNWPG6766M1Z3</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-slate-300 tracking-wider mb-3">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#about" className="hover:text-amber-400 transition">About TopBid</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-amber-400 transition">Frequently Asked Questions</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-400 transition">Our Services</a>
                </li>
                <li>
                  <a href="#paynow" className="hover:text-amber-400 transition">Payment Info</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-slate-300 tracking-wider mb-3">Head Office</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mahaveer Nagar, Near Geratpur Railway Station,
                <br />
                Ahmedabad, Gujarat - 382435
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-slate-300 tracking-wider mb-3">Direct Contact</h4>
              <p className="text-xs text-slate-400">
                <Phone className="w-3.5 h-3.5 text-amber-500 inline mr-1" /> +91 81600 16309 / +91 91027 96261
              </p>
              <p className="text-xs text-slate-400 mt-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-500 inline mr-1" /> support@topbidconsultant.com
              </p>
            </div>
          </div>

          <div className="pt-6 text-center sm:flex sm:justify-between sm:items-center text-xs text-slate-500">
            <p>© 2026 TopBid Consultant. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Ahmedabad, Gujarat, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
