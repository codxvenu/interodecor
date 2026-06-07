import { useState, useEffect } from "react";
import { Sunrise, Moon, Sun, Menu, X, ArrowRight, Languages } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigateTo: (targetId: string) => void;
}

export default function Navbar({ darkMode, onToggleDarkMode, onNavigateTo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"EN" | "FR" | "IT">("EN");

  // Track scrolling to toggle frosted-glass background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Portfolio", target: "portfolio" },
    { label: "About", target: "about" },
    { label: "Services", target: "services" },
    { label: "Process", target: "process" },
    { label: "Style Quiz", target: "style-quiz-anchor" },
    { label: "Blog", target: "blog" },
    { label: "Contact", target: "contact" }
  ];

  const handleLangToggle = () => {
    const langs: ("EN" | "FR" | "IT")[] = ["EN", "FR", "IT"];
    const nextIdx = (langs.indexOf(activeLang) + 1) % langs.length;
    setActiveLang(langs[nextIdx]);
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-luxury-charcoal/80 backdrop-blur-md shadow-xs border-b border-luxury-beige-300/20 dark:border-luxury-charcoal-light/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Brand Logo in refined typography */}
          <button
            onClick={() => onNavigateTo("hero")}
            id="nav-brand-logo"
            className="flex items-center gap-1.5 focus:outline-hidden cursor-pointer group"
          >
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-luxury-charcoal dark:text-luxury-beige-50">
              ATELIER
              <span className="text-serif-italic font-light tracking-widest text-luxury-gold-500 ml-1.5">Interiors</span>
            </span>
            <div className="w-1.5 h-1.5 bg-luxury-gold-500 rounded-full group-hover:scale-150 transition-transform"></div>
          </button>

          {/* Core Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-display font-medium tracking-widest uppercase">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => onNavigateTo(link.target)}
                className="text-luxury-charcoal/70 hover:text-luxury-gold-500 dark:text-luxury-beige-100 dark:hover:text-luxury-gold-300 transition-colors pointer-events-auto cursor-pointer focus:outline-hidden"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action cluster */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language toggle link */}
            <button
              onClick={handleLangToggle}
              id="lang-selector"
              className="flex items-center gap-1.5 text-[10px] font-display font-semibold text-luxury-charcoal/50 dark:text-luxury-beige-300/50 hover:text-luxury-gold-500 cursor-pointer outline-hidden transition-colors"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{activeLang}</span>
            </button>

            {/* Dark & light mode indicator */}
            <button
              onClick={onToggleDarkMode}
              id="dark-mode-toggle"
              aria-label="Toggle Dark Mode"
              className="p-1.5 rounded-full hover:bg-luxury-beige-100 dark:hover:bg-luxury-charcoal-light text-luxury-charcoal/70 dark:text-luxury-beige-50 pointer-events-auto cursor-pointer outline-hidden transition-all duration-300"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-luxury-gold-400 rotate-0 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-luxury-charcoal/80 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Floating primary consultation shortcut button */}
            <button
              onClick={() => onNavigateTo("contact")}
              id="btn-nav-consultation"
              className="bg-luxury-charcoal dark:bg-luxury-beige-50 hover:bg-luxury-gold-500 dark:hover:bg-luxury-beige-200 text-white dark:text-luxury-charcoal text-[10px] font-display font-bold px-4 py-2 rounded-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              Book Consultation
            </button>
          </div>

          {/* Small Device controls */}
          <div className="flex lg:hidden items-center gap-4">
            {/* dark mode toggle in small devices too */}
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 rounded-full hover:bg-luxury-beige-100 text-luxury-charcoal dark:text-luxury-beige-50"
            >
              {darkMode ? <Sun className="w-4 h-4 text-luxury-gold-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-luxury-charcoal dark:text-luxury-beige-50 cursor-pointer p-1"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-luxury-charcoal border-b border-luxury-beige-300/30 dark:border-luxury-charcoal-light/50 py-6 px-6 shadow-lg space-y-6 flex flex-col transition-all">
          <div className="flex flex-col gap-4 text-xs font-display font-semibold tracking-widest uppercase">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateTo(link.target);
                }}
                className="text-left py-1 text-luxury-charcoal/80 dark:text-luxury-beige-100 hover:text-luxury-gold-500"
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className="border-t border-luxury-beige-200/50 dark:border-luxury-charcoal-light/50 pt-4 flex justify-between items-center">
            <button
              onClick={handleLangToggle}
              className="flex items-center gap-1.5 text-xs font-display text-luxury-charcoal/60 dark:text-luxury-beige-300"
            >
              <Languages className="w-4 h-4" />
              <span>Language: {activeLang}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateTo("contact");
              }}
              className="bg-luxury-charcoal dark:bg-luxury-beige-50 text-white dark:text-luxury-charcoal text-[10px] font-display font-bold px-4 py-2.5 rounded-sm tracking-widest uppercase"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}

    </nav>
  );
}
