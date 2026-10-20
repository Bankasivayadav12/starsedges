"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TechnologyPage() {
  const [playingVideo, setPlayingVideo] = useState(false);

  const airSatBulletPoints = [
    "Compatible with Earth observation, telecoms, remote sensing and data payloads",
    "Flies 4-12U comfortably on standard connectors",
    "2-4 year lifetime, tuned to your mission",
    "Fully solar-powered; AERIS accelerates high-density air for thrust",
    "Air-harvesting capability compresses atmosphere into a tank for self-refuelling",
    "Full on-board edge computing, process data in orbit, downlink the answer",
    "Direct-to-device tasking: operate it yourself, no ground station required",
  ];

  const aerisBulletPoints = [
    "Compact and energy-efficient",
    "High thrust-to-power versus competing technology",
    "Gets stronger the lower it flies: thrives in high-density air",
    "Compatible with our fuel-harvesting and storage technology for LEO, GEO and beyond!",
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      <main>
        {/* SATELLITE HERO BANNER */}
        <section className="px-3 sm:px-6 md:px-8 py-6 sm:py-8">
          <div className="relative w-full h-[380px] sm:h-[500px] md:h-[620px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src="/airsat-tech-hero.jpg"
              alt="AirSAT in Very Low Earth Orbit"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          </div>
        </section>

        {/* INTRODUCING AIRSAT & THE AERIS ENGINE */}
        <section className="py-20 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white text-center tracking-tight">
            Introducing AirSAT &amp; the AERIS engine
          </h1>

          <div className="mt-14 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              AirSAT: one bus, any mission
            </h2>
            <p className="mt-3 text-[#A1A1AA] text-base leading-relaxed">
              A payload-agnostic VLEO platform designed to be bought and self-operated.
            </p>

            <ul className="mt-8 space-y-3.5 text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              {airSatBulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-white text-lg leading-none mr-3 select-none">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHERE DO WE FLY? */}
        <section className="py-20 sm:py-24 px-6 sm:px-10 max-w-5xl mx-auto border-t border-neutral-900">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-14 tracking-tight">
            Where do we fly?
          </h2>

          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border border-neutral-800 bg-[#0c1220]">
            {playingVideo ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-black p-6 text-center animate-fadeIn">
                <div className="text-[#2563EB] text-sm font-bold uppercase tracking-wider mb-2">
                  Orbital Trajectory Simulation
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  VLEO Corridor: 100 km – 150 km
                </h3>
                <p className="text-neutral-400 text-sm max-w-lg mb-6">
                  AirSAT completes one full Earth orbit every 87 minutes, experiencing ambient atmospheric particle intake for continuous drag-neutral flight.
                </p>
                <button
                  onClick={() => setPlayingVideo(false)}
                  className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider rounded"
                >
                  Return to Preview
                </button>
              </div>
            ) : (
              <div
                onClick={() => setPlayingVideo(true)}
                className="group relative w-full h-full cursor-pointer flex items-center justify-center select-none"
              >
                <Image
                  src="/airsat-orbit.jpg"
                  alt="Where do we fly? Video preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover object-center opacity-60 group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold bg-white/20 backdrop-blur px-2 py-0.5 rounded">STARS EDGE</span>
                    <span className="text-xs sm:text-sm font-semibold truncate drop-shadow">
                      Stars Edge: Where do we fly?
                    </span>
                  </div>
                </div>

                <div className="relative z-10 w-16 h-12 sm:w-20 sm:h-14 bg-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500 transition-all shadow-xl">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div className="absolute bottom-4 left-4 z-10 text-white/90 text-xs sm:text-sm font-medium flex items-center space-x-1.5 drop-shadow">
                  <span>Watch on</span>
                  <span className="font-bold flex items-center">
                    YouTube
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* THE WORLD'S LOWEST FLYING SATELLITE (Goal, Expertise, Approach) */}
        <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-t border-neutral-900">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-16 tracking-tight">
            The world&apos;s lowest flying satellite
          </h2>

          <div className="space-y-16 lg:space-y-24">
            {/* Row 1: Image Left, Our Goal Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative w-full h-[280px] sm:h-[340px] rounded-xl overflow-hidden bg-white shadow-xl">
                <Image
                  src="/airsat-model.jpg"
                  alt="AirSAT Satellite Model"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2563EB] tracking-tight">
                  Our Goal
                </h3>
                <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                  To be the leading provider of the new generation of Very Low Earth Orbit satellites making space affordable and approachable, and putting the decision-making power of better data directly in your hands.
                </p>
              </div>
            </div>

            {/* Row 2: Our Expertise Left, Cleanroom Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2563EB] tracking-tight">
                  Our Expertise
                </h3>
                <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                  Our aerospace engineers, atmospheric scientists and systems architects are backed by senior business-development leaders and a panel of world-leading advisers in space finance, regulation and market strategy. We specialise in air-augmented orbital flight at 100-150 km, from pressure-tolerant structures to AI-driven payload integration, always with cost-efficiency and reliability in mind.
                </p>
              </div>

              <div className="relative w-full h-[280px] sm:h-[340px] rounded-xl overflow-hidden shadow-xl border border-neutral-800 order-1 md:order-2">
                <Image
                  src="/cleanroom-satellite.jpg"
                  alt="Aerospace engineers assembling satellite in cleanroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Row 3: Team Office Photo Left, Our Approach Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative w-full h-[280px] sm:h-[340px] rounded-xl overflow-hidden shadow-xl border border-neutral-800">
                <Image
                  src="/team-office.jpg"
                  alt="Stars Edge engineers collaborating in office"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2563EB] tracking-tight">
                  Our Approach
                </h3>
                <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                  We work systems-level and data-driven, fusing rapid iteration with rigorous testing. By designing satellites around the atmosphere rather than against it, we minimise drag penalties while maximising efficiency. That sweet-spot philosophy guides every decision: from sustainable off-the-shelf components to modular software, so we scale quickly, reduce capital outlay and deliver high-capability constellations that adapt in real time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROPULSION TECHNOLOGIES (AERIS & AERIS HAPS) */}
        <section className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto border-t border-neutral-900">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white text-center mb-16 tracking-tight">
            Propulsion Technologies
          </h2>

          <div className="space-y-16 lg:space-y-24">
            {/* AERIS (The Star of the Show) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative w-full h-[300px] sm:h-[360px] rounded-xl overflow-hidden bg-white shadow-xl">
                <Image
                  src="/aeris-module.jpg"
                  alt="AERIS Plasma Ramjet Engine CAD Model"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4"
                />
              </div>

              <div className="space-y-4 text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  AERIS (The Star of the Show)
                </h3>
                <p className="text-sm text-neutral-300 italic font-medium">
                  The <strong className="text-white not-italic">A</strong>tmosphere-enabled <strong className="text-white not-italic">E</strong>ngine for <strong className="text-white not-italic">R</strong>efuellable <strong className="text-white not-italic">I</strong>n-Orbit <strong className="text-white not-italic">S</strong>ystems
                </p>
                <p>
                  AERIS is a &ldquo;plasma ramjet&rdquo;: it captures the residual air AirSAT flies through, ionises it with solar-powered high voltage, and accelerates it out as thrust. No tanks, no refuelling stops, no running out of propellant.
                </p>

                <ul className="space-y-2 pt-2">
                  {aerisBulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white text-base leading-none mr-2.5 select-none">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AERIS (HAPS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="space-y-5 text-[#A1A1AA] text-sm sm:text-base leading-relaxed order-2 md:order-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  AERIS (HAPS)
                </h3>
                <p>
                  Not a fan of VLEO? We&apos;re not sure why, it&apos;s great! However, if you do want to go lower we still have an option for you!
                </p>
                <p>
                  AERIS has a variant originally developed for Mars UAV flight that operates perfectly in the atmosphere, granting High Altitude platforms, drones and UAVs propulsion anywhere below 50 km.
                </p>
                <p>
                  Fully electric and fuel free, using the air around it to maneuvre and station keep.
                </p>
              </div>

              <div className="relative w-full h-[300px] sm:h-[360px] rounded-xl overflow-hidden bg-white shadow-xl order-1 md:order-2">
                <Image
                  src="/aeris-haps.jpg"
                  alt="AERIS HAPS Electric Thruster Pod CAD Model"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
