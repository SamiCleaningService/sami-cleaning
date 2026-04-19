/* =============================================================
   SAMI CLEANING SERVICES — Home Page
   Design: Clean Coastal Professional
   Sections: Nav, Hero, Trust Badges, Services Overview,
             Residential, Airbnb, Deep Clean, Why Us,
             Service Areas, Testimonial, Contact, Footer
   ============================================================= */

import { useState, useEffect } from "react";
import {
  Home as HomeIcon,
  Star,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  MapPin,
  Menu,
  X,
  Sparkles,
  Hotel,
  PackageOpen,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663574997634/3cKUuKGxrkBKP9LdUxy6sY/hero-cleaning-FnSV6HECuZZbRkwkTTkZKh.webp";
const RESIDENTIAL_IMG =
  "/manus-storage/woman-cleaning-with-logo_ebd0ecb4.png";
const AIRBNB_IMG =
  "/manus-storage/woman-with-user-logo_c72615e8.png";
const DEEP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663574997634/3cKUuKGxrkBKP9LdUxy6sY/deep-cleaning-Mbve7CXMGSsC7B5VLENqUB.webp";
const OFFICE_IMG =
  "/manus-storage/office-cleaning-with-logo_d2b00698.png";

const services = [
  {
    icon: HomeIcon,
    title: "Airbnb Turnovers",
    desc: "Fast, hotel-level turnovers that keep your guests wowed and your ratings high.",
    color: "bg-sky-50 text-sky-700",
    border: "border-sky-200",
  },
  {
    icon: Sparkles,
    title: "Residential Cleaning",
    desc: "Consistent, detail-focused home cleaning on a schedule that works for you.",
    color: "bg-indigo-50 text-indigo-700",
    border: "border-indigo-200",
  },
  {
    icon: ShieldCheck,
    title: "Deep Cleaning",
    desc: "Top-to-bottom deep cleans for a truly fresh start in any space.",
    color: "bg-teal-50 text-teal-700",
    border: "border-teal-200",
  },
  {
    icon: PackageOpen,
    title: "Move-In / Move-Out",
    desc: "Leave your old place spotless or arrive to a perfectly clean new home.",
    color: "bg-amber-50 text-amber-700",
    border: "border-amber-200",
  },
  {
    icon: Hotel,
    title: "Restocking & Laundry",
    desc: "Full laundry service and essential restocking so your Airbnb is always ready.",
    color: "bg-rose-50 text-rose-700",
    border: "border-rose-200",
  },
  {
    icon: Star,
    title: "Inspection-Level Cleaning",
    desc: "Hospitality-grade attention to detail that passes even the strictest inspections.",
    color: "bg-violet-50 text-violet-700",
    border: "border-violet-200",
  },
  {
    icon: Hotel,
    title: "Office Cleaning",
    desc: "Professional office spaces kept spotless and sanitized for a productive work environment.",
    color: "bg-cyan-50 text-cyan-700",
    border: "border-cyan-200",
  },
];

const whyUs = [
  { icon: "👩‍💼", label: "Woman-Owned Local Business" },
  { icon: "🏨", label: "Hotel-GM & OSHA Certified" },
  { icon: "🏡", label: "Airbnb Specialist" },
  { icon: "⏰", label: "Reliable & On Time" },
  { icon: "💬", label: "Professional, Non-Sketchy Communication" },
];

const serviceAreas = [
  "Fairfield",
  "Vacaville",
  "Suisun City",
  "Vallejo",
  "American Canyon",
  "Napa",
  "Benicia",
];

const hours = [
  { day: "Mon – Thu", time: "8:30 AM – 7:00 PM" },
  { day: "Friday", time: "11:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "10:00 AM – 5:30 PM" },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Airbnb", href: "#airbnb" },
  { label: "Residential", href: "#residential" },
  { label: "Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay },
  };
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-[Outfit,system-ui,sans-serif]">
      {/* ── NAV ─────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-auto py-3 md:py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <img
              src="/manus-storage/sami-logo_71d4fb5e.png"
              alt="Sami Cleaning Services Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-sky-600 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:5109438865"
              className="ml-2 inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              Book Now
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="container py-4 flex flex-col gap-3">
                {navLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-slate-700 font-medium py-1.5 hover:text-sky-600 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="tel:5109438865"
                  className="mt-1 inline-flex items-center gap-2 bg-sky-600 text-white font-semibold px-4 py-2.5 rounded-full text-sm w-fit"
                >
                  <Phone className="w-4 h-4" />
                  Call to Book
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Pristine guest-ready Airbnb bedroom"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay — image is light/warm so we use a strong dark overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2744]/85 via-[#0F2744]/60 to-[#0F2744]/20" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Trust badge row */}
            <motion.div
              {...fadeUp(0.1)}
              className="flex flex-wrap gap-2 mb-6"
            >
              {["Woman-Owned", "Hotel-GM Trained", "OSHA Certified"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/25"
                >
                  <CheckCircle2 className="w-3 h-3 text-sky-300" />
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-[Fraunces,Georgia,serif] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-5"
            >
              We Keep Your Space{" "}
              <span className="text-sky-300 italic">Guest-Ready</span>
              {" "}— Every Time
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Airbnb turnovers, residential cleaning, and move-in/move-out
              services across Solano County. Reliable, detailed, and always on time.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-full text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Today
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-full text-base border border-white/30 transition-all"
              >
                Our Services
                <ChevronDown className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── TRUST STRIP ─────────────────────────────────────── */}
      <section className="bg-[#0F2744] py-5">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { icon: "⭐", text: "5-Star Airbnb Presentations" },
              { icon: "🏨", text: "Hotel-GM Experience" },
              { icon: "🛡️", text: "OSHA Certified" },
              { icon: "📍", text: "Serving All of Solano County" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ───────────────────────────────── */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
              What We Offer
            </p>
            <h2 className="font-[Fraunces,Georgia,serif] text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Professional, reliable, and detail-focused cleaning you can trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(i * 0.08)}
                className={`group relative bg-white rounded-2xl border ${s.border} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-11 h-11 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-[Fraunces,Georgia,serif] font-semibold text-lg text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESIDENTIAL CLEANING ────────────────────────────── */}
      <section id="residential" className="py-20 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp()}>
              <p className="text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
                🏡 For Homeowners
              </p>
              <h2 className="font-[Fraunces,Georgia,serif] text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Residential Cleaning Services
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                A spotless, fresh, stress-free home — every visit.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Consistent, reliable cleaning",
                  "Woman-owned and hospitality-trained",
                  "Flexible scheduling",
                  "High-detail kitchen & bathroom cleaning",
                  "Dusting, floors, surfaces, and more",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 italic text-base mb-6">Come home to clean.</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a6b] text-white font-semibold px-6 py-3 rounded-full transition-all shadow hover:shadow-md"
              >
                Schedule a Clean
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={RESIDENTIAL_IMG}
                  alt="Spotless residential kitchen"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-slate-700 text-sm font-semibold">5-Star Rated</span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">Solano County Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AIRBNB TURNOVERS ────────────────────────────────── */}
      <section id="airbnb" className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0.1)} className="relative order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={AIRBNB_IMG}
                  alt="Professional Airbnb turnover service"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#0F2744] rounded-2xl shadow-lg px-4 py-3">
                <p className="text-sky-300 text-xs font-semibold uppercase tracking-wider">Hotel-GM Trained</p>
                <p className="text-white text-sm font-bold mt-0.5">Inspection-Level Detail</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp()} className="order-1 md:order-2">
              <p className="text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
                🏨 For Airbnb Hosts
              </p>
              <h2 className="font-[Fraunces,Georgia,serif] text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Airbnb Turnover Services
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Hotel-level cleaning from a former Hotel General Manager. We deliver
                fast, detailed, guest-ready turnovers with:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Full laundry service",
                  "Bed making & hotel-style staging",
                  "Restocking essentials",
                  "Trash removal & supply check",
                  "Inspection-level attention to detail",
                  "5-star presentation every time",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 italic text-sm mb-6">
                Your guests walk into a spotless, welcoming space — and you get peace of mind.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow hover:shadow-md"
              >
                Get Guest-Ready
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DEEP CLEANING ───────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp()}>
              <p className="text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
                🧽 Deep & Move Cleans
              </p>
              <h2 className="font-[Fraunces,Georgia,serif] text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Deep Cleaning &amp; Move-In/Move-Out Services
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Perfect for new tenants, property managers, homeowners preparing to sell,
                and seasonal deep cleans.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: "🏠", label: "New Tenants" },
                  { icon: "🏢", label: "Property Managers" },
                  { icon: "🏷️", label: "Pre-Sale Prep" },
                  { icon: "🍂", label: "Seasonal Deep Cleans" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-sm"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 italic text-sm mb-6">
                We leave your space spotless, fresh, and move-in ready — every time.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0F2744] hover:bg-[#1a3a6b] text-white font-semibold px-6 py-3 rounded-full transition-all shadow hover:shadow-md"
              >
                Request a Deep Clean
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={DEEP_IMG}
                  alt="Spotless deep-cleaned bathroom"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/25 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OFFICE CLEANING ──────────────────────────────────── */}
      <section id="office" className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0.1)} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={OFFICE_IMG}
                  alt="Professional office cleaning service"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2744]/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-slate-100">
                <p className="text-slate-700 text-sm font-semibold">Corporate Spaces</p>
                <p className="text-slate-400 text-xs mt-0.5">Sanitized & Spotless</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp()}>
              <p className="text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
                🏢 Office Cleaning
              </p>
              <h2 className="font-[Fraunces,Georgia,serif] text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                Professional Office Cleaning
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Keep your corporate workspace spotless and sanitized for a productive, healthy work environment.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Daily or weekly office cleaning",
                  "Desk and workspace sanitization",
                  "Conference room preparation",
                  "Break room and restroom cleaning",
                  "Floor care and maintenance",
                  "Flexible scheduling around business hours",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 italic text-sm mb-6">
                A clean office is a productive office. Let us handle the cleaning so your team can focus on what matters.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow hover:shadow-md"
              >
                Schedule Office Cleaning
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────── */}
      <section className="py-20 bg-[#0F2744]">
        <div className="container">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <p className="text-sky-400 font-semibold text-sm tracking-widest uppercase mb-3">
              Why Clients Choose Us
            </p>
            <h2 className="font-[Fraunces,Georgia,serif] text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Sami Cleaning Services?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp(i * 0.1)}
                className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/12 transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-white font-medium text-sm leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ───────────────────────────────────── */}
      <section id="areas" className="py-20 bg-white">
        <div className="container">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <p className="text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Where We Serve
            </p>
            <h2 className="font-[Fraunces,Georgia,serif] text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Service Areas
            </h2>
            <p className="text-slate-500 text-lg max-w-lg mx-auto">
              Proudly serving communities throughout Solano County and the surrounding region.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
          >
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-800 font-semibold text-sm px-5 py-2.5 rounded-full"
              >
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                {area}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <blockquote className="font-[Fraunces,Georgia,serif] text-2xl md:text-3xl font-light text-slate-800 leading-relaxed mb-6 italic">
              "Sami Cleaning Services made my Airbnb look better than when I bought it.
              The hotel-level detail is unmatched. My guests always comment on how clean
              and fresh everything feels."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                <HomeIcon className="w-5 h-5 text-sky-600" />
              </div>
              <div className="text-left">
                <p className="text-slate-900 font-semibold text-sm">Airbnb Host</p>
                <p className="text-slate-400 text-xs">Fairfield, CA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <p className="text-sky-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-[Fraunces,Georgia,serif] text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Contact Sami Cleaning Services
            </h2>
            <p className="text-slate-500 text-lg">
              Text or email preferred — we respond fast.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone */}
            <motion.a
              {...fadeUp(0.05)}
              href="tel:5109438865"
              className="group bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 text-center hover:border-sky-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-200 transition-colors">
                <Phone className="w-5 h-5 text-sky-600" />
              </div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Phone / Text</p>
              <p className="text-slate-900 font-bold text-lg">510-943-8865</p>
              <p className="text-sky-600 text-sm mt-1 font-medium">Tap to call</p>
            </motion.a>

            {/* Email */}
            <motion.a
              {...fadeUp(0.1)}
              href="mailto:sam.businesservices@gmail.com"
              className="group bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 text-center hover:border-sky-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-200 transition-colors">
                <Mail className="w-5 h-5 text-sky-600" />
              </div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
              <p className="text-slate-900 font-bold text-sm break-all">sam.businesservices@gmail.com</p>
              <p className="text-sky-600 text-sm mt-1 font-medium">Send a message</p>
            </motion.a>

            {/* Hours */}
            <motion.div
              {...fadeUp(0.15)}
              className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5 text-sky-600" />
              </div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3 text-center">Business Hours</p>
              <div className="space-y-1.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-slate-600 font-medium">{h.day}</span>
                    <span className="text-slate-800 font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Banner */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-12 bg-gradient-to-r from-[#0F2744] to-[#1a4a8a] rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto"
          >
            <h3 className="font-[Fraunces,Georgia,serif] text-2xl md:text-3xl font-bold text-white mb-3">
              Ready for a Spotless Space?
            </h3>
            <p className="text-white/75 mb-6 text-base">
              Book today and let us handle the rest. Fast response guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:5109438865"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4" />
                Call or Text Now
              </a>
              <a
                href="mailto:sam.businesservices@gmail.com"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-full border border-white/30 transition-all"
              >
                <Mail className="w-4 h-4" />
                Send an Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-[#0A1E38] py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-4">
              <img
                src="/manus-storage/sami-logo_71d4fb5e.png"
                alt="Sami Cleaning Services Logo"
                className="w-20 h-20 object-contain shrink-0"
              />
              <div>
                <p className="font-[Fraunces,Georgia,serif] text-white font-semibold text-xl">
                  Sami Cleaning Services
                </p>
                <p className="text-white/40 text-sm">Premium Cleaning in Solano County</p>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Contact quick */}
            <div className="flex items-center gap-4">
              <a
                href="tel:5109438865"
                className="text-white/60 hover:text-sky-400 transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:sam.businesservices@gmail.com"
                className="text-white/60 hover:text-sky-400 transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/8 text-center">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Sami Cleaning Services. Woman-Owned · Solano County, CA ·{" "}
              <a href="tel:5109438865" className="hover:text-white/60 transition-colors">
                510-943-8865
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
