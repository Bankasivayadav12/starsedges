"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerLogos from "@/components/PartnerLogos";

export default function TeamPage() {
  const leadership = [
    {
      name: "Sara Alao",
      role: "CEO",
      image: "/team-sara.jpg",
    },
    {
      name: "Andrew Witts",
      role: "CTO",
      image: "/team-andrew.jpg",
    },
    {
      name: "Brendan Huysamen",
      role: "COO",
      image: "/team-brendan.jpg",
    },
  ];

  const engineering = [
    {
      name: "Triyan Pal Arora",
      role: "Engineering Lead",
      image: "/team-triyan.jpg",
    },
    {
      name: "Samantha Stewart",
      role: "Commercial Officer",
      image: "/team-samantha.jpg",
    },
    {
      name: "Mohammad Ismail",
      role: "Propulsion Engineer",
      image: "/team-mohammad.jpg",
    },
  ];

  const specialists = [
    {
      name: "Arturo Vara Herrara",
      role: "Spacecraft Materials & Processes Engineer",
      image: "/team-arturo.jpg",
    },
    {
      name: "Esme Griffiths-Nowicki",
      role: "Propulsion Intern",
      image: "/team-esme.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      <main className="py-16 sm:py-20">
        {/* BENEATH THE EVENT HORIZON */}
        <section className="px-4 sm:px-8 max-w-5xl mx-auto mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-12 tracking-tight">
            Beneath the event horizon
          </h1>

          {/* Exhibition Booth Team Photo */}
          <div className="relative w-full h-[340px] sm:h-[480px] md:h-[580px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src="/team-booth.jpg"
              alt="Stars Edge team showcasing satellite at exhibition booth"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Our Vision */}
          <div className="mt-14 text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
              Our Vision
            </h2>
            <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              Our vision at Stars Edge is to be the leading provider of innovative solutions in the science and technology industry. We strive to create a better future through our work and to make a positive impact on society.
            </p>
          </div>
        </section>

        {/* THE STARS BEHIND THE SHOW... */}
        <section className="px-6 sm:px-10 max-w-6xl mx-auto mb-24 border-t border-neutral-900 pt-20 sm:pt-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-16 sm:mb-20 tracking-tight">
            The Stars behind the show...
          </h2>

          <div className="space-y-12 sm:space-y-16">
            {/* Row 1: Executive Leadership (3) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 justify-items-center">
              {leadership.map((person, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-neutral-800 shadow-xl group-hover:border-[#2563EB] transition-colors">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 150px, 200px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-5">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mt-1">
                    {person.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2: Leads & Engineers (3) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 justify-items-center">
              {engineering.map((person, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-neutral-800 shadow-xl group-hover:border-[#2563EB] transition-colors">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 150px, 200px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-5">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mt-1">
                    {person.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 3: Specialists & Interns (2) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
              {specialists.map((person, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group max-w-xs">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-neutral-800 shadow-xl group-hover:border-[#2563EB] transition-colors">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 150px, 200px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-5">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mt-1 leading-relaxed">
                    {person.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE TEAM HAS WORKED WITH */}
        <section className="px-6 sm:px-10 max-w-5xl mx-auto mb-20 border-t border-neutral-900 pt-20 sm:pt-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-14 tracking-tight">
            The team has worked with
          </h2>

          <PartnerLogos />
        </section>
      </main>

      <Footer />
    </div>
  );
}
