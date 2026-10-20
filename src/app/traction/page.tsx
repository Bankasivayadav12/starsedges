"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportedByCarousel from "@/components/SupportedByCarousel";

export default function TractionPage() {
  // News & Blogs Carousel State
  const [blogIndex, setBlogIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState<{
    title: string;
    date: string;
    category?: string;
    content: string;
    image: string;
  } | null>(null);

  // Gallery State
  const [galleryIndex, setGalleryIndex] = useState(0);

  const blogs = [
    {
      date: "15 July 2026",
      category: "Sustainability",
      title: "ESA Clean Space Days 2026",
      image: "/cleanroom-satellite.jpg",
      content:
        "STARS EDGE presented our zero-debris VLEO aerodynamic orbital decay architecture at ESA Clean Space Days. Operating at 100–150 km guarantees that all decommissioned spacecraft re-enter and disintegrate cleanly without contributing to the orbital space debris tracking catalogue.",
    },
    {
      date: "15 July 2026",
      category: "Propulsion",
      title: "Featured in The Engineer (Royal Academy of Engineering)",
      image: "/team-contact.jpg",
      content:
        "The Royal Academy of Engineering highlighted the AERIS air-breathing plasma ramjet engine as a breakthrough for sovereign Earth observation. By utilizing residual upper-atmosphere gas as propellant, AirSAT eliminates traditional hydrazine and xenon fuel constraints.",
    },
    {
      date: "15 July 2026",
      category: "Policy",
      title: "Meetings in UK Parliament with ACT for SME",
      image: "/team-office.jpg",
      content:
        "Leadership from STARS EDGE engaged with UK parliamentarians and aerospace trade delegates on securing sovereign satellite supply chains, domestic launch manifests, and critical telecom infrastructure resilience.",
    },
    {
      date: "15 July 2026",
      category: "Hardware",
      title: "Signing off the GMSS Satellite!",
      image: "/cleanroom-satellite.jpg",
      content:
        "Engineering sign-off completed for the ground qualification bus test unit at the Surrey Technology Centre cleanroom. Thermal vacuum cycling and vibration envelope tests confirmed nominal performance across all subsystems.",
    },
    {
      date: "12 July 2026",
      category: "Keynote",
      title: "Next Gen Aerospace Summit Keynote",
      image: "/team-booth.jpg",
      content:
        "Delivered keynote remarks on direct-to-device orbital tasking and decentralized ground architectures for tactical defense and emergency wildfire response.",
    },
    {
      date: "08 July 2026",
      category: "Propulsion",
      title: "AERIS Hypersonic Compression Benchmarks",
      image: "/aeris-module.jpg",
      content:
        "Ground test cells demonstrated sustained ionisation efficiency exceeding 92% under low-pressure rarefied gas flow conditions representative of 120 km orbital perigee.",
    },
    {
      date: "02 July 2026",
      category: "Award",
      title: "Surrey Research Park Innovation Award 2026",
      image: "/team-office.jpg",
      content:
        "STARS EDGE was honored with the Innovation of the Year Award at Surrey Research Park for groundbreaking engineering in sustainable, self-refuelling orbital propulsion.",
    },
    {
      date: "28 June 2026",
      category: "Defense",
      title: "Defense APAC Operational Trial MOU Finalized",
      image: "/team-booth.jpg",
      content:
        "Signed a memorandum of understanding with Asia-Pacific maritime security stakeholders for persistent tactical surveillance passes across sensitive shipping corridors using dedicated AirSAT slots.",
    },
    {
      date: "22 June 2026",
      category: "Optics",
      title: "Sub-Meter Optical Payload Integration Tests Complete",
      image: "/airsat-model.jpg",
      content:
        "Completed calibration runs for the high-aperture multispectral imager. Operating at 135 km perigee achieves 0.45m ground sample distance with optical elements one-third the weight of traditional LEO mirrors.",
    },
    {
      date: "17 June 2026",
      category: "Testing",
      title: "Vacuum Wind Tunnel High-Enthalpy Test Run 14",
      image: "/aeris-module.jpg",
      content:
        "Successfully evaluated the AERIS intake cowl geometry in a Mach 24 equivalent rarefied atmospheric wind tunnel. Molecular capture ratio exceeded theoretical baseline targets by 14%.",
    },
    {
      date: "10 June 2026",
      category: "Software",
      title: "Direct-to-Device Laptop Tasking Protocol Demonstration",
      image: "/laptop-station.jpg",
      content:
        "Demonstrated real-time orbital tasking from a ruggedized laptop directly to simulated satellite avionics, bypassing conventional teleport relay antennas with sub-second uplink latency.",
    },
    {
      date: "04 June 2026",
      category: "Recognition",
      title: "Barclays Eagle Labs Deep Tech Showcase Winner",
      image: "/team-contact.jpg",
      content:
        "STARS EDGE was chosen as the flagship venture in the Barclays Eagle Labs Aerospace cohort, accelerating sovereign industrial scaling for UK advanced manufacturing.",
    },
    {
      date: "28 May 2026",
      category: "Funding",
      title: "UK Space Agency Grant for Rarefied Gas Dynamics",
      image: "/airsat-tech-hero.jpg",
      content:
        "Awarded competitive innovation grant support from the UK Space Agency to advance kinetic modelling of thermospheric oxygen-nitrogen plasma ionization.",
    },
    {
      date: "20 May 2026",
      category: "Edge AI",
      title: "Constellation Telemetry Architecture Deployed",
      image: "/airsat-orbit.jpg",
      content:
        "Deployed onboard neural inference models onto radiation-tolerant space compute chips, allowing AirSAT to filter cloud cover and stream down only critical situational analysis.",
    },
    {
      date: "14 May 2026",
      category: "Exhibition",
      title: "Farnborough International Airshow Delegation",
      image: "/team-booth.jpg",
      content:
        "STARS EDGE announced our official exhibit presence at Farnborough International Airshow Space Zone, displaying 1:1 scale flight bus demonstrators and AERIS engine hardware.",
    },
    {
      date: "08 May 2026",
      category: "Materials",
      title: "Aerospace Materials Lab: Carbon-Carbon Drag Shielding",
      image: "/cleanroom-satellite.jpg",
      content:
        "Passed extreme thermal shock cycling up to 1,200°C for leading-edge aerodynamic surfaces, guaranteeing structural integrity across multi-year continuous operations.",
    },
    {
      date: "01 May 2026",
      category: "Policy",
      title: "European Space Policy Institute (ESPI) Roundtable",
      image: "/team-office.jpg",
      content:
        "Participated in pan-European policy discussions on defining orbital sovereignty, space traffic coordination, and spectrum priority within the emerging VLEO corridor.",
    },
    {
      date: "24 April 2026",
      category: "AERIS HAPS",
      title: "AERIS HAPS Stratospheric Drone Thruster Trial",
      image: "/aeris-haps.jpg",
      content:
        "Demonstrated the electric propulsion capability of the AERIS HAPS pod under sub-50 km atmospheric conditions, verifying endurance power requirements for station-keeping drones.",
    },
    {
      date: "18 April 2026",
      category: "Milestone",
      title: "45-Satellite Commercial Constellation Pre-Contract MOU",
      image: "/team-contact.jpg",
      content:
        "Formalized an agreement with European environmental monitoring entities to supply an initial constellation tranche of 45 sovereign AirSAT observation units.",
    },
    {
      date: "10 April 2026",
      category: "Team",
      title: "STARS EDGE Welcomes New Aerospace Engineering Cohort",
      image: "/team-office.jpg",
      content:
        "Welcomed seven new specialists in plasma dynamics, flight guidance software, and RF payload integration to our growing engineering campus at Surrey Research Park.",
    },
  ];

  const galleryItems = [
    {
      src: "/team-booth.jpg",
      caption: "STARS EDGE stand unveiling the AirSAT satellite bus, prototype models, and AERIS engine.",
    },
    {
      src: "/cleanroom-satellite.jpg",
      caption: "Signing off the flight qualification bus unit in the Surrey cleanroom facility.",
    },
    {
      src: "/gallery/gallery-main-booth.jpg",
      caption: "Exhibition presentation displaying the 3D AirSAT vehicle and AERIS engine core.",
    },
    {
      src: "/gallery/event-team-full.jpg",
      caption: "Engineering team showcase at the Beneath the Event Horizon aerospace exhibition.",
    },
    {
      src: "/airsat-tech-hero.jpg",
      caption: "AirSAT aerodynamic in-orbit operational profile in VLEO (100â€“150 km).",
    },
    {
      src: "/gallery/cleanroom-thumbsup.jpg",
      caption: "Cleanroom final validation milestone for the flight demonstrator satellite bus.",
    },
    {
      src: "/team-contact.jpg",
      caption: "Surrey Technology Centre workshop session with the engineering propulsion team.",
    },
    {
      src: "/team-office.jpg",
      caption: "Mission operations telemetry review and aerodynamic orbit simulation modelling.",
    },
    {
      src: "/airsat-orbit.jpg",
      caption: "AirSAT deployed solar array configuration in low-drag thermospheric flight.",
    },
    {
      src: "/airsat-model.jpg",
      caption: "High-precision CAD flight vehicle architecture optimized for rarefied atmospheric lift.",
    },
    {
      src: "/aeris-module.jpg",
      caption: "AERIS plasma ramjet propulsion engine module with integrated power conditioning.",
    },
    {
      src: "/aeris-haps.jpg",
      caption: "AERIS HAPS electric thruster unit for high-altitude stratospheric UAV operations.",
    },
    {
      src: "/laptop-station.jpg",
      caption: "Tactical direct-to-device laptop tasking station for real-time mission telemetry.",
    },
    {
      src: "/hero-bg.jpg",
      caption: "Earth's atmospheric boundary layer and thermospheric corridor at orbital velocity.",
    },
    {
      src: "/gallery/airsat-orbit-full.jpg",
      caption: "Sub-meter multispectral orbital vantage perspective across global observation corridors.",
    },
    {
      src: "/gallery/cleanroom-assembly.jpg",
      caption: "Cleanroom precision payload integration and solar array wiring for flight readiness.",
    },
  ];

  // News & Blogs View & Filter State
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Propulsion",
    "Sustainability",
    "Hardware",
    "Defense",
    "Policy",
    "Optics",
    "Testing",
  ];

  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : blogs.filter((b) => b.category === selectedCategory);

  const visibleCards = 4;
  const maxBlogIndex = Math.max(0, filteredBlogs.length - visibleCards);

  const nextBlog = () => {
    setBlogIndex((prev) => (prev >= maxBlogIndex ? 0 : prev + 1));
  };

  const prevBlog = () => {
    setBlogIndex((prev) => (prev <= 0 ? maxBlogIndex : prev - 1));
  };

  const displayedBlogs = viewMode === "grid"
    ? filteredBlogs
    : filteredBlogs.slice(blogIndex, blogIndex + visibleCards);

  const nextGallery = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevGallery = () => {
    setGalleryIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  // Keep active thumbnail centered smoothly
  useEffect(() => {
    const activeBtn = document.getElementById(`thumb-btn-${galleryIndex}`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [galleryIndex]);

  const scrollThumbs = (direction: "left" | "right") => {
    const el = document.getElementById("gallery-thumbs-track");
    if (el) {
      el.scrollBy({ left: direction === "left" ? -280 : 280, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      <main className="py-16 sm:py-20">
        {/* TRACTION YOU WANT TO SEE */}
        <section className="px-4 sm:px-8 max-w-5xl mx-auto mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-12 tracking-tight">
            Traction you want to see!
          </h1>

          <div className="relative w-full h-[360px] sm:h-[480px] md:h-[580px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src="/cleanroom-satellite.jpg"
              alt="Aerospace engineer in cleanroom with satellite"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="mt-14 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Before our first flight, momentum is already building:
            </h2>

            <ul className="space-y-3 text-left inline-block max-w-xl mx-auto text-[#D4D4D8] text-sm sm:text-base italic leading-relaxed">
              <li className="flex items-start">
                <span className="text-white not-italic mr-3">•</span>
                <span>Pre-contract for 45 satellites: MOU signed</span>
              </li>
              <li className="flex items-start">
                <span className="text-white not-italic mr-3">•</span>
                <span>Live defence pilots across the UK and APAC</span>
              </li>
              <li className="flex items-start">
                <span className="text-white not-italic mr-3">•</span>
                <span>Five payload programmes in development with partners across three continents</span>
              </li>
              <li className="flex items-start">
                <span className="text-white not-italic mr-3">•</span>
                <span>Further non-dilutive VLEO funding in progress with ESA and the UK Space Agency</span>
              </li>
            </ul>

            <p className="text-[#A1A1AA] text-xs sm:text-sm pt-4 leading-relaxed max-w-2xl mx-auto">
              News, stories and updates are on the way. Supported by and seen alongside our partners and backers below.
            </p>
          </div>
        </section>

        {/* NEWS AND BLOGS (20 Cards Carousel & Grid) */}
        <section className="px-4 sm:px-8 max-w-6xl mx-auto mb-28 border-t border-neutral-900 pt-20 sm:pt-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
                  News and Blogs
                </h2>
                <span className="bg-blue-600/20 text-[#60A5FA] border border-blue-500/30 text-xs font-bold px-2.5 py-1 rounded-full">
                  {blogs.length} Cards
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400">
                {viewMode === "carousel"
                  ? `Showing articles ${filteredBlogs.length > 0 ? blogIndex + 1 : 0}–${Math.min(blogIndex + visibleCards, filteredBlogs.length)} of ${filteredBlogs.length}`
                  : `Showing all ${filteredBlogs.length} articles in full grid`}
              </p>
            </div>

            {/* View Mode & Carousel controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* View Switcher Toggle */}
              <div className="inline-flex rounded-lg bg-neutral-900 p-1 border border-neutral-800 text-xs font-medium">
                <button
                  onClick={() => setViewMode("carousel")}
                  className={`px-3 py-1.5 rounded-md transition-all cursor-pointer flex items-center space-x-1.5 ${
                    viewMode === "carousel"
                      ? "bg-[#2563EB] text-white shadow"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span>Carousel</span>
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1.5 rounded-md transition-all cursor-pointer flex items-center space-x-1.5 ${
                    viewMode === "grid"
                      ? "bg-[#2563EB] text-white shadow"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span>All 20 Grid</span>
                </button>
              </div>

              {viewMode === "carousel" && filteredBlogs.length > visibleCards && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevBlog}
                    aria-label="Previous articles"
                    className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-lg cursor-pointer text-lg"
                  >
                    ‹
                  </button>
                  <span className="text-xs font-mono text-neutral-400 px-1">
                    {blogIndex + 1}/{maxBlogIndex + 1}
                  </span>
                  <button
                    onClick={nextBlog}
                    aria-label="Next articles"
                    className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-lg cursor-pointer text-lg"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setBlogIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap font-medium ${
                  selectedCategory === cat
                    ? "bg-white text-black font-semibold shadow"
                    : "bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-800"
                }`}
              >
                {cat}
                {cat === "All" ? ` (${blogs.length})` : ""}
              </button>
            ))}
          </div>

          {/* Cards Track / Grid */}
          <div className="w-full">
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {displayedBlogs.map((item, idx) => (
                <div
                  key={`${item.title}-${idx}`}
                  onClick={() => setSelectedArticle(item)}
                  className="bg-white rounded-xl overflow-hidden shadow-xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-200 border border-neutral-200 cursor-pointer"
                >
                  <div className="relative w-full h-44 overflow-hidden bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.category && (
                      <span className="absolute top-3 left-3 bg-black/75 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-neutral-500 font-semibold mb-2">
                        {item.date}
                      </div>
                      <h3 className="text-base font-bold text-neutral-900 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <span className="mt-5 text-[#2563EB] group-hover:text-blue-700 text-xs sm:text-[13px] font-bold text-left hover:underline flex items-center">
                      Continue Reading →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar (Carousel mode only) */}
          {viewMode === "carousel" && filteredBlogs.length > visibleCards && (
            <div className="w-full bg-neutral-900 h-1.5 rounded-full mt-8 overflow-hidden">
              <div
                className="bg-[#2563EB] h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${((blogIndex + visibleCards) / filteredBlogs.length) * 100}%`,
                }}
              />
            </div>
          )}
        </section>

        {/* SUPPORTED BY CAROUSEL */}
        <section className="px-6 sm:px-10 max-w-5xl mx-auto mb-28 border-t border-neutral-900 pt-20 sm:pt-24 select-none">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-12 tracking-tight">
            Supported by
          </h2>

          <SupportedByCarousel />
        </section>

        {/* STAR STRUCK APPEARANCES.. */}
        <section className="px-4 sm:px-8 max-w-5xl mx-auto mb-20 border-t border-neutral-900 pt-20 sm:pt-24 select-none">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2563EB] text-center mb-12 tracking-tight">
            Star struck appearances..
          </h2>

          <div className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-950">
            <Image
              src={galleryItems[galleryIndex].src}
              alt={galleryItems[galleryIndex].caption}
              fill
              sizes="100vw"
              className="object-cover object-center transition-all duration-300"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-center">
              <p className="text-sm sm:text-base text-neutral-200 font-medium drop-shadow">
                {galleryItems[galleryIndex].caption}
              </p>
            </div>

            <button
              onClick={prevGallery}
              aria-label="Previous gallery image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all text-xl cursor-pointer"
            >
              ‹
            </button>

            <button
              onClick={nextGallery}
              aria-label="Next gallery image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all text-xl cursor-pointer"
            >
              ›
            </button>
          </div>

          {/* Thumbnails strip with scroll and counter */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 px-1">
              <span>Photo {galleryIndex + 1} of {galleryItems.length}</span>
              <span>Click any image to view full display</span>
            </div>

            <div className="relative flex items-center">
              <button
                onClick={prevGallery}
                aria-label="Previous thumbnail"
                className="hidden sm:flex z-10 w-8 h-8 rounded-full bg-neutral-900/90 border border-neutral-700 text-white items-center justify-center hover:bg-neutral-800 mr-2 flex-shrink-0 cursor-pointer"
              >
                ‹
              </button>

              <div
                id="gallery-thumbs-track"
                className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-thin w-full scroll-smooth"
              >
                {galleryItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    aria-label={`View photo ${idx + 1}`}
                    className={`relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      galleryIndex === idx
                        ? "border-[#2563EB] scale-105 shadow-md shadow-blue-500/25 ring-2 ring-blue-500/40"
                        : "border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-600"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={nextGallery}
                aria-label="Next thumbnail"
                className="hidden sm:flex z-10 w-8 h-8 rounded-full bg-neutral-900/90 border border-neutral-700 text-white items-center justify-center hover:bg-neutral-800 ml-2 flex-shrink-0 cursor-pointer"
              >
                ›
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-700 rounded-xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-left">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white text-xl p-1 cursor-pointer"
            >
              ✕
            </button>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-wider">
                {selectedArticle.date}
              </span>
              {selectedArticle.category && (
                <>
                  <span className="text-neutral-500">•</span>
                  <span className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                    {selectedArticle.category}
                  </span>
                </>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedArticle.title}
            </h3>
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 border border-neutral-800">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              {selectedArticle.content}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
