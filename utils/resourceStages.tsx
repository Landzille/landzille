import { allResources, Resource } from "@/utils/resources";

export interface Stage {
  stageNumber: number;
  bundleName: string;
  title: string;
  description: string;
  resources: Resource[];
}

const findResource = (title: string): Resource => {
  const found = allResources.find((r) => r.title === title);
  if (!found) {
    throw new Error(`resourceStages: no resource titled "${title}" found`);
  }
  return found;
};

export const resourceStages: Stage[] = [
  {
    stageNumber: 1,
    bundleName: "The Land Investor Starter Kit",
    title: "Start here",
    description: "I'm new to land investment.",
    resources: [
      findResource("LAND INVESTMENT 101"),
      findResource("Everybody Can Build Wealth. You Can Too."),
    ],
  },
  {
    stageNumber: 2,
    bundleName: "The Land IQ Bundle",
    title: "Build your Land IQ",
    description: "Understand what makes land valuable.",
    resources: [
      findResource("Land Empires"),
      findResource("The History of Community Builders"),
      findResource("Grows North"),
    ],
  },
  {
    stageNumber: 3,
    bundleName: "The Growth Corridor Investor",
    title: "Spot the growth",
    description: "Learn where opportunity is forming.",
    resources: [
      findResource("DFW Growth Corridors"),
      findResource("Growth Intelligence Index"),
      findResource("North Texas Infrastructure & Economic Development Atlas"),
      findResource("The Chisholm Trail"),
    ],
  },
  {
    stageNumber: 4,
    bundleName: "The North Texas Opportunity Map",
    title: "Explore North Texas",
    description: "Go deeper into specific markets.",
    resources: [
      findResource("ROXTON TEXAS"),
      findResource("LEONARD TEXAS"),
      findResource("I AM MUENSTER"),
      findResource("20 TOP REASONS TO INVEST IN GAINESVILLE, TEXAS"),
      findResource("THE NORTH TEXAS GROWTH ENGINE"),
    ],
  },
  {
    stageNumber: 5,
    bundleName: "The Land Value Intelligence Bundle",
    title: "Unlock land value",
    description: "Discover what else your land can do for you.",
    resources: [
      findResource("The Texas Agricultural Valuation Handbook"),
      findResource("Legacy Nutrient Deductions"),
      findResource(
        "THE IMPACT OF FARMING ON ECONOMIC DEVELOPMENT IN NORTH TEXAS"
      ),
      findResource("THE IMPACT OF LAKES ON REAL ESTATE DEVELOPMENT IN THE USA"),
      findResource(
        "THE IMPACT OF SEMICONDUCTOR ON REAL ESTATE DEVELOPMENT IN THE UNITED STATES"
      ),
      findResource("THE IMPACT OF AIRPORT ON ECONOMIC DEVELOPMENT"),
      findResource("THE INFRASTRUCTURE INVESTMENT AND JOBS ACT"),
      findResource(
        "THE ROAD TO PROGRESS INFRASTRUCTURE DEVELOPMENT IN THE USA"
      ),
    ],
  },
  {
    stageNumber: 6,
    bundleName: "The Land Wealth Builder",
    title: "Build land wealth",
    description: "For investors ready to think beyond one property.",
    resources: [
      findResource("STRATEGIC LAND LEASE PLAYBOOK"),
      findResource("The Land Legacy Blueprint"),
    ],
  },
];
