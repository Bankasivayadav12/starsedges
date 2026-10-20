import React from "react";

export default function PartnerLogos() {
  return (
    <div className="bg-white rounded-2xl p-10 sm:p-14 shadow-2xl max-w-xl mx-auto select-none border border-neutral-200">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
        {/* ROLLS ROYCE (Exact Match to User Reference) */}
        <div className="flex items-center justify-center group hover:scale-105 transition-transform duration-200">
          <div className="w-32 h-32 sm:w-36 sm:h-36 border-[2.5px] border-[#001C48] bg-white flex flex-col items-center justify-between py-4 px-2 shadow-sm">
            <span
              className="text-[#001C48] font-serif font-bold text-sm sm:text-[15px] tracking-[0.2em] block leading-none"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              ROLLS
            </span>
            <span
              className="text-[#001C48] font-serif font-black text-5xl sm:text-[56px] leading-none block my-auto"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              R
            </span>
            <span
              className="text-[#001C48] font-serif font-bold text-sm sm:text-[15px] tracking-[0.2em] block leading-none"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              ROYCE
            </span>
          </div>
        </div>

        {/* NASA (Exact Official Meatball Logo Match) */}
        <div className="flex items-center justify-center group hover:scale-105 transition-transform duration-200">
          <div className="w-32 h-32 sm:w-36 sm:h-36 relative flex items-center justify-center">
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full drop-shadow-md"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Blue Circular Sphere */}
              <circle cx="60" cy="60" r="56" fill="#0B3D91" />

              {/* Distant stars */}
              <circle cx="28" cy="38" r="1" fill="#FFFFFF" opacity="0.8" />
              <circle cx="34" cy="24" r="0.8" fill="#FFFFFF" opacity="0.7" />
              <circle cx="48" cy="32" r="1.2" fill="#FFFFFF" opacity="0.9" />
              <circle cx="76" cy="22" r="0.9" fill="#FFFFFF" opacity="0.8" />
              <circle cx="92" cy="35" r="1" fill="#FFFFFF" opacity="0.8" />
              <circle cx="88" cy="88" r="1.1" fill="#FFFFFF" opacity="0.85" />
              <circle cx="32" cy="80" r="0.9" fill="#FFFFFF" opacity="0.75" />
              <circle cx="42" cy="94" r="0.8" fill="#FFFFFF" opacity="0.7" />

              {/* White Elliptical Orbit Track */}
              <ellipse
                cx="60"
                cy="60"
                rx="48"
                ry="15"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                transform="rotate(-22 60 60)"
                opacity="0.85"
              />

              {/* Red Chevron Vector Slash */}
              <path
                d="M22 92 L98 28 L104 35 L30 98 Z"
                fill="#FC3D21"
              />

              {/* Bold White NASA Typography */}
              <text
                x="60"
                y="67"
                fill="#FFFFFF"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="900"
                fontSize="22"
                letterSpacing="1.5"
                textAnchor="middle"
              >
                NASA
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
