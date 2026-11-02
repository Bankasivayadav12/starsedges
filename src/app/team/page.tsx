"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerLogos from "@/components/PartnerLogos";

function MemberCard({ name, role }: { name: string; role: string }) {
  const parts = name.trim().split(/\s+/);
  const initials =
    parts.length === 1
      ? parts[0].slice(0, 2).toUpperCase()
      : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();

  return (
    <div className="bg-white border border-neutral-200/90 hover:border-[#2563EB] rounded-3xl p-7 sm:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:shadow-[0_12px_36px_rgba(37,99,235,0.2)] hover:-translate-y-1 shadow-lg">
      {/* Circular Avatar */}
      <div className="relative mb-5">
        {/* Subtle Ambient Halo on Hover */}
        <div className="absolute -inset-1 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 pointer-events-none" />

        {/* Outer Ring */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2.5px] bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-400 group-hover:from-blue-600 group-hover:via-blue-500 group-hover:to-blue-700 transition-all duration-300 shadow-md">
          {/* Inner Disc */}
          <div className="w-full h-full rounded-full bg-gradient-to-b from-neutral-900 via-neutral-950 to-black flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* Radial Glow Sheen */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.25)_0%,transparent_70%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Monogram Initials */}
            <span className="relative z-10 text-xl sm:text-2xl font-bold font-mono tracking-wider text-white group-hover:text-blue-300 transition-colors">
              {initials}
            </span>

            {/* Aerospace HUD Beacon Dot */}
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.9)] transition-colors" />
          </div>
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight group-hover:text-[#2563EB] transition-colors">
        {name}
      </h3>

      {/* Role */}
      <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-medium tracking-wide">
        {role}
      </p>
    </div>
  );
}

export default function TeamPage() {
  // UK / Global Headquarters Team (Placed on top)
  const ukLeadership = [
    {
      name: "Sara Alao",
      role: "CEO & Founder",
    },
    {
      name: "Andrew Witts",
      role: "Chief Technology Officer",
    },
    {
      name: "Brendan Huysamen",
      role: "Chief Operating Officer",
    },
  ];

  const ukSpecialists = [
    {
      name: "Samantha Stewart",
      role: "Commercial Officer",
    },
    {
      name: "Alistair Finch",
      role: "Propulsion Lead",
    },
    {
      name: "Eleanor Davies",
      role: "Avionics & Spacecraft Systems",
    },
  ];

  // India & Asia Regional Team
  const asiaLeadership = [
    {
      name: "Nivadhitha Roy",
      role: "CEO of Asia",
    },
    {
      name: "Rama Swammy Naidu",
      role: "India Head",
    },
    {
      name: "Trivadhi",
      role: "South Head",
    },
  ];

  const metallurgists = [
    {
      name: "Harshini Krishna",
      role: "Metallurgist",
    },
    {
      name: "Monies Sivaraj",
      role: "Metallurgist",
    },
  ];

  const coordinators = [
    {
      name: "Legal Ackivas",
      role: "Legal Coordinator",
    },
    {
      name: "V.S.N. Roa",
      role: "Regional Coordinator",
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
              alt="Stars Edges team showcasing satellite at exhibition booth"
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
              Our vision at Stars Edges is to be the leading provider of innovative solutions in the science and technology industry. We strive to create a better future through our work and to make a positive impact on society.
            </p>
          </div>
        </section>

        {/* THE STARS BEHIND THE SHOW... */}
        <section className="px-6 sm:px-10 max-w-6xl mx-auto mb-24 border-t border-neutral-900 pt-20 sm:pt-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-16 sm:mb-20 tracking-tight">
            The Stars behind the show...
          </h2>

          {/* UK / GLOBAL HEADQUARTERS TEAM (ON TOP) */}
          <div className="mb-20 sm:mb-24">
            <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#2563EB] mb-2">
                United Kingdom Headquarters
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Global Executive & Engineering Team
              </h3>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {/* Row 1: Executive Leadership (3) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {ukLeadership.map((person, idx) => (
                  <MemberCard key={idx} name={person.name} role={person.role} />
                ))}
              </div>

              {/* Row 2: Specialists & Leads (3) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {ukSpecialists.map((person, idx) => (
                  <MemberCard key={idx} name={person.name} role={person.role} />
                ))}
              </div>
            </div>
          </div>

          {/* ASIA & INDIA DIVISION */}
          <div className="pt-16 border-t border-neutral-900/80">
            <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#2563EB] mb-2">
                Asia & India Division
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Regional Operations & Materials Team
              </h3>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {/* Row 1: Leadership (3) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {asiaLeadership.map((person, idx) => (
                  <MemberCard key={idx} name={person.name} role={person.role} />
                ))}
              </div>

              {/* Row 2: Metallurgy & Materials (2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto w-full">
                {metallurgists.map((person, idx) => (
                  <MemberCard key={idx} name={person.name} role={person.role} />
                ))}
              </div>

              {/* Row 3: Coordinators (2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto w-full">
                {coordinators.map((person, idx) => (
                  <MemberCard key={idx} name={person.name} role={person.role} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THE TEAM HAS WORKED WITH */}
        <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-20 border-t border-neutral-900 pt-20 sm:pt-24">
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
