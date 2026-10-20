"use client";

import React, { useState } from "react";
import Logo from "./Logo";

export default function Sections() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Very Low Earth Orbit (VLEO)?",
      a: "VLEO refers to orbits below ~350 km altitude. At this altitude, satellites experience reduced signal latency, higher optical and sensor resolution with smaller apertures, and natural atmospheric de-orbiting at end-of-life.",
    },
    {
      q: "How does sovereign ownership work?",
      a: "Unlike shared megaconstellation services, STARS EDGE delivers dedicated satellites owned outright by your enterprise or nation, ensuring total data sovereignty, custom encryption, and dedicated orbital passes.",
    },
    {
      q: "What launch capabilities are supported?",
      a: "Our modular bus architecture is compatible with rideshares, dedicated micro-launchers, and rapid tactical deployment systems globally.",
    },
    {
      q: "How are atmospheric drag challenges solved?",
      a: "We integrate specialized ultra-compact aerodynamic bus geometry combined with efficient electric propulsion systems specifically engineered for sustained drag-compensation in VLEO.",
    },
  ];

  return (
    <div className="bg-[#080808] text-white">
      {/* OUR TECHNOLOGY SECTION */}
      <section id="technology" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold">
            Aerospace Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-white tracking-tight">
            Next-Gen Low-Orbit Performance
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Engineered from propulsion to payload for sustainable, persistent operations at the very edge of space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded hover:border-neutral-700 transition-all duration-300 group">
            <div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Ultra-Low Altitude Optics</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Achieve sub-meter ground resolution with payloads a fraction of the mass and cost of conventional geostationary or traditional LEO satellites.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded hover:border-neutral-700 transition-all duration-300 group">
            <div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Sovereign Data Control</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Proprietary frequency allocations and custom optical inter-satellite links guarantee total mission privacy and operational control.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded hover:border-neutral-700 transition-all duration-300 group">
            <div className="w-12 h-12 rounded bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Self-Clearing Orbits</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Safe-by-design space architecture. Any retired satellite naturally re-enters and burns up cleanly within weeks, eliminating orbital space debris risk.
            </p>
          </div>
        </div>
      </section>

      {/* THE TEAM SECTION */}
      <section id="team" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold">
            Leadership & Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-white tracking-tight">
            Pioneering Aerospace Innovators
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Our multidisciplinary team combines veterans from leading aerospace primes, defense laboratories, and advanced propulsion research centers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { role: "CEO & Co-Founder", domain: "Aerospace Propulsion & Defense Systems" },
            { role: "CTO & Co-Founder", domain: "VLEO Aerodynamics & Orbital Mechanics" },
            { role: "VP of Satellite Systems", domain: "Avionics, Bus Design & Power Architecture" },
            { role: "Head of Mission Operations", domain: "Constellation Telemetry & Ground Segment" },
          ].map((member, i) => (
            <div key={i} className="bg-neutral-900/40 border border-neutral-800 p-6 rounded hover:border-neutral-700 transition-colors">
              <div className="w-14 h-14 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center font-bold text-neutral-300 text-lg mb-4">
                0{i + 1}
              </div>
              <h4 className="text-lg font-bold text-white">{member.role}</h4>
              <p className="text-xs text-neutral-400 mt-2 font-medium leading-relaxed">{member.domain}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRACTION SECTION */}
      <section id="traction" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold">
            Demonstrated Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-white tracking-tight">
            Traction You Want to See
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Quantifiable progress in flight hardware validation, testbed demonstrations, and launch manifests.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">&lt; 300 km</div>
            <div className="text-xs uppercase tracking-widest text-neutral-400 mt-2 font-semibold">Target Orbit Altitude</div>
          </div>
          <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">10x</div>
            <div className="text-xs uppercase tracking-widest text-neutral-400 mt-2 font-semibold">Cost Efficiency Factor</div>
          </div>
          <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">100%</div>
            <div className="text-xs uppercase tracking-widest text-neutral-400 mt-2 font-semibold">Sovereign Data Rights</div>
          </div>
          <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">0%</div>
            <div className="text-xs uppercase tracking-widest text-neutral-400 mt-2 font-semibold">Long-Term Space Debris</div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto border-t border-neutral-900">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold">
            Knowledge Base
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-neutral-800 bg-neutral-900/40 rounded transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between font-semibold text-white text-base sm:text-lg focus:outline-none"
                >
                  <span>{item.q}</span>
                  <span className="ml-4 text-neutral-400 text-xl font-mono">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800/60 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <Logo />
          </div>
          <p className="text-xs text-neutral-500 tracking-wider uppercase text-center">
            © 2026 STARS EDGE Inc. All rights reserved. Sovereign VLEO Architecture.
          </p>
          <div className="flex space-x-6 text-xs text-neutral-400 uppercase tracking-widest">
            <a href="#home" className="hover:text-white transition-colors">Privacy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms</a>
            <a href="#home" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
