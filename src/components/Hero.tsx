"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showTechModal, setShowTechModal] = useState(false);

  return (
    <section id="home" className="w-full bg-black px-3 sm:px-6 md:px-8 pb-10 select-none">
      {/* Hero Card Container with rounded corners matching the screenshot */}
      <div className="relative min-h-[85vh] sm:min-h-[88vh] w-full rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center border border-neutral-800/40 shadow-2xl">
        {/* Background Orbital Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Earth in Very Low Earth Orbit at the edge of space"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transform scale-[1.01]"
          />
          {/* Subtle cinematic vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/25 to-black/75 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 py-20 flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-[50px] lg:text-[58px] font-bold text-white tracking-tight leading-[1.18] max-w-5xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            <span className="block">Redefining space mobility at the</span>
            <span className="block mt-1">edge</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-neutral-200/95 max-w-2xl md:max-w-3xl font-normal leading-relaxed tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Affordable, sovereign satellites in Very Low Earth Orbit owned
            outright, launched from almost anywhere, and operated by you!
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
            <button
              onClick={() => setShowTechModal(true)}
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-[#2b2b2b]/95 hover:bg-[#383838] text-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] rounded-[2px] border border-white/10 hover:border-white/30 shadow-lg shadow-black/50 transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              EXPLORE OUR TECHNOLOGY
            </button>

            <button
              onClick={() => setShowContactModal(true)}
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-[#2b2b2b]/95 hover:bg-[#383838] text-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] rounded-[2px] border border-white/10 hover:border-white/30 shadow-lg shadow-black/50 transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Technology Preview Modal */}
      {showTechModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-700/80 rounded-lg max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-left">
            <button
              onClick={() => setShowTechModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl p-1"
            >
              ✕
            </button>
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">
              Next-Gen VLEO Infrastructure
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Very Low Earth Orbit (VLEO) Satellites
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              Operating beneath 350 km altitude enables superior optical resolution, ultra-low latency optical and RF communication links, natural orbital decay (zero space debris), and significantly reduced launch mass and cost.
            </p>
            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="p-3 bg-neutral-800/80 rounded border border-neutral-700">
                <div className="text-xs text-neutral-400 uppercase font-semibold">Sub-300km Orbit</div>
                <div className="text-base font-bold text-white mt-1">10x Optical Detail</div>
              </div>
              <div className="p-3 bg-neutral-800/80 rounded border border-neutral-700">
                <div className="text-xs text-neutral-400 uppercase font-semibold">Decay Cycle</div>
                <div className="text-base font-bold text-white mt-1">Zero Debris Risk</div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowTechModal(false)}
                className="px-5 py-2.5 bg-neutral-700 hover:bg-neutral-600 text-white text-xs font-bold uppercase tracking-wider rounded"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-700/80 rounded-lg max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-left">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl p-1"
            >
              ✕
            </button>
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">
              Get in Touch
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Connect With STARS EDGE
            </h3>
            <p className="text-neutral-300 text-sm mb-6">
              Inquire about dedicated satellite constellations, payload slots, or launch mission schedules.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your inquiry has been recorded.");
                setShowContactModal(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your Name / Organization"
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@organization.com"
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your mission requirements..."
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded text-white text-sm focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="px-4 py-2 text-neutral-400 hover:text-white text-xs uppercase font-bold tracking-wider"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider rounded"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
