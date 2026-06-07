import React, { useState, useEffect } from "react";
import { Mail, ArrowRight, Instagram, Linkedin, Pin, Send, Compass } from "lucide-react";

interface FooterProps {
  onNavigateTo: (targetId: string) => void;
}

export default function Footer({ onNavigateTo }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(1280);

  useEffect(() => {
    // Read from localStorage to check if already subscribed or customize starting count
    const count = localStorage.getItem("atelier_newsletter_count");
    if (count) {
      setSubscriberCount(parseInt(count));
    } else {
      const randomCount = Math.floor(1240 + Math.random() * 200);
      setSubscriberCount(randomCount);
      localStorage.setItem("atelier_newsletter_count", randomCount.toString());
    }

    const hasSubscribed = localStorage.getItem("atelier_subscribed_email");
    if (hasSubscribed) {
      setSubmitted(true);
    }
  }, []);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    localStorage.setItem("atelier_subscribed_email", newsletterEmail);
    const newCount = subscriberCount + 1;
    setSubscriberCount(newCount);
    localStorage.setItem("atelier_newsletter_count", newCount.toString());
    
    setSubmitted(true);
    setNewsletterEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-luxury-charcoal text-luxury-beige-100 border-t border-luxury-charcoal-light/50 pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Segment: Brand message and Newsletter box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-luxury-beige-300/10">
          
          {/* Logo Brand Descriptor */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-3xl font-semibold tracking-wide">
              ATELIER
              <span className="text-serif-italic font-light tracking-widest text-luxury-gold-400 ml-2">Interiors</span>
            </span>
            <p className="text-xs md:text-sm text-luxury-beige-300/80 font-sans font-light leading-relaxed max-w-sm">
              Established in Paris, Atelier Interiors is a world-renowned architecture advisory and luxury renovation guild shaping the planet&apos;s most exclusive homes and commercial spaces.
            </p>
          </div>

          {/* Newsletter subscription form */}
          <div className="lg:col-span-7 space-y-4" id="footer-newsletter">
            <div className="space-y-1.5">
              <span className="text-[10px] font-display font-semibold text-luxury-gold-400 uppercase tracking-widest block">
                The Atelier Catalogue & Journal
              </span>
              <p className="text-xs text-luxury-beige-300/70 font-sans font-light">
                Join our premium list of <span className="font-bold text-luxury-beige-100 font-mono">{subscriberCount}</span> collectors receiving our quarterly physical design portfolio in high-end linen paper print.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSub} className="flex max-w-md items-center gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Insert exclusive email..."
                  className="bg-luxury-charcoal-light border border-luxury-beige-300/20 text-xs px-3.5 py-3 rounded-xs flex-1 text-luxury-beige-100 placeholder-luxury-beige-300/30 focus:border-luxury-gold-400 transition-colors outline-hidden font-sans font-light"
                />
                <button
                  type="submit"
                  id="btn-footer-sub"
                  className="bg-luxury-beige-100 hover:bg-luxury-gold-500 hover:text-white text-luxury-charcoal px-5 py-3 rounded-xs text-xs font-display font-semibold transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  Join List
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="text-xs text-luxury-gold-300 bg-luxury-gold-900/10 border border-luxury-gold-500/20 px-4 py-3 rounded-xs max-w-md flex items-center gap-2">
                <Compass className="w-4 h-4 text-luxury-gold-400 animate-spin-[15s]" />
                <p>Welcome to the registry. The physical collection dispatch is being arranged.</p>
              </div>
            )}
          </div>
        </div>

        {/* Middle Segment: Columnized links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-luxury-beige-300/10 font-sans text-xs">
          
          {/* Column 1: Studio */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-display font-bold uppercase tracking-wider text-luxury-gold-400 text-[10px]">THE GUILD</h5>
            <div className="flex flex-col gap-2.5 text-luxury-beige-300/85">
              <button onClick={() => onNavigateTo("about")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Our Philosophy</button>
              <button onClick={() => onNavigateTo("process")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">The Six Phases</button>
              <button onClick={() => onNavigateTo("about")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Studio Careers</button>
              <button onClick={() => onNavigateTo("about")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Craftsman Network</button>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-display font-bold uppercase tracking-wider text-luxury-gold-400 text-[10px]">CREATIVE BRANCHES</h5>
            <div className="flex flex-col gap-2.5 text-luxury-beige-300/85">
              <button onClick={() => onNavigateTo("services")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Residential Interiors</button>
              <button onClick={() => onNavigateTo("services")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Hospitality Solutions</button>
              <button onClick={() => onNavigateTo("services")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Commercial Prestigie</button>
              <button onClick={() => onNavigateTo("services")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Bespoke Decor Sourcing</button>
            </div>
          </div>

          {/* Column 3: Portfolio */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-display font-bold uppercase tracking-wider text-luxury-gold-400 text-[10px]">CASE HISTORIES</h5>
            <div className="flex flex-col gap-2.5 text-luxury-beige-300/85">
              <button onClick={() => onNavigateTo("portfolio")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Florence Country Villa</button>
              <button onClick={() => onNavigateTo("portfolio")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Manhattan Skyline Suite</button>
              <button onClick={() => onNavigateTo("portfolio")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Zurich Financial Chamber</button>
              <button onClick={() => onNavigateTo("portfolio")} className="text-left hover:text-luxury-gold-300 transition-colors cursor-pointer focus:outline-hidden">Paris Boutique Hotel</button>
            </div>
          </div>

          {/* Column 4: Social Curations */}
          <div className="lg:col-span-3 space-y-4" id="footer-social-column">
            <h5 className="font-display font-bold uppercase tracking-wider text-luxury-gold-400 text-[10px]">CRAFT CURATIONS</h5>
            <p className="text-luxury-beige-300/60 leading-relaxed font-light mb-2">We share design inspirations, raw textiles, and preview swatches on our global catalog walls daily.</p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                id="social-ig"
                className="p-2 bg-luxury-charcoal-light hover:bg-luxury-gold-500 rounded-sm hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                id="social-pin"
                className="p-2 bg-luxury-charcoal-light hover:bg-luxury-gold-500 rounded-sm hover:text-white transition-colors"
              >
                <Pin className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                id="social-li"
                className="p-2 bg-luxury-charcoal-light hover:bg-luxury-gold-500 rounded-sm hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Segment: Copyright, certificates and standard parameters */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center text-[10px] text-luxury-beige-300/40 font-mono tracking-tight uppercase" id="footer-copyright-row">
          <p>© {currentYear} ATELIER INTERIORS ADVISORY GUILD. ALL RIGHTS EXCLUSIVELY PRESERVED.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-luxury-gold-400 transition-all">PATENT & CERTIFICATIONS</a>
            <a href="#about" className="hover:text-luxury-gold-400 transition-all">ESTATE PRIVACY LAWS</a>
            <a href="#about" className="hover:text-luxury-gold-400 transition-all">STUDIO STANDARDS</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
