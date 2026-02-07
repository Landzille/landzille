import DownloadMagazine from "@/components/downloadMagazine";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HoneygrooveHero from "@/components/Honeygroove/HeroSection";
import HoneygrooveTexts from "@/components/Honeygroove/textSection";
import HoneyWhyInvest from "@/components/Honeygroove/whyInvest";
import OtherHeroSection from "@/components/otherHeros";
import React from "react";

const Honeygroove = () => {
  return (
    <div>
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
