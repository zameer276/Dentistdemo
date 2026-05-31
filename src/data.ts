import { Service, Review, FAQItem, BlogArticle, GalleryItem } from "./types";

export const SERVICES: Service[] = [
  {
    id: "checkup",
    title: "Dental Checkups",
    tagline: "Preventive protection for your teeth and gums",
    shortDescription: "Comprehensive exams, low-radiation digital dental hygiene scans, and full assessment to spot and address issues early.",
    longDescription: "Our signature diagnostic visit starts with high-resolution digital X-rays to check underneath the gum line, followed by an intense structural review of your jaw joints, screen check for oral pathology, and detailed checking of each tooth. Dr. Sarah Johnson leads each checkup with an eye for early detection, sparing you painful and costly future interventions.",
    duration: "45 mins",
    priceEstimate: "$80 - $150",
    iconName: "Stethoscope",
    category: "preventive"
  },
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    tagline: "Professional deep polish and plaque removal",
    shortDescription: "Scalers and ultrasonic cleanings that eliminate tough tartar, prevent periodontal infections, and leave teeth glowing.",
    longDescription: "Utilizing advanced ultrasonic scaling instruments, our dental hygienists gently blast away calcified tartar buildup (calculus) that brushing cannot touch. This is followed by a high-grade polish to delete extrinsic tea and coffee stains, ending with an informative personal brushing coach and optionally a protective, sweet-tasting fluoride shield.",
    duration: "60 mins",
    priceEstimate: "$100 - $180",
    iconName: "Sparkles",
    category: "preventive"
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    tagline: "Brighten your smile by up to 8 shades in one visit",
    shortDescription: "Safe, medical-grade clinic cosmetic bleaching with immediate results that are gentle on your gums and enamel.",
    longDescription: "Get the glowing, radiant look you've wanted. We utilize the award-winning Philips Zoom Whitening system combined with custom LED acceleration lamps. Dr. Sarah Johnson isolates sensitive gum tissue carefully before applying the gentle peroxide gel, achieving maximum brightness in 45-60 minutes without triggering sensitivity.",
    duration: "60 mins",
    priceEstimate: "$250 - $499",
    iconName: "Sun",
    category: "cosmetic"
  },
  {
    id: "implants",
    title: "Dental Implants",
    tagline: "Permanent, natural-looking tooth replacements",
    shortDescription: "Titanium implant posts topped with custom crowns that fuse into your jawbone to restore chewing confidence.",
    longDescription: "Say goodbye to traditional dentures. A medical-grade titanium post is surgically embedded into your jaw bone, serving as a solid root. Over weeks, osteointegration fuses it naturally. Finally, a gorgeous customized porcelain crown is fitted on top, matching your surrounding teeth perfectly in size and translucency block.",
    duration: "Multiple visits",
    priceEstimate: "$1,500 - $3,500",
    iconName: "Activity",
    category: "specialty"
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    tagline: "Surgically relieve toothaches and save infected teeth",
    shortDescription: "Virtually painless endodontic therapy that cleanses contaminated pulp paths, sealing the tooth safely.",
    longDescription: "When decay pierces deep into the tooth's central root canal and triggers major toothaches, an endodontic saving is required. Dr. Johnson numbs the area completely (making this as routine as a basic filling). She opens the tooth to extract infected soft tissues, sterilizes the chamber with medical washes, and fills it with protective thermoplastic gutta-percha, saving the tooth.",
    duration: "60 - 90 mins",
    priceEstimate: "$600 - $1,100",
    iconName: "ShieldAlert",
    category: "restorative"
  },
  {
    id: "orthodontics",
    title: "Orthodontics / Braces",
    tagline: "Align teeth and bite structures for adults and teens",
    shortDescription: "Standard metal brackets and modern clear aligners (Invisalign) designed to guide your smile into balance.",
    longDescription: "We craft structural alignment plans that gently steer teeth back in place. From traditional high-tensile stainless steel braces to premium clear, removable plastic aligner trays that sit invisibly in social gatherings. We optimize structural health, preventing temporomandibular joint tension and building stunning layouts.",
    duration: "Consultation - 30m",
    priceEstimate: "Varies (Payment plans)",
    iconName: "Grid",
    category: "specialty"
  },
  {
    id: "veneers",
    title: "Dental Veneers",
    tagline: "Ultra-thin porcelain shells for a flawless look",
    shortDescription: "Premium ceramic veneers that mask chips, permanent internal stains, severe gaps, and aesthetic defects.",
    longDescription: "Porcelain veneers are ultra-thin shells bonded directly to the front face of teeth. Perfect for disguising micro-cracks, gaps, or stubborn chemical staining. Each veneer is custom-molded in our partner labs to refract light just like natural tooth enamel, turning worn teeth into uniform works of art.",
    duration: "2 visits",
    priceEstimate: "$800 - $1,500/tooth",
    iconName: "FlameKindling", // Representing beautiful transformations
    category: "cosmetic"
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    tagline: "Specialized, fun and friendly care for kids",
    shortDescription: "Positive, stress-free dental visits for toddlers and children to establish life-long healthy tooth habits.",
    longDescription: "Our pediatric care is crafted entirely around the perspective of a child. We use colorful tools, gentle educational storytelling, and sweet flavored sealants. We build trust early, perform gentle preventive cleanings, and apply protective cavity-fighting fluoride gels in a kid-friendly environment.",
    duration: "30 mins",
    priceEstimate: "$70 - $120",
    iconName: "Smile",
    category: "pediatric"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    tagline: "Modern procedures designed to enhance aesthetics",
    shortDescription: "A curated range of quick minor bondings, recontouring of gums, and teeth-shaping to upgrade facial symmetry.",
    longDescription: "Sometimes small cosmetic shifts create the most dramatic upgrades. Our cosmetic solutions include dental bonding (using soft resin compound to edit small tooth notches) and laser-guided gum line trimming to eliminate gummy smiles and establish beautiful Golden Ratio balance.",
    duration: "45 mins",
    priceEstimate: "$150 - $400",
    iconName: "Scissors",
    category: "cosmetic"
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    tagline: "A comprehensive individual smile overhaul plan",
    shortDescription: "Complete rehabilitation combining multiple aesthetic treatments into a structured life-changing upgrade.",
    longDescription: "For patients wanting a total transformation. Dr. Johnson designs an individual multi-step restoration path using facial mapping. It merges whitening, implants, crowns, and veneers to address multiple problems simultaneously—optimizing bite mechanics and delivering majestic symmetry.",
    duration: "Multiple visits",
    priceEstimate: "Requires Consultation",
    iconName: "Award",
    category: "cosmetic"
  },
  {
    id: "crowns",
    title: "Dental Crowns & Bridges",
    tagline: "Reinforce weakened teeth and bridge gaps",
    shortDescription: "Tough customized caps shaped like real teeth to shield cracked, decayed, or single-implanted structures.",
    longDescription: "When teeth are severely damaged or have undergone a root canal, they require structural armor. Our dental crowns enclose the entire visible tooth structure, shielding it from physical chewing forces. A bridge utilizes adjacent crowned teeth to stably suspend a premium artificial tooth over an empty gap without surgery.",
    duration: "2 visits",
    priceEstimate: "$600 - $1,200",
    iconName: "Heart",
    category: "restorative"
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    tagline: "Gentle removal of damaged, decay-ridden or wisdom teeth",
    shortDescription: "Comfort-controlled, systematic removal of un-savable teeth or crowded dangerous wisdom roots.",
    longDescription: "When severe fracturing or decay compromises a tooth beyond saving, or when painful third molars (wisdom teeth) threaten neighbouring tooth roots, gentle surgical removal is planned. We utilize intense local anesthesia to block all pathways of pain, safely dislodge the root, and prescribe precise healing guidelines.",
    duration: "45 mins",
    priceEstimate: "$150 - $400",
    iconName: "RefreshCw",
    category: "restorative"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    rating: 5,
    text: "Excellent service and very professional staff. Dr. Sarah explained my treatment detail thoroughly. Highly recommended.",
    author: "Michael Thompson",
    treatment: "Dental Implants",
    date: "May 20, 2026",
    verified: true
  },
  {
    id: "rev-2",
    rating: 5,
    text: "My smile transformation exceeded expectations. The Philips Zoom whitening didn't trigger any pain, and and the results are absolute gold!",
    author: "Emma Wilson",
    treatment: "Smile Makeover",
    date: "April 15, 2026",
    verified: true
  },
  {
    id: "rev-3",
    rating: 5,
    text: "Best dental clinic experience I've ever had. No waiting times, lovely music, and Dr. Sarah operates with extremely gentle hands. Scars from past dentist fear are gone.",
    author: "David Miller",
    treatment: "Root Canal Specialist",
    date: "March 11, 2026",
    verified: true
  },
  {
    id: "rev-4",
    rating: 5,
    text: "Friendly doctors and painless treatment. Sophia was highly nervous before her wisdom tooth extraction, but the team put us entirely at ease.",
    author: "Sophia Brown",
    treatment: "Tooth Extraction",
    date: "February 28, 2026",
    verified: true
  },
  {
    id: "rev-5",
    rating: 5,
    text: "We take the entire family here—from our 5-year-old boy to my elderly mother. Dr. Johnson adjusts her pace and style gracefully to keep children laughing during teeth cleanings.",
    author: "Johnathan Mercer",
    treatment: "Pediatric Dentistry & Cleaning",
    date: "January 14, 2026",
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you accept dental insurance policies?",
    answer: "Yes, we accept major PPO insurance plans including Delta Dental, Cigna, Aetna, MetLife, Guardian, and UnitedHealthcare. Our team handles all documentation directly and will pre-verify your coverages before you arrive so there are no unexpected surprises.",
    category: "insurance"
  },
  {
    id: "faq-2",
    question: "What should I do in case of a sudden dental emergency?",
    answer: "Call us immediately at +1 (555) 123-4567. We prioritize same-day emergency slots for dental trauma, extreme toothaches, locked jaws, or knocked-out teeth. For Sunday events, please use our WhatsApp emergency hotline to page the on-duty clinical team.",
    category: "general"
  },
  {
    id: "faq-3",
    question: "How often should I schedule a dental checkup and cleaning?",
    answer: "We strongly recommend visiting the clinic every 6 months. Regular cleans eliminate harmful calcified tartar that normal brushes cannot touch, and prompt biannual dental diagnostics prevent small, asymptomatic cavities from worsening into extensive roots infections.",
    category: "general"
  },
  {
    id: "faq-4",
    question: "Is Philips Zoom Teeth Whitening safe for my enamel?",
    answer: "Yes! Scientific studies show cosmetic bleaching performed under dental supervision is fully safe. Our whitening gels contain special potassium-based buffers and fluoride minerals to strengthen teeth enamel and eliminate tooth sensitivity both during and after the zoom treatment.",
    category: "services"
  },
  {
    id: "faq-5",
    question: "How long is the healing period for a dental titanium implant?",
    answer: "The osseointegration period typically spans between 3 to 6 months depending on individual bone densities. During this timeframe, the titanium implant post fuses firmly with your jawbone. We will supply a highly realistic, comfortable aesthetic temporary crown so you never go toothless.",
    category: "services"
  },
  {
    id: "faq-6",
    question: "Can I manage appointments online or cancel via SMS?",
    answer: "Certainly. You can book directly using our website scheduler form, text us on WhatsApp, or call our office. Cancellations are free up to 24 hours prior to the scheduled timeframe.",
    category: "appointments"
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "blog-1",
    title: "5 Simple Ways to Prevent Interdental Cavities at Home",
    excerpt: "Discover the hidden spots normal toothbrushes miss and the exact clinical routines to defend your teeth.",
    content: "Most dental decay arises not on the visible chewing crown of the tooth, but in the tight gaps where teeth kiss—known as interproximal or interdental cavities. Because normal brushes cannot bend into these gaps, food debris and bacteria sit undisturbed, generating enamel-devouring acids. \n\nTo preserve your health: \n1. **Adopt Interdental Brushes**: Far better than floss, small reusable silicon interdental brushes slide between teeth to scrape biofilm safely.\n2. **Cleanse with Water Flossers**: Pulse clean water under the gums to flush loose sugars.\n3. **Switch to Nano-Hydroxyapatite Toothpastes**: It physically remineralizes micro-cavities prior to them forming.\n4. **Reduce Acid Snacking Times**: Frequent snacking maintains a acidic oral pH—limit sugary things to standard meal hours.\n5. **Chew Xylitol Gums**: Xylitol is a natural sweetener that starves bacteria and encourages saliva production to wash teeth.",
    category: "Dental Hygiene",
    readTime: "4 mins read",
    date: "May 12, 2026",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "blog-2",
    title: "Understanding Dental Implants vs. Bridges: Which is Better?",
    excerpt: "An objective surgical breakdown of costs, safety, and longevity comparing bridges with implant posts.",
    content: "If you have lost a permanent tooth, deciding on the ultimate form of restoration is vital. Traditionally, standard fixed Bridges were the staple solution, but Dental Implants have risen to become the modern standard. \n\nLet's evaluate criteria: \n- **Structural Health**: Dental Bridges require grinding down the enamel of the two healthy adjacent teeth to serve as support anchors. High quality Dental Implants require zero damage to surrounding teeth; they stand independently.\n- **Bone Maintenance**: When a tooth is lost, the jawbone below begins to resorb. Implants stimulate the bone directly, keeping jaw structures rigid. Bridges do not prevent bone volume loss.\n- **Long Term Costs**: While implants carry a higher initial investment offset, they can easily last a lifetime. Bridges generally require replacement or correction every 10 to 15 years.",
    category: "Oral Health",
    readTime: "6 mins read",
    date: "April 20, 2026",
    imageUrl: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "blog-3",
    title: "Is Professional Laser Teeth Whitening Painful?",
    excerpt: "What triggers tooth sensitivity during cosmetic whitening, and how our modern buffers fully resolve it.",
    content: "Our Zoom Teeth Whitening offers brilliant updates, but many ask: 'Will this hurt my teeth?' \n\nAt Bright Smile, we utilize Philips Zoom. This uses targeted cold light along with gel enriched with Amorphous Calcium Phosphate (ACP). As the bleach penetrates teeth enamel tubules, ACP seals microscopic pores, locking in moisture and preventing neural responses. \n\nFor extra comfort, we provide post-treatment protective pastes, and adjust LED lamp intensities. The result is a sparkling, white grid of teeth with absolutely zero lingering sensitivity.",
    category: "Teeth Whitening",
    readTime: "3 mins read",
    date: "March 5, 2026",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Dr. Sarah Johnson in Treatment Room",
    category: "team",
    imageUrl: "doctor_sarah_path", // will replace programmatically with generated Dr Sarah Johnson image
    description: "Dr. Sarah consulting a patient prior to a smile design therapy."
  },
  {
    id: "gal-2",
    title: "State-Of-The-Art Treatment Suite",
    category: "treatment",
    imageUrl: "treatment_room_path", // will replace with generated image
    description: "Our high-tech room equipped with zero-gravity ergonomic dental seating."
  },
  {
    id: "gal-3",
    title: "Bright Smile Reception & Lounge",
    category: "clinic",
    imageUrl: "hero_dentistry_path", // will replace with generated lobby image
    description: "Welcome to a refreshing, spa-like dental lounge styled with wood and teals."
  },
  {
    id: "gal-4",
    title: "Porcelain Veneers - Before & After",
    category: "before_after",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    beforeUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
    description: "Correction of permanent yellowing and alignment gaps using dental veneers."
  },
  {
    id: "gal-5",
    title: "Advanced Philips Zoom Bleaching",
    category: "treatment",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
    description: "Direct LED activation lamp used safely during cosmetic whitening tasks."
  },
  {
    id: "gal-6",
    title: "Teeth Whitening Results",
    category: "before_after",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600",
    beforeUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    description: "Patient regained confidence with an 8-shade brightening zoom therapy."
  },
  {
    id: "gal-7",
    title: "Our Friendly Dental Team",
    category: "team",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    description: "Committed to delivering compassionate dental care."
  }
];

export const INSURANCE_PARTNERS = [
  { name: "Delta Dental", tier: "In-Network Preferred" },
  { name: "Cigna", tier: "PPO Platinum" },
  { name: "Aetna", tier: "Gold Network Pro" },
  { name: "MetLife", tier: "Preferred Specialist" },
  { name: "Guardian", tier: "In-Network Specialist" },
  { name: "UnitedHealthcare", tier: "PPO Choice Plus" }
];

export const AWARDS = [
  { icon: "Award", title: "Top NYC Dentist 2025", issuer: "New York Medical Registry" },
  { icon: "Milestone", title: "15+ Years Clinical Excellence", issuer: "Dr. Johnson, BDS MDS" },
  { icon: "HeartHandshake", title: "Five-Star Patient Comfort Award", issuer: "Patient Choice Circle" },
  { icon: "Activity", title: "Advanced Endodontics Safe-Care", issuer: "American Board of Dentistry" }
];
