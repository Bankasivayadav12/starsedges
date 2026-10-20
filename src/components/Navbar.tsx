"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const leftNavItems = [
    { name: "HOME", href: "/" },
    { name: "OUR TECHNOLOGY", href: "/technology" },
    { name: "THE TEAM", href: "/team" },
  ];

  const rightNavItems = [
    { name: "TRACTION YOU WANT TO SEE", href: "/traction" },
    { name: "FAQ", href: "/faq" },
  ];

  const isCurrentActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-black border-b border-black select-none sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-3 sm:py-4">
        <div className="relative flex items-center justify-between">
          {/* Left Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9 xl:space-x-11 flex-1">
            {leftNavItems.map((item) => {
              const active = isCurrentActive(item.href);
              return (
                <div key={item.name} className="relative inline-flex flex-col items-center">
                  <Link
                    href={item.href}
                    className={`text-[14px] tracking-[0.06em] font-bold uppercase transition-colors duration-150 ${
                      active ? "text-white" : "text-white hover:text-neutral-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {/* Underline exactly matching the HOME page active indicator */}
                  <span
                    className={`w-full h-[2px] mt-1.5 transition-all duration-200 ${
                      active ? "bg-white opacity-100" : "bg-transparent opacity-0"
                    }`}
                  />
                </div>
              );
            })}
          </nav>

          {/* Center STARS EDGE Logo */}
          <div className="flex-shrink-0 flex items-center justify-center px-4">
            <Logo />
          </div>

          {/* Right Navigation Links */}
          <nav className="hidden lg:flex items-center justify-end space-x-9 xl:space-x-11 flex-1">
            {rightNavItems.map((item) => {
              const active = isCurrentActive(item.href);
              return (
                <div key={item.name} className="relative inline-flex flex-col items-center">
                  <Link
                    href={item.href}
                    className={`text-[14px] tracking-[0.06em] font-bold uppercase transition-colors duration-150 ${
                      active ? "text-white" : "text-white hover:text-neutral-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {/* Underline exactly matching the HOME page active indicator */}
                  <span
                    className={`w-full h-[2px] mt-1.5 transition-all duration-200 ${
                      active ? "bg-white opacity-100" : "bg-transparent opacity-0"
                    }`}
                  />
                </div>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-white hover:text-neutral-300 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-neutral-900 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {[...leftNavItems, ...rightNavItems].map((item) => {
              const active = isCurrentActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm tracking-widest font-bold uppercase py-2 px-3 rounded flex items-center justify-between ${
                    active ? "text-white bg-neutral-900 border-l-2 border-white" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-white" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
