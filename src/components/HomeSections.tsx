"use client";

import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";

export default function HomeSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

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
  ];

  return (
    <div className="w-full bg-[#0a0a0a] text-white">
      {/* SATELLITE IN SPACE BANNER (Image 1) */}
      <section className="px-3 sm:px-6 md:px-8 py-8">
        <div className="relative w-full h-[400px] sm:h-[520px] md:h-[620px] rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
          <Image
            src="/airsat-orbit.jpg"
            alt="AirSAT Satellite in Very Low Earth Orbit"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Top-left Overlay Logo */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-10 select-none">
            <div className="text-2xl sm:text-3xl font-extrabold tracking-[0.12em] text-white leading-none">
              STARS
            </div>
            <div className="flex items-center text-2xl sm:text-3xl font-extrabold tracking-[0.1em] text-white leading-none mt-1">
              <span>EDGE</span>
              <div className="flex items-center ml-1">
                <span className="text-sm font-bold tracking-tighter text-white">
                  ✦=
                </span>
              </div>
            </div>
          </div>
          {/* Subtle bottom shadow vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
        </div>
      </section>

      {/* WHY STARS EDGE (Image 2) */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-16 tracking-tight">
          Why STARS EDGE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Column 1: Welcome to Stars Edge */}
          <div className="space-y-6 text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Welcome to Stars Edge
            </h3>
            <p>
              Stars Edge is on a mission to make space affordable, sovereign and
              genuinely usable. We build the next generation of satellites for
              Very Low Earth Orbit (VLEO), flying at just 100–150 km, the lowest
              sustained orbit there is.
            </p>
            <p>
              At that altitude, atmospheric drag stops any conventional
              satellite. Our proprietary AERIS engine turns that problem into
              the solution: it breathes the thin upper atmosphere and uses it as
              propellant, so our satellites stay in flight without carrying fuel
              to fight the drag.
            </p>
            <p>
              Flying this low changes everything. Far lower radiation means we
              use commercial, off-the-shelf electronics and lighter, more
              sustainable materials instead of expensive rad-hardened parts,
              cutting build and operating costs dramatically. A shorter link to
              the ground means more data down, lower latency and true
              direct-to-device connectivity. And a closer view means spy-level
              image resolution from a fraction of the altitude of LEO.
            </p>
            <p>
              The result is a satellite you can own and operate yourself; not
              rent, and not queue behind someone else&apos;s constellation. Why
              rent a satellite, or its data, when you can own the whole stack?
            </p>
          </div>

          {/* Column 2: What is VLEO? */}
          <div className="space-y-6 text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              What is VLEO?
            </h3>
            <p>
              Very Low Earth Orbit (VLEO) is the band of space below roughly
              450 km ...well beneath the 500–1,500 km where today&apos;s
              constellations fly. Stars Edge operates at the extreme low end of
              it, 100–150 km, closer to Earth than any sustained satellite
              before it.
            </p>
            <p>
              The closer you fly, the better the physics: smaller optics reach
              sub-metre ground resolution, launch mass and power drop, orbital
              periods shorten for more frequent revisits (up to 17 passes a
              day), and the radiation environment is mild enough for modern
              commercial electronics and on-board AI. The only catch is
              atmospheric drag and AERIS is built to use it, not fight it.
            </p>
          </div>
        </div>
      </section>

      {/* AIRSAT. SPACE BUT CLOSER (Image 3) */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 max-w-6xl mx-auto border-t border-neutral-900">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-16 tracking-tight">
          AirSAT. Space but Closer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="space-y-6 text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            <p>
              AirSAT is the lowest-flying Earth observer ever built, so close it
              barely looks like space. It is a payload-agnostic platform,
              mass-manufacturable on a sovereign supply chain and priced to be
              bought, not rented.
            </p>
            <p>
              Because it flies at 100–150 km, AirSAT captures sub-metre imagery
              with breakthrough clarity and speed, and revisits the areas you
              care about up to 17 times a day. Whether you are tracking
              wildfires, mapping urban heat, monitoring crops or watching a
              coastline, AirSAT brings precision data close to home and gets the
              answers to you faster.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden bg-white shadow-xl">
            <Image
              src="/airsat-model.jpg"
              alt="AirSAT platform model"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>
        </div>
      </section>

      {/* YOU FLY IT WITH A LAPTOP, NOT AN OPS CENTRE (Image 4) */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 max-w-6xl mx-auto border-t border-neutral-900">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-16 tracking-tight">
          You fly it with a laptop, not an ops centre.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Image */}
          <div className="relative w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden bg-white shadow-xl order-2 md:order-1">
            <Image
              src="/laptop-station.jpg"
              alt="Laptop direct to device control"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>

          {/* Right Text */}
          <div className="space-y-6 text-[#A1A1AA] text-sm sm:text-base leading-relaxed order-1 md:order-2">
            <p>
              AirSAT is built for genuine self-operation. Our proprietary
              direct-to-device (D2D) comms and on-board edge computing remove
              the entire ground segment between you and your satellite: task it
              from your own device, uplink on the next pass, let it process the
              raw data in orbit, and receive a finished answer on your screen,
              not terabytes to sift.
            </p>
            <p>
              The result is near-zero operating effort and full sovereign
              control, extended time in VLEO, high-speed downlink, low latency,
              and D2D architectures that reach the most remote regions on Earth.
            </p>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (Image 5) */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-4xl mx-auto border-t border-neutral-900">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-16 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-neutral-900">
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left text-white text-base sm:text-lg font-normal hover:text-neutral-200 transition-colors focus:outline-none"
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
                  <p className="mt-4 text-[#A1A1AA] text-sm sm:text-base leading-relaxed animate-fadeIn">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT US SECTION (Image from user request) */}
      <section id="contact" className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-t border-neutral-900">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-16 tracking-tight">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Details */}
          <div className="space-y-6 text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Let us take you on a tour of the stars!
            </h3>
            <p>
              Send us an email, or LinkedIn Message, to find out more!
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              <div>
                <span className="text-neutral-400">Email: </span>
                <a
                  href="mailto:Contact@starsedge.space"
                  className="text-[#2563EB] hover:underline"
                >
                  Contact@starsedge.space
                </a>
              </div>
              <div>
                <span className="text-neutral-400">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/company/se-space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:underline"
                >
                  www.linkedin.com/company/se-space
                </a>
              </div>
              <p className="pt-2 text-neutral-400 leading-relaxed text-sm">
                Stars Edge Ltd — Surrey Technology Centre, Surrey Research Park, Guildford, Surrey, GU2 7YG, United Kingdom
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setShowContactModal(true)}
                className="px-8 py-3.5 bg-[#2563EB] hover:bg-blue-600 text-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] rounded-[2px] transition-colors shadow-lg cursor-pointer"
              >
                SEND A NOTE
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src="/team-contact.jpg"
              alt="Stars Edge Engineering Team at Surrey Technology Centre"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Note Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-700/80 rounded-lg max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-left">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl p-1"
            >
              ✕
            </button>
            <div className="text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-2">
              Send a Note
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Let&apos;s talk satellites
            </h3>
            <p className="text-neutral-300 text-sm mb-6">
              Drop us a message and our engineering team at Surrey Technology Centre will respond within 24 hours.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your note has been sent to Contact@starsedge.space.");
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
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded text-white text-sm focus:outline-none focus:border-[#2563EB]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded text-white text-sm focus:outline-none focus:border-[#2563EB]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your mission or inquiry..."
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded text-white text-sm focus:outline-none focus:border-[#2563EB]"
                />
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
                  className="px-6 py-2.5 bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded"
                >
                  Send Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
