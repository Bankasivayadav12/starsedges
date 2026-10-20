import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-16 px-6 text-center select-none border-t border-neutral-900/60">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        {/* Privacy Policy Link */}
        <Link
          href="/privacy"
          className="text-[#2563EB] hover:text-blue-400 text-sm sm:text-base font-medium transition-colors"
        >
          Privacy Policy
        </Link>

        {/* LinkedIn Circular Icon */}
        <a
          href="https://www.linkedin.com/company/se-space"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:opacity-85 transition-opacity"
          aria-label="STARS EDGE LinkedIn"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.77c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" />
          </svg>
        </a>

        {/* Company Name */}
        <div className="text-white text-base sm:text-lg font-bold tracking-tight">
          Stars Edge Ltd
        </div>

        {/* Address */}
        <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
          Setsquared Surrey (Unit 58) Surrey Technology Centre, Surrey Research Park, Guildford, Surrey, United Kingdom, GU2 7YG
        </p>
      </div>
    </footer>
  );
}
