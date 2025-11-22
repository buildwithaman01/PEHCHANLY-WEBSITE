import { Globe, Smartphone, Zap, Search, Target, Users } from 'lucide-react';

// --- BUSINESS DATA ---

export const BRAND = {
  name: "Pehchanly Digital Solutions",
  tagline: "Building Digital Identities for Business Growth",
  email: "pehchanly.digitalsolution@gmail.com",
  phone: "+91-8521264242",
  whatsapp: "+918521264242",
  location: "India (Global Service)",
  colors: {
    bg: "bg-[#050816]",
    card: "bg-[#0a0e26]",
    primary: "text-[#00f0ff]",
    gold: "text-[#ffd700]"
  }
};

export const OFFICE_LOCATION = {
  address: "2nd Floor, Block C, 38 Canal Street, Bagmari Road",
  city: "Kolkata",
  state: "West Bengal",
  pincode: "700054",
  landmark: "Near Narkeldanga Flyover",
  mapLink: "https://maps.google.com/?q=38+Canal+Street+Kolkata+700054",
  hours: "Mon-Sat: 10 AM - 7 PM"
};

export const SEO_CITIES = [
  "Mumbai", "Delhi NCR", "Bangalore", "Kolkata", "Chennai", "Hyderabad",
  "Pune", "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur",
  "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara",
  "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut",
  "Rajkot", "Varanasi", "Srinagar", "Amritsar", "Allahabad"
];

export const TEAM = [
  { name: "Aman Singh", role: "Founder & Lead Strategist", img: "https://ui-avatars.com/api/?name=Aman+Singh&background=00f0ff&color=0a0e27" },
  { name: "Engineering Team", role: "CSE Experts", img: "https://ui-avatars.com/api/?name=CSE+Team&background=ffd700&color=0a0e27" },
  { name: "Marketing Unit", role: "Growth Specialists", img: "https://ui-avatars.com/api/?name=Marketing&background=00f0ff&color=0a0e27" },
  { name: "Support", role: "Client Success", img: "https://ui-avatars.com/api/?name=Support&background=ffd700&color=0a0e27" },
];

export const SERVICES = [
  {
    id: 1,
    title: "High-Speed Custom Websites",
    icon: <Globe className="w-8 h-8" />,
    desc: "Professional websites built for performance using Next.js 16. Lightning-fast (<1.5s load), mobile-responsive, and custom design (no templates).",
    tags: ["Next.js 16", "Turbopack", "SEO Native"]
  },
  {
    id: 2,
    title: "Custom Software & Mobile Apps",
    icon: <Smartphone className="w-8 h-8" />,
    desc: "Tailored solutions to automate workflows. CRM, Inventory systems, and scalable Android/iOS mobile apps.",
    tags: ["SaaS", "Automation", "iOS/Android"]
  },
  {
    id: 3,
    title: "Branding & Graphic Design",
    icon: <Zap className="w-8 h-8" />,
    desc: "Visual identity systems that capture attention. Logo design, brand guidelines, and premium social media assets.",
    tags: ["Identity", "Logo Design", "Social Assets"]
  },
  {
    id: 4,
    title: "SEO & GMB Ranking",
    icon: <Search className="w-8 h-8" />,
    desc: "Dominate local search. We specialize in Google Maps ranking (GMB), keyword research, and on-page SEO.",
    tags: ["Local SEO", "GMB", "Keywords"]
  },
  {
    id: 5,
    title: "Paid Advertising",
    icon: <Target className="w-8 h-8" />,
    desc: "Data-driven ad campaigns on Google & Meta (Facebook/Instagram) that generate quality leads and maximize ROI.",
    tags: ["PPC", "Retargeting", "Analytics"]
  },
  {
    id: 6,
    title: "Social Media Marketing",
    icon: <Users className="w-8 h-8" />,
    desc: "Strategic campaigns to grow your brand. Content creation, community management, and detailed reporting.",
    tags: ["Content Strategy", "Reels", "Engagement"]
  }
];

export const PRICING = [
  {
    name: "Launch",
    tier: "TIER 1",
    price: "Starting Package",
    period: "",
    time: "1 Week Delivery",
    desc: "Perfect for new businesses getting started.",
    features: [
      "4-5 Page Custom Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Logo Design + Brand Colors",
      "Contact Forms & Integrations",
      "Free Hosting Setup",
      "1 Month Free Support"
    ],
    highlight: false
  },
  {
    name: "Growth",
    tier: "TIER 2",
    price: "Mid-Tier Package",
    period: "",
    time: "2 Weeks Delivery",
    desc: "For businesses ready to scale operations.",
    features: [
      "8-12 Page Custom Website",
      "Advanced UI/UX Design",
      "Complete Branding Package",
      "Local SEO + Google Business Profile",
      "Social Media Integration",
      "Custom Automation Tool",
      "Analytics & Insights Dashboard",
      "2 Months Free Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    tier: "TIER 3",
    price: "Custom Solution",
    period: "",
    time: "3-4 Weeks",
    desc: "Complete digital transformation.",
    features: [
      "Custom Web Application",
      "Mobile App (Android/iOS)",
      "Complete Branding System",
      "Advanced SEO Strategy",
      "Paid Advertising Management",
      "Marketing Automation Software",
      "Advanced Analytics & Reporting",
      "Dedicated Account Manager",
      "3 Months Premium Support"
    ],
    highlight: false
  }
];

export const PROCESS = [
  { step: "01", title: "Discover", desc: "We analyze your business, competitors, and customer psychology to create a winning strategy. (60-min consultation)" },
  { step: "02", title: "Build", desc: "Our CSE engineers & designers bring your vision to life with Next.js 16 & modern tech." },
  { step: "03", title: "Grow", desc: "We launch, host, maintain, and continuously optimize your digital presence with data-driven insights." },
];

export const METRICS = [
  { label: "Projects Delivered", sublabel: "Last Months", value: "13+" },
  { label: "Active Projects", value: "8" },
  { label: "Years Expertise", value: "5+" },
  { label: "Industries Served", value: "6+" }
];

export const INDUSTRIES = [
  "Restaurants & Hotels", "Healthcare", "Legal Services", "Education", "Retail & E-commerce", "Fitness & Wellness", "Real Estate", "Professional Services"
];

export const GUARANTEES = [
  { title: "Satisfaction Guaranteed", desc: "We revise until you're happy." },
  { title: "Transparent Pricing", desc: "No hidden costs. Clear quotes." },
  { title: "On-Time Delivery", desc: "We respect deadlines." },
  { title: "Results Focused", desc: "We track metrics that matter." }
];
