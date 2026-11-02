import React from "react";

export default function PartnerLogos() {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl max-w-6xl mx-auto select-none border border-neutral-200">
      <div className="space-y-10 sm:space-y-12">
        {/* Row 1: 4 Logos (Centered) */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-8">
          {/* 1. THALES */}
          <div className="flex items-center justify-center h-16 px-4 group hover:scale-105 transition-transform duration-200">
            <div className="flex items-center select-none font-sans font-black tracking-[0.22em] text-xl sm:text-2xl text-[#1E2568]">
              <span>TH</span>
              <span className="relative mx-[0.5px]">
                A
                <span className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#00A3E0] rounded-full" />
              </span>
              <span>LES</span>
            </div>
          </div>

          {/* 2. BAE SYSTEMS */}
          <div className="flex items-center justify-center h-16 px-4 group hover:scale-105 transition-transform duration-200">
            <div className="bg-[#E1143A] px-4 py-2.5 rounded-[3px] shadow-sm flex items-center justify-center">
              <span className="text-white font-extrabold text-xs sm:text-sm tracking-widest font-sans whitespace-nowrap select-none">
                BAE SYSTEMS
              </span>
            </div>
          </div>

          {/* 3. ROLLS ROYCE */}
          <div className="flex items-center justify-center h-20 px-4 group hover:scale-105 transition-transform duration-200">
            <svg viewBox="0 0 54 74" className="h-16 sm:h-[70px] w-auto drop-shadow-sm">
              <rect x="2" y="2" width="50" height="70" fill="#FFFFFF" stroke="#001C48" strokeWidth="2.5" />
              <rect x="4.5" y="4.5" width="45" height="65" fill="none" stroke="#001C48" strokeWidth="0.8" />
              <line x1="2" y1="18" x2="52" y2="18" stroke="#001C48" strokeWidth="1.5" />
              <line x1="2" y1="56" x2="52" y2="56" stroke="#001C48" strokeWidth="1.5" />
              <text
                x="27"
                y="14"
                fill="#001C48"
                fontFamily="'Times New Roman', Times, serif"
                fontWeight="bold"
                fontSize="7.5"
                letterSpacing="1.2"
                textAnchor="middle"
              >
                ROLLS
              </text>
              <text
                x="22"
                y="44"
                fill="#001C48"
                fontFamily="'Times New Roman', Times, serif"
                fontWeight="bold"
                fontSize="28"
                textAnchor="middle"
              >
                R
              </text>
              <text
                x="32"
                y="47"
                fill="#001C48"
                fontFamily="'Times New Roman', Times, serif"
                fontWeight="bold"
                fontSize="28"
                textAnchor="middle"
              >
                R
              </text>
              <text
                x="27"
                y="66"
                fill="#001C48"
                fontFamily="'Times New Roman', Times, serif"
                fontWeight="bold"
                fontSize="7.5"
                letterSpacing="1.2"
                textAnchor="middle"
              >
                ROYCE
              </text>
            </svg>
          </div>

          {/* 4. inmarsat */}
          <div className="flex items-center justify-center h-16 px-4 group hover:scale-105 transition-transform duration-200">
            <svg viewBox="0 0 135 40" className="h-7 sm:h-8 w-auto">
              <text
                x="0"
                y="28"
                fill="#001E44"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="800"
                fontSize="24"
                letterSpacing="-0.5"
              >
                inmarsat
              </text>
              <path
                d="M110 13 A 10 10 0 0 1 123 2"
                fill="none"
                stroke="#001E44"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M114 15 A 7 7 0 0 1 121 7"
                fill="none"
                stroke="#001E44"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M117 17 A 4 4 0 0 1 120 12"
                fill="none"
                stroke="#001E44"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Row 2: 5 Logos (Centered) */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-8">
          {/* 5. esa */}
          <div className="flex items-center justify-center h-16 px-4 group hover:scale-105 transition-transform duration-200">
            <svg viewBox="0 0 115 42" className="h-9 sm:h-10 w-auto">
              <circle cx="21" cy="21" r="16" fill="none" stroke="#003247" strokeWidth="2.2" />
              <path d="M 12 16 A 9 9 0 0 1 27 13" fill="none" stroke="#003247" strokeWidth="1.8" />
              <path d="M 9 21 A 12 12 0 0 1 33 21" fill="none" stroke="#003247" strokeWidth="1.8" />
              <path d="M 12 26 A 9 9 0 0 0 27 29" fill="none" stroke="#003247" strokeWidth="1.8" />
              <circle cx="21" cy="21" r="3.2" fill="#003247" />
              <text
                x="46"
                y="29"
                fill="#003247"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="800"
                fontSize="27"
                letterSpacing="-0.5"
              >
                esa
              </text>
            </svg>
          </div>

          {/* 6. NASA */}
          <div className="flex items-center justify-center h-16 px-4 group hover:scale-105 transition-transform duration-200">
            <svg
              viewBox="0 0 120 120"
              className="h-14 sm:h-16 w-14 sm:w-16 drop-shadow-sm"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="60" cy="60" r="56" fill="#0B3D91" />
              <circle cx="28" cy="38" r="1" fill="#FFFFFF" opacity="0.8" />
              <circle cx="34" cy="24" r="0.8" fill="#FFFFFF" opacity="0.7" />
              <circle cx="48" cy="32" r="1.2" fill="#FFFFFF" opacity="0.9" />
              <circle cx="76" cy="22" r="0.9" fill="#FFFFFF" opacity="0.8" />
              <circle cx="92" cy="35" r="1" fill="#FFFFFF" opacity="0.8" />
              <circle cx="88" cy="88" r="1.1" fill="#FFFFFF" opacity="0.85" />
              <circle cx="32" cy="80" r="0.9" fill="#FFFFFF" opacity="0.75" />
              <circle cx="42" cy="94" r="0.8" fill="#FFFFFF" opacity="0.7" />
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
              <path d="M22 92 L98 28 L104 35 L30 98 Z" fill="#FC3D21" />
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

          {/* 7. EUMETSAT */}
          <div className="flex items-center justify-center h-16 px-4 group hover:scale-105 transition-transform duration-200">
            <svg viewBox="0 0 170 38" className="h-7 sm:h-8 w-auto">
              <circle cx="16" cy="19" r="14" fill="#002D5A" />
              <rect x="5" y="11" width="10" height="2.5" fill="#FFFFFF" rx="0.5" />
              <rect x="3" y="17" width="14" height="3" fill="#FFFFFF" rx="0.5" />
              <rect x="5" y="24" width="10" height="2.5" fill="#FFFFFF" rx="0.5" />
              <text
                x="36"
                y="26"
                fill="#002D5A"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="900"
                fontSize="20"
                letterSpacing="0.8"
              >
                EUMETSAT
              </text>
            </svg>
          </div>

          {/* 8. eutelsat */}
          <div className="flex items-center justify-center h-16 px-4 group hover:scale-105 transition-transform duration-200">
            <svg viewBox="0 0 160 38" className="h-7 sm:h-8 w-auto">
              <circle cx="18" cy="19" r="13" fill="#00A3E0" />
              <path d="M12 19 L21 13 L21 25 Z" fill="#002855" />
              <circle cx="25" cy="19" r="2.2" fill="#002855" />
              <text
                x="38"
                y="26"
                fill="#002855"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="700"
                fontSize="22"
                letterSpacing="-0.3"
              >
                eutelsat
              </text>
            </svg>
          </div>

          {/* 9. Cranfield UNIVERSITY */}
          <div className="flex items-center justify-center h-16 px-4 group hover:scale-105 transition-transform duration-200">
            <div className="flex flex-col items-start justify-center select-none">
              <span
                className="text-[#002649] font-serif font-black text-xl sm:text-2xl leading-tight tracking-tight"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                Cranfield
              </span>
              <span className="text-[#002649] font-sans font-bold text-[7.5px] sm:text-[8.5px] tracking-[0.35em] uppercase -mt-0.5">
                UNIVERSITY
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
