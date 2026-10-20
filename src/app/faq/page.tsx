"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      q: "How does AirSAT overcome atmospheric drag in VLEO?",
      a: "Our proprietary air-breathing electric propulsion system (AERIS) intakes residual atmospheric molecules in Very Low Earth Orbit, ionizes them, and accelerates them as propellant, continuously compensating for drag without carrying chemical propellant.",
    },
    {
      q: "How long can the AirSAT stay in VLEO?",
      a: "With air-breathing drag compensation powered by solar energy, AirSAT is designed for multi-year missions in the 100–150 km corridor, compared to days or weeks for unpropelled satellites.",
    },
    {
      q: "What are your upcoming milestones",
      a: "Key upcoming milestones include aerodynamic qualification in vacuum wind tunnels, in-orbit flight demonstration of the AERIS air-breathing thruster, and customer constellation commissioning.",
    },
    {
      q: "What altitude range does the AirSAT operate in?",
      a: "AirSAT operates at the extreme lower boundary of orbit, between 100 km and 150 km altitude—closer to Earth than any sustained satellite before it.",
    },
    {
      q: "Can I operate the satellite myself?",
      a: "Yes. AirSAT is built for genuine self-operation. With proprietary direct-to-device (D2D) comms and on-board edge processing, you task it directly from your laptop and receive finished answers.",
    },
    {
      q: "How does satellite sovereignty protect mission data?",
      a: "You own the hardware, the onboard encryption keys, and the dedicated downlink streams outright. No third-party network operators can throttle, intercept, or commercialize your orbital intelligence.",
    },
    {
      q: "What sensors and payloads can AirSAT carry?",
      a: "The payload bay is modular and payload-agnostic. It supports high-resolution panchromatic/multispectral optical imagers, infrared and thermal sensors, synthetic aperture radar (SAR), and specialized RF monitors.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#2563EB] font-bold">
            Questions & Answers
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Everything you need to know about Very Low Earth Orbit, AirSAT sovereign ownership, and the AERIS engine.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-neutral-900 border-y border-neutral-900 mb-16">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left text-white text-lg sm:text-xl font-normal hover:text-neutral-200 transition-colors focus:outline-none"
                >
                  <span className="pr-4">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#2563EB] transform transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <p className="mt-4 text-[#A1A1AA] text-base leading-relaxed animate-fadeIn">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <footer className="border-t border-neutral-900 py-10 px-6 bg-black text-center text-xs text-neutral-500 tracking-wider uppercase">
        © 2026 STARS EDGE Inc. Sovereign VLEO Satellites. All rights reserved.
      </footer>
    </div>
  );
}
