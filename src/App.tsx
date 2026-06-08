import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Maximize2,
  Bookmark,
  Award,
  BookOpen,
  User,
  Quote,
  Star,
  Compass,
  Check,
  Zap,
  CheckCircle,
  Home,
  Briefcase,
  Hotel,
  LayoutGrid,
  Hammer,
  MonitorCheck,
  ShieldCheck,
  X
} from "lucide-react";

// Types & Data
import { Project, Service, BlogPost } from "./types";
import { projectsData, servicesData, processSteps, testimonialsData, awardsData, blogPostsData } from "./data";

// Components
import Navbar from "./components/Navbar";
import SpaceVisualizer from "./components/SpaceVisualizer";
import StyleQuiz from "./components/StyleQuiz";
import ProjectModal from "./components/ProjectModal";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// Icon mapping helper
const iconMap: Record<string, any> = {
  Home,
  Briefcase,
  Hotel,
  LayoutGrid,
  Sparkles,
  Hammer,
  MonitorCheck,
  ShieldCheck
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  // Selected project for detailed modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Category filter for portfolio
  const [activeFilter, setActiveFilter] = useState("ALL");
  
  // Project type state to pre-fill the contact form
  const [prefilledProjectType, setPrefilledProjectType] = useState("");

  // Selected article for reading
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  // Stats Counters
  const mainStats = [
    { value: "500+", label: "Completed Projects", desc: "Private estates, corporate halls & boutique retreats" },
    { value: "150+", label: "Luxury Homes Designed", desc: "Custom penthouses, seaside villas & organic cabins" },
    { value: "55+", label: "Commercial Spaces", desc: "Showrooms, prestigious boardroom clusters & flagship retail" },
    { value: "15+", label: "Years Experience", desc: "Decades of bespoke architectural design and coordination" },
    { value: "98%", label: "Client Satisfaction", desc: "Stunning retention with top-tier global reviews" }
  ];

  // Set initial loading state animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Sync dark mode style attribute with HTML viewport element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Smooth scroll handler targeting CSS ID selectors safely
  const navigateToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const categories = ["ALL", "RESIDENTIAL INTERIOR DESIGN", "COMMERCIAL INTERIOR DESIGN", "HOSPITALITY DESIGN"];

  const filteredProjects = activeFilter === "ALL"
    ? projectsData
    : projectsData.filter(proj => proj.category.toUpperCase() === activeFilter);

  // Triggers booking callback from matchmaker quiz
  const handlePreFillInquiry = (styleOrCategoryName: string) => {
    setPrefilledProjectType(styleOrCategoryName.includes("Elegance") || styleOrCategoryName.includes("Villa") 
      ? "Residential Interior Design" 
      : styleOrCategoryName.includes("Hotel") ? "Hospitality Design" : "Commercial Interior Design"
    );
    navigateToSection("contact");
  };

  const handleProjectInquire = (category: string) => {
    setPrefilledProjectType(category);
    navigateToSection("contact");
  };

  return (
    <div className={`min-h-screen bg-luxury-beige-50 dark:bg-luxury-charcoal text-luxury-charcoal dark:text-luxury-beige-100 flex flex-col transition-colors duration-700 font-sans relative pb-0`}>
      
      {/* 1. PROFESSIONAL EDITORIAL PRELOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="global-preloader"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-luxury-beige-100 dark:bg-luxury-charcoal z-50 flex flex-col items-center justify-center space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-serif text-4xl md:text-5xl tracking-widest text-luxury-charcoal dark:text-luxury-beige-50 font-bold">
                ATELIER
              </h1>
              <span className="text-serif-italic font-light text-sm text-luxury-gold-500 tracking-widest uppercase block mt-1.5">
                Architecture & Interiors
              </span>
            </motion.div>
            <div className="w-[120px] h-[1px] bg-luxury-gold-300 dark:bg-luxury-charcoal-light/60 overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/3 bg-luxury-gold-500"
              ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary header navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onNavigateTo={navigateToSection}
      />

      {/* Main viewport Container */}
      <main className="flex-1">

        {/* 2. FULL SCREEN LUXURY HERO SECTION */}
        <section id="hero" className="relative h-screen min-h-[650px] w-full overflow-hidden flex items-center justify-center">
          
          {/* Stunning Background living room image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop"
              alt="Atelier Living Room Backdrop"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            {/* Rich cinematic gradient overlay matching the warm palette prompt */}
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/80 via-luxury-charcoal/45 to-transparent dark:from-black/90 dark:via-black/55 dark:to-transparent"></div>
          </div>

          {/* Core Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center pt-20">
            
            {/* Written descriptors */}
            <div className="lg:col-span-8 text-white space-y-6 max-w-2xl text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-display tracking-widest text-luxury-gold-300 uppercase"
              >
                <Sparkles className="w-3.5 h-3.5" />
                The Fine Art of Space Creation
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-luxury-beige-50 leading-tight tracking-normal font-semibold"
              >
                Crafting Timeless <br />Spaces That <span className="text-serif-italic font-light text-luxury-gold-300">Inspire</span> Living.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm md:text-base text-luxury-beige-200 font-sans font-light leading-relaxed max-w-lg"
              >
                Luxury interior design, architecture consultation, and bespoke space transformation for homes, offices, hotels, and commercial environments. Developed with premium European finishes and precision handcrafting.
              </motion.p>

              {/* CTAs Button cluster */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button
                  onClick={() => navigateToSection("contact")}
                  id="hero-btn-start"
                  className="bg-luxury-gold-500 hover:bg-luxury-gold-600 text-white font-display font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xs transition-all cursor-pointer shadow-md transform hover:-translate-y-0.5"
                >
                  Start Your Project
                </button>
                <button
                  onClick={() => navigateToSection("portfolio")}
                  id="hero-btn-portfolio"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-display font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xs transition-all cursor-pointer"
                >
                  View Portfolio
                </button>
              </motion.div>
            </div>

            {/* Floating metrics stats sheet (as specified by prompt) */}
            <div className="lg:col-span-4" id="hero-floating-stats">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/90 dark:bg-luxury-charcoal/90 backdrop-blur-md p-6 md:p-8 rounded-sm shadow-xl border border-white/10 dark:border-luxury-charcoal-light/30 text-luxury-charcoal dark:text-luxury-beige-100 space-y-6"
              >
                <div className="text-serif-italic font-light text-luxury-gold-600 dark:text-luxury-gold-400 text-lg border-b border-luxury-beige-300/40 pb-3 block">
                  Studio Accomplishments
                </div>
                
                <div className="grid grid-cols-2 gap-5 text-left">
                  <div>
                    <h3 className="font-display font-bold text-3xl text-luxury-charcoal dark:text-luxury-beige-50">500+</h3>
                    <p className="text-[10px] uppercase tracking-wider text-luxury-gold-600 dark:text-luxury-gold-400 font-sans font-semibold mt-1">Completed Projects</p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-3xl text-luxury-charcoal dark:text-luxury-beige-50">15+</h3>
                    <p className="text-[10px] uppercase tracking-wider text-luxury-gold-600 dark:text-luxury-gold-400 font-sans font-semibold mt-1">Years Experience</p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-3xl text-luxury-charcoal dark:text-luxury-beige-50">98%</h3>
                    <p className="text-[10px] uppercase tracking-wider text-luxury-gold-600 dark:text-luxury-gold-400 font-sans font-semibold mt-1">Client Satisfaction</p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-3xl text-luxury-charcoal dark:text-luxury-beige-50">25</h3>
                    <p className="text-[10px] uppercase tracking-wider text-luxury-gold-600 dark:text-luxury-gold-400 font-sans font-semibold mt-1">Design Awards</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Infinite Down Arrow Scroll trigger */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block animate-bounce">
            <button
              onClick={() => navigateToSection("about")}
              aria-label="Scroll Down to About"
              className="p-2 border border-white/20 dark:border-luxury-beige-100/20 rounded-full text-white/50 backdrop-blur-md hover:text-white transition-colors cursor-pointer"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </section>


        {/* 3. ABOUT SECTION: DESIGN ROOTED IN ELEGANCE */}
        <section id="about" className="py-20 md:py-28 bg-luxury-beige-50 dark:bg-luxury-charcoal transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left visuals column */}
              <div className="lg:col-span-6 relative" id="about-visuals">
                <div className="aspect-3/4 rounded-xs overflow-hidden max-w-md mx-auto group border border-luxury-beige-300 dark:border-luxury-charcoal-light flex relative">
                  <img
                    src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800"
                    alt="Atelier Crafting Philosophy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  
                  {/* Floating material sample overlay */}
                  <div className="absolute bottom-6 left-6 dark:bg-luxury-charcoal/95 bg-white/95 backdrop-blur-md p-4 rounded-xs border border-luxury-beige-300/40 max-w-[210px] space-y-2 text-left">
                    <span className="text-[8px] tracking-widest text-luxury-gold-500 font-display font-bold uppercase block">Material Selection</span>
                    <p className="font-serif text-sm font-semibold text-luxury-charcoal dark:text-luxury-beige-100 leading-tight">Raw Italian Travertine & Satin Brass details.</p>
                  </div>
                </div>
              </div>

              {/* Right text descriptions */}
              <div className="lg:col-span-6 text-left space-y-6">
                <span className="inline-block text-xs font-display font-semibold text-luxury-gold-500 tracking-widest uppercase">
                  ABOUT ATELIER
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-luxury-charcoal dark:text-luxury-beige-50 font-semibold tracking-normal mt-1 leading-tight">
                  Design Rooted In Elegance.
                </h3>
                <p className="text-sm md:text-base text-luxury-charcoal/70 dark:text-luxury-beige-200 font-sans font-light leading-relaxed">
                  Founded upon principles of strict classical symmetry, exquisite material procurement, and timeless European craftsmanship, Atelier Interiors has spent decades crafting environments of quiet luxury. Our methodology focuses on enduring quality over passing trends—we design custom residences and commercial spaces tailored to a client’s aesthetic goals, daily rituals, and physical comfort.
                </p>

                {/* Grid of specifications (as requested by prompt) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 pt-4 text-xs md:text-sm">
                  {[
                    { title: "Personalized Design", desc: "Every project is sculpted ground-up matching client lifestyle nuances and physical site context." },
                    { title: "Architectural Expertise", desc: "Our team spans structural wall engineering, spatial geometry layout, and smart electrical configurations." },
                    { title: "Premium Raw Procurement", desc: "We import finest handpicked Italian travertine marbles, aged velvets, and certified European hardwoods." },
                    { title: "End-to-End Delivery", desc: "Total management bridging architectural blueprint drafts, import logistics, and final styling handovers." }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1.5 border-l-2 border-luxury-gold-300 dark:border-luxury-gold-600/40 pl-4">
                      <h4 className="font-serif font-bold text-base text-luxury-charcoal dark:text-luxury-gold-300">{item.title}</h4>
                      <p className="text-xs text-luxury-charcoal/65 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* 4. SERVICES SECTION: CLASSICAL AND MODERN SERVICE LIST */}
        <section id="services" className="py-20 md:py-28 bg-luxury-beige-100 dark:bg-luxury-charcoal-light transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            
            <div className="space-y-3 max-w-2xl mx-auto" id="services-header">
              <span className="text-xs font-display font-semibold text-luxury-gold-600 dark:text-luxury-gold-400 tracking-widest uppercase block">
                CREATIVE DISCIPLINES
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-charcoal dark:text-luxury-beige-50">
                Disciplines of Structural Sovereignty
              </h3>
              <p className="text-xs md:text-sm text-luxury-charcoal/60 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                From noble country estates to executive financial headquarters, we provide premium design expertise crafted to last generations.
              </p>
            </div>

            {/* List of luxury interactive cards with elegant hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
              {servicesData.map((item) => {
                const IconComponent = iconMap[item.iconName] || Home;
                return (
                  <div
                    key={item.id}
                    id={`service-card-${item.id}`}
                    className="bg-white dark:bg-luxury-charcoal rounded-xs border border-luxury-beige-200 dark:border-luxury-charcoal/50 p-6 md:p-8 text-left group hover:border-luxury-gold-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Floating custom icon */}
                      <div className="p-3 bg-luxury-beige-50 dark:bg-luxury-charcoal-light text-luxury-gold-500 w-fit rounded-full border border-luxury-beige-300/40 transition-colors group-hover:bg-luxury-gold-500 group-hover:text-white duration-300">
                        <IconComponent className="w-5 h-5 shrink-0" />
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-serif text-xl text-luxury-charcoal dark:text-luxury-beige-50 font-bold group-hover:text-luxury-gold-500 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-luxury-charcoal/65 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleProjectInquire(item.title)}
                      className="text-xs text-luxury-gold-600 dark:text-luxury-gold-400 font-display font-bold tracking-wider uppercase mt-6 flex items-center gap-1.5 opacity-60 hover:opacity-100 group-hover:translate-x-1.5 transition-all cursor-pointer bg-transparent border-none outline-hidden p-0"
                    >
                      Inquire Custom Work
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* 5. INTERACTIVE ROOM ALCHEMY & Daylight SIMULATION (SPACE VISUALIZER) */}
        <section id="alchemy-visualizer" className="py-20 md:py-28 bg-luxury-beige-50 dark:bg-luxury-charcoal transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-3 text-center max-w-2xl mx-auto">
              <span className="text-xs font-display font-semibold text-luxury-gold-500 tracking-widest uppercase block">
                INTERACTIVE LAB
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-charcoal dark:text-luxury-beige-50">
                Simulate Your Material DNA
              </h3>
              <p className="text-xs sm:text-sm text-luxury-charcoal/60 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                Experience physical room reactions under alternate light orientations and marble configurations before our artisans start crafting.
              </p>
            </div>

            <SpaceVisualizer />
          </div>
        </section>


        {/* 6. FEATURED PROJECTS SECTION (PORTFOLIO GRID WITH MODAL TRIGGERS) */}
        <section id="portfolio" className="py-20 md:py-28 bg-luxury-beige-100 dark:bg-luxury-charcoal-light transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header description with responsive design elements */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" id="portfolio-header">
              <div className="space-y-3 text-left max-w-xl">
                <span className="text-xs font-display font-semibold text-luxury-gold-600 dark:text-luxury-gold-400 tracking-widest uppercase block font-medium">
                  CASE PORTFOLIOS
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-luxury-charcoal dark:text-luxury-beige-50 leading-tight">
                  Timeless Architecture Showcases
                </h3>
                <p className="text-xs md:text-sm text-luxury-charcoal/65 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                  Browse our recently styled properties. Each represents a thorough programmatic balance of geometry, lighting study, and custom materials.
                </p>
              </div>

              {/* Filtering tabs */}
              <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs font-display font-semibold uppercase tracking-wider" id="portfolio-filters-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat === "ALL" ? "ALL" : cat)}
                    className={`px-3 sm:px-4 py-2 rounded-xs border transition-all cursor-pointer focus:outline-hidden ${
                      activeFilter === (cat === "ALL" ? "ALL" : cat)
                        ? "bg-luxury-charcoal dark:bg-luxury-beige-100 text-luxury-beige-50 dark:text-luxury-charcoal border-luxury-charcoal dark:border-luxury-beige-100 shadow-sm"
                        : "border-luxury-beige-300 dark:border-luxury-charcoal hover:border-luxury-gold-400 text-luxury-charcoal/65 dark:text-luxury-beige-300"
                    }`}
                  >
                    {cat.replace(" DESIGN", "").replace(" INTERIOR", "")}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid display cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-project-grid">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    key={project.id}
                    id={`project-card-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="bg-white dark:bg-luxury-charcoal rounded-xs overflow-hidden border border-luxury-beige-200 dark:border-luxury-charcoal/50 group cursor-pointer transition-all hover:border-luxury-gold-400 hover:shadow-lg flex flex-col justify-between"
                  >
                    {/* Multi-ratio beautiful frame */}
                    <div className="aspect-4/3 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                      
                      {/* Zoom indicator label */}
                      <div className="absolute bottom-3 right-3 bg-luxury-beige-50/90 dark:bg-luxury-charcoal/95 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-luxury-beige-300/30 text-[10px] uppercase font-display font-semibold tracking-widest text-luxury-charcoal dark:text-luxury-beige-50 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="w-3 h-3" />
                        Aesthetic Case
                      </div>
                    </div>

                    <div className="p-5 md:p-6 text-left space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-luxury-gold-600 dark:text-luxury-gold-400 uppercase font-semibold">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      
                      <h4 className="font-serif text-xl text-luxury-charcoal dark:text-luxury-beige-100 font-bold tracking-tight">
                        {project.title}
                      </h4>

                      <div className="flex justify-between items-center text-xs text-luxury-charcoal/50 dark:text-luxury-beige-300/50 pt-2 border-t border-luxury-beige-200/40">
                        <span>Size: {project.size}</span>
                        <span>Tone: {project.style}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>


        {/* 7. THE INTERACTIVE MATCHMAKER (AESTHETIC STYLE STUDY QUIZ) */}
        <section id="style-quiz-anchor" className="py-20 md:py-28 bg-luxury-beige-50 dark:bg-luxury-charcoal transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="space-y-3 text-center max-w-2xl mx-auto" id="quiz-anchor-intro">
              <span className="text-xs font-display font-semibold text-luxury-gold-500 tracking-widest uppercase block">
                STYLE MATCHMAKER
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-charcoal dark:text-luxury-beige-50">
                Identify Your Design Archetype
              </h3>
              <p className="text-xs sm:text-sm text-luxury-charcoal/60 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                Take our refined aesthetic study to isolate whether your spatial DNA matches Classical European, Quiet Organic Minimalism, Refined Contemporary, or Art Deco.
              </p>
            </div>

            <StyleQuiz
              onStyleSelected={(style) => console.log("Match style determined:", style)}
              onBookWithName={handlePreFillInquiry}
            />
          </div>
        </section>


        {/* 8. ELITE TIMELINE DESIGN PROCESS SECTION */}
        <section id="process" className="py-20 md:py-28 bg-luxury-beige-100 dark:bg-luxury-charcoal-light transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="space-y-3 text-center max-w-2xl mx-auto" id="process-anchor-intro">
              <span className="text-xs font-display font-semibold text-luxury-gold-600 dark:text-luxury-gold-400 tracking-widest uppercase block">
                DESIGN METRICS
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-charcoal dark:text-luxury-beige-50">
                The Six Phases of Precision Execution
              </h3>
              <p className="text-xs md:text-sm text-luxury-charcoal/65 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                Every bespoke project adheres to a strict six-phase timeline, ensuring perfect axial symmetry, budget precision, and premium styled delivery.
              </p>
            </div>

            {/* Custom high end list-based editorial timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12" id="process-grid-display">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white dark:bg-luxury-charcoal rounded-xs border border-luxury-beige-200 dark:border-luxury-charcoal/50 p-6 md:p-8 space-y-5 text-left hover:border-luxury-gold-400 hover:shadow-md transition-all duration-300 relative group"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-serif text-3xl md:text-4xl font-semibold tracking-wide text-luxury-gold-500/20 group-hover:text-luxury-gold-500 transition-colors duration-300">
                      {step.number}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-luxury-charcoal/40 dark:text-luxury-beige-300/40 uppercase block pt-2">Phase Index</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-xl text-luxury-charcoal dark:text-luxury-beige-100">
                      {step.title}
                    </h4>
                    <p className="text-xs md:text-sm text-luxury-charcoal/70 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Outputs tag collection inside */}
                  <div className="border-t border-luxury-beige-200/50 dark:border-luxury-charcoal/40 pt-4 space-y-2">
                    <span className="text-[9px] font-display font-semibold tracking-wider text-luxury-gold-600 dark:text-luxury-gold-400 uppercase block">Deliverable Outputs</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {step.keyOutputs.map((out, oIdx) => (
                        <span key={oIdx} className="text-[9px] bg-luxury-beige-100 dark:bg-luxury-charcoal-light px-2.5 py-1 rounded-sm text-luxury-charcoal/70 dark:text-luxury-beige-200 font-mono tracking-tight uppercase leading-none">
                          {out}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 9. TESTIMONIALS SECTION & COMPREHENSIVE STATS */}
        <section id="testimonials" className="py-20 md:py-28 bg-luxury-beige-50 dark:bg-luxury-charcoal transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="space-y-3 text-center max-w-2xl mx-auto" id="testimonials-main-intro">
              <span className="text-xs font-display font-semibold text-luxury-gold-500 tracking-widest uppercase block">
                CLIENT PATRONAGE
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-charcoal dark:text-luxury-beige-50">
                Shared Words of quiet Satisfaction
              </h3>
              <p className="text-xs md:text-sm text-luxury-charcoal/60 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                Review letters from historical collectors and hospitality designers who paired their physical property development programs with the Atelier guild.
              </p>
            </div>

            {/* Testimonial elegant bento cards layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="testimonials-bento-grid">
              {testimonialsData.map((review) => (
                <div
                  key={review.id}
                  id={review.id}
                  className="bg-white dark:bg-luxury-charcoal-light rounded-sm border border-luxury-beige-200 dark:border-luxury-charcoal/20 p-6 md:p-8 flex flex-col justify-between space-y-6 relative"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-luxury-gold-400/10" />
                  
                  <div className="space-y-4">
                    {/* Stars bar */}
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-luxury-gold-500 text-luxury-gold-500 shrink-0" />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-luxury-charcoal/75 dark:text-luxury-beige-200 font-sans font-light italic leading-relaxed text-left">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Profile bio block */}
                  <div className="flex items-center gap-4 text-left border-t border-luxury-beige-200/50 dark:border-luxury-charcoal/40 pt-4" id="testimonials-profile-block">
                    <img
                      src={review.image}
                      alt={review.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-luxury-gold-300"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-luxury-charcoal dark:text-luxury-beige-50">
                        {review.name}
                      </h4>
                      <p className="text-[10px] text-luxury-charcoal/50 dark:text-luxury-beige-300/50 font-sans tracking-tight">
                        {review.position}
                      </p>
                      <p className="text-[9px] font-mono text-luxury-gold-600 dark:text-luxury-gold-400 mt-0.5">
                        Project: {review.projectAssociated}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AWARDS & RECOGNITION (As requested by user) */}
            <div className="border-t border-luxury-beige-300/40 dark:border-luxury-charcoal-light/30 pt-16 space-y-10" id="awards-sub-section">
              <div className="space-y-2 text-center">
                <span className="text-[10px] font-display font-semibold text-luxury-gold-500 tracking-widest uppercase block">
                  CRAFT ENDORSEMENTS
                </span>
                <h4 className="font-serif text-2xl text-luxury-charcoal dark:text-luxury-beige-50">
                  Prestigious Awards & Advisory Accolades
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {awardsData.map((award) => (
                  <div
                    key={award.id}
                    className="bg-luxury-beige-100/55 dark:bg-luxury-charcoal-light/35 border border-luxury-beige-300/20 p-5 rounded-xs space-y-2 text-left"
                  >
                    <div className="font-mono text-[10px] text-luxury-gold-500 font-semibold uppercase">{award.year} • {award.category}</div>
                    <h5 className="font-serif font-semibold text-sm text-luxury-charcoal dark:text-luxury-beige-100">{award.title}</h5>
                    <p className="text-[10px] font-sans text-luxury-charcoal/50 dark:text-luxury-beige-300/50">{award.organization}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SUMMARY STATS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-12 border-t border-luxury-beige-300/40 dark:border-luxury-charcoal-light/30" id="stats-grid-counters">
              {mainStats.map((stat, sIdx) => (
                <div key={sIdx} className="space-y-1.5 text-center sm:text-left">
                  <h3 className="font-serif text-3xl md:text-4xl text-luxury-gold-500 font-semibold">{stat.value}</h3>
                  <div className="text-[10px] uppercase tracking-wider text-luxury-charcoal dark:text-luxury-beige-100 font-display font-semibold">{stat.label}</div>
                  <p className="text-[10px] text-luxury-charcoal/50 dark:text-luxury-beige-300/50 font-sans font-light leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* 10. EDITORIAL BLOG SECTION */}
        <section id="blog" className="py-20 md:py-28 bg-luxury-beige-100 dark:bg-luxury-charcoal-light transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="space-y-3 text-center max-w-2xl mx-auto" id="blog-intro-heading">
              <span className="text-xs font-display font-semibold text-luxury-gold-600 dark:text-luxury-gold-400 tracking-widest uppercase block">
                STUDIO DIARIES
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-charcoal dark:text-luxury-beige-50">
                The Atelier Editorial
              </h3>
              <p className="text-xs md:text-sm text-luxury-charcoal/65 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                Review spatial concepts, limestone quarry visit logs, and architectural preservation studies curated by our creative directors.
              </p>
            </div>

            {/* Editorial list grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="blog-articles-grid">
              {blogPostsData.map((post) => (
                <div
                  key={post.id}
                  id={`article-${post.id}`}
                  onClick={() => setReadingPost(post)}
                  className="bg-white dark:bg-luxury-charcoal border border-luxury-beige-200 dark:border-luxury-charcoal/50 rounded-xs overflow-hidden group cursor-pointer hover:border-luxury-gold-400 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row h-full"
                >
                  <div className="aspect-video md:aspect-auto md:w-2/5 overflow-hidden relative min-h-[180px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>

                  <div className="p-6 md:w-3/5 flex flex-col justify-between text-left space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-luxury-gold-600 dark:text-luxury-gold-400 uppercase font-semibold">
                        <span>{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      
                      <h4 className="font-serif text-lg font-bold text-luxury-charcoal dark:text-luxury-beige-100 group-hover:text-luxury-gold-500 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-xs text-luxury-charcoal/65 dark:text-luxury-beige-300 font-sans font-light line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-luxury-beige-200/50 dark:border-luxury-charcoal/40 text-[10px]">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full object-cover border border-luxury-beige-300"
                        />
                        <span className="font-medium text-luxury-charcoal/70 dark:text-luxury-beige-200">{post.author.name}</span>
                      </div>
                      <span className="font-mono text-luxury-charcoal/40 dark:text-luxury-beige-300/40 text-[9px] uppercase tracking-wider">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* 11. PREMIUM PROPOSAL & CONTACT SECTION (WITH FORM SELECTIONS) */}
        <section id="contact" className="py-20 md:py-28 bg-luxury-beige-50 dark:bg-luxury-charcoal transition-colors duration-500 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
            
            <div className="space-y-3 text-center max-w-2xl mx-auto" id="contact-heading-box">
              <span className="text-xs font-display font-semibold text-luxury-gold-500 tracking-widest uppercase block">
                PARTNER WITH ATELIER
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-charcoal dark:text-luxury-beige-50 leading-tight">
                Let&apos;s Create Something Extraordinary
              </h3>
              <p className="text-xs sm:text-sm text-luxury-charcoal/65 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                We accept limited boutique residential commissions annually. Provide details of your project below to arrange an exploratory design program checkup.
              </p>
            </div>

            <ContactForm initialProjectType={prefilledProjectType} />
          </div>
        </section>

      </main>

      {/* Primary footer layout */}
      <Footer onNavigateTo={navigateToSection} />

      {/* 12. FLOATING EDITORIAL PROJECT MODAL DIALOG */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onInquire={handleProjectInquire}
          />
        )}
      </AnimatePresence>

      {/* 13. DYNAMIC LES RECOVERY READER POPUP FOR BLOG ARTICLE CORES */}
      <AnimatePresence>
        {readingPost && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-6" id="blog-reader-backdrop-wrapper">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setReadingPost(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-luxury-beige-50 dark:bg-luxury-charcoal max-w-3xl w-full rounded-sm overflow-hidden border border-luxury-beige-300/40 dark:border-luxury-charcoal-light/80 shadow-2xl relative z-10 p-6 md:p-10 max-h-[85vh] flex flex-col text-left"
              id="article-read-canvas"
            >
              <button
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 text-luxury-charcoal/65 dark:text-luxury-beige-300 hover:text-luxury-gold-500 p-2 rounded-full cursor-pointer transition-colors outline-hidden"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto flex-1 space-y-6 pr-2">
                <div className="space-y-2 border-b border-luxury-beige-200/50 dark:border-luxury-charcoal/30 pb-4">
                  <div className="flex gap-4 items-center text-[10px] font-mono tracking-widest text-luxury-gold-500 uppercase font-semibold">
                    <span>{readingPost.category}</span>
                    <span>•</span>
                    <span>{readingPost.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-luxury-charcoal dark:text-luxury-beige-50 font-bold mt-1.5 leading-snug">
                    {readingPost.title}
                  </h3>
                </div>

                <div className="aspect-video w-full rounded-xs overflow-hidden">
                  <img
                    src={readingPost.image}
                    alt={readingPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article paragraph texts */}
                <div className="text-sm text-luxury-charcoal/80 dark:text-luxury-beige-200 space-y-4 font-sans font-light leading-relaxed">
                  <p className="font-semibold text-base text-luxury-charcoal dark:text-luxury-beige-50">{readingPost.summary}</p>
                  <p>{readingPost.content}</p>
                  <p>Our core conviction is that physical spaces carry psychological weight. Whether restoring structural ceiling frescoes in Europe or nesting heavy glass outlines in dynamic metropolitan high-rises, we build for durability and intellectual presence.</p>
                </div>

                <div className="border-t border-luxury-beige-200/50 dark:border-luxury-charcoal/30 pt-4 flex gap-3.5 items-center">
                  <img
                    src={readingPost.author.avatar}
                    alt={readingPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-luxury-beige-300"
                  />
                  <div>
                    <h5 className="font-serif font-bold text-sm text-luxury-charcoal dark:text-luxury-beige-50 leading-none">{readingPost.author.name}</h5>
                    <span className="text-[10px] text-luxury-charcoal/50 dark:text-luxury-beige-300/50 mt-1 block font-sans">{readingPost.author.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Inline fallback icon for general browsers
function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7"></path>
    </svg>
  );
}
