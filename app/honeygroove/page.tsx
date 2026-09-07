import DownloadMagazine from "@/components/downloadMagazine";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HoneygrooveHero from "@/components/Honeygroove/HeroSection";
import HoneygrooveTexts from "@/components/Honeygroove/textSection";
import HoneyWhyInvest from "@/components/Honeygroove/whyInvest";
import OtherHeroSection from "@/components/otherHeros";
import PropertyViewTracker from "@/components/propertyViewTracker";
import React from "react";

const Honeygroove = () => {
  return (
    <div>
      <PropertyViewTracker propertyName="Honey Grove" />
      <Header />
      <HoneygrooveHero />
      <HoneyWhyInvest />
      <HoneygrooveTexts />
      <OtherHeroSection />
      <DownloadMagazine />
      <Footer />
    </div>
  );
};

export default Honeygroove;
