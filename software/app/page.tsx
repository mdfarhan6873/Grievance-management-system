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
  FiMessageSquare,
  FiClock,
  FiUserCheck,
  FiActivity
} from "react-icons/fi";
import { HiMegaphone } from "react-icons/hi2";
import { TfiWrite } from "react-icons/tfi";

type Language = 'en' | 'hi';

interface Complaint {
  grievance_code: string;
  title: string;
  description: string;
  current_status: 'Pending' | 'Acknowledged' | 'In Progress' | 'Resolved' | 'Closed';
  priority: 'Low' | 'Medium' | 'High';
  submitted_at: string;
  citizen_address: string;
  issue_type: string;
  ward: string;
  updates: { status: string; date: string; remark: string }[];
}

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllAnnouncements, setShowAllAnnouncements] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Tracker State
  const [trackInput, setTrackInput] = useState("");
  const [searchedComplaint, setSearchedComplaint] = useState<Complaint | null>(null);
  const [searchError, setSearchError] = useState(false);

  const demoComplaint: Complaint = {
    grievance_code: "MUN-2024-885",
    title: "Continuous Water Leakage in Main Pipe",
    description: "There is a major leakage in the main water supply pipe near Munger Fort. Large amount of water is being wasted since morning.",
    current_status: "In Progress",
    priority: "High",
    submitted_at: "12 May 2024, 10:30 AM",
    citizen_address: "Ward 12, Fort Road Area, Munger",
    issue_type: "Water Supply",
    ward: "Ward No. 12",
    updates: [
      { status: "Submitted", date: "12 May 2024, 10:30 AM", remark: "Grievance successfully registered." },
      { status: "Acknowledged", date: "12 May 2024, 02:15 PM", remark: "Assigned to Public Works Department." },
      { status: "In Progress", date: "13 May 2024, 09:00 AM", remark: "Repair team has reached the site and excavation started." }
    ]
  };

  const handleTrack = () => {
    if (trackInput.toUpperCase() === demoComplaint.grievance_code) {
      setSearchedComplaint(demoComplaint);
      setSearchError(false);
      // Scroll to result
      setTimeout(() => {
        document.getElementById('tracking-result')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setSearchedComplaint(null);
      setSearchError(true);
    }
  };

  const t = {
    en: {
      lang_switch: "English / हिन्दी",
      portal_title: "Nagar Nigam Munger Redressal Portal",
      hindi_subtitle: "नगर निगम मुंगेर शिकायत निवारण पोर्टल",
      dept_login: "Department Login",
      nav_home: "Home",
      nav_grievances: "Grievances",
      nav_announcements: "Announcements",
      nav_services: "Services",
      hero_tag: "GOVERNMENT OF BIHAR",
      hero_subtag: "NAGAR NIGAM MUNGER",
      hero_title: "Nagar Nigam Munger",
      hero_accent: "Redressal Portal",
      hero_desc: "A unified digital gateway for citizens of Munger to report, monitor, and resolve urban municipal issues. Committed to transparent, accountable, and responsive governance.",
      hero_btn_reg: "Register Grievance",
      hero_btn_login: "Citizen Login",
      hero_track_placeholder: "Enter ID (Try: MUN-2024-885)",
      hero_track_btn: "Track Status",
      ann_title: "Official Announcements",
      ann_date: "Date",
      ann_details: "Announcement Details",
      ann_cat: "Category",
      ann_action: "Action",
      ann_view_details: "View Details",
      ann_view_all: "View All Announcements",
      ann_show_less: "Show Less",
      svc_title: "Report an Issue",
      svc_desc: "Select a category to lodge your grievance. We are here to help resolve your concerns.",
      svc_view_all: "View All Categories",
      svc_file_btn: "File Complaint",
      faq_title: "Frequently Asked Questions",
      faq_desc: "Find quick answers to common queries regarding our redressal system.",
      footer_about: "Dedicated to providing efficient, transparent, and citizen-centric municipal grievance redressal services to the people of Munger.",
      footer_links: "Grievance Services",
      footer_info: "Citizen Information",
      footer_nodal: "Nodal Officers",
      footer_rights: "All rights reserved.",
      footer_dev: "Developed by",
      footer_dir: "Under the direction of",
      footer_cont: "Contributors",
      footer_managed: "Managed by",
      svc_list: [
        { title: "Sanitation", desc: "Report garbage pile-up or irregular collection.", icon: <FiTrash2 /> },
        { title: "Water Supply", desc: "Lodge complaints regarding water leakage.", icon: <FiDroplet /> },
        { title: "Street Lights", desc: "Report non-functional street lights.", icon: <FiZap /> },
        { title: "Roads", desc: "Report potholes or illegal road blockage.", icon: <FiMap /> },
        { title: "Encroachment", desc: "Report illegal construction on public land.", icon: <FiHome /> },
        { title: "Public Health", desc: "Report stray animals or health hazards.", icon: <FiAlertCircle /> }
      ]
    },
    hi: {
      lang_switch: "हिन्दी / English",
      portal_title: "नगर निगम मुंगेर शिकायत निवारण पोर्टल",
      hindi_subtitle: "Nagar Nigam Munger Redressal Portal",
      dept_login: "विभाग लॉगिन",
      nav_home: "मुख्य पृष्ठ",
      nav_grievances: "शिकायतें",
      nav_announcements: "घोषणाएं",
      nav_services: "सेवाएं",
      hero_tag: "बिहार सरकार",
      hero_subtag: "नगर निगम मुंगेर",
      hero_title: "नगर निगम मुंगेर",
      hero_accent: "निवारण पोर्टल",
      hero_desc: "मुंगेर के नागरिकों के लिए शहरी नगर पालिका मुद्दों की रिपोर्ट करने, निगरानी करने और समाधान करने के लिए एक एकीकृत डिजिटल गेटवे। पारदर्शी, जवाबदेह और उत्तरदायी शासन के लिए प्रतिबद्ध।",
      hero_btn_reg: "शिकायत दर्ज करें",
      hero_btn_login: "नागरिक लॉगिन",
      hero_track_placeholder: "ID दर्ज करें (कोशिश करें: MUN-2024-885)",
      hero_track_btn: "स्थिति देखें",
      ann_title: "आधिकारिक घोषणाएं",
      ann_date: "दिनांक",
      ann_details: "घोषणा विवरण",
      ann_cat: "श्रेणी",
      ann_action: "कार्य",
      ann_view_details: "विवरण देखें",
      ann_view_all: "सभी घोषणाएं देखें",
      ann_show_less: "कम दिखाएं",
      svc_title: "मुद्दे की रिपोर्ट करें",
      svc_desc: "अपनी शिकायत दर्ज करने के लिए एक श्रेणी चुनें। हम आपकी चिंताओं को हल करने में मदद करने के लिए यहां हैं।",
      svc_view_all: "सभी श्रेणियां देखें",
      svc_file_btn: "शिकायत करें",
      faq_title: "अक्सर पूछे जाने वाले प्रश्न",
      faq_desc: "निवारण प्रणाली के संबंध में सामान्य प्रश्नों के त्वरित उत्तर प्राप्त करें।",
      footer_about: "मुंगेर के लोगों को कुशल, पारदर्शी और नागरिक-केंद्रित नगरपालिका शिकायत निवारण सेवाएं प्रदान करने के लिए समर्पित।",
      footer_links: "शिकायत सेवाएं",
      footer_info: "नागरिक जानकारी",
      footer_nodal: "नोडल अधिकारी",
      footer_rights: "सर्वाधिकार सुरक्षित।",
      footer_dev: "द्वारा विकसित",
      footer_dir: "के निर्देशन में",
      footer_cont: "योगदानकर्ता",
      footer_managed: "द्वारा प्रबंधित",
      svc_list: [
        { title: "स्वच्छता", desc: "कचरा जमा होने या अनियमित संग्रह की रिपोर्ट करें।", icon: <FiTrash2 /> },
        { title: "जलापूर्ति", desc: "पानी के रिसाव के संबंध में शिकायत दर्ज करें।", icon: <FiDroplet /> },
        { title: "स्ट्रीट लाइट्स", desc: "खराब स्ट्रीट लाइट की रिपोर्ट करें।", icon: <FiZap /> },
        { title: "सड़कें", desc: "गड्ढों या अवैध सड़क मार्ग की रिपोर्ट करें।", icon: <FiMap /> },
        { title: "अतिक्रमण", desc: "सार्वजनिक भूमि पर अवैध निर्माण की रिपोर्ट करें।", icon: <FiHome /> },
        { title: "जन स्वास्थ्य", desc: "आवारा पशुओं या स्वास्थ्य खतरों की रिपोर्ट करें।", icon: <FiAlertCircle /> }
      ]
    }
  };

  const content = t[lang];

  const announcementsData = [
    { date: "24 Oct 2024", title: lang === 'en' ? "Planned Water Outage for Munger East Wards" : "मुंगेर पूर्वी वार्डों के लिए नियोजित पानी की कटौती", desc: lang === 'en' ? "Maintenance work on the main reservoir will cause a 6-hour outage." : "मुख्य जलाशय पर रखरखाव कार्य के कारण 6 घंटे की कटौती होगी।", category: lang === 'en' ? "Water Dept" : "जल विभाग" },
    { date: "22 Oct 2024", title: lang === 'en' ? "Clean Munger Green Munger Drive" : "स्वच्छ मुंगेर हरित मुंगेर अभियान", desc: lang === 'en' ? "Join the Nagar Nigam for a community cleaning drive at Munger Fort." : "मुंगेर किले में सामुदायिक सफाई अभियान के लिए नगर निगम से जुड़ें।", category: lang === 'en' ? "Environment" : "पर्यावरण" },
    { date: "19 Oct 2024", title: lang === 'en' ? "Property Tax Collection Camp in Ward 15" : "वार्ड 15 में संपत्ति कर संग्रह शिविर", desc: lang === 'en' ? "Local camp for property tax collection and assessment." : "संपत्ति कर संग्रह और मूल्यांकन के लिए स्थानीय शिविर।", category: lang === 'en' ? "Finance" : "वित्त" }
  ];

  const faqsData = [
    { 
      q: lang === 'en' ? "How can I register a new grievance?" : "मैं नई शिकायत कैसे दर्ज कर सकता हूँ?", 
      a: lang === 'en' ? "You can register a grievance by clicking on the 'Register Grievance' button in the hero section." : "आप हीरो सेक्शन में 'शिकायत दर्ज करें' बटन पर क्लिक करके शिकायत दर्ज कर सकते हैं।" 
    },
    { 
      q: lang === 'en' ? "What is the expected resolution time?" : "अपेक्षित समाधान समय क्या है?", 
      a: lang === 'en' ? "Most municipal grievances are addressed within 48 to 72 working hours." : "अधिकांश नगरपालिका शिकायतों का समाधान 48 से 72 कार्य घंटों के भीतर किया जाता है।" 
    }
  ];

  const displayedAnnouncements = showAllAnnouncements ? announcementsData : announcementsData.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-white min-h-[40px] flex justify-between items-center px-4 md:px-6 text-[12px] md:text-[13px] text-gray-700 border-b border-gray-100">
        <div 
          className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors font-medium"
          onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
        >
          <FiGlobe className="text-gray-500" />
          <span>{content.lang_switch}</span>
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
              {content.portal_title}
            </h1>
            <p className="text-[10px] md:text-[13px] text-[#666] font-medium">
              {content.hindi_subtitle}
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
            <FiUser className="text-lg" /> {content.dept_login}
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
        <a href="#" className="text-[#1e40af] font-bold relative after:content-[''] after:absolute after:left-0 after:-bottom-[15px] after:w-full after:height-[3px] after:bg-[#1e40af] tracking-wide text-sm">{content.nav_home}</a>
        <a href="#" className="text-slate-600 font-bold hover:text-[#1e40af] transition-colors tracking-wide text-sm">{content.nav_grievances}</a>
        <a href="#" className="text-slate-600 font-bold hover:text-[#1e40af] transition-colors tracking-wide text-sm">{content.nav_announcements}</a>
        <a href="#" className="text-slate-600 font-bold hover:text-[#1e40af] transition-colors tracking-wide text-sm">{content.nav_services}</a>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-20 px-6 flex flex-col gap-6 animate-fade-in overflow-y-auto text-center">
          <a href="#" className="text-xl font-bold text-primary border-b pb-4">{content.nav_home}</a>
          <a href="#" className="text-xl font-semibold text-gray-600 border-b pb-4">{content.nav_grievances}</a>
          <a href="#" className="text-xl font-semibold text-gray-600 border-b pb-4">{content.nav_announcements}</a>
          <a href="#" className="text-xl font-semibold text-gray-600 border-b pb-4">{content.nav_services}</a>
          <div className="mt-4 flex flex-col gap-4">
            <button className="w-full py-4 bg-[#1e293b] text-white rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
              <FiUser className="text-xl" /> {content.dept_login}
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
              <p className="font-bold text-[9px] md:text-[10px] tracking-[0.1em] text-white/90 uppercase">{content.hero_tag}</p>
              <h3 className="font-black text-xs md:text-[13px] tracking-tight">{content.hero_subtag}</h3>
            </div>
          </div>

          <h2 className="text-4xl md:text-[72px] font-serif font-bold leading-[1.2] md:leading-[1.15] mb-8 tracking-tight drop-shadow-2xl">
            {content.hero_title} <br className="hidden md:block" />
            <span className="text-[#facc15]">{content.hero_accent}</span>
          </h2>
          
          <p className="text-lg md:text-[22px] leading-relaxed text-white/90 mb-10 md:mb-12 max-w-[800px] font-medium drop-shadow-md">
            {content.hero_desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16 w-full justify-center">
            <button className="px-8 md:px-12 py-3.5 bg-[#1e40af] text-white rounded-md text-base md:text-[16px] font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 uppercase tracking-wide">
              <TfiWrite className="text-lg" /> {content.hero_btn_reg}
            </button>
            <button className="px-8 md:px-12 py-3.5 bg-transparent border-2 border-white text-white rounded-md text-base md:text-[16px] font-bold hover:bg-white hover:text-gray-900 transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-wide">
              <FiUser className="text-lg" /> {content.hero_btn_login}
            </button>
          </div>

          {/* Tracker */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-2xl w-full max-w-[800px] group transition-all">
            <div className="flex-1 flex items-center px-6 md:px-10 bg-white">
              <FiSearch className="text-gray-400 mr-4 text-xl md:text-2xl" />
              <input 
                type="text" 
                value={trackInput}
                onChange={(e) => setTrackInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                placeholder={content.hero_track_placeholder}
                className="w-full py-6 md:py-8 text-gray-900 outline-none text-lg md:text-2xl font-semibold placeholder:text-gray-400"
              />
            </div>
            <button 
              onClick={handleTrack}
              className="bg-[#059669] text-white px-10 md:px-16 py-6 md:py-8 text-lg md:text-[22px] font-black hover:bg-[#047857] transition-all flex items-center justify-center gap-3 active:bg-[#064e3b] uppercase tracking-widest"
            >
              {content.hero_track_btn}
            </button>
          </div>
          {searchError && <p className="mt-4 text-red-400 font-bold animate-bounce bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm border border-red-400/30">Invalid Complaint ID. Please try MUN-2024-885</p>}
        </div>
      </section>

      {/* Tracking Result Section - Ultra Simple & Mobile Optimized */}
      {searchedComplaint && (
        <section id="tracking-result" className="py-10 bg-white px-4 md:px-14 border-b border-gray-100 scroll-mt-24 animate-fade-in">
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
              <h3 className="text-lg font-serif font-bold text-slate-800 flex items-center gap-2">
                <FiCheckCircle className="text-green-600" /> Complaint Status
              </h3>
              <button 
                onClick={() => setSearchedComplaint(null)}
                className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 text-[12px] font-bold uppercase tracking-wider"
              >
                <FiX /> Close
              </button>
            </div>

            {/* Simple Grid Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-12 mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Complaint ID</span>
                <span className="text-[14px] font-black text-slate-800">{searchedComplaint.grievance_code}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Current Status</span>
                <span className="text-[13px] font-bold text-blue-600 flex items-center gap-1.5 uppercase">
                  <FiActivity className="text-[10px]" /> {searchedComplaint.current_status}
                </span>
              </div>
              <div className="flex flex-col gap-1 md:col-span-2 border-t border-gray-50 pt-4">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Subject</span>
                <span className="text-[13px] font-bold text-slate-700 leading-tight">{searchedComplaint.title}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Priority</span>
                <span className="text-[13px] font-bold text-slate-600">{searchedComplaint.priority}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Submitted On</span>
                <span className="text-[13px] font-bold text-slate-600">{searchedComplaint.submitted_at}</span>
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Location</span>
                <span className="text-[13px] font-bold text-slate-600">{searchedComplaint.citizen_address} ({searchedComplaint.ward})</span>
              </div>
            </div>

            {/* Minimal History */}
            <div className="bg-slate-50/50 rounded-lg p-5 border border-slate-100">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5 border-b border-slate-200 pb-2">Status Timeline</h4>
              <div className="space-y-4">
                {searchedComplaint.updates.map((update, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-[11px] font-bold text-slate-400 w-24 shrink-0 pt-0.5">{update.date.split(',')[0]}</div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[12px] font-black text-slate-700">{update.status}</span>
                      <span className="text-[12px] text-slate-500 leading-relaxed">{update.remark}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-white border border-slate-200 py-2.5 rounded text-slate-600 font-bold text-[12px] uppercase tracking-wider hover:bg-slate-50 transition-all">
                Download PDF
              </button>
              <button className="flex-1 bg-blue-600 text-white py-2.5 rounded font-bold text-[12px] uppercase tracking-wider hover:bg-blue-700 transition-all">
                Print Receipt
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Announcements Section */}
      <section className="py-16 md:py-20 bg-slate-50/50 px-4 md:px-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-3 mb-10 text-[#1e40af]">
            <HiMegaphone className="text-2xl" />
            <h2 className="text-2xl font-bold tracking-tight">{content.ann_title}</h2>
          </div>

          <div className={`w-full border border-gray-200 rounded-xl bg-white transition-all duration-300 ${showAllAnnouncements ? 'h-[450px] overflow-y-auto' : 'h-auto'}`}>
            <div className="hidden md:flex bg-slate-50 border-b border-gray-100 text-[13px] font-bold text-slate-500 uppercase tracking-wider sticky top-0 z-10">
              <div className="py-4 px-6 w-[180px]">{content.ann_date}</div>
              <div className="py-4 px-6 flex-1">{content.ann_details}</div>
              <div className="py-4 px-6 w-[180px]">{content.ann_cat}</div>
              <div className="py-4 px-6 w-[150px] text-right">{content.ann_action}</div>
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
                      {content.ann_view_details} <FiArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-6">
            {showAllAnnouncements ? (
              <button onClick={() => setShowAllAnnouncements(false)} className="text-slate-400 font-bold text-[14px] hover:text-primary transition-colors">{content.ann_show_less}</button>
            ) : (
              <button onClick={() => setShowAllAnnouncements(true)} className="flex items-center gap-2 text-[#1e40af] font-bold text-[14px] hover:underline">
                {content.ann_view_all} <FiExternalLink className="text-sm" />
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
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-2 tracking-tight">{content.svc_title}</h2>
              <p className="text-slate-500 text-base">{content.svc_desc}</p>
            </div>
            <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
              {content.svc_view_all} <FiArrowRight />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {content.svc_list.map((service, idx) => (
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4 tracking-tight">{content.faq_title}</h2>
          <p className="text-slate-500 text-lg mb-12">{content.faq_desc}</p>
          
          <div className="space-y-4 text-left">
            {faqsData.map((faq, idx) => (
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

      {/* Footer */}
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
              {content.footer_about}
            </p>
            <div className="flex gap-5 text-xl">
              <a href="#" className="hover:text-white transition-all"><FiFacebook /></a>
              <a href="#" className="hover:text-white transition-all"><FiTwitter /></a>
              <a href="#" className="hover:text-white transition-all"><FiYoutube /></a>
              <a href="#" className="hover:text-white transition-all"><FiInstagram /></a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="flex flex-col items-start text-left">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-8 border-l-2 border-primary pl-4">{content.footer_links}</h6>
            <ul className="space-y-4 text-[14px]">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiPlus className="text-primary" /> {lang === 'en' ? 'Lodge a Complaint' : 'शिकायत दर्ज करें'}</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiSearch className="text-primary" /> {lang === 'en' ? 'Track Status' : 'स्थिति ट्रैक करें'}</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiRefreshCw className="text-primary" /> {lang === 'en' ? 'Re-open Grievance' : 'शिकायत फिर से खोलें'}</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiMessageSquare className="text-primary" /> {lang === 'en' ? 'Give Feedback' : 'प्रतिक्रिया दें'}</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="flex flex-col items-start text-left">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-8 border-l-2 border-primary pl-4">{content.footer_info}</h6>
            <ul className="space-y-4 text-[14px]">
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiFileText className="text-primary" /> {lang === 'en' ? 'Citizen Charter' : 'नागरिक अधिकार पत्र'}</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiCheckCircle className="text-primary" /> {lang === 'en' ? 'Resolution Timeline' : 'समाधान समय सीमा'}</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all flex items-center gap-2"><FiHelpCircle className="text-primary" /> {lang === 'en' ? 'How it Works?' : 'यह कैसे काम करता है?'}</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col items-start text-left">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-8 border-l-2 border-primary pl-4">{content.footer_nodal}</h6>
            <div className="space-y-6 text-[14px]">
              <div className="flex gap-4 items-start">
                <FiMapPin className="mt-1 text-primary shrink-0" />
                <span className="text-slate-400">Grievance Cell, Nagar Nigam Munger, Bihar - 811201</span>
              </div>
              <div className="flex gap-4 items-center">
                <FiPhone className="text-primary shrink-0" />
                <span className="text-slate-400">Toll Free: 1800-XXX-XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-10">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-slate-500">
            <p>&copy; 2024 Nagar Nigam Munger. {content.footer_rights}</p>
            <div className="flex flex-col items-center md:items-end gap-1.5 text-center md:text-right">
              <p className="text-[13px] text-slate-400">
                {content.footer_dev} <span className="text-slate-200 font-bold">Government Engineering College Munger</span>
              </p>
              <p className="text-[11px] text-slate-500">
                {content.footer_dir} <span className="text-slate-400 font-semibold">Govind Kumar Jha</span> & <span className="text-slate-400 font-semibold">Dr. Saurabh Suman</span>
              </p>
              <p className="text-[10px] text-slate-600 max-w-[450px]">
                {content.footer_cont}: Md Farhan, Ashwin Mathur, Harsh Kumar, Layaque Noor, Piyush Ranjan, Sourabh, Subham, Manish Kumar
              </p>
              <p className="text-[12px] text-slate-500 mt-1">
                {content.footer_managed} <span className="text-slate-300 font-semibold">NIC Bihar</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
