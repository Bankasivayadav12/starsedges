"use client";

import React, { useState, useEffect } from "react";

export default function SupportedByCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [activePartner, setActivePartner] = useState<string | null>(null);

  const partners = [
    {
      name: "green future investments ltd",
      type: "Climate & Tech Capital",
      render: () => (
        <div className="flex items-center space-x-3 select-none">
          <div className="w-9 h-9 rounded-full border-2 border-[#84CC16] flex items-center justify-center bg-black">
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-400" />
          </div>
          <span className="text-[#84CC16] font-bold text-sm tracking-tight whitespace-nowrap">
            green future investments ltd
          </span>
        </div>
      ),
    },
    {
      name: "FUSION",
      type: "Aerospace Innovation Hub",
      render: () => (
        <div className="flex items-center space-x-1 select-none">
          <span className="text-white font-black text-2xl tracking-tighter">FUS</span>
          <span className="text-[#EF4444] text-xl font-mono mx-0.5">/\</span>
          <span className="text-white font-black text-2xl tracking-tighter">ON</span>
          <span className="text-[#EF4444] text-lg font-bold ml-1">↗</span>
        </div>
      ),
    },
    {
      name: "exotopic",
      type: "Deep Tech & Space Engineering",
      render: () => (
        <div className="flex items-center space-x-2.5 select-none">
          <div className="w-7 h-7 border-2 border-[#06B6D4] rotate-45 flex items-center justify-center rounded-[2px]">
            <div className="w-3 h-3 border border-[#06B6D4]" />
          </div>
          <span className="text-white font-medium text-lg tracking-tight lowercase whitespace-nowrap">
            exotopic
          </span>
        </div>
      ),
    },
    {
      name: "Eagle Labs",
      type: "Barclays Incubator",
      render: () => (
        <div className="flex items-center space-x-2.5 select-none">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#991B1B] font-bold text-xs shadow">
            🦅
          </div>
          <span className="text-white font-semibold text-sm tracking-tight whitespace-nowrap">
            Eagle Labs
          </span>
        </div>
      ),
    },
    {
      name: "UK Space Agency",
      type: "National Space Programme",
      render: () => (
        <div className="flex items-center space-x-2 select-none">
          <div className="w-7 h-7 rounded-full bg-[#00247D] flex items-center justify-center border border-white/20">
            <span className="text-[#CF142B] font-black text-xs">▲</span>
          </div>
          <div className="leading-none text-left">
            <span className="text-white font-extrabold text-xs tracking-wider block">UK SPACE</span>
            <span className="text-neutral-400 font-bold text-[9px] tracking-widest block">AGENCY</span>
          </div>
        </div>
      ),
    },
    {
      name: "ESA BIC UK",
      type: "European Space Agency",
      render: () => (
        <div className="flex items-center space-x-2 select-none">
          <div className="w-7 h-7 rounded-full border border-neutral-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00A3E0]" />
          </div>
          <div className="leading-none text-left">
            <span className="text-white font-bold text-xs tracking-tight">esa</span>
            <span className="text-[#00A3E0] font-bold text-[10px] tracking-wider ml-1">BIC UK</span>
          </div>
        </div>
      ),
    },
    {
      name: "Innovate UK",
      type: "UK Research and Innovation",
      render: () => (
        <div className="flex items-center space-x-2 select-none">
          <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-rose-500 rounded flex items-center justify-center text-white font-black text-[10px]">
            UK
          </div>
          <span className="text-white font-bold text-sm tracking-tight whitespace-nowrap">
            Innovate UK
          </span>
        </div>
      ),
    },
    {
      name: "SETSquared Partnership",
      type: "Global University Incubator",
      render: () => (
        <div className="flex items-center space-x-2 select-none">
          <div className="bg-[#1E3A8A] text-white px-2 py-0.5 rounded text-xs font-black tracking-tight">
            SET²
          </div>
          <span className="text-neutral-200 font-bold text-xs tracking-tight whitespace-nowrap">
            SETSquared
          </span>
        </div>
      ),
    },
    {
      name: "Surrey Research Park",
      type: "Aerospace Innovation Campus",
      render: () => (
        <div className="flex items-center space-x-2 select-none">
          <div className="w-6 h-6 rounded-full border border-amber-400 flex items-center justify-center text-amber-400 font-black text-[9px]">
            SRP
          </div>
          <span className="text-neutral-200 font-semibold text-xs tracking-tight whitespace-nowrap">
            Surrey Research Park
          </span>
        </div>
      ),
    },
  ];

  const visibleCount = 4;
  const maxIndex = partners.length - visibleCount;

  const next = () => {
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Optional subtle auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div className="w-full relative max-w-5xl mx-auto">
      {/* Outer row with < and > arrows outside/alongside the pill card */}
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        {/* Left Arrow Button */}
        <button
          onClick={prev}
          aria-label="Previous supporter logos"
          className="text-white/60 hover:text-white text-3xl sm:text-4xl font-light p-2 transition-all hover:scale-125 cursor-pointer flex-shrink-0 select-none"
        >
          &lt;
        </button>

        {/* The Dark Logos Card */}
        <div className="flex-1 bg-[#09090b] border border-neutral-800/80 rounded-2xl sm:rounded-3xl py-7 px-4 sm:px-8 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center transition-all duration-300">
            {partners.slice(startIndex, startIndex + visibleCount).map((partner) => (
              <div
                key={partner.name}
                onClick={() => setActivePartner(partner.name)}
                className="w-full flex items-center justify-center group cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                title={`${partner.name} — ${partner.type}`}
              >
                <div className="transform group-hover:scale-105 transition-transform duration-200">
                  {partner.render()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={next}
          aria-label="Next supporter logos"
          className="text-white/60 hover:text-white text-3xl sm:text-4xl font-light p-2 transition-all hover:scale-125 cursor-pointer flex-shrink-0 select-none"
        >
          &gt;
        </button>
      </div>

      {/* Pagination indicators */}
      <div className="flex items-center justify-center space-x-2 mt-5">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStartIndex(idx)}
            aria-label={`Go to supporter slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              startIndex === idx ? "w-6 bg-[#2563EB]" : "w-1.5 bg-neutral-700 hover:bg-neutral-500"
            }`}
          />
        ))}
      </div>

      {/* Partner Info Toast */}
      {activePartner && (
        <div className="mt-4 p-3 bg-neutral-900/90 border border-neutral-800 rounded-lg text-center text-xs text-neutral-300 animate-fadeIn flex items-center justify-center space-x-3 max-w-md mx-auto">
          <span>
            Partner: <strong className="text-white">{activePartner}</strong>
          </span>
          <button
            onClick={() => setActivePartner(null)}
            className="text-neutral-400 hover:text-white font-bold ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
