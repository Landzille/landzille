import AboutAuthor from "@/components/aboutAuthor";
import CommunityImpact from "@/components/communityImpact";
import DownloadMagazine from "@/components/downloadMagazine";
import Empowerment from "@/components/empowerment";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LandMatters from "@/components/landMatters";
import OtherPageHero from "@/components/otherHero";
import OtherHeroSection from "@/components/otherHeros";
import Quote from "@/components/quote";
import ValuesSection from "@/components/valuesSection";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <OtherPageHero headerText="About Us" />
      <Empowerment />
      <AboutAuthor />
      <ValuesSection />
      <LandMatters />
      <CommunityImpact />
      <Quote />
      <OtherHeroSection />
      <DownloadMagazine />
      <Footer />
    </div>
  );
};

export default AboutPage;
