import { motion } from "motion/react";
import { Project } from "../types";
import { X, MapPin, Calendar, Layers, Maximize2, Compass, CheckCircle } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (category: string) => void;
}

export default function ProjectModal({ project, onClose, onInquire }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-6" id="project-modal-wrapper">
      {/* Dark backdrop element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        id="project-backdrop"
      ></motion.div>

      {/* Modal core paper sheet */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-luxury-beige-100 dark:bg-luxury-charcoal max-w-5xl w-full rounded-sm overflow-hidden border border-luxury-beige-300/40 dark:border-luxury-charcoal-light/80 shadow-2xl relative z-10 max-h-[90vh] flex flex-col"
        id="project-modal-container"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          id="btn-close-modal"
          className="absolute top-4 right-4 bg-black/40 hover:bg-black/75 dark:bg-luxury-charcoal/80 dark:hover:bg-luxury-beige-100/90 text-white dark:hover:text-luxury-charcoal p-2.5 rounded-full border border-white/20 dark:border-luxury-charcoal-light/60 transition-all cursor-pointer z-20 outline-hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Main Large Hero Image Banner */}
          <div className="relative h-[250px] md:h-[400px] w-full">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
            
            {/* Title & Category absolute overlay labels */}
            <div className="absolute bottom-6 left-6 md:left-10 right-6 text-white space-y-2">
              <span className="text-[10px] md:text-xs font-display font-bold tracking-widest text-luxury-gold-300 uppercase block">
                {project.category}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-normal text-luxury-beige-50">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Quick Specifications Metadata board */}
          <div className="bg-luxury-beige-200/50 dark:bg-luxury-charcoal-light/70 p-6 md:p-10 border-b border-luxury-beige-300/40 dark:border-luxury-charcoal/50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-xs md:text-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-luxury-gold-500/10 text-luxury-gold-600 dark:text-luxury-gold-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-luxury-charcoal/50 dark:text-luxury-beige-300/50 block font-light leading-none mb-1">LOCATION</span>
                  <span className="font-sans font-semibold text-luxury-charcoal dark:text-luxury-beige-50">{project.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-luxury-gold-500/10 text-luxury-gold-600 dark:text-luxury-gold-300">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-luxury-charcoal/50 dark:text-luxury-beige-300/50 block font-light leading-none mb-1">METRICS</span>
                  <span className="font-sans font-semibold text-luxury-charcoal dark:text-luxury-beige-50">{project.size}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-luxury-gold-500/10 text-luxury-gold-600 dark:text-luxury-gold-300">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-luxury-charcoal/50 dark:text-luxury-beige-300/50 block font-light leading-none mb-1">COMPLETION YEAR</span>
                  <span className="font-sans font-semibold text-luxury-charcoal dark:text-luxury-beige-50">{project.year}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-luxury-gold-500/10 text-luxury-gold-600 dark:text-luxury-gold-300">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-luxury-charcoal/50 dark:text-luxury-beige-300/50 block font-light leading-none mb-1">STYLING TONE</span>
                  <span className="font-sans font-semibold text-luxury-charcoal dark:text-luxury-beige-50">{project.style}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Narrative Structure */}
          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left Narrative Block */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs uppercase font-display font-bold tracking-widest text-luxury-gold-600 dark:text-luxury-gold-400 mb-2">
                  Client Brief & Functional Goals
                </h4>
                <p className="text-sm text-luxury-charcoal/75 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                  {project.clientGoal}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-display font-bold tracking-widest text-luxury-gold-600 dark:text-luxury-gold-400 mb-2">
                  Creative & Material Concept
                </h4>
                <p className="text-sm text-luxury-charcoal/75 dark:text-luxury-beige-300 font-sans font-light leading-relaxed">
                  {project.conceptText}
                </p>
              </div>
            </div>

            {/* Right Material Sourcing Sheet */}
            <div className="md:col-span-5 bg-luxury-beige-50 dark:bg-luxury-charcoal-light rounded-xs border border-luxury-beige-300/30 dark:border-luxury-charcoal-light/60 p-5 md:p-6 space-y-4 h-fit">
              <h4 className="text-xs uppercase font-display font-bold tracking-widest text-luxury-gold-600 dark:text-luxury-gold-400">
                Sourced Luxury Elements
              </h4>
              <p className="text-[11px] font-sans text-luxury-charcoal/50 dark:text-luxury-beige-300/50 font-light italic leading-relaxed">
                Procured directly from our private network of European design guilds and Italian stone quarries.
              </p>
              <div className="space-y-2.5 pt-2">
                {project.primaryMaterials.map((mat, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2.5 text-xs">
                    <CheckCircle className="w-4 h-4 text-luxury-gold-500 shrink-0" />
                    <span className="font-sans text-luxury-charcoal dark:text-luxury-beige-100 font-medium">
                      {mat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sourced Gallery images segment */}
          <div className="px-6 md:px-10 pb-10 space-y-5">
            <h4 className="text-xs uppercase font-display font-bold tracking-widest text-luxury-gold-600 dark:text-luxury-gold-400">
              Photographic Case Folio
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="project-inner-gallery">
              {project.gallery.map((img, imgIdx) => (
                <div key={imgIdx} className="aspect-square bg-luxury-beige-300 rounded-xs overflow-hidden relative group">
                  <img
                    src={img}
                    alt={`${project.title} - angle ${imgIdx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-luxury-charcoal/95 p-1.5 rounded-full border border-luxury-beige-300/50 text-luxury-charcoal/60 dark:text-luxury-beige-300 hover:text-luxury-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer sticky inquiry bar */}
        <div className="bg-luxury-beige-200/50 dark:bg-luxury-charcoal-light/70 border-t border-luxury-beige-300/30 dark:border-luxury-charcoal/60 p-4 md:px-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <span className="text-xs text-luxury-charcoal/60 dark:text-luxury-beige-300 font-sans font-light">
            Love this aesthetic? Partner with Atelier for similar luxury excellence.
          </span>
          <button
            onClick={() => {
              onInquire(project.category);
              onClose();
            }}
            id="btn-modal-inquire"
            className="w-full sm:w-auto bg-luxury-charcoal dark:bg-luxury-beige-50 hover:bg-luxury-gold-600 dark:hover:bg-luxury-beige-200 text-white dark:text-luxury-charcoal py-2 px-8 rounded-xs text-xs font-display font-semibold uppercase tracking-widest transition-colors cursor-pointer"
          >
            Inquire About This Style
          </button>
        </div>
      </motion.div>
    </div>
  );
}
