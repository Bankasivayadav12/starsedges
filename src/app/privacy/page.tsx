import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | STARS EDGES",
  description:
    "Privacy Policy for Stars Edges Ltd. Learn how we collect, process, and protect your personal information in compliance with UK GDPR and global data privacy standards.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />

      <main className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="border-b border-neutral-800 pb-12 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/50 text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Legal & Data Protection
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-400">
            <div>
              <span className="text-neutral-500">Effective Date:</span>{" "}
              <span className="text-neutral-300 font-medium">November 2026</span>
            </div>
            <span className="text-neutral-700">•</span>
            <div>
              <span className="text-neutral-500">Entity:</span>{" "}
              <span className="text-neutral-300 font-medium">Stars Edges Ltd</span>
            </div>
            <span className="text-neutral-700">•</span>
            <div>
              <span className="text-neutral-500">Jurisdiction:</span>{" "}
              <span className="text-neutral-300 font-medium">United Kingdom (UK GDPR)</span>
            </div>
          </div>
        </div>

        {/* Introduction Overview Banner */}
        <div className="bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 mb-14 backdrop-blur-sm">
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Stars Edges Ltd (&ldquo;Stars Edges&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to
            protecting and respecting your privacy. This Privacy Policy explains how we collect, store,
            use, and safeguard your personal information when you visit our website (
            <span className="text-white font-medium">https://www.starsedges.com</span>) or engage with our
            products, commercial satellite solutions, aerospace services, and communications.
          </p>
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
            Please read this policy carefully to understand our practices regarding your personal data and
            how we treat it in compliance with the UK Data Protection Act 2018, the UK General Data Protection
            Regulation (UK GDPR), and applicable international data protection laws.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 sm:space-y-16">
          {/* Section 1 */}
          <section id="data-controller" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">01.</span>
              Data Controller Information
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-9">
              <p>
                Under the UK General Data Protection Regulation and the Data Protection Act 2018, the data controller
                responsible for your personal data is:
              </p>
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-5 text-sm space-y-2">
                <div className="font-semibold text-white text-base">Stars Edges Ltd</div>
                <div className="text-neutral-400">
                  Setsquared Surrey (Unit 58) Surrey Technology Centre, Surrey Research Park, Guildford, Surrey,
                  United Kingdom, GU2 7YG
                </div>
                <div className="text-neutral-400">
                  Official Contact:{" "}
                  <a
                    href="mailto:Contact@starsedges.space"
                    className="text-[#2563EB] hover:text-blue-400 underline font-medium transition-colors"
                  >
                    Contact@starsedges.space
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="information-collected" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">02.</span>
              The Information We Collect
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 pl-0 sm:pl-9">
              <p>
                We may collect, use, store, and transfer different kinds of personal information depending on how you
                interact with us:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2 text-base text-blue-400">
                    A. Information You Provide Directly
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong className="text-white">Identity Details:</strong> Name, professional title, job role, and affiliated company or institution.</li>
                    <li><strong className="text-white">Contact Details:</strong> Business email address, telephone number, and organization address.</li>
                    <li><strong className="text-white">Inquiry Details:</strong> Payload specs, mission parameters, feedback, or messages submitted via web forms.</li>
                    <li><strong className="text-white">Commercial Correspondence:</strong> Records of inquiries, meetings, non-disclosure agreements, and communications.</li>
                  </ul>
                </div>

                <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-5">
                  <h3 className="font-semibold text-white mb-2 text-base text-blue-400">
                    B. Automatically Collected Technical Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong className="text-white">Device Information:</strong> IP address, device identifier, browser type and version, and operating system.</li>
                    <li><strong className="text-white">Browsing Metrics:</strong> Pages visited, duration of visits, referrers, and navigation paths.</li>
                    <li><strong className="text-white">Time Zone & Location:</strong> Generalized location derived from IP and network time zone.</li>
                    <li><strong className="text-white">Cookies:</strong> Session identification and analytical telemetry to optimize site performance.</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-neutral-400 italic">
                We do not collect any Special Category Data (e.g., genetic, biometric, political opinions, religious beliefs) or criminal conviction data.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="how-data-collected" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">03.</span>
              How We Collect Your Data
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-9">
              <p>We use various methods to collect data from and about you:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Direct Interactions:</strong> You provide information when filling out inquiry forms, requesting product sheets, subscribing to updates, reaching out via email, or meeting at aerospace conferences and defense expos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Automated Technologies:</strong> As you navigate through our website, web server log files and analytics scripts collect technical diagnostic data about your equipment and browsing patterns.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-white">Institutional & Industry Channels:</strong> We may receive business contact information from public enterprise directories, aerospace accelerators, or mutual industry partners.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="lawful-basis" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">04.</span>
              Purpose & Legal Basis for Processing
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 pl-0 sm:pl-9">
              <p>
                Under UK GDPR Article 6, we will only process your personal data when we have a legal basis. Most commonly, we rely on:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-neutral-800 text-sm">
                  <thead>
                    <tr className="bg-neutral-900/80 border-b border-neutral-800">
                      <th className="p-3 sm:p-4 text-white font-semibold">Purpose / Activity</th>
                      <th className="p-3 sm:p-4 text-white font-semibold">Type of Data</th>
                      <th className="p-3 sm:p-4 text-white font-semibold">Lawful Basis under UK GDPR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/80 text-neutral-300">
                    <tr>
                      <td className="p-3 sm:p-4">Responding to technical questions, AirSAT payload inquiries, and partnerships</td>
                      <td className="p-3 sm:p-4">Identity, Contact, Correspondence</td>
                      <td className="p-3 sm:p-4 text-[#2563EB] font-medium">Performance of a contract / Legitimate interests</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4">Delivering technical specifications, mission feasibility reviews, or aerospace proposals</td>
                      <td className="p-3 sm:p-4">Identity, Contact, Technical Requirements</td>
                      <td className="p-3 sm:p-4 text-[#2563EB] font-medium">Performance of a contract</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4">Maintaining website security, detecting malicious traffic, and ensuring server uptime</td>
                      <td className="p-3 sm:p-4">Technical, Network Logs</td>
                      <td className="p-3 sm:p-4 text-[#2563EB] font-medium">Legitimate interests (safeguarding IT security)</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4">Compliance with space licensing, export controls, and UK statutory obligations</td>
                      <td className="p-3 sm:p-4">Identity, Contact, Transaction</td>
                      <td className="p-3 sm:p-4 text-[#2563EB] font-medium">Legal obligation</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4">Sending engineering updates or aerospace industry newsletters (where opted in)</td>
                      <td className="p-3 sm:p-4">Identity, Contact</td>
                      <td className="p-3 sm:p-4 text-[#2563EB] font-medium">Consent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sovereign-data" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">05.</span>
              Orbital & Sovereign Mission Data
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 pl-0 sm:pl-9">
              <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg font-bold text-white mb-2">Our Commitment to Absolute Data Sovereignty</h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  STARS EDGES designs sovereign satellite platforms (AirSAT) powered by air-breathing electric propulsion
                  (AERIS) and direct-to-device tasking. When our commercial or governmental clients deploy missions, all
                  on-board edge intelligence, optical and sensor streams, payload commands, and encryption keys are owned
                  outright and operated exclusively by the client. STARS EDGES does not intercept, commercialize, or retain
                  unauthorized access to client sovereign orbital intelligence.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="data-disclosure" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">06.</span>
              Disclosure of Your Information
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-9">
              <p>
                <strong className="text-white">We do not sell, rent, or trade your personal data.</strong> We may share
                personal data only with trusted third parties under strict confidentiality and processing agreements:
              </p>
              <ul className="space-y-2 list-disc list-inside text-sm sm:text-base text-neutral-300">
                <li>
                  <strong className="text-white">Service Providers:</strong> Cloud hosting facilities, email transmission providers, and cybersecurity vendors who assist in operating our website and digital services under Data Processing Agreements (DPAs).
                </li>
                <li>
                  <strong className="text-white">Professional Advisers:</strong> Lawyers, auditors, bankers, and insurers who provide consultancy, legal, compliance, or accounting services.
                </li>
                <li>
                  <strong className="text-white">Regulatory and Law Enforcement Authorities:</strong> Regulators, government bodies, or judicial agencies when required by applicable law, export control enforcement, or court orders.
                </li>
                <li>
                  <strong className="text-white">Corporate Restructuring:</strong> In the event of a merger, acquisition, re-organization, or asset sale, recipient parties will be required to honor the terms of this Privacy Policy.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section id="international-transfers" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">07.</span>
              International Data Transfers
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-9">
              <p>
                Stars Edges Ltd operates in the United Kingdom. If your personal data is transferred outside the UK or the
                European Economic Area (EEA), we ensure a similar degree of protection is afforded to it by ensuring at least
                one of the following safeguards is implemented:
              </p>
              <ul className="space-y-2 list-disc list-inside text-sm text-neutral-300">
                <li>Transfers to countries approved by the UK Government or European Commission as providing an adequate level of data protection.</li>
                <li>Standard Contractual Clauses (SCCs) or the UK International Data Transfer Agreement (IDTA) approved by the UK Information Commissioner&rsquo;s Office.</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section id="data-security" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">08.</span>
              Data Security & Storage
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-9">
              <p>
                We have implemented rigorous technical, operational, and organizational security measures to prevent your
                personal data from being accidentally lost, used or accessed in an unauthorized way, altered, or disclosed.
                These include:
              </p>
              <ul className="space-y-2 list-disc list-inside text-sm text-neutral-300">
                <li>End-to-end TLS / HTTPS encryption for all data transmitted across our web interfaces.</li>
                <li>Role-based access control (RBAC) ensuring only personnel with a legitimate business need have access.</li>
                <li>Periodic vulnerability testing, security patch management, and strict credential hygiene.</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section id="data-retention" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">09.</span>
              Data Retention
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-9">
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for,
                including for the purposes of satisfying any legal, accounting, audit, or aerospace regulatory requirements.
              </p>
              <p>
                Contact form submissions and prospective client inquiries are retained for up to 24 months from our last active
                engagement, after which they are securely archived or purged unless an ongoing commercial or contractual
                relationship has commenced.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="your-rights" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">10.</span>
              Your Legal Rights (UK GDPR)
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 pl-0 sm:pl-9">
              <p>Under UK data protection laws, you have rights in relation to your personal data:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                  <div className="font-semibold text-white mb-1">Right to Access</div>
                  <div className="text-xs sm:text-sm text-neutral-400">Request a copy of the personal data we hold about you (Subject Access Request).</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                  <div className="font-semibold text-white mb-1">Right to Rectification</div>
                  <div className="text-xs sm:text-sm text-neutral-400">Request correction of any incomplete or inaccurate data we hold about you.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                  <div className="font-semibold text-white mb-1">Right to Erasure</div>
                  <div className="text-xs sm:text-sm text-neutral-400">Request deletion of personal data where there is no good reason for us continuing to process it.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                  <div className="font-semibold text-white mb-1">Right to Restrict Processing</div>
                  <div className="text-xs sm:text-sm text-neutral-400">Request suspension of processing under specific legal conditions.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                  <div className="font-semibold text-white mb-1">Right to Data Portability</div>
                  <div className="text-xs sm:text-sm text-neutral-400">Request the transfer of your personal data to you or a third party in a structured format.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
                  <div className="font-semibold text-white mb-1">Right to Object & Withdraw</div>
                  <div className="text-xs sm:text-sm text-neutral-400">Object to processing based on legitimate interests or withdraw consent at any time.</div>
                </div>
              </div>

              <div className="bg-neutral-900/40 border border-neutral-800 p-5 rounded-xl text-sm space-y-2">
                <p>
                  To exercise any of these rights, please email us at{" "}
                  <a href="mailto:Contact@starsedges.space" className="text-[#2563EB] hover:text-blue-400 underline font-semibold">
                    Contact@starsedges.space
                  </a>. We aim to respond to all legitimate requests within one calendar month.
                </p>
                <p className="text-neutral-400 text-xs">
                  You also have the right to make a complaint at any time to the Information Commissioner&rsquo;s Office (ICO),
                  the UK supervisory authority for data protection issues (
                  <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-blue-400 underline">
                    www.ico.org.uk
                  </a>). We would, however, appreciate the chance to address your concerns before you approach the ICO.
                </p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section id="cookies" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">11.</span>
              Cookies & Tracking Technologies
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-9">
              <p>
                Our website may use cookies and similar technologies to enhance user experience, remember preferences, and analyze web traffic.
              </p>
              <p>
                You can configure your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="third-party-links" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">12.</span>
              Third-Party Links
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-9">
              <p>
                Our website may include links to third-party websites (such as LinkedIn, partner portals, or industry publications).
                Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not
                control these third-party websites and are not responsible for their privacy statements.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section id="childrens-privacy" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">13.</span>
              Children&rsquo;s Privacy
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-9">
              <p>
                Our website, products, and commercial space solutions are intended solely for businesses, research institutions,
                and adults. We do not knowingly collect personal data relating to children under 16 years of age.
              </p>
            </div>
          </section>

          {/* Section 14 */}
          <section id="policy-changes" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">14.</span>
              Changes to This Privacy Policy
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-9">
              <p>
                We may update this Privacy Policy periodically to reflect technological, operational, or legal changes.
                Any updates will be posted directly to this page with an updated effective date. We encourage you to review
                this policy periodically to stay informed about how we are protecting your information.
              </p>
            </div>
          </section>

          {/* Section 15 */}
          <section id="contact-us" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight flex items-baseline gap-3">
              <span className="text-[#2563EB] text-xl font-mono font-bold">15.</span>
              Contact Us
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 pl-0 sm:pl-9">
              <p>
                If you have any questions about this Privacy Policy, your rights, or our privacy practices, please contact us:
              </p>

              <div className="border border-neutral-800 bg-neutral-950 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-[#2563EB]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">Stars Edges Ltd</h3>
                    <p className="text-xs text-neutral-400">Data Protection & Privacy Communications</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">Mailing Address</div>
                    <p className="text-neutral-300">
                      Setsquared Surrey (Unit 58)<br />
                      Surrey Technology Centre, Surrey Research Park<br />
                      Guildford, Surrey, GU2 7YG<br />
                      United Kingdom
                    </p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">Email Inquiries</div>
                    <a
                      href="mailto:Contact@starsedges.space"
                      className="text-[#2563EB] hover:text-blue-400 font-semibold underline block"
                    >
                      Contact@starsedges.space
                    </a>

                    <div className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mt-4 mb-1">Website</div>
                    <a
                      href="https://www.starsedges.com"
                      className="text-neutral-300 hover:text-white underline block"
                    >
                      https://www.starsedges.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-neutral-900 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-neutral-800 transition-colors"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

