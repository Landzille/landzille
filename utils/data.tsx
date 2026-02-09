import Chart from "@/svg/chart";
import Check from "@/svg/check";
import Coins from "@/svg/coins";
import History from "@/svg/history";
import Lock from "@/svg/lock";
import Shake from "@/svg/shake";
import Star from "@/svg/star";
import Thumbs from "@/svg/thumbs";
import { JSX } from "react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  { label: "Projects", href: "/#land-listings" },
  { label: "Summer Program", href: "/summer-program" },
  {
    label: "Resources",
    href: "/resources",
    hasDropdown: true,
    dropdownItems: [
      { label: "Resources", href: "/resources" },
      { label: "Blogs", href: "/blog" },
      { label: "E-magazines", href: "/e-magazines" },
    ],
  },
  { label: "Calculator", href: "/calculator" },
  {
    label: "About",
    href: "/about",
    hasDropdown: true,
    dropdownItems: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Waitlist", href: "/waitlist" },
    ],
  },
];

export const newNavItems = [
  {
    label: "Projects",
    href: "/#land-listings",
  },
  {
    label: "Summer Program",
    href: "/summer-program",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

interface Slide {
  id: number;
  image: string;
  location: string;
  heading: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    image: "/assets/gainsville.jpg",
    location: "Gainesville",
    heading:
      "Invest in Verified Land Opportunities Across North Texas. Transparent, Secure, High-Growth.",
  },
  {
    id: 2,
    image: "/assets/leonard.jpg",
    location: "Leonard\u00A0\u00A0\u00A0\u00A0",
    heading: "Discover Prime Land Investments in Growing Texas Markets.",
  },
  {
    id: 3,
    image: "/assets/roxton.jpeg",
    location: "Roxton\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0",
    heading: "Build Your Future with Trusted Land Opportunities.",
  },
];

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  highlight?: string;
}

export const features: Feature[] = [
  {
    icon: <Chart />,
    title: "Market Growth Projection",
    description:
      "DFW population grew from 7.6M to 8.3M (+700k residents) since 2020. Projected to hit",
    highlight: "9.3 Million by 2030.",
  },
  {
    icon: <Chart />,
    title: "Land Appreciation",
    description:
      "North Texas land in high-growth corridors has seen a historical 5-year appreciation of",
    highlight: "10% - 15% CAGR.",
  },
  {
    icon: <Star />,
    title: "Corporate Ranking",
    description: "Consistently ranked",
    highlight: "#1 U.S. Market to Watch",
  },
];

interface Stat {
  value: string;
  label: string;
  subtitle: string;
}

export const stats: Stat[] = [
  {
    value: "600+",
    label: "Total Acres Transacted",
    subtitle: "Across North Texas",
  },
  {
    value: "72%",
    label: "Avg. Project Gross Appreciation",
    subtitle: "Projected to Realized",
  },
  {
    value: "18.5%",
    label: "Avg. Realized IRR",
    subtitle: "Internal Rate of Return",
  },
  {
    value: "$45M+",
    label: "Asset Value Generated",
    subtitle: "Growing Portfolio",
  },
];

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface HoldingCard {
  county: string;
  value: string;
  label: string;
}

export const benefits: Benefit[] = [
  {
    icon: <Coins />,
    title: "Thriving Economy",
    description:
      "Benefit from a diverse economy driven by agriculture, technology, and manufacturing.",
  },
  {
    icon: <History />,
    title: "Historic Significance",
    description:
      "Experience rich history and cultural heritage through curated landmarks and charming towns.",
  },
];

export const holdingCards: HoldingCard[] = [
  {
    county: "FANNIN",
    value: "12%",
    label: "Annual Growth",
  },
  {
    county: "HUNT",
    value: "High",
    label: "Demand Index",
  },
  {
    county: "COOKE",
    value: "Prime",
    label: "Waterfront Access",
  },
];

interface Property {
  id: number;
  link: string;
  image: string;
  county: string;
  title: string;
  description: string;
  location: string;
  acres: string;
  tags: string[];
  actions: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    link: "/gainesville",
    image: "/assets/gainsvilleImg.jpg",
    county: "COOKE COUNTY",
    title: "Heritage Bloom",
    description:
      "Experience the growth potential in Gainesville. Perfect for residential development or long-term hold.",
    location: "GAINESVILLE",
    acres: "11-15 ACRES",
    tags: ["DEVELOPMENT"],
    actions: ["Sold Out"],
  },
  {
    id: 2,
    link: "/honeygroove",
    image: "/assets/honeygroove.webp",
    county: "FANNIN COUNTY",
    title: "Tranquil Retreat",
    description:
      "Peaceful acreage in Honey Grove. Ideal for a private estate or recreational getaway.",
    location: "HONEY GROVE 1 & 2",
    acres: "11-15 ACRES",
    tags: ["RECREATIONAL"],
    actions: ["Sold Out"],
  },
  {
    id: 3,
    link: "/bonham",
    image: "/assets/bonham.jpg",
    county: "FANNIN COUNTY",
    title: "Bonham Renaissance",
    description:
      "Strategic land opportunity in the historic heart of Bonham. High appreciation potential.",
    location: "BONHAM",
    acres: "11-14 ACRES",
    tags: ["INVESTMENT"],
    actions: ["Sold Out"],
  },
  {
    id: 4,
    link: "/small-town",
    image: "/assets/smallTown.jpg",
    county: "HUNT COUNTY",
    title: "Small Town Charm",
    description:
      "Embrace the community spirit of Wolfe City. Spacious layouts for country living.",
    location: "WOLFE CITY",
    acres: "11-15 ACRES",
    tags: ["RESIDENTIAL"],
    actions: ["Sold Out"],
  },
  {
    id: 5,
    link: "/leonard-texas",
    image: "/assets/leonard.jpeg",
    county: "FANNIN COUNTY",
    title: "Leonard Texas",
    description:
      "Embrace the community spirit of North Star. Spacious layouts for country living.",
    location: "NORTH STAR",
    acres: "11-25 ACRES",
    tags: ["RESIDENTIAL"],
    actions: ["Inquire for Price"],
  },
  {
    id: 6,
    link: "/roxton-texas",
    image: "/assets/roxton-1.jpeg",
    county: "LAMAR COUNTY",
    title: "Roxton Texas",
    description:
      "Embrace the community spirit of Roxton. Spacious layouts for country living.",
    location: "NORTH STAR",
    acres: "11-25 ACRES",
    tags: ["RESIDENTIAL"],
    actions: ["Inquire for Price"],
  },
];

export const filters = [
  "View All",
  "Fannin County",
  "Hunt County",
  "Cooke County",
  "Lamar County",
];

interface FeatureNew {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const featuresColumn1: FeatureNew[] = [
  {
    icon: <Check />,
    title: "Comprehensive Due Diligence",
    description:
      "Title searches, zoning, and environmental assessments ensure clear, market-ready land.",
  },
  {
    icon: <Check />,
    title: "Transparent Communication",
    description:
      "Regular updates and support throughout your investment journey.",
  },
];

export const featuresColumn2: FeatureNew[] = [
  {
    icon: <Check />,
    title: "Local Market Expertise",
    description: "Deep knowledge of North Texas real estate trends.",
  },
  {
    icon: <Check />,
    title: "Flexible Investment Options",
    description:
      "Tailored opportunities for first-time and seasoned investors.",
  },
];

interface Testimonial {
  id: number;
  image: string;
  video: string;
  title: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/assets/testimonials.jpg",
    video: "https://youtu.be/d3AYoyGRMWA",
    title: "From First Purchase to Portfolio",
    name: "David Miller",
    role: "COMMERCIAL INVESTOR",
  },
  {
    id: 2,
    image: "/assets/testimonials.jpg",
    video: "https://youtu.be/9EgvZZIMM2U",
    title: "From First Purchase to Portfolio",
    name: "David Miller",
    role: "COMMERCIAL INVESTOR",
  },
  {
    id: 3,
    image: "/assets/testimonials.jpg",
    video: "https://youtu.be/lrE-lLL07Rk",
    title: "From First Purchase to Portfolio",
    name: "David Miller",
    role: "COMMERCIAL INVESTOR",
  },
];

interface Review {
  id: number;
  avatar: string;
  name: string;
  title: string;
  quote: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    avatar: "/assets/george.jpg",
    name: "George Egret",
    title: "Angel Investor, Dallas",
    quote:
      '"Landzille made land investment simple and transparent. They kept me informed and guided me every step of the way. I ended the journey not just with land, but with confidence as an investor."',
  },
  {
    id: 2,
    avatar: "/assets/sarah.jpg",
    name: "Sarah Jenkins",
    title: "Real Estate Broker",
    quote:
      '"My experience with Landzille was well executed and very informed. The process was smooth, the follow-ups were consistent, and everything was handled with care. Honestly, there was nothing bad to point out, just a positive and reassuring journey."',
  },
  {
    id: 3,
    avatar: "/assets/robertson.jpg",
    name: "The Robertsons",
    title: "Business Owners",
    quote:
      '"We were looking for a tangible asset to pass down. This was the perfect addition to our portfolio."',
  },
];

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

export const partnersData: Partner[] = [
  {
    id: "agtrust",
    name: "AgTrust",
    logo: "/assets/agtrust.png",
    url: "https://agtrust.com",
  },
  {
    id: "exp-realty",
    name: "eXp Realty",
    logo: "/assets/exp.png",
    url: "https://exprealty.com",
  },
  {
    id: "first-united",
    name: "First United Bank & Trust",
    logo: "/assets/first-united.png",
    url: "https://firstunitedbank.com",
  },
  {
    id: "boasafra",
    name: "Boa Safra AG",
    logo: "/assets/opti.png",
    url: "https://boasafra.com",
  },
  {
    id: "opti",
    name: "OPTI",
    logo: "/assets/optimum.png",
    url: "https://opti.com",
  },
];

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export const insightsData: Insight[] = [
  {
    id: "1",
    title: "Unseen Benefits of Owning Land",
    excerpt:
      "Uncover hidden benefits of land ownership in North Texas and across the U.S. backed by real data: policy insights, and market trends. From ecosystem income to emotional wealth, see why land is America's most...",
    image: "/assets/fanning.jpg",
    slug: "unseen-benefits-of-owning-land",
  },
  {
    id: "2",
    title: "Why Investing in Farmland n North Texas is a Smart Move in 2025",
    excerpt:
      "Discover how farmland in North Texas offers stability, cash flow, and long-term value especially in a volatile stock market.",
    image: "/assets/fanning.jpg",
    slug: "farmland-investment-north-texas-2025",
  },
  {
    id: "3",
    title: "Why It's Never Too Late or Too Early To Invest In Land",
    excerpt:
      "When it comes to building wealth, owning land is one of the most timeless and dependable paths. And here's the good news: there's no \"perfect...",
    image: "/assets/fanning.jpg",
    slug: "never-too-late-or-early-invest-land",
  },
];

interface ResearchTeam {
  id: string;
  name: string;
  description: string;
  pdfUrl: string;
}

export const teams: ResearchTeam[] = [
  {
    id: "1",
    name: "Team Landmark",
    description: "Exploring Renewable Energy opportunities on Land Holdings.",
    pdfUrl:
      "/downloads/others/Exploring-Renewable-Energy-Opportunities-on-Land-Holdings.pdf",
  },
  {
    id: "2",
    name: "Team Plot",
    description: "Leadership Skills for Young Investors.",
    pdfUrl: "/downloads/others/Landzille-Research-project.pdf",
  },
  {
    id: "3",
    name: "Team Estate",
    description: "The Role of Technology and AI in Modern land Investment.",
    pdfUrl: "/downloads/others/Research-Paper.pdf",
  },
  {
    id: "4",
    name: "Team Acre",
    description: "Emerging Trends in Land Investment for 2025",
    pdfUrl: "/downloads/others/Emerging-Trends-in-Land-Investment-for-2025.pdf",
  },
];

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    src: "/assets/gallery-1.jpg",
    alt: "Aerial view of land property 1",
  },
  {
    id: "2",
    type: "image",
    src: "/assets/gallery-2.jpg",
    alt: "Aerial view of land property 2",
  },
  {
    id: "3",
    type: "image",
    src: "/assets/gallery-3.jpg",
    alt: "Aerial view of land property 3",
  },
  {
    id: "4",
    type: "video",
    src: "https://www.youtube.com/watch?v=S6_90d98zR0",
    thumbnail: "/assets/youTubePlaceholder.jpg",
    alt: "Consultation video",
  },
];

export const leonardGalleryItems = [
  {
    id: "1",
    type: "image",
    src: "/assets/leonard-1.jpeg",
    alt: "Aerial view of land property 1",
  },
  {
    id: "2",
    type: "image",
    src: "/assets/leonard-2.jpeg",
    alt: "Aerial view of land property 2",
  },
  {
    id: "3",
    type: "image",
    src: "/assets/leonard-3.jpeg",
    alt: "Aerial view of land property 3",
  },
  {
    id: "4",
    type: "image",
    src: "/assets/leonard-4.jpeg",
    alt: "Aerial view of land property 4",
  },
  {
    id: "5",
    type: "image",
    src: "/assets/leonard-5.jpeg",
    alt: "Aerial view of land property 5",
  },
  {
    id: "6",
    type: "image",
    src: "/assets/leonard.jpeg",
    alt: "Aerial view of land property 1",
  },
];

export const roxtonGallery = [
  {
    id: "1",
    type: "image",
    src: "/assets/roxton-1.jpeg",
    alt: "Aerial view of land property 1",
  },
  {
    id: "2",
    type: "image",
    src: "/assets/roxton-2.jpeg",
    alt: "Aerial view of land property 2",
  },
  {
    id: "3",
    type: "image",
    src: "/assets/roxton-3.jpeg",
    alt: "Aerial view of land property 3",
  },
  {
    id: "4",
    type: "image",
    src: "/assets/roxton-4.jpeg",
    alt: "Aerial view of land property 4",
  },
  {
    id: "5",
    type: "image",
    src: "/assets/roxton-5.jpeg",
    alt: "Aerial view of land property 5",
  },
  {
    id: "6",
    type: "image",
    src: "/assets/roxton-6.jpeg",
    alt: "Aerial view of land property 1",
  },
];

export const galleryTwoItems = [
  {
    id: "1",
    type: "image",
    src: "/assets/land-1.jpg",
    alt: "Aerial view of land property 1",
  },
  {
    id: "2",
    type: "image",
    src: "/assets/land-2.jpg",
    alt: "Aerial view of land property 2",
  },
  {
    id: "3",
    type: "image",
    src: "/assets/land-3.jpg",
    alt: "Aerial view of land property 3",
  },
  {
    id: "4",
    type: "image",
    src: "/assets/land-4.jpg",
    alt: "Aerial view of land propert 4",
  },
  {
    id: "5",
    type: "image",
    src: "/assets/land-5.jpg",
    alt: "Aerial view of land property 5",
  },
  {
    id: "6",
    type: "image",
    src: "/assets/land-6.jpg",
    alt: "Aerial view of land property 6",
  },
];

interface Value {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const values: Value[] = [
  {
    id: "1",
    title: "Integrity",
    description:
      "Integrity is the foundation of our work. We operate with honesty and transparency, ensuring that every client understands the opportunities because we believe that true partnerships are built on openness.",
    icon: <Shake />,
  },
  {
    id: "2",
    title: "Diligence",
    description:
      "We also place great emphasis on Diligence. Behind every deal we present lies hours of research, economic studies, and city growth projections. We don't just sell land; we study its future, so our clients can invest with confidence and peace of mind.",
    icon: <Lock />,
  },
  {
    id: "3",
    title: "Excellence",
    description:
      "Our commitment to Excellence drives us to deliver a seamless experience from the very first inquiry to the final closing. We strive to make every step of the journey professional, rewarding, and memorable, so clients walk away not just with land, but with confidence and clarity.",
    icon: <Thumbs />,
  },
];

export const landMatters = [
  {
    title: "Land is legacy",
    description:
      "It carries value across generations, creating a foundation for family and future.",
  },
  {
    title: "Land is security",
    description: "A lasting anchor in a world that changes fast.",
  },
  {
    title: "Land is opportunity",
    description:
      "Every parcel holds potential for growth, wealth, and freedom.",
  },
];
