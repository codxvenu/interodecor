import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, ShieldAlert, Award, FileText, CalendarCheck, MapPin } from "lucide-react";

interface ContactFormProps {
  initialProjectType?: string;
}

interface SubmittedInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  projectLocation: string;
  message: string;
  timestamp: string;
  referenceId: string;
}

export default function ContactForm({ initialProjectType = "" }: ContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("Residential Interior Design");
  const [budgetRange, setBudgetRange] = useState("$250,000 - $500,000");
  const [projectLocation, setProjectLocation] = useState("");
  const [message, setMessage] = useState("");

  const [savingState, setSavingState] = useState<"idle" | "submitting" | "completed">("idle");
  const [submissionStep, setSubmissionStep] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [previousInquiries, setPreviousInquiries] = useState<SubmittedInquiry[]>([]);

  // Pre-load from prop if provided
  useEffect(() => {
    if (initialProjectType) {
      setProjectType(initialProjectType);
    }
  }, [initialProjectType]);

  // Load existing inquiries from localStorage for user visibility
  useEffect(() => {
    const saved = localStorage.getItem("atelier_submissions");
    if (saved) {
      try {
        setPreviousInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse submissions");
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !projectLocation) return;

    setSavingState("submitting");
    
    // Simulate premium pipeline stages
    const steps = [
      "Establishing connection to Atelier Guild network...",
      "Analyzing geographical site boundaries...",
      "Matching spatial aesthetic preferences...",
      "Assigning lead architectural senior project manager...",
      "Sealing secure documentation vault..."
    ];

    let currentStep = 0;
    setSubmissionStep(steps[currentStep]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setSubmissionStep(steps[currentStep]);
      } else {
        clearInterval(interval);
        
        // Finalize
        const randomRef = `ATL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
        setReferenceId(randomRef);

        const newInquiry: SubmittedInquiry = {
          id: Date.now().toString(),
          fullName,
          email,
          phone,
          projectType,
          budgetRange,
          projectLocation,
          message,
          timestamp: new Date().toLocaleString(),
          referenceId: randomRef
        };

        const updated = [newInquiry, ...previousInquiries];
        setPreviousInquiries(updated);
        localStorage.setItem("atelier_submissions", JSON.stringify(updated));

        setSavingState("completed");
        
        // Clear fields
        setFullName("");
        setEmail("");
        setPhone("");
        setProjectLocation("");
        setMessage("");
      }
    }, 1000);
  };

  return (
    <div id="contact-wrapper" className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
      
      {/* Left Column: Office Details Box */}
      <div className="lg:col-span-4 flex flex-col justify-between space-y-8 bg-luxury-charcoal dark:bg-luxury-charcoal-light text-luxury-beige-100 rounded-sm p-6 md:p-8 border border-luxury-charcoal-light relative overflow-hidden" id="office-details-box">
        {/* Subtle background golden sphere */}
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-radial from-luxury-gold-500/10 to-transparent pointer-events-none"></div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-display font-semibold text-luxury-gold-400 tracking-widest uppercase block">
              Global Headquarters
            </span>
            <h3 className="font-serif text-3xl text-luxury-beige-50">
              The Atelier Studio
            </h3>
          </div>

          <div className="space-y-4 font-sans font-light text-xs md:text-sm text-luxury-beige-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-luxury-gold-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-luxury-beige-50">Grand Mansion Studio VII</p>
                <p>14 Avenue Montaigne, 75008</p>
                <p>Paris, France</p>
              </div>
            </div>

            <div className="border-t border-luxury-beige-300/15 pt-4 space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-400 block">Direct Inquiries</span>
              <p>client.services@atelier-interiors.com</p>
              <p>+33 (1) 45 78 88 99</p>
            </div>

            <div className="border-t border-luxury-beige-300/15 pt-4 space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-400 block">Business Hours</span>
              <p>Monday — Friday: 09:00 - 18:00 CET</p>
              <p>Saturday: By Private Appointment Only</p>
            </div>
          </div>
        </div>

        {/* Client Trust indicator */}
        <div className="border-t border-luxury-beige-300/15 pt-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-luxury-gold-500/10 text-luxury-gold-400">
              <Award className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-xs">
              <p className="font-display font-semibold text-luxury-gold-400 uppercase tracking-wider text-[10px]">Exclusivity Guarantee</p>
              <p className="text-luxury-beige-300/80 font-light mt-0.5 leading-relaxed">We restrict commissions to 12 bespoke projects annually.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Interaction Form */}
      <div className="lg:col-span-8 bg-luxury-beige-100 dark:bg-luxury-charcoal rounded-sm border border-luxury-beige-300/40 dark:border-luxury-charcoal-light/70 p-6 md:p-8" id="contact-form-section">
        <AnimatePresence mode="wait">
          {savingState === "idle" && (
            <motion.form
              key="form-idle"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h4 className="font-serif text-2xl text-luxury-charcoal dark:text-luxury-beige-50">
                Begin Your Spatial Transformation
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-charcoal/60 dark:text-luxury-beige-300">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Katherine Sterling"
                    className="w-full bg-white dark:bg-luxury-charcoal-light border border-luxury-beige-300 dark:border-luxury-charcoal-light/80 p-2.5 rounded-xs text-xs font-sans text-luxury-charcoal dark:text-luxury-beige-100 placeholder-luxury-charcoal/30 focus:border-luxury-gold-500 transition-colors outline-hidden"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-charcoal/60 dark:text-luxury-beige-300">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., katherine@sterlingholdings.com"
                    className="w-full bg-white dark:bg-luxury-charcoal-light border border-luxury-beige-300 dark:border-luxury-charcoal-light/80 p-2.5 rounded-xs text-xs font-sans text-luxury-charcoal dark:text-luxury-beige-100 placeholder-luxury-charcoal/30 focus:border-luxury-gold-500 transition-colors outline-hidden"
                  />
                </div>

                {/* Phone number */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-charcoal/60 dark:text-luxury-beige-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., +1 (555) 420-9900"
                    className="w-full bg-white dark:bg-luxury-charcoal-light border border-luxury-beige-300 dark:border-luxury-charcoal-light/80 p-2.5 rounded-xs text-xs font-sans text-luxury-charcoal dark:text-luxury-beige-100 placeholder-luxury-charcoal/30 focus:border-luxury-gold-500 transition-colors outline-hidden"
                  />
                </div>

                {/* Scope Selection */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-charcoal/60 dark:text-luxury-beige-300">
                    Project Architecture Theme
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-white dark:bg-luxury-charcoal-light border border-luxury-beige-300 dark:border-luxury-charcoal-light/80 p-2.5 rounded-xs text-xs font-sans text-luxury-charcoal dark:text-luxury-beige-100 focus:border-luxury-gold-500 transition-colors cursor-pointer outline-hidden"
                  >
                    <option>Residential Interior Design</option>
                    <option>Commercial Interior Design</option>
                    <option>Hospitality Design</option>
                    <option>Space Planning</option>
                    <option>Furniture & Decor Selection</option>
                    <option>Renovation & Remodeling</option>
                    <option>3D Visualization</option>
                    <option>Turnkey Project Execution</option>
                  </select>
                </div>

                {/* Budget parameters */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-charcoal/60 dark:text-luxury-beige-300">
                    Project Budget Capital Range
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-white dark:bg-luxury-charcoal-light border border-luxury-beige-300 dark:border-luxury-charcoal-light/80 p-2.5 rounded-xs text-xs font-sans text-luxury-charcoal dark:text-luxury-beige-100 focus:border-luxury-gold-500 transition-colors cursor-pointer outline-hidden"
                  >
                    <option>Under $100,000</option>
                    <option>$100,000 — $250,000</option>
                    <option>$250,000 — $500,000</option>
                    <option>$500,000 — $1,000,000</option>
                    <option>$1,000,000+ Unlimited Commission</option>
                  </select>
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-charcoal/60 dark:text-luxury-beige-300">
                    Project Site / Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                    placeholder="e.g., Beverly Hills, CA / Milan, IT"
                    className="w-full bg-white dark:bg-luxury-charcoal-light border border-luxury-beige-300 dark:border-luxury-charcoal-light/80 p-2.5 rounded-xs text-xs font-sans text-luxury-charcoal dark:text-luxury-beige-100 placeholder-luxury-charcoal/30 focus:border-luxury-gold-500 transition-colors outline-hidden"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-luxury-charcoal/60 dark:text-luxury-beige-300">
                  Aesthetic Intentions & Brief Notes
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details of your space, material goals, physical constraints..."
                  className="w-full bg-white dark:bg-luxury-charcoal-light border border-luxury-beige-300 dark:border-luxury-charcoal-light/80 p-2.5 rounded-xs text-xs font-sans text-luxury-charcoal dark:text-luxury-beige-100 placeholder-luxury-charcoal/30 focus:border-luxury-gold-500 transition-colors outline-hidden resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="btn-form-submit"
                className="w-full bg-luxury-charcoal dark:bg-luxury-beige-100 hover:bg-luxury-gold-500 dark:hover:bg-luxury-gold-400 text-white dark:text-luxury-charcoal hover:shadow-xs py-3 rounded-xs font-display font-semibold uppercase tracking-widest text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Proposal To Guild
              </button>
            </motion.form>
          )}

          {/* SIMULATING SUBMITTING SPINNER LAYOUT */}
          {savingState === "submitting" && (
            <motion.div
              key="form-submitting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 flex flex-col items-center justify-center space-y-6 text-center"
            >
              {/* Antique gold spinning ring */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-luxury-gold-100 dark:border-luxury-charcoal-light"></div>
                <div className="absolute inset-0 rounded-full border-4 border-t-luxury-gold-500 animate-spin"></div>
              </div>

              <div className="space-y-2">
                <h5 className="font-serif text-xl text-luxury-charcoal dark:text-luxury-beige-50">
                  Compiling Project Metrics
                </h5>
                <p className="text-xs text-luxury-charcoal/50 dark:text-luxury-beige-300/50 font-mono tracking-tight max-w-sm mx-auto">
                  {submissionStep}
                </p>
              </div>
            </motion.div>
          )}

          {/* SUBMISSION COMPLETED STATE - SHOW ELITE SEAL */}
          {savingState === "completed" && (
            <motion.div
              key="form-completed"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-8 text-center space-y-6"
            >
              <div className="flex justify-center">
                <div className="p-4 bg-luxury-gold-100 dark:bg-luxury-gold-600/20 text-luxury-gold-600 dark:text-luxury-gold-300 rounded-full border border-luxury-gold-300">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-luxury-gold-500 block">
                  TRANSACTION SEAL: {referenceId}
                </span>
                <h4 className="font-serif text-3xl text-luxury-charcoal dark:text-luxury-beige-50">
                  Proposal Received
                </h4>
                <p className="text-sm text-luxury-charcoal/70 dark:text-luxury-beige-200 max-w-md mx-auto font-sans font-light leading-relaxed">
                  We have lodged your creative program inside our registry. A senior creative partner from our Paris office will review your spatial request within 24 working hours.
                </p>
              </div>

              {/* Receipt metadata box */}
              <div className="bg-luxury-beige-50 dark:bg-luxury-charcoal-light border border-luxury-beige-300/40 dark:border-luxury-charcoal-light/50 p-4 rounded-xs text-left max-w-md mx-auto space-y-2 text-xs">
                <p className="flex justify-between">
                  <span className="text-luxury-charcoal/50 dark:text-luxury-beige-300/50">Reference Case ID:</span>
                  <span className="font-semibold font-mono text-luxury-gold-600 dark:text-luxury-gold-300">{referenceId}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-luxury-charcoal/50 dark:text-luxury-beige-300/50">Project Category:</span>
                  <span className="font-semibold">{projectType}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-luxury-charcoal/50 dark:text-luxury-beige-300/50">Allocation Budget:</span>
                  <span className="font-semibold">{budgetRange}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-luxury-charcoal/50 dark:text-luxury-beige-300/50">Allocated Lead Manager:</span>
                  <span className="font-semibold">Jean-Paul Larousse (Senior Architect)</span>
                </p>
              </div>

              <button
                onClick={() => setSavingState("idle")}
                className="bg-zinc-800 dark:bg-luxury-beige-50 dark:hover:bg-luxury-beige-200 hover:bg-zinc-950 text-white dark:text-luxury-charcoal text-xs font-display px-6 py-2 rounded-xs tracking-wider cursor-pointer transition-all"
              >
                Lodge An Additional Location
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Previous lodging drawer display inside localstorage */}
        {previousInquiries.length > 0 && (
          <div className="mt-8 pt-6 border-t border-luxury-beige-300/40 dark:border-luxury-charcoal-light/50 space-y-3">
            <h5 className="flex items-center gap-1.5 font-serif text-sm text-luxury-charcoal dark:text-luxury-beige-100">
              <FileText className="w-4 h-4 text-luxury-gold-500" />
              Your Filed Commisions ({previousInquiries.length})
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[150px] overflow-y-auto pr-2">
              {previousInquiries.map((inq) => (
                <div key={inq.id} className="bg-white/50 dark:bg-luxury-charcoal-light/35 p-3 rounded-xs border border-luxury-beige-300/30 text-[11px] leading-relaxed relative">
                  <div className="flex justify-between tracking-tight text-[10px] font-mono text-luxury-gold-600 dark:text-luxury-gold-300">
                    <span>{inq.referenceId}</span>
                    <span>{inq.timestamp.split(",")[0]}</span>
                  </div>
                  <p className="font-semibold mt-1 text-luxury-charcoal dark:text-luxury-beige-50">{inq.fullName}</p>
                  <p className="text-luxury-charcoal/60 dark:text-luxury-beige-300/60 font-light truncate">{inq.projectType} • {inq.projectLocation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
