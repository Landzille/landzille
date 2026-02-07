import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/heroSlider";
import Holdings from "@/components/holdings";
import InsightsSection from "@/components/insights/insightSection";
import OtherHeroSection from "@/components/otherHeros";
import PartnersSection from "@/components/partnerSection/section";
import Reviews from "@/components/review";
import Stats from "@/components/statsSection";
import WhyInvest from "@/components/whyInvest";
import WhyTexas from "@/components/whyTexas";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Stats />
      <WhyTexas />
      <Holdings />
      <WhyInvest />
      {/* <Testimonials /> */}
      <Reviews />
      <PartnersSection />
      <OtherHeroSection />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
