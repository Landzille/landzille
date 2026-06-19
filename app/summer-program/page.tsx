import FeaturesSection from "@/components/featuresSection";
import Footer from "@/components/footer";
import GallerySection from "@/components/gallery";
import Header from "@/components/header";
import { OverviewSection } from "@/components/overview";
import { SummerHero } from "@/components/summerHero";
import SummerFaq from "@/components/summerFaq";
import SummerTestimonials from "@/components/summerTestimonials";
import TeamResearchSection from "@/components/teamResearch";
import WaitlistSection from "@/components/waitlist";
import ReserveSection from "@/components/reserveSection";

const SummerProgram = () => {
  return (
    <div>
      <Header />
      <SummerHero />
      <OverviewSection />
      <FeaturesSection />
      <TeamResearchSection />
      <SummerTestimonials />
      <ReserveSection />
      <SummerFaq />
      <GallerySection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default SummerProgram;
