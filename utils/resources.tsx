export type InvestorStage =
  | "New Investor"
  | "Land IQ"
  | "Spot the Growth"
  | "Unlock Land Value";

export type ResourceType = "Magazine" | "Report" | "Guide" | "Handbook";

export type ResourceTag =
  | "DFW Growth"
  | "Infrastructure"
  | "Chisholm Trail"
  | "Land Empires"
  | "Community Builders";

export interface Resource {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  downloadUrl: string;
  resourceType: ResourceType;
  investorStage?: InvestorStage;
  tags?: ResourceTag[];
}

export const allResources: Resource[] = [
   {
    id: "",
    title: "Everybody Can Build Wealth. You Can Too.",
    subtitle: "A Simple Land Wealth Framework For Everyday People",
    image: "/assets/resources/Everybody_Can_Build_Wealth.jpeg",
    downloadUrl:
      "/downloads/resources/Everybody_Can_Build_Wealth.pdf",
  },
  {
    id: "",
    title: "The Texas Agricultural Valuation Handbook",
    subtitle: "Saving thousands in property taxes",
    image: "/assets/magazines/3D5.jpeg",
    downloadUrl:
      "/downloads/resources/The Texas Agricultural Valuation Handbook.pdf",
    resourceType: "Handbook",
    investorStage: "Unlock Land Value",
  },
  {
    id: "",
    title: "The History of Community Builders",
    subtitle: "From stoneage to AI era",
    image: "/assets/magazines/3D1(4).jpeg",
    downloadUrl: "/downloads/resources/The History Of Community Builders.pdf",
    resourceType: "Magazine",
    investorStage: "Land IQ",
    tags: ["Community Builders"],
  },
  {
    id: "",
    title: "The Chisholm Trail",
    subtitle: "Parkway Growth Corridor",
    image: "/assets/magazines/3D4.jpeg",
    downloadUrl:
      "/downloads/resources/THE CHISHOLM TRAIL PARKWAY GROWTH CORRIDOR.pdf",
    resourceType: "Magazine",
    investorStage: "Spot the Growth",
    tags: ["Chisholm Trail"],
  },
  {
    id: "",
    title: "Land Empires",
    subtitle: "From stone age to modern America",
    image: "/assets/magazines/3D3.jpg",
    downloadUrl: "/downloads/resources/LAND EMPIRES.pdf",
    resourceType: "Magazine",
    investorStage: "Land IQ",
    tags: ["Land Empires"],
  },
  {
    id: "",
    title: "Legacy Nutrient Deductions",
    subtitle: "Unlocking The Hidden Value Beneath Agricultural Land",
    image: "/assets/magazines/3D2(3).jpeg",
    downloadUrl:
      "/downloads/resources/10 Proven Ways to Make Money With Your Land.pdf",
    resourceType: "Report",
    investorStage: "Unlock Land Value",
  },
  {
    id: "",
    title: "DFW Growth Corridors",
    subtitle: "The next 15 years of land wealth creation",
    image: "/assets/magazines/DFW_Growth-Corridor.jpeg",
    downloadUrl: "/downloads/resources/DFW_Growth Corridor.pdf",
    resourceType: "Report",
    investorStage: "Spot the Growth",
    tags: ["DFW Growth"],
  },
  {
    id: "",
    title: "North Texas Infrastructure & Economic Development Atlas",
    subtitle: "Major projects across 18 counties within 60miles of Dallas",
    image: "/assets/magazines/DFW_TXDOT.jpeg",
    downloadUrl: "/downloads/resources/DFW_TXDOT.pdf",
    resourceType: "Report",
    investorStage: "Spot the Growth",
    tags: ["Infrastructure", "DFW Growth"],
  },
  {
    id: "",
    title: "Growth Intelligence Index",
    subtitle: "Predicting tommorrow's wealth through today's infrastructure",
    image: "/assets/magazines/DFW_Growth.jpg",
    downloadUrl: "/downloads/resources/DFW_Growth-Intelligence-Index.pdf",
    resourceType: "Report",
    investorStage: "Spot the Growth",
    tags: ["DFW Growth", "Infrastructure"],
  },
  {
    id: "",
    title: "Grows North",
    subtitle:
      "Why american cities expands Northward and what it means for North Texas",
    image: "/assets/growsNorth.jpeg",
    downloadUrl: "/downloads/resources/EveryCity_GrowsNorth.pdf",
    resourceType: "Report",
    investorStage: "Land IQ",
  },
  {
    id: "",
    title: "The Land Legacy Blueprint",
    subtitle:
      "A global playbook for building wwealth, freedom & legacy through land",
    image: "/assets/resources/The-Land-Legacy-Blueprint.jpeg",
    downloadUrl: "/downloads/resources/The_Land_Legacy_Blueprint.pdf",
    resourceType: "Guide",
  },
  {
    id: "",
    title: "LIQUID GOLD",
    subtitle:
      "How Water is Making North Texas The Greatest Land Opportunity In America",
    image: "/assets/resources/3D (24).jpg.jpeg",
    downloadUrl: "/downloads/resources/Liquid Gold.pdf",
    resourceType: "Report",
  },
  {
    id: "1",
    title: "ROXTON TEXAS",
    subtitle: "Top 20 Reasons to Invest",
    image: "/assets/resources/roxton-texas.jpg",
    downloadUrl: "/downloads/resources/roxton-texas-1.pdf",
    resourceType: "Guide",
  },
  {
    id: "2",
    title: "LEONARD TEXAS",
    subtitle: "The Next Investment Frontier in North Texas",
    image: "/assets/resources/leonard-texas.jpeg",
    downloadUrl: "/downloads/resources/leonard-texas.pdf",
    resourceType: "Guide",
  },
  {
    id: "3",
    title: "I AM MUENSTER",
    subtitle: "Story of a hidden Cooke county Gem",
    image: "/assets/resources/menuster.jpeg",
    downloadUrl: "/downloads/resources/i-am-muenster.pdf",
    resourceType: "Guide",
  },
  {
    id: "4",
    title: "THE NORTH TEXAS GROWTH ENGINE",
    subtitle: "Download the ebook below",
    image: "/assets/resources/north-texas.jpeg",
    downloadUrl: "/downloads/resources/north-texas-growth-engine.pdf",
    resourceType: "Guide",
    tags: ["DFW Growth"],
  },
  {
    id: "5",
    title: "20 TOP REASONS TO INVEST IN GAINESVILLE, TEXAS",
    subtitle: "Download the ebook below",
    image: "/assets/resources/gainesville.jpeg",
    downloadUrl: "/downloads/resources/reasons-to-invest-in-gainesville.pdf",
    resourceType: "Guide",
  },
  {
    id: "6",
    title:
      "TOP 50 LIST OF THE BIGGEST INFRASTRUCTURE EXPANSIONS POWERING DEVELOPMENT ACROSS NORTH TEXAS",
    subtitle: "Download the ebook below",
    image: "/assets/resources/infrastructure.jpg",
    downloadUrl: "/downloads/resources/top-50-infrastructure-expansions.pdf",
    resourceType: "Report",
    tags: ["Infrastructure", "DFW Growth"],
  },
  {
    id: "7",
    title: "1-MONTH INTERNSHIP PLAN",
    subtitle: "Download the ebook below",
    image: "/assets/resources/internship.jpeg",
    downloadUrl: "/downloads/resources/1-month-internship-plan.pdf",
    resourceType: "Guide",
  },
  {
    id: "8",
    title: "TOP REASONS TO INVEST IN LAND IN TOP CITIES",
    subtitle: "Download the ebook below",
    image: "/assets/resources/invest-noe.jpg",
    downloadUrl:
      "/downloads/resources/top-reasons-to-invest-in-land-in-top-cities.pdf",
    resourceType: "Guide",
  },
  {
    id: "9",
    title: "COLLEGES AS CATALYSTS FOR LAND DEVELOPMENT IN THE U.S",
    subtitle: "Download the ebook below",
    image: "/assets/resources/colleges.jpg",
    downloadUrl:
      "/downloads/resources/colleges-as-catalysts-for-land-development.pdf",
    resourceType: "Report",
  },
  {
    id: "10",
    title: "STRATEGIC LAND LEASE PLAYBOOK",
    subtitle: "Download the ebook below",
    image: "/assets/resources/strategy.jpg",
    downloadUrl: "/downloads/resources/strategic-land-lease-playbook.pdf",
    resourceType: "Guide",
  },
  {
    id: "11",
    title: "THE IMPACT OF AIRPORT ON ECONOMIC DEVELOPMENT",
    subtitle: "Download the ebook below",
    image: "/assets/resources/impact.jpg",
    downloadUrl:
      "/downloads/resources/the-impact-of-airports-on-economic-development.pdf",
    resourceType: "Report",
    investorStage: "Unlock Land Value",
    tags: ["Infrastructure"],
  },
  {
    id: "12",
    title: "THE INFRASTRUCTURE INVESTMENT AND JOBS ACT",
    subtitle: "Download the ebook below",
    image: "/assets/resources/infrastructure.jpg",
    downloadUrl:
      "/downloads/resources/the-infrastructure-investment-and-jobs-act.pdf",
    resourceType: "Report",
    investorStage: "Unlock Land Value",
    tags: ["Infrastructure"],
  },
  {
    id: "13",
    title: "THE ROAD TO PROGRESS INFRASTRUCTURE DEVELOPMENT IN THE USA",
    subtitle: "Download the ebook below",
    image: "/assets/resources/road.jpg",
    downloadUrl:
      "/downloads/resources/the-road-to-progress-infrastructure-development.pdf",
    resourceType: "Report",
    investorStage: "Unlock Land Value",
    tags: ["Infrastructure"],
  },
  {
    id: "14",
    title: "THE IMPACT OF FARMING ON ECONOMIC DEVELOPMENT IN NORTH TEXAS",
    subtitle: "Download the ebook below",
    image: "/assets/resources/impact-farm.jpg",
    downloadUrl:
      "/downloads/resources/the-impact-of-farming-on-economic-development-in-north-texas.pdf",
    resourceType: "Report",
    investorStage: "Unlock Land Value",
  },
  {
    id: "15",
    title: "THE IMPACT OF LAKES ON REAL ESTATE DEVELOPMENT IN THE USA",
    subtitle: "Download the ebook below",
    image: "/assets/resources/impact-lakes.jpeg",
    downloadUrl:
      "/downloads/resources/the-impact-of-lakes-on-real-estate-development-in-the-usa.pdf",
    resourceType: "Report",
    investorStage: "Unlock Land Value",
  },
  {
    id: "16",
    title:
      "THE IMPACT OF SEMICONDUCTOR ON REAL ESTATE DEVELOPMENT IN THE UNITED STATES",
    subtitle: "Download the ebook below",
    image: "/assets/resources/conductor.jpeg",
    downloadUrl:
      "/downloads/resources/the-impact-of-semiconductor-on-real-estate-development-in-the-united-states.pdf",
    resourceType: "Report",
    investorStage: "Unlock Land Value",
  },
  {
    id: "17",
    title: "LAND INVESTMENT 101",
    subtitle: "Download the Foundations of Successful Land Investment ebook",
    image: "/assets/resources/investment-101.jpg",
    downloadUrl: "/downloads/resources/Land-ownership.pdf",
    resourceType: "Guide",
    investorStage: "New Investor",
  },
];
