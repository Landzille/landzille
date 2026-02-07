import FeaturesSection from "@/components/featuresSection";
import Footer from "@/components/footer";
import GallerySection from "@/components/gallery";
import Header from "@/components/header";
import { OverviewSection } from "@/components/overview";
import Reviews from "@/components/review";
import { SummerHero } from "@/components/summerHero";
import TeamResearchSection from "@/components/teamResearch";
import WaitlistSection from "@/components/waitlist";

const SummerProgram = () => {
  return (
    <div>
      <Header />
      <SummerHero />
      <OverviewSection />
      <FeaturesSection />
      <TeamResearchSection />
      <Reviews />
      <GallerySection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default SummerProgram;
