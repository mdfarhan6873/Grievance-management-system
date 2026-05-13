"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiGlobe,
  FiChevronDown,
  FiMail,
  FiShare2,
  FiBell,
  FiHelpCircle,
  FiUser,
  FiSearch,
  FiMenu,
  FiX,
  FiArrowRight,
  FiExternalLink,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiInstagram,
  FiDroplet,
  FiHome,
  FiTrash2,
  FiMap,
  FiAlertCircle,
  FiZap,
  FiPlus,
  FiMinus,
  FiFileText,
  FiCheckCircle,
  FiRefreshCw,
  FiMessageSquare
} from "react-icons/fi";
import { HiMegaphone } from "react-icons/hi2";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllAnnouncements, setShowAllAnnouncements] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const announcements = [
    { date: "24 Oct 2024", title: "Planned Water Outage for Munger East Wards", desc: "Maintenance work on the main reservoir will cause a 6-hour outage.", category: "Water Dept" },
    { date: "22 Oct 2024", title: "Clean Munger Green Munger Drive", desc: "Join the Nagar Nigam for a community cleaning drive at Munger Fort.", category: "Environment" },
    { date: "19 Oct 2024", title: "Property Tax Collection Camp in Ward 15", desc: "Local camp for property tax collection and assessment.", category: "Finance" },
    { date: "15 Oct 2024", title: "New Traffic Regulations in Market Area", desc: "To reduce congestion, new one-way rules apply from next Monday.", category: "Traffic" },
    { date: "12 Oct 2024", title: "Street Light Maintenance - Zone B", desc: "Routine maintenance of street lights in Zone B starting tonight.", category: "Public Works" },
    { date: "10 Oct 2024", title: "Public Hearing on Urban Development Plan", desc: "Invitation to citizens to provide feedback on the 2025 city plan.", category: "Planning" },
    { date: "05 Oct 2024", title: "Monsoon Health Advisory", desc: "Preventive measures against water-borne diseases during monsoon.", category: "Health" },
    { date: "02 Oct 2024", title: "Swachh Bharat Abhiyan Ceremony", desc: "Special event to mark Gandhi Jayanti and city cleanliness awards.", category: "General" },
    { date: "28 Sep 2024", title: "Digital Literacy Workshop for Seniors", desc: "Free workshop on using municipal digital services for senior citizens.", category: "Education" },
    { date: "25 Sep 2024", title: "Park Renovation in Civil Lines", desc: "Civil Lines Park will be closed for 2 weeks for landscaping work.", category: "Leisure" },
    { date: "20 Sep 2024", title: "Anti-Encroachment Drive - Phase 2", desc: "Scheduled drive to remove illegal structures near the railway station.", category: "Enforcement" }
  ];

  const grievanceServices = [
    { title: "Sanitation", desc: "Report garbage pile-up or irregular collection.", icon: <FiTrash2 /> },
    { title: "Water Supply", desc: "Lodge complaints regarding water leakage.", icon: <FiDroplet /> },
    { title: "Street Lights", desc: "Report non-functional street lights.", icon: <FiZap /> },
    { title: "Roads", desc: "Report potholes or illegal road blockage.", icon: <FiMap /> },
    { title: "Encroachment", desc: "Report illegal construction on public land.", icon: <FiHome /> },
    { title: "Public Health", desc: "Report stray animals or health hazards.", icon: <FiAlertCircle /> }
  ];

  const faqs = [
    { q: "How can I register a new grievance?", a: "You can register a grievance by clicking on the 'Register Grievance' button in the hero section or by selecting a specific category from the 'Report an Issue' section below." },
    { q: "What is the expected resolution time?", a: "Most municipal grievances are addressed within 48 to 72 working hours. However, complex issues involving major repairs may take longer, as specified in the Citizen Charter." },
    { q: "How can I track the status of my complaint?", a: "Enter your unique Complaint ID in the tracking search bar located in the hero section to view real-time updates and officer remarks." },
    { q: "Is there a mobile app available for Munger Redressal?", a: "Yes, you can download the 'Munger Nigam' mobile app from the Play Store or App Store for easier access on the go." }
  ];

  const displayedAnnouncements = showAllAnnouncements ? announcements.slice(0, 10) : announcements.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-white min-h-[40px] flex justify-between items-center px-4 md:px-6 text-[12px] md:text-[13px] text-gray-700 border-b border-gray-100">
        <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors font-medium">
          <FiGlobe className="text-gray-500" />
          <span>English / हिन्दी</span>
          <FiChevronDown className="text-[10px]" />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-6 items-center">
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <span>Share</span>
              <FiShare2 className="text-sm" />
            </a>
            <div className="h-3 w-[1px] bg-gray-300"></div>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FiMail className="text-base" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white px-4 md:px-6 py-3 md:py-4 flex justify-between items-center sticky top-0 z-[60]">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative w-[45px] h-[45px] md:w-[58px] md:h-[58px]">
            <Image
              src="/logo_munger.png"
              alt="Munger Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block text-left">
            <h1 className="text-lg md:text-[22px] font-serif font-semibold text-[#1e40af] leading-tight tracking-tight ">
              Nagar Nigam Munger Redressal Portal
            </h1>
            <p className="text-[10px] md:text-[13px] text-[#666] font-medium">
              नगर निगम मुंगेर शिकायत निवारण पोर्टल
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-6 text-[24px] text-gray-400">
            <button className="hover:text-primary transition-colors cursor-pointer relative">
              <FiBell />
              <span className="absolute top-0 right-0 bg-[#ef4444] w-[10px] h-[10px] rounded-full border-2 border-white"></span>
            </button>
            <button className="hover:text-primary transition-colors cursor-pointer">
              <FiHelpCircle />
            </button>
          </div>

          <button className="hidden md:block px-6 py-2.5 bg-[#1e293b] text-white rounded-lg font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95 text-[13px] uppercase tracking-wider flex items-center gap-2">
            <FiUser className="text-lg" /> Department Login
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-gray-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Flag Divider */}
      <div className="h-[4px] md:h-[5px] w-full flex">
        <div className="flex-1 bg-[#f97316]"></div>
        <div className="flex-1 bg-[#16a34a]"></div>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-white px-5 py-3.5 hidden md:flex justify-center gap-10 border-b border-gray-100 shadow-sm">
        <a href="#" className="text-[#1e40af] font-bold relative after:content-[''] after:absolute after:left-0 after:-bottom-[15px] after:w-full after:height-[3px] after:bg-[#1e40af] tracking-wide text-sm">Home</a>
        <a href="#" className="text-slate-600 font-bold hover:text-[#1e40af] transition-colors tracking-wide text-sm">Grievances</a>
        <a href="#" className="text-slate-600 font-bold hover:text-[#1e40af] transition-colors tracking-wide text-sm">Announcements</a>
        <a href="#" className="text-slate-600 font-bold hover:text-[#1e40af] transition-colors tracking-wide text-sm">Services</a>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-20 px-6 flex flex-col gap-6 animate-fade-in overflow-y-auto text-center">
          <a href="#" className="text-xl font-bold text-primary border-b pb-4">Home</a>
          <a href="#" className="text-xl font-semibold text-gray-600 border-b pb-4">Grievances</a>
          <a href="#" className="text-xl font-semibold text-gray-600 border-b pb-4">Announcements</a>
          <a href="#" className="text-xl font-semibold text-gray-600 border-b pb-4">Services</a>
          <div className="mt-4 flex flex-col gap-4">
            <button className="w-full py-4 bg-[#1e293b] text-white rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
              <FiUser className="text-xl" /> Department Login
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/munger_hero1.png"
            alt="Munger Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-14 py-16 md:py-24 text-white animate-fade-in flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 md:gap-4 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl mb-8 md:mb-10 border border-white/20 shadow-xl">
            <div className="w-10 h-10 md:w-11 md:h-11 relative rounded-lg overflow-hidden">
              <Image
                src="/logo_indian_gov.png"
                alt="Bihar Govt"
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight text-left">
              <p className="font-bold text-[9px] md:text-[10px] tracking-[0.1em] text-white/90 uppercase">GOVERNMENT OF BIHAR</p>
              <h3 className="font-black text-xs md:text-[13px] tracking-tight">NAGAR NIGAM MUNGER</h3>
            </div>
          </div>

          <h2 className="text-4xl md:text-[72px] font-serif font-bold leading-[1.1] md:leading-[1.0] mb-8 tracking-tight drop-shadow-2xl">
            Nagar Nigam Munger <br className="hidden md:block" />
            <span className="text-[#facc15]">Redressal Portal</span>
          </h2>

          <p className="text-lg md:text-[22px] leading-relaxed text-white/90 mb-10 md:mb-12 max-w-[800px] font-medium drop-shadow-md">
            A unified digital gateway for citizens of Munger to report, monitor, and resolve urban municipal issues. Committed to transparent, accountable, and responsive governance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16 w-full justify-center">
            <button className="px-8 md:px-12 py-3.5 bg-[#1e40af] text-white rounded-md text-base md:text-[16px] font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 uppercase tracking-wide">
              <FiUser className="text-lg" /> Register Grievance
            </button>
            <button className="px-8 md:px-12 py-3.5 bg-transparent border-2 border-white text-white rounded-md text-base md:text-[16px] font-bold hover:bg-white hover:text-gray-900 transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-wide">
              <FiUser className="text-lg" /> Citizen Login
            </button>
          </div>

          {/* Tracker */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-2xl w-full max-w-[800px] group transition-all">
            <div className="flex-1 flex items-center px-6 md:px-10 bg-white">
              <FiSearch className="text-gray-400 mr-4 text-xl md:text-2xl" />
              <input
                type="text"
                placeholder="Enter your Complaint ID to track status..."
                className="w-full py-6 md:py-8 text-gray-900 outline-none text-lg md:text-2xl font-semibold placeholder:text-gray-400"
              />
            </div>
            <button className="bg-[#059669] text-white px-10 md:px-16 py-6 md:py-8 text-lg md:text-[22px] font-black hover:bg-[#047857] transition-all flex items-center justify-center gap-3 active:bg-[#064e3b] uppercase tracking-widest">
              Track Status
            </button>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 md:py-20 bg-slate-50/50 px-4 md:px-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-3 mb-10 text-[#1e40af]">
            <HiMegaphone className="text-2xl" />
            <h2 className="text-2xl font-bold tracking-tight">Official Announcements</h2>
          </div>

          <div className={`w-full border border-gray-200 rounded-xl bg-white transition-all duration-300 ${showAllAnnouncements ? 'h-[450px] overflow-y-auto' : 'h-auto'}`}>
            <div className="hidden md:flex bg-slate-50 border-b border-gray-100 text-[13px] font-bold text-slate-500 uppercase tracking-wider sticky top-0 z-10">
              <div className="py-4 px-6 w-[180px]">Date</div>
              <div className="py-4 px-6 flex-1">Announcement Details</div>
              <div className="py-4 px-6 w-[180px]">Category</div>
              <div className="py-4 px-6 w-[150px] text-right">Action</div>
            </div>

            <div className="divide-y divide-gray-100">
              {displayedAnnouncements.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center hover:bg-slate-50 transition-colors py-5 px-6">
                  <div className="flex md:hidden justify-between items-center mb-3">
                    <span className="text-slate-600 font-bold text-sm">{item.date}</span>
                    <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 uppercase font-black tracking-tighter">
                      {item.category}
                    </span>
                  </div>
                  <div className="hidden md:block w-[180px] text-slate-600 font-semibold">{item.date}</div>
                  <div className="flex-1 md:pr-10">
                    <h3 className="text-[16px] font-bold text-slate-800 mb-1 leading-tight">{item.title}</h3>
                    <p className="text-slate-500 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:block w-[180px]">
                    <span className="text-[12px] text-slate-600 bg-slate-100 px-3 py-1 rounded border border-slate-200">{item.category}</span>
                  </div>
                  <div className="w-full md:w-[150px] mt-4 md:mt-0 text-right">
                    <button className="text-[#1e40af] font-bold text-[14px] hover:underline inline-flex items-center gap-1">
                      View Details <FiArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-6">
            {showAllAnnouncements ? (
              <button onClick={() => setShowAllAnnouncements(false)} className="text-slate-400 font-bold text-[14px] hover:text-primary transition-colors">Show Less</button>
            ) : (
              <button onClick={() => setShowAllAnnouncements(true)} className="flex items-center gap-2 text-[#1e40af] font-bold text-[14px] hover:underline">
                View All Announcements <FiExternalLink className="text-sm" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grievance Categories Section */}
      <section className="py-12 md:py-16 bg-white px-4 md:px-14 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-2 tracking-tight">Report an Issue</h2>
              <p className="text-slate-500 text-base">Select a category to lodge your grievance.</p>
            </div>
            <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
              View All Categories <FiArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {grievanceServices.map((service, idx) => (
              <div key={idx} className="group p-5 border border-gray-100 rounded-xl hover:border-primary/40 transition-all duration-300 text-center bg-white">
                <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="text-[14px] md:text-[15px] font-bold text-slate-800 leading-tight">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-14">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-lg mb-12">Find quick answers to common queries regarding our redressal system.</p>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 md:p-6 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="font-bold text-slate-700 md:text-lg pr-4">{faq.q}</span>
                  <div className="shrink-0 text-slate-400">
                    {openFaq === idx ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="p-5 md:p-6 bg-slate-50 text-slate-600 border-t border-gray-100 text-[15px] md:text-base leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associated Initiatives */}
      <section className="py-16 bg-[#f8fafc] border-y border-gray-100 px-4 md:px-14">
        <div className="max-w-[1280px] mx-auto">
          <h4 className="text-center text-[#94a3b8] tracking-[0.4em] font-black text-[11px] uppercase mb-12">
            ASSOCIATED INITIATIVES
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="h-12 w-32 relative"><Image src="/logo_indian_gov.png" alt="Digital India" fill className="object-contain" /></div>
            <div className="h-12 w-32 relative"><Image src="/logo_indian_gov.png" alt="MyGov" fill className="object-contain" /></div>
            <div className="h-12 w-32 relative"><Image src="/logo_indian_gov.png" alt="NIC" fill className="object-contain" /></div>
            <div className="h-12 w-32 relative"><Image src="/logo_indian_gov.png" alt="Bihar Portal" fill className="object-contain" /></div>
          </div>
        </div>
      </section>

      {/* Footer - Optimized for Grievance Redressal */}
      <footer className="bg-[#0f172a] text-slate-300 pt-20 pb-10 px-4 md:px-14">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {/* Brand Col */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 relative bg-white rounded-full p-1.5 shadow-xl">
                <Image src="/logo_munger.png" alt="Logo" fill className="object-contain p-1" />
              </div>
              <h5 className="text-white font-bold text-xl leading-tight">Nagar Nigam<br />Munger</h5>
            </div>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
              Dedicated to providing efficient, transparent, and citizen-centric municipal grievance redressal services to the people of Munger.
            </p>
            <div className="flex gap-5 text-xl">
              <a href="#" className="hover:text-white transition-all"><FiFacebook /></a>
              <a href="#" className="hover:text-white transition-all"><FiTwitter /></a>
              <a href="#" className="hover:text-white transition-all"><FiYoutube /></a>
              <a href="#" className="hover:text-white transition-all"><FiInstagram /></a>
            </div>
          </div>

          {/* Links Col 1: Grievance Services */}
          <div className="flex flex-col items-start text-left">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-8 border-l-2 border-primary pl-4">Grievance Services</h6>
            <ul className="space-y-4 text-[14px]">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiPlus className="text-primary" /> Lodge a Complaint</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiSearch className="text-primary" /> Track Status</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiRefreshCw className="text-primary" /> Re-open Grievance</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiMessageSquare className="text-primary" /> Give Feedback</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiPhone className="text-primary" /> Helpline Numbers</a></li>
            </ul>
          </div>

          {/* Links Col 2: Citizen Info */}
          <div className="flex flex-col items-start text-left">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-8 border-l-2 border-primary pl-4">Citizen Information</h6>
            <ul className="space-y-4 text-[14px]">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiFileText className="text-primary" /> Citizen Charter</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiCheckCircle className="text-primary" /> Resolution Timeline</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiHelpCircle className="text-primary" /> How it Works?</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiExternalLink className="text-primary" /> Rules & Regulations</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiGlobe className="text-primary" /> FAQs</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col items-start text-left">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-8 border-l-2 border-primary pl-4">Nodal Officers</h6>
            <div className="space-y-6 text-[14px]">
              <div className="flex gap-4 items-start">
                <FiMapPin className="mt-1 text-primary shrink-0" />
                <span className="text-slate-400">Grievance Cell, Nagar Nigam Munger, Bihar - 811201</span>
              </div>
              <div className="flex gap-4 items-center">
                <FiPhone className="text-primary shrink-0" />
                <span className="text-slate-400">Toll Free: 1800-XXX-XXXX</span>
              </div>
              <div className="flex gap-4 items-center">
                <FiMail className="text-primary shrink-0" />
                <span className="text-slate-400">grievance@mungernigam.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-10">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-slate-500">
            <p>&copy; 2024 Nagar Nigam Munger. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Hyperlinking Policy</a>
              <a href="#" className="hover:text-white transition-colors">Copyright Policy</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1.5 text-center md:text-right">
              <p className="text-[13px] text-slate-400">
                Developed by <span className="text-slate-200 font-bold">Government Engineering College Munger</span>
              </p>
              <p className="text-[11px] text-slate-500">
                Under the direction of <span className="text-slate-400 font-semibold">Govind Kumar Jha</span> & <span className="text-slate-400 font-semibold">Dr. Saurabh Suman</span>
              </p>
              <p className="text-[10px] text-slate-600 max-w-[450px]">
                Contributors: Md Farhan, Ashwin Mathur, Harsh Kumar, Layaque Noor, Piyush Ranjan, Sourabh, Subham, Manish Kumar
              </p>
              <p className="text-[12px] text-slate-500 mt-1">
                Managed by <span className="text-slate-300 font-semibold">NIC Bihar</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
