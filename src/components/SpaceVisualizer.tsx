import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Sunset, Sunrise, Layers, Activity, Star } from "lucide-react";

interface MaterialCombination {
  id: string;
  name: string;
  lightLevel: string;
  warmth: number;
  contrast: number;
  exclusivity: string;
  description: string;
  imageUrl: string;
}

export default function SpaceVisualizer() {
  const [lighting, setLighting] = useState<"morning" | "afternoon" | "dusk">("afternoon");
  const [stone, setStone] = useState<"travertine" | "calacatta" | "nero">("travertine");
  const [wood, setWood] = useState<"oak" | "walnut">("walnut");

  // Material combinations mapping
  const combinations: Record<string, MaterialCombination> = {
    "travertine-walnut": {
      id: "comb-1",
      name: "The Tuscan Sanctuary",
      lightLevel: "3200K Ambient Warmth",
      warmth: 92,
      contrast: 65,
      exclusivity: "AAA Premium Reserves",
      description: "A soft, deeply calming combination blending natural Travertine textures with heavy, elegant Italian Walnut. Emphasizes earth tones and sensory grounding.",
      imageUrl: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800"
    },
    "travertine-oak": {
      id: "comb-2",
      name: "The Nordic Horizon",
      lightLevel: "3600K Clean Organic",
      warmth: 85,
      contrast: 40,
      exclusivity: "Sustainable Premium Sourced",
      description: "A bright, airy, Japandi-influenced composition. Ideal for double-height coastal homes where white light creates expansive horizons.",
      imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800"
    },
    "calacatta-walnut": {
      id: "comb-3",
      name: "The Milanese Penthouse",
      lightLevel: "3000K Glamour Focus",
      warmth: 78,
      contrast: 85,
      exclusivity: "Carrara Artisanal Select",
      description: "High-contrast dynamic luxury. The bold grey veins of Calacatta Marble clash beautifully with deep, dark European Walnut planks.",
      imageUrl: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800"
    },
    "calacatta-oak": {
      id: "comb-4",
      name: "The Contemporary Gallery",
      lightLevel: "4000K Daylight White",
      warmth: 70,
      contrast: 70,
      exclusivity: "Carrara Classic Select",
      description: "Sleek, high-brightness gallery atmosphere. Accentuates minimalist sculptures, contemporary oil paintings, and architectural crispness.",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800"
    },
    "nero-walnut": {
      id: "comb-5",
      name: "The Imperial Lounge",
      lightLevel: "2700K Soft Ember Glow",
      warmth: 88,
      contrast: 95,
      exclusivity: "Limited Nero Reserves",
      description: "Deep, mysterious, masculine elegance. High contrasting white lines of Noir Marquina Marble sit against luxurious vintage dark Walnut.",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800"
    },
    "nero-oak": {
      id: "comb-6",
      name: "The Sculptural Mono",
      lightLevel: "3100K Modern Contrast",
      warmth: 68,
      contrast: 90,
      exclusivity: "Limited Nero Reserves",
      description: "A graphic design study. The absolute black of marble overlaps against light white-washed Oak, framing raw architectural bones.",
      imageUrl: "https://images.unsplash.com/photo-1600202869663-fc0efd571155?q=80&w=800"
    }
  };

  const activeKey = `${stone}-${wood}`;
  const material = combinations[activeKey] || combinations["travertine-walnut"];

  // Lighting overlay styling
  const lightingOverlays = {
    morning: "bg-amber-100/10 mix-blend-soft-light backdrop-saturate-[1.1] backdrop-brightness-[1.05]",
    afternoon: "bg-sky-100/5 mix-blend-lighten backdrop-brightness-[1.02]",
    dusk: "bg-orange-950/20 mix-blend-color-burn backdrop-brightness-[0.9] backdrop-contrast-[1.05] backdrop-saturate-[1.12]"
  };

  return (
    <div id="material-visualizer" className="bg-luxury-beige-100 dark:bg-luxury-charcoal-light rounded-sm border border-luxury-beige-300/65 dark:border-luxury-charcoal/80 p-6 md:p-10 shadow-sm max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
        
        {/* Left Interactive Control Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 md:space-y-8" id="visualizer-controls">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-luxury-gold-500 text-xs font-display font-semibold tracking-widest uppercase">
              <Layers className="w-3.5 h-3.5" />
              Creative Studio Workshop
            </div>
            <h3 className="font-serif text-3xl text-luxury-charcoal dark:text-luxury-beige-50 leading-tight">
              Interactive Space Alchemy
            </h3>
            <p className="text-sm text-luxury-charcoal/70 dark:text-luxury-beige-300 mt-2 font-sans font-light leading-relaxed">
              Curate and preview how natural elements of stone, timber floorboard grains, and natural daylight orientation interact inside a premium custom salon.
            </p>
          </div>

          {/* Sub Panels */}
          <div className="space-y-5">
            {/* 1. Daylight simulation */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-semibold tracking-wider text-luxury-gold-600 dark:text-luxury-gold-400 block">
                1. Natural Light Cycle Simulator
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "morning", name: "Dawn Glow", icon: Sunrise },
                  { id: "afternoon", name: "High Sun", icon: Sun },
                  { id: "dusk", name: "Golden Hour", icon: Sunset }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      id={`btn-light-${item.id}`}
                      onClick={() => setLighting(item.id as any)}
                      className={`flex flex-col items-center justify-center py-2.5 rounded-xs border text-xs gap-1.5 transition-all outline-hidden cursor-pointer ${
                        lighting === item.id
                          ? "bg-luxury-charcoal dark:bg-luxury-beige-100 text-luxury-beige-50 dark:text-luxury-charcoal border-luxury-charcoal dark:border-luxury-beige-100 shadow-xs"
                          : "border-luxury-beige-300 dark:border-luxury-charcoal text-luxury-charcoal/70 dark:text-luxury-beige-300 hover:border-luxury-gold-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Stone Surface */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-semibold tracking-wider text-luxury-gold-600 dark:text-luxury-gold-400 block">
                2. Signature Stone Finish
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "travertine", name: "Travertine", shortDesc: "Ivory Cavity" },
                  { id: "calacatta", name: "Calacatta", shortDesc: "Grey Vein" },
                  { id: "nero", name: "Marquina", shortDesc: "Noir Bold" }
                ].map((item) => (
                  <button
                    key={item.id}
                    id={`btn-stone-${item.id}`}
                    onClick={() => setStone(item.id as any)}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xs border text-xs text-center transition-all cursor-pointer ${
                      stone === item.id
                        ? "bg-luxury-charcoal dark:bg-luxury-beige-100 text-luxury-beige-50 dark:text-luxury-charcoal border-luxury-charcoal dark:border-luxury-beige-100 shadow-xs"
                        : "border-luxury-beige-300 dark:border-luxury-charcoal text-luxury-charcoal/70 dark:text-luxury-beige-300 hover:border-luxury-gold-400"
                    }`}
                  >
                    <span className="font-semibold block">{item.name}</span>
                    <span className="text-[10px] text-luxury-charcoal/50 dark:text-luxury-beige-300/50 leading-none mt-0.5">{item.shortDesc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Wood selection */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-semibold tracking-wider text-luxury-gold-600 dark:text-luxury-gold-400 block">
                3. European Wood Grain
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "oak", name: "White-Wash Oak", subtitle: "Light Plank" },
                  { id: "walnut", name: "Herringbone Walnut", subtitle: "Dark Italian Wood" }
                ].map((item) => (
                  <button
                    key={item.id}
                    id={`btn-wood-${item.id}`}
                    onClick={() => setWood(item.id as any)}
                    className={`flex flex-col items-center justify-center p-2 rounded-xs border text-xs text-center transition-all cursor-pointer ${
                      wood === item.id
                        ? "bg-luxury-charcoal dark:bg-luxury-beige-100 text-luxury-beige-50 dark:text-luxury-charcoal border-luxury-charcoal dark:border-luxury-beige-100 shadow-xs"
                        : "border-luxury-beige-300 dark:border-luxury-charcoal text-luxury-charcoal/70 dark:text-luxury-beige-300 hover:border-luxury-gold-400"
                    }`}
                  >
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-[10px] text-luxury-charcoal/50 dark:text-luxury-beige-300/50 mt-0.5 font-light">{item.subtitle}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Specs indicators */}
          <div className="border-t border-luxury-beige-300/40 dark:border-luxury-charcoal/60 pt-4 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-luxury-charcoal/60 dark:text-luxury-beige-300 font-sans tracking-tight flex items-center gap-1">
                <Sun className="w-3.5 h-3.5 text-luxury-gold-500" />
                Atmosphere warmth
              </span>
              <div className="flex items-center gap-1.5 font-display font-medium text-luxury-charcoal dark:text-luxury-beige-50">
                <span className="w-16 bg-luxury-beige-300 dark:bg-luxury-charcoal h-1.5 rounded-full overflow-hidden block">
                  <span className="bg-luxury-gold-500 h-full block" style={{ width: `${material.warmth}%` }}></span>
                </span>
                <span>{material.warmth}%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span className="text-luxury-charcoal/60 dark:text-luxury-beige-300 font-sans tracking-tight flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-luxury-gold-500" />
                Material Contrast
              </span>
              <div className="flex items-center gap-1.5 font-display font-medium text-luxury-charcoal dark:text-luxury-beige-50">
                <span className="w-16 bg-luxury-beige-300 dark:bg-luxury-charcoal h-1.5 rounded-full overflow-hidden block">
                  <span className="bg-luxury-gold-500 h-full block" style={{ width: `${material.contrast}%` }}></span>
                </span>
                <span>{material.contrast}%</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-luxury-charcoal/60 dark:text-luxury-beige-300 font-sans tracking-tight flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-luxury-gold-500" />
                Exclusivity Tier
              </span>
              <span className="font-display font-semibold text-[10px] tracking-wider uppercase text-luxury-gold-600 dark:text-luxury-gold-400">
                {material.exclusivity}
              </span>
            </div>
          </div>
        </div>

        {/* Right Active Visualizer Showcase Frame */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-luxury-beige-50 dark:bg-luxury-charcoal rounded-xs border border-luxury-beige-300/40 dark:border-luxury-charcoal/80 overflow-hidden relative group p-1" id="visualizer-frame">
          
          <div className="relative aspect-video rounded-xs overflow-hidden bg-luxury-beige-200 dark:bg-luxury-charcoal-light flex-1 min-h-[300px]">
            {/* Material image background */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`${stone}-${wood}`}
                src={material.imageUrl}
                alt={material.name}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full object-cover transition-all"
              />
            </AnimatePresence>

            {/* Simulated interactive Lighting color-burn/saturate layers */}
            <div className={`absolute inset-0 pointer-events-none transition-all duration-[750ms] ${lightingOverlays[lighting]}`}></div>
            
            {/* Golden ambient corner beam lighting */}
            <div className={`absolute inset-0 pointer-events-none bg-radial from-transparent to-black/35 ${
              lighting === "dusk" ? "opacity-80" : "opacity-40"
            }`}></div>

            {/* floating active state stamp badge */}
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-luxury-charcoal/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-luxury-beige-300/40 dark:border-luxury-charcoal-light/60 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-luxury-gold-500"></span>
              </span>
              <span className="font-display font-semibold text-[10px] tracking-widest uppercase text-luxury-charcoal dark:text-luxury-beige-50">
                {lighting.toUpperCase()} ENVIRONMENT
              </span>
            </div>
          </div>

          {/* Active Archetype metadata */}
          <div className="p-4 md:p-6 bg-luxury-beige-100 dark:bg-luxury-charcoal-light border-t border-luxury-beige-200/50 dark:border-luxury-charcoal/40">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-display font-semibold text-luxury-gold-500 tracking-wider uppercase block">
                  Active Combination Archetype
                </span>
                <h4 className="font-serif text-xl text-luxury-charcoal dark:text-luxury-beige-50 mt-0.5">
                  {material.name}
                </h4>
              </div>
              <div className="text-right text-[11px] font-mono text-luxury-charcoal/50 dark:text-luxury-beige-300/50 bg-luxury-beige-200/40 dark:bg-luxury-charcoal px-2 py-1 rounded-sm">
                Spec {stone.slice(0,3).toUpperCase()}-{wood.slice(0,3).toUpperCase()}
              </div>
            </div>
            <p className="text-xs text-luxury-charcoal/65 dark:text-luxury-beige-300 mt-2 font-sans font-light leading-relaxed">
              {material.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
