import DownloadMagazine from "@/components/downloadMagazine";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LeonardHero from "@/components/leonardComponents/hero";
import LeonardTexts from "@/components/leonardComponents/otherTexts";
import WhyInvest from "@/components/leonardComponents/whyInvest";
import OtherHeroSection from "@/components/otherHeros";
import React from "react";

const Leonard = () => {
  return (
    <div>
      <Header />
      <LeonardHero />
      <WhyInvest />
      <LeonardTexts />
      <OtherHeroSection />
      <DownloadMagazine />
      <Footer />
    </div>
  );
};

export default Leonard;
