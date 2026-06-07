import { Project, Service, Testimonial, BlogPost, ProcessStep, Award, QuizQuestion, StyleResult } from "./types";

export const projectsData: Project[] = [
  {
    id: "modern-penthouse",
    title: "Modern Luxury Penthouse",
    category: "Residential Interior Design",
    size: "4,200 sq ft",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    location: "Manhattan, NY",
    style: "Minimalist Luxury",
    clientGoal: "Elevate high-rise living with an open, gallery-like layout framing the city skyline while retaining an intimate, warm dwelling atmosphere.",
    conceptText: "Using double-height structural glass, we deployed floating Calacatta marble elements, custom-tufted ivory boucle seating, and matte-gold recessed fixtures that merge with the evening skyline. The transition of natural daylight is softened by floating drapery.",
    primaryMaterials: ["Calacatta Marble", "Brushed Satin Gold", "Smoked Oak Wood", "Bouclé Textures"],
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "european-villa",
    title: "Classical European Villa",
    category: "Residential Interior Design",
    size: "8,500 sq ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    location: "Florence, Italy",
    style: "Timeless Classical",
    clientGoal: "Restore a historic countryside villa by weaving structural classical carvings with high-end modern convenience.",
    conceptText: "We revived century-old ceiling plaster works and integrated them with luxury Italian furnishings. Generous daylight highlights the subtle gold leaf moldings, rich velvet drapes, and original refinished herringbone walnut floorings.",
    primaryMaterials: ["Italian Travertine", "Antique Patina Brass", "Herringbone Walnut", "Royal Velvet"],
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "executive-office",
    title: "Executive Corporate Office",
    category: "Commercial Interior Design",
    size: "12,000 sq ft",
    year: "2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    location: "Zurich, Switzerland",
    style: "Sleek Corporate Luxury",
    clientGoal: "A prestigious financial headquarters reflecting precision, high-end hospitality, and quiet-luxury collaboration zones.",
    conceptText: "We departed from standard cubicles, formulating acoustic felt-wrapped panelling, pristine marble reception desks, shadow-line LED track systems, and walnut-clad discussion suites overlooking Zurich's landscape.",
    primaryMaterials: ["Acoustic Felt", "Muted Walnut Wood", "Brushed Anodized Aluminum", "Linear Glass"],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "boutique-hotel",
    title: "Boutique Hotel Suite",
    category: "Hospitality Design",
    size: "850 sq ft / suite",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
    location: "Paris, France",
    style: "Parisian Chic / Art Deco",
    clientGoal: "Formulate an enchanting custom-tailored environment for global travelers seeking boutique exclusivity, soft textures, and immersive lighting.",
    conceptText: "Designed around a majestic central canopy headboard with integrated brass sconces, this suite utilizes custom parquetry, velvet panel partitions, and soft architectural alcoves to make clients feel pampered.",
    primaryMaterials: ["Satin Brass", "Tassel Velvets", "Nero Marquina Marble", "Custom Silk Wallpapers"],
    gallery: [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "luxury-restaurant",
    title: "Aura Dining Room",
    category: "Hospitality Design",
    size: "6,800 sq ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    location: "London, UK",
    style: "Dramatic Modern Classic",
    clientGoal: "Establish a seductive, highly styled fine dining spot capturing gold reflections and mysterious textures.",
    conceptText: "Constructed with bespoke curved fluted marble columns, velvet booths centered around warm glowing crystalline lamps, and floating metal-mesh ceilings reflecting soft golden sparkles.",
    primaryMaterials: ["Fluted Estremoz Marble", "Oxidized Copper", "Curved Amber Glass", "Black Velvet"],
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "contemporary-residence",
    title: "Contemporary Lakeside Haven",
    category: "Residential Interior Design",
    size: "6,100 sq ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    location: "Geneva, Switzerland",
    style: "Warm Organic Minimalist",
    clientGoal: "Incorporate outdoor natural serenity inside, using local materials with large architectural skylights.",
    conceptText: "We arranged structural raw concrete walls offset by warm natural cedar slats, massive seamless sliding windows, water ripples reflections, and low-slung, incredibly cozy bespoke cashmere furnishings.",
    primaryMaterials: ["Raw Architectonic Concrete", "Cedar Slatwork", "Cashmere Fabrics", "Brushed Limestone"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600&auto=format&fit=crop"
    ]
  }
];

export const servicesData: Service[] = [
  {
    id: "residential",
    title: "Residential Interior Design",
    description: "Luxury villas, penthouses, and private estates tailored to your lifstyle.",
    iconName: "Home",
    longDetail: "Whether a custom modern penthouse in Manhattan or a historic estate in Florence, we design with ultimate sensory satisfaction. Combining rich finishes and ergonomic mastery so your private sanctuary is exquisite and completely customized.",
    features: ["Bespoke Residential Layouts", "Custom millwork & luxury cabinetry", "Smart home integrations", "Curated high-end furnishings"]
  },
  {
    id: "commercial",
    title: "Commercial Interior Design",
    description: "Prestigious corporate offices, retail spaces, and boutique showrooms.",
    iconName: "Briefcase",
    longDetail: "Injecting brand authority and quiet prestige into corporate settings. We build collaborative workscapes, refined meeting halls, and elegant showrooms that inspire employees while making an impactful corporate statement.",
    features: ["Acoustically treated private suites", "Signature brand lobbies", "Ergonomic executive boardrooms", "Dynamic spatial lighting flows"]
  },
  {
    id: "hospitality",
    title: "Hospitality Design",
    description: "High-end hotels, resorts, fine dining restaurants, and cozy boutique lounges.",
    iconName: "Hotel",
    longDetail: "For clients who seek to deliver an unforgettable guest experience. We choreograph pathing, mood elevations, custom visual elements, and warm light structures that entice patrons and stand out as architectural triumphs.",
    features: ["Intelligent crowd flow mapping", "Signature check-in desks", "Atmospheric dining lounges", "Bespoke hotel suite configurations"]
  },
  {
    id: "space-planning",
    title: "Space Planning",
    description: "Functional layouts, architectural balance, and spatial harmony optimization.",
    iconName: "LayoutGrid",
    longDetail: "We look beyond mere furniture replacement: we rethink walls, physical sightlines, and circulation paths to achieve classical proportions, maximize views, and remove awkward corners.",
    features: ["High-precision CAD drafts", "Sightline and viewport control", "Circulation flow optimization", "Multi-scenario layout planning"]
  },
  {
    id: "furniture-decor",
    title: "Furniture & Decor Selection",
    description: "Curation and sourcing of exclusive European furniture, art, and custom accents.",
    iconName: "Sparkles",
    longDetail: "Connecting you with prestigious craft shops globally. We source limited-edition luxury furniture, commission custom marble/metal sculptures, select exquisite fine art, and curate gorgeous upholstery fabrics.",
    features: ["Exclusive international design gallery network", "Textile and fabric swatch pairing", "Bespoke furniture crafting design", "On-site final curation & styling"]
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    description: "Precision updates and complete spatial restorations of luxury properties.",
    iconName: "Hammer",
    longDetail: "Restoring soul and elegance into aged architectural layouts. We preserve original timber, historical plaster moldings, and brick works while upgrading infrastructure to meet the highest contemporary living standards.",
    features: ["Historical plaster Restoration", "Structural load coordination", "Modern heating/cooling integration", "Premium luxury finish swaps"]
  },
  {
    id: "visualization",
    title: "3D Visualization",
    description: "Photorealistic digital renderings, spatial lighting studies, and virtual tours.",
    iconName: "MonitorCheck",
    longDetail: "Providing absolute clarity before construction begins. Our CGI artists create near-indistinguishable photorealistic 3D renders showcasing accurate materials, textures, shadows, and natural daylight cycles.",
    features: ["Photorealistic daylight simulation renders", "Material texture sample virtual mapping", "3D immersive walkthrough videos", "Scale & depth VR studies"]
  },
  {
    id: "turnkey",
    title: "Turnkey Project Execution",
    description: "Comprehensive end-to-end management, procurement, and seamless delivery.",
    iconName: "ShieldCheck",
    longDetail: "A singular point of accountability. We manage general contractors, import logistics, artisan schedules, and site inspections, delivering a polished, immaculate, styled move-in-ready property.",
    features: ["Complete contractor supervision", "Premium material procurement", "Strict budget & timeline tracking", "White-glove deep cleaning & final layout handover"]
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Appraisal",
    description: "Understanding your vision, functional aspirations, and architectural context.",
    longDescription: "We host an immersive deep-dive interview at your estate or our gallery, evaluating your stylistic preferences, daily routines, structural boundaries, budget parameters, and landscape orientation.",
    keyOutputs: ["Design program document", "Project boundary mapping", "Precedent imagery reference boards", "Preliminary timeline estimation"]
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Fleshing out raw design ideas, mood grids, and spatial themes.",
    longDescription: "We assemble initial mood grids expressing fabric swatches, marble profiles, raw wood options, and preliminary spatial layouts, offering alternative directions (e.g. Warm Minimalist vs. Classic Art Deco).",
    keyOutputs: ["Bespoke stylistic mood boards", "Initial floorplan options", "Signature material palettes", "3D sketch layout suggestions"]
  },
  {
    number: "03",
    title: "Detailed Design & Refinement",
    description: "Drafting structural floor plans, custom millwork, and lighting layouts.",
    longDescription: "Once a theme is finalized, we draft elevations, electrical layouts, plumbing schedules, custom cabinetry dimensions, and technical material spec books detailing exactly how every trim and joint connects.",
    keyOutputs: ["Full architectural drawing sets", "Lighting and switching grids", "Custom millwork CAD details", "Master fixture and appliance schedules"]
  },
  {
    number: "04",
    title: "CGI Photorealistic Visualization",
    description: "Creating virtual models with realistic natural light and high-fidelity textures.",
    longDescription: "Our specialized CGI unit models the entire environment, rendering accurate textures, natural shadows at golden hour, and artificial lighting arrays, ensuring you feel the exact vibe of your home before breaking ground.",
    keyOutputs: ["High-definition 3D camera renders", "Interactive virtual panorama walkthroughs", "Physical design book containing swatches", "Daylight exposure visual studies"]
  },
  {
    number: "05",
    title: "Execution & Procurement",
    description: "Import coordination, general contractor oversight, and artisan management.",
    longDescription: "We handle material procurement directly from European quarries and design houses, manage shipping logistics, perform on-site checkups with construction engineers, and resolve real-time site adjustments.",
    keyOutputs: ["Procurement logs and logistics boards", "Weekly construction progress reviews", "On-site quality check certifications", "Artisan specialist scheduling coordination"]
  },
  {
    number: "06",
    title: "The Styling & Final Reveal",
    description: "White-glove deep cleaning, custom furniture placement, and artistic curation.",
    longDescription: "We oversee furniture placement, arrange custom art pieces, style accessories, program custom home-automation scenes, and hand over the key along with a bespoke physical leather portfolio of your design origin story.",
    keyOutputs: ["Hand-styled residential space ready for living", "Project care and maintenance encyclopedia", "Original certified material warranties", "Celebratory champagne private walkthrough key-handover"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Genevieve Montgomery",
    position: "Founder, Capital Asset Group",
    rating: 5,
    text: "Atelier Interiors took our sprawling lake house and brought out an incredible classical poetry. The travertine fireplace column is a literal piece of art. Their level of spacing, care, and quiet sophistication is unmatched.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    projectAssociated: "Contemporary Lakeside Haven"
  },
  {
    id: "testimonial-2",
    name: "Sir Alistair Sterling",
    position: "Hotelier & Developer",
    rating: 5,
    text: "For our boutique Parisian suites, Atelier interiors delivered a breathtaking experience. The metalwork, integrated lighting, and dark marble entries left our guests in absolute awe. True global masters of elegant space.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    projectAssociated: "Boutique Hotel Suite"
  },
  {
    id: "testimonial-3",
    name: "Dr. Elena Rostova",
    position: "Private Art Collector",
    rating: 5,
    text: "The Manhattan penthouse they designed is so seamless. It respects both quiet sanctuary and bold visual presentation. Every fabric is exquisite, and the layout emphasizes my sculpture collection with immense elegance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    projectAssociated: "Modern Luxury Penthouse"
  }
];

export const awardsData: Award[] = [
  {
    id: "award-1",
    title: "Design Excellence Award (Gold Category)",
    organization: "International Architecture & Design Union",
    year: "2025",
    category: "Residential Architecture & Interior Luxury"
  },
  {
    id: "award-2",
    title: "Best Luxury Interior Studio (North America)",
    organization: "Global Estate & Hospitality Federation",
    year: "2024",
    category: "Full-Service Quiet Luxury Craftsmanship"
  },
  {
    id: "award-3",
    title: "Architecture & Design Recognition Award",
    organization: "European Design Biennial",
    year: "2024",
    category: "Innovative restoration & Classic Integration"
  },
  {
    id: "award-4",
    title: "International Design Awards (Finalist & Jury Pick)",
    organization: "World Spatial Design Association",
    year: "2023",
    category: "Boutique Hospitality & Restaurant Atmospheres"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "trends-2026",
    title: "Quiet Luxury & Natural Monoliths: Inside 2026 Design Philosophy",
    category: "Design Trends",
    readTime: "6 min read",
    date: "May 14, 2026",
    summary: "As modern life speeds up, luxury architectures are responding with heavy, monolithic stone surfaces, soft custom plaster walls, and a return to slow handmade craftsmanship.",
    content: "We are witnessing a profound structural shift away from cold, high-gloss metals and hyper-minimalist clinical spaces. The new era is built on 'quiet luxury' — environments that don't need to shout to indicate value. This manifests in raw unpolished limestone kitchen islands, textured sand-blasted oak planks, and wall finishes that carry tiny organic imperfections which catch the morning light with deep warmth. This editorial dives into sourcing monolithic elements, carving custom bathrooms out of integrated stone blocks, and choosing fabrics that invite comfortable organic nesting.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Jean-Louis Dupont",
      role: "Lead Creative Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150"
    }
  },
  {
    id: "material-selection",
    title: "The Alchemist's Board: Sourcing Luxury Materials Globally",
    category: "Material Selection",
    readTime: "8 min read",
    date: "April 22, 2026",
    summary: "How we procure the most exquisite marbles from private Italian quarries, satin brass accents, and custom hand-loomed textiles.",
    content: "Every material has its own weight, temperature, and cultural heritage. At Atelier, our process begins at the physical source. From walking the dusty Travertine pits in Siena to inspect natural cavities, to choosing custom flax threads in Belgium, we believe materials dictate the soul of a layout. Discover our principles for balancing highly active, bold stone veins (like Arabescato) with silent, solid matte backdrops like lime wash plaster and raw linen drapery.",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Marcus Aurelius Vance",
      role: "Head of Procurement",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
    }
  },
  {
    id: "classical-vs-modern",
    title: "The Golden Ratio: Merging Classical Architecture with Modern Functionality",
    category: "Interior Philosophy",
    readTime: "5 min read",
    date: "March 11, 2026",
    summary: "Can historic boiserie molding coexist with minimalist custom iron frames? Crafting the perfect transitional home.",
    content: "The timeless charm of classical European apartments is rooted in strict proportion, high ceilings, decorative trim panels, and parquet de Versailles wood floors. However, modern living demands open flows, high-performance cooking spaces, and hidden smart devices. Achieving high-end transitional design is an exercise in restraint. By preserving ornate carvings on walls and painting they in a matte, chalky white, and then dropping in charcoal black iron framing doors or simple velvet couches, you establish a delightful aesthetic clash that feels deeply intellectual and exceptionally fresh.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Elena Petrovich",
      role: "Principal Architectural Consultant",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150"
    }
  },
  {
    id: "spatial-flow",
    title: "The Architecture of Silence: Principles of Spatial Organization",
    category: "Space Planning",
    readTime: "7 min read",
    date: "February 04, 2026",
    summary: "How intentional corridors, vistas, and clear physical sightlines formulate peace in high-density mansions.",
    content: "A truly luxurious home is one where silence lives. We do not mean acoustic silence alone, but visual silence. In spatial planning, this is obtained through 'vistas' - creating structured sightlines that culminate in a beautiful view, a custom sculpture, or an arched entry rather than a blank closet or a toilet. This guide goes through optimizing flow, hiding structural columns, and utilizing transitional vestibules so transitioning between active dining zones and private bedroom spaces feels like a serene, ritualistic voyage.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Sarah Jenkins",
      role: "Master Space Planner",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150"
    }
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When entering a room, which sensory elements draws you first?",
    options: [
      { text: "Grand ornate ceiling panels, marble fireplaces, and heavy hand-woven silk drapery", style: "classical", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400" },
      { text: "Absolute sweeping open space, natural cedar wood slats, and low-slung neutral fabrics", style: "minimalist", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400" },
      { text: "Rich contrast, velvet textured fabrics, bold geometric shapes, and brass trim accents", style: "art-deco", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=400" },
      { text: "Sophisticated art on chalky plaster walls, sleek custom iron window frames, and comfortable tailored seating", style: "contemporary", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400" }
    ]
  },
  {
    id: 2,
    question: "Select your preferred material centerpiece:",
    options: [
      { text: "Polished Nero Marquina dark marble with striking white lighting veins", style: "art-deco", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400" },
      { text: "Italian Travertine with natural textured cavities and matte ivory tone", style: "minimalist", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=400" },
      { text: "Polished Calacatta marble with gold veins and antiqued satin brass", style: "classical", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=400" },
      { text: "Matte-finished raw rift-sawn white oak and dark powder-coated steel", style: "contemporary", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400" }
    ]
  },
  {
    id: 3,
    question: "Choose your primary lighting luxury:",
    options: [
      { text: "Integrated indirect warm light niches, soft cove LEDs, and absolute natural sunshine", style: "minimalist", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400" },
      { text: "Bespoke alabaster stone pendant fixtures and delicate hand-finished brass lamps", style: "classical", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=400" },
      { text: "Glamorous bespoke geometric crystal chandeliers emitting prismatic reflections", style: "art-deco", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400" },
      { text: "Architectural tracking spot systems, dimmable dark fixtures, and sleek ambient rings", style: "contemporary", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400" }
    ]
  }
];

export const styleResults: Record<string, StyleResult> = {
  classical: {
    title: "Classical European Elegance",
    description: "Your design language is deeply rooted in historic symmetry, luxurious materials, and intricate decorative moldings. You appreciate the proportioned rhythm of European manors, rich drapery, gold patina details, and custom parquetry.",
    materials: ["Italian Travertine", "Gold Leafing & Ornate Brass", "Fluted Wall Panellings", "Premium Silk & Velvet"],
    features: ["Perfect axial layout symmetry", "Historical restoration & plaster moldings", "Grand central focal points", "Curated French and Italian furniture accents"],
    colors: ["Warm Ivory", "Antique Gold", "Muted Olive", "Deep Burgundy"],
    matchingProject: "European Villa Restorations"
  },
  minimalist: {
    title: "Quiet Organic Minimalism",
    description: "You seek sanctuary, absolute visual restraint, and spatial clarity. Your aesthetic is motivated by raw natural beauty - high-end stone monoliths, clean shadow gaps, textured plaster walls, and warm cedar slats that offer visual and mental calm.",
    materials: ["Brushed Limestone", "Unfinished Cedar Wood", "Floating Terrazzo Plates", "Nubby Bouclé & Cashmere"],
    features: ["Intentionally hidden storage structures", "Organic asymmetry & raw material finishes", "Expansive open-plan living", "Framing of natural vistas and daylight projections"],
    colors: ["Bone White", "Warm Cream / Ecru", "Muted Stone Grey", "Soft Sand Oak"],
    matchingProject: "Contemporary Lakeside Haven Design"
  },
  contemporary: {
    title: "Refined Contemporary Gallery",
    description: "You desire a highly curated, artistic, and gallery-like home. Your style features sleek custom steel outlines, high-end design furniture classics, and dramatic lighting tracks that highlight bespoke details.",
    materials: ["Calacatta Marble with Bold Veins", "Sleek Matte Black Steel", "Light Oak Planks", "Hand-Tufted Premium Wools"],
    features: ["High-contrast geometric features", "Suspended architectural elements", "Generous wall expanses for modern art", "Sophisticated dimming & ambient setups"],
    colors: ["Charcoal Black", "Inky Slate", "Chalk White", "Sophisticated Cognac Leather"],
    matchingProject: "Modern Luxury Penthouse Living"
  },
  "art-deco": {
    title: "Dramatic Luxury & Art Deco Glamour",
    description: "You adore rich sensory indulgence, bold geometric luxury, polished metallic reflections, and theatrical styling. Your home is a stage of high-drama details, exotic polished wood grain, and warm golden twinkles.",
    materials: ["Nero Marquina Black Marble", "Polished Satin Brass Mesh", "Exotic Macassar Walnut", "Rich Velvet & Satins"],
    features: ["Seductive curved furniture profiles", "Serrated and scalloped material textures", "Conspicuous golden and crystal lighting", "Deep, glamorous cozy niches"],
    colors: ["Charcoal Black", "Imperial Gold", "Emerald Teal", "Midnight Indigo"],
    matchingProject: "Boutique Hotel & Signature Lounge Spaces"
  }
};
