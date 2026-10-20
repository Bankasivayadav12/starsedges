"use client";

import React from "react";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#"
      aria-label="STARS EDGES Home"
      className={`inline-flex items-center justify-center select-none cursor-pointer group transition-opacity hover:opacity-95 ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <Image
          src="/starsedges.png"
          alt="STARS EDGES Logo"
          width={320}
          height={120}
          priority
          className="h-14 sm:h-18 md:h-20 lg:h-22 w-auto object-contain drop-shadow-[0_4px_16px_rgba(255,255,255,0.25)] group-hover:scale-[1.03] transition-transform duration-200"
        />
      </div>
    </a>
  );
}
