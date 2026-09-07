import BonhamHero from "@/components/bonhamComponents/bonhamHero";
import BonhamWhyInvest from "@/components/bonhamComponents/bonhamInvest";
import BonhamTexts from "@/components/bonhamComponents/textSection";
import DownloadMagazine from "@/components/downloadMagazine";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherHeroSection from "@/components/otherHeros";
import PropertyViewTracker from "@/components/propertyViewTracker";
import React from "react";

const Bonham = () => {
  return (
    <div>
      <PropertyViewTracker propertyName="Bonham" />
      <Header />
      <BonhamHero />
      <BonhamWhyInvest />
      <BonhamTexts />
      <OtherHeroSection />
      <DownloadMagazine />
      <Footer />
    </div>
  );
};

export default Bonham;
